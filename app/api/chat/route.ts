import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { CHAT_SYSTEM_PROMPT } from "@/lib/data/chatContext";
import {
  TelegramBot,
  createSession,
  getSession,
  addMessage,
  isHumanControlled,
} from "@/lib/telegram";

// Inicializar OpenAI y Telegram Bot
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const telegramBot = new TelegramBot();

export async function POST(req: NextRequest) {
  try {
    const { messages, language = "es", sessionId: existingSessionId, userId = "anonymous" } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key no configurada. Por favor configura OPENAI_API_KEY en .env.local" },
        { status: 500 }
      );
    }

    // Get or create session
    let sessionId = existingSessionId;
    let isNewSession = false;

    if (!sessionId) {
      sessionId = createSession(userId);
      isNewSession = true;
      
      // Notify new conversation via Telegram
      if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
        await telegramBot.notifyNewConversation(sessionId);
      }
    }

    // Get last user message
    const lastUserMessage = messages[messages.length - 1];
    if (lastUserMessage && lastUserMessage.role === "user") {
      addMessage(sessionId, "user", lastUserMessage.content);

      // Notify user message via Telegram (only if enabled)
      if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
        await telegramBot.notifyMessage(sessionId, "user", lastUserMessage.content);
      }

      // Check for email or budget in message
      const session = getSession(sessionId);
      if (session) {
        const emailRegex = /[\w.-]+@[\w.-]+\.\w+/;
        const emailMatch = lastUserMessage.content.match(emailRegex);
        if (emailMatch && !session.email) {
          await telegramBot.notifyKeyInfo(sessionId, "email", emailMatch[0]);
        }

        const budgetRegex = /\$?\d{1,3}(?:,?\d{3})*(?:\.\d{2})?/;
        const budgetMatch = lastUserMessage.content.match(budgetRegex);
        if (budgetMatch && budgetMatch[0].length > 2 && !session.budget) {
          await telegramBot.notifyKeyInfo(sessionId, "budget", budgetMatch[0]);
        }
      }
    }

    // Check if human has taken control
    if (isHumanControlled(sessionId)) {
      return NextResponse.json({
        message: "Un momento, nuestro equipo se está conectando contigo...",
        sessionId,
        humanControlled: true,
      });
    }

    // Language instruction
    const languageInstruction = language === "es" 
      ? "IMPORTANTE: Responde SIEMPRE en ESPAÑOL. El usuario habla español."
      : "IMPORTANT: ALWAYS respond in ENGLISH. The user speaks English.";

    // Agregar el prompt del sistema al inicio con instrucción de idioma
    const messagesWithSystem = [
      { role: "system", content: `${languageInstruction}\n\n${CHAT_SYSTEM_PROMPT}` },
      ...messages,
    ];

    // Llamar a OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Modelo más económico y rápido
      messages: messagesWithSystem as OpenAI.Chat.Completions.ChatCompletionMessageParam[],
      temperature: 0.7,
      max_tokens: 500,
      presence_penalty: 0.6,
      frequency_penalty: 0.3,
    });

    const response = completion.choices[0].message.content;

    // Add AI response to session
    if (response) {
      addMessage(sessionId, "assistant", response);

      // Notify AI response via Telegram (only if enabled)
      if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
        await telegramBot.notifyMessage(sessionId, "assistant", response);
      }
    }

    return NextResponse.json({ message: response, sessionId });
  } catch (error) {
    console.error("Error en el chat:", error);
    
    const err = error as { code?: string; message?: string };
    
    if (err.code === "invalid_api_key") {
      return NextResponse.json(
        { error: "API key inválida. Verifica tu configuración." },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { error: "Error al procesar tu mensaje. Intenta nuevamente." },
      { status: 500 }
    );
  }
}

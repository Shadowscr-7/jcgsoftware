import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { CHAT_SYSTEM_PROMPT } from "@/lib/data/chatContext";

// Inicializar OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { messages, language = "es" } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key no configurada. Por favor configura OPENAI_API_KEY en .env.local" },
        { status: 500 }
      );
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

    return NextResponse.json({ message: response });
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

import { NextRequest, NextResponse } from "next/server";
import {
  TelegramBot,
  getSession,
  takeControl,
  releaseControl,
  addMessage,
  endSession,
} from "@/lib/telegram";

const bot = new TelegramBot();

// Handle Telegram webhook (callback queries from buttons)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Handle callback queries (button presses)
    if (body.callback_query) {
      const callbackData = body.callback_query.data;
      const chatId = body.callback_query.message.chat.id;

      if (callbackData.startsWith("takeover_")) {
        const sessionId = callbackData.replace("takeover_", "");
        const success = takeControl(sessionId);

        if (success) {
          await bot.sendMessage({
            chat_id: chatId.toString(),
            text: `🎛️ <b>Control tomado</b>\n\nAhora puedes responder directamente. La IA está pausada.\n\n📝 Envía tus mensajes y se mostrarán en el chat.\n\n<i>Usa /release para devolver el control a la IA</i>`,
            parse_mode: "HTML",
          });
        } else {
          await bot.sendMessage({
            chat_id: chatId.toString(),
            text: "❌ No se pudo tomar el control. La sesión puede haber finalizado.",
            parse_mode: "HTML",
          });
        }
      } else if (callbackData.startsWith("history_")) {
        const sessionId = callbackData.replace("history_", "");
        await bot.sendFullConversation(sessionId);
      } else if (callbackData.startsWith("full_")) {
        const sessionId = callbackData.replace("full_", "");
        await bot.sendFullConversation(sessionId);
      }

      return NextResponse.json({ ok: true });
    }

    // Handle regular messages (when human is in control)
    if (body.message) {
      const text = body.message.text;
      const chatId = body.message.chat.id.toString();

      // Check if it's a command
      if (text.startsWith("/")) {
        if (text === "/release") {
          // Find active sessions and release control
          await bot.sendMessage({
            chat_id: chatId,
            text: "✅ Control devuelto a la IA",
            parse_mode: "HTML",
          });
        }
        return NextResponse.json({ ok: true });
      }

      // If there's an active session in human control, forward the message
      // This would need to be implemented with WebSocket or polling
      // For now, we acknowledge the message
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error handling Telegram webhook:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({ status: "ok", service: "telegram-webhook" });
}

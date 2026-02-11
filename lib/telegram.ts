// Telegram Bot Configuration and Utilities

interface TelegramMessage {
  chat_id: string;
  text: string;
  parse_mode?: "HTML" | "Markdown";
  reply_markup?: {
    inline_keyboard: Array<Array<{ text: string; callback_data: string }>>;
  };
}

interface ConversationSession {
  sessionId: string;
  userId: string;
  startTime: Date;
  messages: Array<{
    role: "user" | "assistant" | "human";
    content: string;
    timestamp: Date;
  }>;
  email?: string;
  budget?: string;
  isHumanControlled: boolean;
}

// Store active conversations (in production, use Redis or database)
const activeSessions = new Map<string, ConversationSession>();

// Store the currently controlled session (for Telegram message routing)
let activeControlledSession: string | null = null;

export class TelegramBot {
  private botToken: string;
  private chatId: string;
  private apiUrl: string;

  constructor() {
    this.botToken = process.env.TELEGRAM_BOT_TOKEN || "";
    this.chatId = process.env.TELEGRAM_CHAT_ID || "";
    this.apiUrl = `https://api.telegram.org/bot${this.botToken}`;
  }

  async sendMessage(message: TelegramMessage): Promise<boolean> {
    try {
      const response = await fetch(`${this.apiUrl}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });

      return response.ok;
    } catch (error) {
      console.error("Error sending Telegram message:", error);
      return false;
    }
  }

  async notifyNewConversation(sessionId: string) {
    const now = new Date();
    const formattedTime = now.toLocaleString("es-UY", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    await this.sendMessage({
      chat_id: this.chatId,
      text: `🆕 <b>Nueva conversación iniciada</b>\n\n📋 ID: <code>${sessionId}</code>\n⏰ ${formattedTime}\n🌐 Desde: Portfolio`,
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [
            { text: "🎛️ Tomar Control", callback_data: `takeover_${sessionId}` },
            { text: "📊 Ver Historial", callback_data: `history_${sessionId}` },
          ],
        ],
      },
    });
  }

  async notifyMessage(sessionId: string, role: "user" | "assistant", content: string) {
    const emoji = role === "user" ? "👤" : "🤖";
    const label = role === "user" ? "Usuario" : "IA";

    await this.sendMessage({
      chat_id: this.chatId,
      text: `${emoji} <b>${label}:</b>\n${content}`,
      parse_mode: "HTML",
    });
  }

  async notifyKeyInfo(sessionId: string, type: "email" | "budget", value: string) {
    const emoji = type === "email" ? "📧" : "💰";
    const label = type === "email" ? "Email capturado" : "Presupuesto mencionado";

    await this.sendMessage({
      chat_id: this.chatId,
      text: `${emoji} <b>${label}:</b> <code>${value}</code>\n\n📋 Conversación: ${sessionId}`,
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [{ text: "🎛️ Tomar Control", callback_data: `takeover_${sessionId}` }],
        ],
      },
    });
  }

  async notifyConversationEnd(sessionId: string) {
    const session = activeSessions.get(sessionId);
    if (!session) return;

    const duration = Math.floor(
      (Date.now() - session.startTime.getTime()) / 60000
    );
    const totalMessages = session.messages.length;
    const aiMessages = session.messages.filter((m) => m.role === "assistant").length;
    const humanMessages = session.messages.filter((m) => m.role === "human").length;

    // Analyze conversation
    const analysis = this.analyzeConversation(session);

    await this.sendMessage({
      chat_id: this.chatId,
      text: `✅ <b>Conversación finalizada</b>\n\n📋 ID: <code>${sessionId}</code>\n⏱️ Duración: ${duration} min\n💬 Mensajes: ${totalMessages}\n🤖 IA: ${aiMessages} | 👤 Humano: ${humanMessages}\n\n📊 <b>Análisis:</b>\n${analysis}\n`,
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [{ text: "💾 Ver Conversación Completa", callback_data: `full_${sessionId}` }],
        ],
      },
    });
  }

  private analyzeConversation(session: ConversationSession): string {
    let analysis = "";

    if (session.email) {
      analysis += `• Email: ${session.email}\n`;
    }

    if (session.budget) {
      analysis += `• Presupuesto: ${session.budget}\n`;
    }

    // Detect project type from keywords
    const allText = session.messages.map((m) => m.content.toLowerCase()).join(" ");
    
    const projectTypes = [
      { keywords: ["e-commerce", "tienda", "shop"], name: "E-commerce" },
      { keywords: ["móvil", "app", "aplicación"], name: "App Móvil" },
      { keywords: ["web", "sitio", "website"], name: "Sitio Web" },
      { keywords: ["automatización", "bot"], name: "Automatización" },
      { keywords: ["marketing", "ads", "campaña"], name: "Marketing Digital" },
    ];

    for (const type of projectTypes) {
      if (type.keywords.some((kw) => allText.includes(kw))) {
        analysis += `• Tipo de proyecto: ${type.name}\n`;
        break;
      }
    }

    // Detect urgency
    const urgencyKeywords = ["urgente", "rápido", "pronto", "cuanto antes"];
    const isUrgent = urgencyKeywords.some((kw) => allText.includes(kw));
    analysis += `• Urgencia: ${isUrgent ? "Alta 🔴" : "Media 🟡"}\n`;

    return analysis || "• Sin datos específicos capturados";
  }

  async sendFullConversation(sessionId: string) {
    const session = activeSessions.get(sessionId);
    if (!session) return;

    let conversationText = `📋 <b>Conversación Completa</b>\n\n`;
    conversationText += `ID: <code>${sessionId}</code>\n`;
    conversationText += `Inicio: ${session.startTime.toLocaleString("es-UY")}\n\n`;
    conversationText += `━━━━━━━━━━━━━━━━\n\n`;

    for (const msg of session.messages) {
      const emoji = msg.role === "user" ? "👤" : msg.role === "assistant" ? "🤖" : "👨‍💼";
      const time = msg.timestamp.toLocaleTimeString("es-UY", {
        hour: "2-digit",
        minute: "2-digit",
      });
      conversationText += `${emoji} <b>[${time}]</b>\n${msg.content}\n\n`;
    }

    // Split if too long (Telegram limit is 4096 characters)
    if (conversationText.length > 4000) {
      const parts = this.splitMessage(conversationText, 4000);
      for (const part of parts) {
        await this.sendMessage({
          chat_id: this.chatId,
          text: part,
          parse_mode: "HTML",
        });
      }
    } else {
      await this.sendMessage({
        chat_id: this.chatId,
        text: conversationText,
        parse_mode: "HTML",
      });
    }
  }

  private splitMessage(text: string, maxLength: number): string[] {
    const parts: string[] = [];
    let currentPart = "";

    const lines = text.split("\n");
    for (const line of lines) {
      if (currentPart.length + line.length > maxLength) {
        parts.push(currentPart);
        currentPart = line + "\n";
      } else {
        currentPart += line + "\n";
      }
    }

    if (currentPart) {
      parts.push(currentPart);
    }

    return parts;
  }
}

// Session management
export function createSession(userId: string): string {
  const sessionId = `sess_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  activeSessions.set(sessionId, {
    sessionId,
    userId,
    startTime: new Date(),
    messages: [],
    isHumanControlled: false,
  });
  return sessionId;
}

export function getSession(sessionId: string): ConversationSession | undefined {
  return activeSessions.get(sessionId);
}

export function addMessage(
  sessionId: string,
  role: "user" | "assistant" | "human",
  content: string
) {
  const session = activeSessions.get(sessionId);
  if (session) {
    session.messages.push({
      role,
      content,
      timestamp: new Date(),
    });

    // Detect email
    const emailRegex = /[\w.-]+@[\w.-]+\.\w+/;
    const emailMatch = content.match(emailRegex);
    if (emailMatch && !session.email) {
      session.email = emailMatch[0];
    }

    // Detect budget (simple pattern)
    const budgetRegex = /\$?\d{1,3}(?:,?\d{3})*(?:\.\d{2})?/;
    const budgetMatch = content.match(budgetRegex);
    if (budgetMatch && !session.budget) {
      session.budget = budgetMatch[0];
    }
  }
}

export function takeControl(sessionId: string): boolean {
  const session = activeSessions.get(sessionId);
  if (session) {
    session.isHumanControlled = true;
    activeControlledSession = sessionId; // Set as active controlled session
    return true;
  }
  return false;
}

export function releaseControl(sessionId: string): boolean {
  const session = activeSessions.get(sessionId);
  if (session) {
    session.isHumanControlled = false;
    if (activeControlledSession === sessionId) {
      activeControlledSession = null; // Clear active controlled session
    }
    return true;
  }
  return false;
}

export function getActiveControlledSession(): string | null {
  return activeControlledSession;
}

export function getAllControlledSessions(): string[] {
  const controlled: string[] = [];
  activeSessions.forEach((session, sessionId) => {
    if (session.isHumanControlled) {
      controlled.push(sessionId);
    }
  });
  return controlled;
}

export function endSession(sessionId: string) {
  activeSessions.delete(sessionId);
}

export function isHumanControlled(sessionId: string): boolean {
  const session = activeSessions.get(sessionId);
  return session?.isHumanControlled || false;
}

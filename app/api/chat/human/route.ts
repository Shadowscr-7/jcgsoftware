// API route for human takeover
import { NextRequest, NextResponse } from "next/server";
import { getSession, addMessage, TelegramBot } from "@/lib/telegram";

const telegramBot = new TelegramBot();

// POST: Send a human message to the chat
export async function POST(request: NextRequest) {
  try {
    const { sessionId, message } = await request.json();

    if (!sessionId || !message) {
      return NextResponse.json(
        { error: "sessionId and message are required" },
        { status: 400 }
      );
    }

    const session = getSession(sessionId);
    if (!session) {
      return NextResponse.json(
        { error: "Session not found or expired" },
        { status: 404 }
      );
    }

    if (!session.isHumanControlled) {
      return NextResponse.json(
        { error: "Session is not under human control" },
        { status: 403 }
      );
    }

    // Add human message to session
    addMessage(sessionId, "human", message);

    return NextResponse.json({
      success: true,
      sessionId,
      message,
    });
  } catch (error) {
    console.error("Error in human message route:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET: Check if session is under human control
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get("sessionId");

  if (!sessionId) {
    return NextResponse.json(
      { error: "sessionId is required" },
      { status: 400 }
    );
  }

  const session = getSession(sessionId);
  if (!session) {
    return NextResponse.json(
      { error: "Session not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    sessionId,
    isHumanControlled: session.isHumanControlled,
    messageCount: session.messages.length,
  });
}

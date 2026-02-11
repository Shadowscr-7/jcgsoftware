import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/telegram";

// GET: Retrieve new messages from a session (for polling)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get("sessionId");
    const lastMessageIndex = parseInt(searchParams.get("lastMessageIndex") || "0");

    if (!sessionId) {
      return NextResponse.json(
        { error: "sessionId is required" },
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

    // Get new messages since lastMessageIndex
    const newMessages = session.messages.slice(lastMessageIndex).map(msg => ({
      role: msg.role === "human" ? "assistant" : msg.role, // Display human messages as assistant in UI
      content: msg.content,
      isHuman: msg.role === "human",
    }));

    return NextResponse.json({
      sessionId,
      messages: newMessages,
      totalMessages: session.messages.length,
      isHumanControlled: session.isHumanControlled,
    });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

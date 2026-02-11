"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SUGGESTED_QUESTIONS } from "@/lib/data/chatContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function ChatWidget() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isHumanControlled, setIsHumanControlled] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  
  const getInitialMessage = () => {
    if (language === "es") {
      return "¡Hola! 👋 Soy el asistente de Julio Gómez.\n\nPuedo ayudarte a:\n\n📅 Agendar una videollamada\n💰 Cotizar tu proyecto\n💬 Consulta rápida (Julio responde en ~2h)\n🎯 Conocer más sobre sus servicios\n\n¿En qué puedo ayudarte hoy?";
    } else {
      return "Hello! 👋 I'm Julio Gómez's assistant.\n\nI can help you with:\n\n📅 Schedule a video call\n💰 Quote your project\n💬 Quick inquiry (Julio responds in ~2h)\n🎯 Learn more about his services\n\nHow can I help you today?";
    }
  };

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: getInitialMessage(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Update initial message when language changes
  useEffect(() => {
    if (messages.length === 1) {
      setMessages([{
        role: "assistant",
        content: getInitialMessage(),
      }]);
    }
  }, [language]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Polling for new messages when human is in control
  useEffect(() => {
    if (!sessionId || !isOpen) return;

    let pollInterval: NodeJS.Timeout;
    
    const pollForMessages = async () => {
      try {
        const response = await fetch(
          `/api/chat/messages?sessionId=${sessionId}&lastMessageIndex=${messages.length}`
        );
        
        if (response.ok) {
          const data = await response.json();
          
          // Update human control status
          if (data.isHumanControlled !== isHumanControlled) {
            setIsHumanControlled(data.isHumanControlled);
            
            // Show typing indicator when human takes control
            if (data.isHumanControlled && !isHumanControlled) {
              setIsTyping(true);
              setTimeout(() => setIsTyping(false), 2000);
            }
          }
          
          // Add new messages
          if (data.messages && data.messages.length > 0) {
            setIsTyping(false);
            setMessages(prev => [
              ...prev,
              ...data.messages.map((msg: any) => ({
                role: msg.role,
                content: msg.content,
              }))
            ]);
          }
        }
      } catch (error) {
        console.error("Error polling messages:", error);
      }
    };

    // Poll every 2 seconds when chat is open
    pollInterval = setInterval(pollForMessages, 2000);

    return () => {
      if (pollInterval) clearInterval(pollInterval);
    };
  }, [sessionId, isOpen, messages.length, isHumanControlled]);

  const sendMessage = async (messageText?: string) => {
    const textToSend = messageText || input.trim();
    if (!textToSend || isLoading) return;

    const userMessage: Message = { role: "user", content: textToSend };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          language: language, // Send language to backend
          sessionId: sessionId, // Include session ID
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al enviar mensaje");
      }

      // Store session ID if it's a new session
      if (data.sessionId && !sessionId) {
        setSessionId(data.sessionId);
      }

      // Check if human took control
      if (data.humanControlled) {
        setIsHumanControlled(true);
        setIsTyping(true);
        setTimeout(() => setIsTyping(false), 3000);
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: data.message,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error:", error);
      const err = error as { message?: string };
      const errorMsg = language === "es" 
        ? `Lo siento, hubo un error: ${err.message || "desconocido"}. Por favor intenta nuevamente o contacta directamente a Julio.`
        : `Sorry, there was an error: ${err.message || "unknown"}. Please try again or contact Julio directly.`;
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: errorMsg,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    sendMessage(question);
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              size="lg"
              className="relative h-16 w-16 rounded-full bg-linear-to-r from-primary to-secondary shadow-lg hover:shadow-primary/50 transition-all group"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-primary to-secondary blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <MessageCircle className="relative z-10 h-7 w-7" />
              
              {/* Notification badge */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -top-1 -right-1 h-5 w-5 bg-accent rounded-full flex items-center justify-center"
              >
                <Sparkles className="h-3 w-3" />
              </motion.div>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-95 sm:w-105 max-h-150 glass border border-primary/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-linear-to-r from-primary/20 to-secondary/20 backdrop-blur-xl border-b border-primary/20 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-linear-to-r from-primary to-secondary flex items-center justify-center">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-background ${
                    isHumanControlled ? 'bg-accent' : 'bg-green-500'
                  }`} />
                </div>
                <div>
                  <h3 className="font-semibold">
                    {isHumanControlled 
                      ? (language === "es" ? "Julio Gómez" : "Julio Gómez")
                      : getTranslation(language, "chat.title").split(" ").slice(1).join(" ")
                    }
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {isHumanControlled
                      ? (language === "es" ? "🟢 Conectado" : "🟢 Connected")
                      : getTranslation(language, "chat.subtitle")
                    }
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="hover:bg-primary/10"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-100">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.role === "user"
                        ? "bg-linear-to-r from-primary to-secondary text-background ml-4"
                        : "glass border border-primary/10 mr-4"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="glass border border-primary/10 p-3 rounded-2xl">
                    <Loader2 className="h-5 w-5 animate-spin text-primary" />
                  </div>
                </motion.div>
              )}

              {/* Typing indicator when human is typing */}
              {isTyping && !isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="glass border border-primary/10 p-3 rounded-2xl flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">
                      {isHumanControlled 
                        ? (language === "es" ? "Julio está escribiendo" : "Julio is typing")
                        : (language === "es" ? "Escribiendo" : "Typing")
                      }
                    </span>
                    <div className="flex gap-1">
                      <motion.div
                        className="w-2 h-2 bg-primary rounded-full"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-primary rounded-full"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-primary rounded-full"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Suggested Questions - Only show at start */}
              {messages.length === 1 && (
                <div className="space-y-2 pt-2">
                  <p className="text-xs text-muted-foreground text-center">{language === "es" ? "Preguntas sugeridas:" : "Suggested questions:"}</p>
                  {SUGGESTED_QUESTIONS[language].map((question, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleSuggestedQuestion(question)}
                      className="w-full text-left p-2 text-xs glass hover:bg-primary/10 rounded-lg transition-colors border border-primary/10"
                    >
                      {question}
                    </motion.button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-primary/20 backdrop-blur-xl">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
                className="flex gap-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={getTranslation(language, "chat.placeholder")}
                  disabled={isLoading}
                  className="flex-1 glass border-primary/20"
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={isLoading || !input.trim()}
                  className="bg-linear-to-r from-primary to-secondary hover:opacity-90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

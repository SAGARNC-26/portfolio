"use client";

import { useChat } from "@ai-sdk/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import { MessageSquare, ArrowLeft, RefreshCw, Loader2 } from "lucide-react";
import { useAI } from "@/app/api/chat/AIContent";
import { useRouter, useSearchParams } from "next/navigation";

const MOTION_CONFIG = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.3, ease: "easeOut" },
};

interface ChatProps {
  isFloating?: boolean;
  initialMessage?: string;
}

export default function Chat({ isFloating = true, initialMessage }: ChatProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQueryFromUrl = searchParams.get("query");
  const { aiCommand, setAICommand } = useAI();

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const { messages, isLoading, reload, stop, sendMessage, setMessages } =
    useChat({
      api: "/api/chat",
      onResponse: () => setErrorMsg(null),
      onFinish: () => {},
      onError: (err) => {
        setErrorMsg(
          err.message || "Something went wrong with the AI assistant."
        );
        console.error("Chat error:", err);
      },
    });

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]);

  useEffect(() => {
    setMessages([]);

    const initialText = initialMessage || initialQueryFromUrl;
    if (initialText) {
      sendMessage({ role: "user", content: initialText });
      if (initialMessage) {
        setAICommand("");
      }
    } else {
      setMessages([
        {
          role: "assistant",
          content: "Hello! I'm Sagar's AI assistant. How can I help you today?",
        },
      ]);
    }
  }, [
    initialMessage,
    initialQueryFromUrl,
    sendMessage,
    setMessages,
    setAICommand,
  ]);

  useEffect(() => {
    if (
      isFloating &&
      aiCommand &&
      messages[messages.length - 1]?.content !== aiCommand
    ) {
      sendMessage({ role: "user", content: aiCommand });
      setAICommand("");
    }
  }, [aiCommand, isFloating, sendMessage, messages, setAICommand]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    sendMessage({ role: "user", content: text });
    setInput("");
    setErrorMsg(null);
  };

  const handleNewChat = () => {
    setMessages([
      {
        role: "assistant",
        content: "Hello! I'm Sagar's AI assistant. How can I help you today?",
      },
    ]);
    setInput("");
    setErrorMsg(null);
    reload();
  };

  const containerClasses = isFloating
    ? "fixed bottom-4 right-4 w-80 rounded-2xl bg-gray-900 text-white shadow-lg flex flex-col overflow-hidden z-50 max-h-[70vh]"
    : "flex flex-col min-h-screen bg-gray-900 text-white";

  const headerClasses = isFloating
    ? "flex items-center justify-between px-3 py-2 border-b border-gray-700 bg-gray-800"
    : "bg-gray-800 p-4 shadow-lg flex items-center justify-between z-10";

  const chatContentClasses = isFloating
    ? "flex-1 overflow-y-auto p-3 space-y-2 text-sm no-scrollbar"
    : "flex-grow p-4 overflow-y-auto space-y-4 pt-8 pb-20 no-scrollbar";

  return (
    <div className={containerClasses}>
      <div className={headerClasses}>
        {isFloating ? (
          <h3 className="font-semibold flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-yellow-500" /> AI Assistant
          </h3>
        ) : (
          <button
            onClick={() => router.push("/")}
            className="flex items-center text-yellow-500 hover:text-yellow-400 transition-colors"
            aria-label="Go back to portfolio"
          >
            <ArrowLeft className="h-5 w-5 mr-2" /> Back to Portfolio
          </button>
        )}
        <h1
          className={
            isFloating
              ? "sr-only"
              : "text-2xl font-bold flex items-center gap-2"
          }
        >
          {!isFloating && <MessageSquare className="h-6 w-6 text-yellow-500" />}{" "}
          AI Chat
        </h1>
        <button
          onClick={handleNewChat}
          className="flex items-center text-gray-400 hover:text-white transition-colors text-sm"
          aria-label="Start new chat"
        >
          <RefreshCw className="h-4 w-4 mr-1" /> New Chat
        </button>
      </div>

      <div className={chatContentClasses}>
        <AnimatePresence>
          {messages.map((m, i) => (
            <motion.div
              key={i}
              {...MOTION_CONFIG}
              className={`flex ${
                m.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-3 rounded-xl max-w-[70%] ${
                  m.role === "user"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-gray-700 text-gray-100 rounded-bl-none"
                }`}
              >
                {m.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isLoading && (
          <div className="flex justify-start">
            <motion.div
              {...MOTION_CONFIG}
              className="bg-gray-700 p-3 rounded-xl rounded-bl-none text-gray-100 animate-pulse flex items-center gap-2"
            >
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>AI is typing...</span>
            </motion.div>
          </div>
        )}

        {errorMsg && (
          <motion.div
            {...MOTION_CONFIG}
            className="text-red-500 text-xs p-2 bg-red-900/20 rounded-lg"
          >
            ⚠ {errorMsg}
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={onSubmit}
        className="flex border-t border-gray-700 bg-gray-800"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            isLoading ? "Please wait for a response..." : "Type a message..."
          }
          className="flex-1 px-3 py-2 text-sm outline-none bg-transparent placeholder-gray-400"
          disabled={isLoading}
        />
        {isLoading ? (
          <button
            type="button"
            onClick={stop}
            className="px-3 py-2 text-red-500 font-medium"
          >
            Stop
          </button>
        ) : (
          <button
            type="submit"
            className="px-3 py-2 text-yellow-500 font-semibold"
            disabled={!input.trim()}
          >
            Send
          </button>
        )}
      </form>
    </div>
  );
}

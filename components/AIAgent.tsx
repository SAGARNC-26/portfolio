/*"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, RefreshCw, MessageSquare } from "lucide-react";

const MOTION_CONFIG = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.3, ease: "easeOut" },
};

export default function AIAgent() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [
      {
        role: "assistant",
        content: "Hello! I'm Sagar's AI assistant. How can I help you today?",
      },
    ]
  );
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading, scrollToBottom]);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    const newMessages = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.reply }]);
    } catch (err: any) {
      console.error("AI error:", err);
      setMessages([
        ...newMessages,
        { role: "assistant", content: "⚠️ Error: AI unavailable." },
      ]);
      setErrorMsg("Something went wrong with the AI assistant.");
    } finally {
      setLoading(false);
    }
  }

  const handleNewChat = () => {
    setMessages([
      {
        role: "assistant",
        content: "Hello! I'm Sagar's AI assistant. How can I help you today?",
      },
    ]);
    setInput("");
    setErrorMsg(null);
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 rounded-2xl bg-gray-900 text-white shadow-lg flex flex-col overflow-hidden z-50 max-h-[70vh]">
      <div className="flex items-center justify-between px-3 py-2 border-b border-gray-700 bg-gray-800">
        <h3 className="font-semibold flex items-center gap-2">
          <MessageSquare className="h-4 w-4 text-yellow-500" /> AI Assistant
        </h3>
        <button
          onClick={handleNewChat}
          className="flex items-center text-gray-400 hover:text-white transition-colors text-sm"
          aria-label="Start new chat"
        >
          <RefreshCw className="h-4 w-4 mr-1" /> New Chat
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm no-scrollbar">
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

        {loading && (
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
        onSubmit={sendMessage}
        className="flex border-t border-gray-700 bg-gray-800"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            loading ? "Please wait for a response..." : "Type a message..."
          }
          className="flex-1 px-3 py-2 text-sm outline-none bg-transparent placeholder-gray-400"
          disabled={loading}
        />
        {loading ? (
          <button
            type="button"
            onClick={() => setLoading(false)}
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
*/
"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, RefreshCw, MessageSquare } from "lucide-react";

const MOTION_CONFIG = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: {
    duration: 0.3,
    ease: "easeOut" as const, // ✅ Type-safe easing
  },
};

export default function AIAgent() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [
      {
        role: "assistant",
        content: "Hello! I'm Sagar's AI assistant. How can I help you today?",
      },
    ]
  );
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading, scrollToBottom]);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    const newMessages = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.reply }]);
    } catch (err: any) {
      console.error("AI error:", err);
      setMessages([
        ...newMessages,
        { role: "assistant", content: "⚠️ Error: AI unavailable." },
      ]);
      setErrorMsg("Something went wrong with the AI assistant.");
    } finally {
      setLoading(false);
    }
  }

  const handleNewChat = () => {
    setMessages([
      {
        role: "assistant",
        content: "Hello! I'm Sagar's AI assistant. How can I help you today?",
      },
    ]);
    setInput("");
    setErrorMsg(null);
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 rounded-2xl bg-gray-900 text-white shadow-lg flex flex-col overflow-hidden z-50 max-h-[70vh]">
      <div className="flex items-center justify-between px-3 py-2 border-b border-gray-700 bg-gray-800">
        <h3 className="font-semibold flex items-center gap-2">
          <MessageSquare className="h-4 w-4 text-yellow-500" /> AI Assistant
        </h3>
        <button
          onClick={handleNewChat}
          className="flex items-center text-gray-400 hover:text-white transition-colors text-sm"
          aria-label="Start new chat"
        >
          <RefreshCw className="h-4 w-4 mr-1" /> New Chat
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm no-scrollbar">
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

        {loading && (
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
        onSubmit={sendMessage}
        className="flex border-t border-gray-700 bg-gray-800"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            loading ? "Please wait for a response..." : "Type a message..."
          }
          className="flex-1 px-3 py-2 text-sm outline-none bg-transparent placeholder-gray-400"
          disabled={loading}
        />
        {loading ? (
          <button
            type="button"
            onClick={() => setLoading(false)}
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

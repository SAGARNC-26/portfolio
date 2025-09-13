// src/components/AIContent.tsx
"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type AIContextType = {
  aiCommand: string; // latest command/text from chat
  setAICommand: (cmd: string) => void; // updater to broadcast commands
};

const AIContext = createContext<AIContextType | undefined>(undefined);

export function AIProvider({ children }: { children: ReactNode }) {
  const [aiCommand, setAICommand] = useState("");

  return (
    <AIContext.Provider value={{ aiCommand, setAICommand }}>
      {children}
    </AIContext.Provider>
  );
}

export function useAI() {
  const ctx = useContext(AIContext);
  if (!ctx) throw new Error("useAI must be used inside AIProvider");
  return ctx;
}

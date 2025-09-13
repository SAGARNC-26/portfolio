"use client";

import { Suspense } from "react";
import Chat from "@/app/api/Chat"; // Your flexible Chat component
import { AIProvider } from "@/app/api/chat/AIContent"; // Keep this import

export default function Page() {
  return (
    <Suspense fallback={<div>Loading chat...</div>}>
      {/* AIProvider MUST wrap the Chat component because Chat uses the useAI hook */}
      <AIProvider>
        <Chat isFloating={false} initialMessage="Welcome!" />
      </AIProvider>
    </Suspense>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import TopMenuButton from "../../components/TopMenuButton"; 
import { MessageCircle } from "lucide-react";
import ThemeToggle from "components/ThemeToggle";

export default function ChatbotPage() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I’m HealthBot 🤖. How can I assist you today?" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle sending a message
  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");

    // Fake bot response (replace with API call)
    setTimeout(() => {
      const botMessage = {
        sender: "bot",
        text: "This is a sample response. In production, this will come from AI 🤖."
      };
      setMessages(prev => [...prev, botMessage]);
    }, 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center
      bg-gradient-to-tr from-indigo-900 via-purple-900 to-cyan-900 dark:from-indigo-200 dark:via-purple-200 dark:to-cyan-200 relative overflow-hidden p-6">
<div className="absolute top-4 right-4 p-3 z-50">
  <ThemeToggle />
</div>
      {/* Floating Menu Button */}
      <TopMenuButton />

      {/* Glowing techy background circles */}
      <div className="absolute -top-48 -left-20 w-96 h-96 bg-purple-800 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-38 -right-20 w-[28rem] h-[28rem] bg-indigo-800 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      {/* Chat container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col w-full max-w-2xl h-[80vh] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-800/40 dark:from-purple-800/60 via-indigo-900/80 to-black/95  backdrop-blur-lg border border-white/20 dark:border-purple-800/80 rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-grey-200/80 dark:from-grey-400/80  to-indigo-800/20 dark:to-indigo-400/30 border-b border-white/20">
          <MessageCircle className="text-cyan-300" size={24} />
          <h1 className="text-white text-xl font-semibold">HealthBot 🤖</h1>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto flex flex-col space-y-4">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`max-w-[75%] px-4 py-3 rounded-xl border border-white/30 dark:border-purple break-words ${
                msg.sender === "user"
                  ? "self-end bg-cyan-500 dark:cyan-900 text-white"
                  : "self-start bg-purple-700/80 dark:purple-100/50 text-white"
              }`}
            >
              {msg.text}
            </motion.div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="flex p-4 bg-gradient-to-r from-grey-200/80 to-indigo-800/20 dark:from-grey-400/80  dark:to-indigo-400/30 border-t border-white/20">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 rounded-l-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-cyan-400 dark:focus:ring-purple-800 transition"
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 rounded-r-xl font-semibold text-white transition"
          >
            Send
          </button>
        </div>
      </motion.div>
    </main>
  );
}

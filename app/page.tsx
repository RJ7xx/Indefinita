"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"

import { Component } from "@/components/ui/raycast-animated-blue-background"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import { memo } from "react"

const MemoizedBackground = memo(Component)

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  isTyping?: boolean
  displayedContent?: string
}

const parseMarkdown = (text: string) => {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/`(.*?)`/g, '<code class="bg-white/20 px-1 rounded text-xs">$1</code>')
    .replace(/\n/g, "<br />")
}

const DecorativeIcon1 = () => (
  <div className="relative w-5 h-5 flex items-center justify-center">
    <div className="absolute inset-0 bg-[#f4f4f4] rounded-full" />
    <svg width="12" height="12" viewBox="0 0 80 80" fill="none" className="relative z-10">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.9961 12.8793C22.34 17.8679 23.8713 22.9728 25.8502 25.8514C22.9716 23.8725 17.8669 22.3415 12.8784 26.9974L-1.74287e-06 39.8758L12.8784 52.7542C17.8649 57.4083 22.9675 55.8804 25.8468 53.9026C23.8695 56.7821 22.3427 61.884 26.9961 66.8697L39.8745 79.748L52.7529 66.8697C57.405 61.8853 55.8803 56.7849 53.9038 53.905C56.7837 55.8816 61.8843 57.4064 66.8688 52.7542L79.7472 39.8758L66.8688 26.9974C61.8823 22.3433 56.7796 23.8713 53.9004 25.849C55.8786 22.97 57.4077 17.8665 52.7529 12.8793L39.8745 0.000890896L26.9961 12.8793Z"
        fill="black"
      />
    </svg>
  </div>
)

const DecorativeIcon2 = () => (
  <div className="relative w-5 h-5 flex items-center justify-center">
    <div className="absolute inset-0 bg-[#f4f4f4] rounded-full" />
    <svg width="12" height="12" viewBox="0 0 80 80" fill="none" className="relative z-10">
      <path d="M40 8L48.944 31.056L72 40L48.944 48.944L40 72L31.056 48.944L8 40L31.056 31.056L40 8Z" fill="black" />
      <path
        d="M40 20L44.472 35.528L60 40L44.472 44.472L40 60L35.528 44.472L20 40L35.528 35.528L40 20Z"
        fill="black"
        fillOpacity="0.7"
      />
      <circle cx="40" cy="40" r="8" fill="black" />
    </svg>
  </div>
)

const DecorativeIcon3 = () => (
  <div className="relative w-5 h-5 flex items-center justify-center">
    <div className="absolute inset-0 bg-[#f4f4f4] rounded-full" />
    <svg width="12" height="12" viewBox="0 0 80 80" fill="none" className="relative z-10">
      <path
        d="M40 10C51.046 10 60 18.954 60 30C60 41.046 51.046 50 40 50C28.954 50 20 41.046 20 30C20 18.954 28.954 10 40 10Z"
        fill="black"
      />
      <path
        d="M40 70C51.046 70 60 61.046 60 50C60 38.954 51.046 30 40 30C28.954 30 20 38.954 20 50C20 61.046 28.954 70 40 70Z"
        fill="black"
        fillOpacity="0.8"
      />
      <path
        d="M25 40C36.046 40 45 31.046 45 20C45 8.954 36.046 0 25 0C13.954 0 5 8.954 5 20C5 31.046 13.954 40 25 40Z"
        fill="black"
        fillOpacity="0.6"
      />
      <path
        d="M55 40C66.046 40 75 31.046 75 20C75 8.954 66.046 0 55 0C43.954 0 35 8.954 35 20C35 31.046 43.954 40 55 40Z"
        fill="black"
        fillOpacity="0.6"
      />
    </svg>
  </div>
)

const DecorativeIcon4 = () => (
  <div className="relative w-5 h-5 flex items-center justify-center">
    <div className="absolute inset-0 bg-[#f4f4f4] rounded-full" />
    <svg width="12" height="12" viewBox="0 0 80 80" fill="none" className="relative z-10">
      <path
        d="M40 5L45 25L65 20L50 35L70 45L50 55L65 70L45 65L40 85L35 65L15 70L30 55L10 45L30 35L15 20L35 25L40 5Z"
        fill="black"
      />
      <path
        d="M40 15L42.5 32.5L60 35L47.5 42.5L50 60L40 52.5L30 60L32.5 42.5L20 35L37.5 32.5L40 15Z"
        fill="black"
        fillOpacity="0.7"
      />
      <circle cx="40" cy="40" r="6" fill="black" />
    </svg>
  </div>
)

export default function HomePage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const typingMessage = messages.find((msg) => msg.role === "assistant" && msg.isTyping)
    if (!typingMessage) return

    const fullContent = typingMessage.content
    const currentLength = typingMessage.displayedContent?.length || 0

    if (currentLength < fullContent.length) {
      const timer = setTimeout(() => {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === typingMessage.id ? { ...msg, displayedContent: fullContent.slice(0, currentLength + 1) } : msg,
          ),
        )
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
        }
      }, 5)

      return () => clearTimeout(timer)
    } else {
      setMessages((prev) => prev.map((msg) => (msg.id === typingMessage.id ? { ...msg, isTyping: false } : msg)))
    }
  }, [messages])

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages.length])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleButtonClick = (prompt: string) => {
    setInput(prompt)
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)

    const currentInput = input
    setInput("")

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: currentInput }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const data = await response.json()

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.response,
        isTyping: true,
        displayedContent: "",
      }

      setMessages((prev) => [...prev, aiMessage])
    } catch (error) {
      console.error("Error:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Sorry, I encountered an error. Please try again.",
        isTyping: true,
        displayedContent: "",
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative h-screen overflow-hidden font-sans">
      <MemoizedBackground />

      <div className="absolute inset-0 flex flex-col items-center px-4 overflow-hidden">
        <div className="pt-[52px] mb-8">
          <h1 className="text-5xl text-white/90 text-center" style={{ fontFamily: "var(--font-perfecto-calligraphy)" }}>
            Indefinita
          </h1>
        </div>

        <div className="absolute top-[52px] right-6">
          <Link href="https://jup.ag" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white rounded-[7px] shadow-none tracking-tighter text-black w-auto"
            >
              Buy Now
            </Button>
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-center w-full max-w-lg overflow-hidden">
          <div className="w-full space-y-4">
            {messages.length > 0 && (
              <div
                ref={chatContainerRef}
                className="max-h-96 overflow-y-auto space-y-3 mb-4 p-4 bg-white/10 backdrop-blur-sm rounded-[7px] custom-scrollbar"
              >
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`${message.role === "user" ? "text-blue-200" : "text-white"} text-sm tracking-tighter`}
                  >
                    <strong>{message.role === "user" ? "You: " : ""}</strong>
                    {message.role === "assistant" ? (
                      <span
                        dangerouslySetInnerHTML={{
                          __html: parseMarkdown(message.isTyping ? message.displayedContent || "" : message.content),
                        }}
                      />
                    ) : (
                      message.content
                    )}
                  </div>
                ))}
                {isLoading && <div className="text-white/70 text-sm tracking-tighter">Thinking...</div>}
              </div>
            )}

            <form onSubmit={onSubmit} className="relative">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask me anything..."
                className="w-full h-10 pl-4 pr-12 bg-white/95 backdrop-blur-sm border-0 rounded-[7px] shadow-none placeholder:text-gray-500 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 tracking-tighter text-sm"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-1 top-1 h-8 w-8 rounded-[7px] bg-blue-500 hover:bg-blue-600 text-white p-0 shadow-none"
                disabled={isLoading}
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>

            <div className="flex gap-3 justify-center w-full">
              <Button
                onClick={() => handleButtonClick("Summarize this for me clearly: ")}
                variant="outline"
                className="flex-1 h-10 bg-white/90 backdrop-blur-sm border-gray-200 text-gray-700 hover:bg-white rounded-[7px] shadow-none text-sm px-4 tracking-tighter flex items-center justify-center gap-2"
                disabled={isLoading}
              >
                <DecorativeIcon1 />
                Summarize
              </Button>
              <Button
                onClick={() => handleButtonClick("Critique this thoroughly: ")}
                variant="outline"
                className="flex-1 h-10 bg-white/90 backdrop-blur-sm border-gray-200 text-gray-700 hover:bg-white rounded-[7px] shadow-none text-sm px-4 tracking-tighter flex items-center justify-center gap-2"
                disabled={isLoading}
              >
                <DecorativeIcon2 />
                Critique
              </Button>
              <Button
                onClick={() => handleButtonClick("Analyze this in detail: ")}
                variant="outline"
                className="flex-1 h-10 bg-white/90 backdrop-blur-sm border-gray-200 text-gray-700 hover:bg-white rounded-[7px] shadow-none text-sm px-4 tracking-tighter flex items-center justify-center gap-2"
                disabled={isLoading}
              >
                <DecorativeIcon3 />
                Analyze
              </Button>
              <Button
                onClick={() => handleButtonClick("Explain this simply: ")}
                variant="outline"
                className="flex-1 h-10 bg-white/90 backdrop-blur-sm border-gray-200 text-gray-700 hover:bg-white rounded-[7px] shadow-none text-sm px-4 tracking-tighter flex items-center justify-center gap-2"
                disabled={isLoading}
              >
                <DecorativeIcon4 />
                Explain
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 right-4">
          <div className="flex items-center gap-1 text-white text-sm tracking-tighter">
            <Link
              href="https://x.com/IndefinitaAI"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              X
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
            <span>|</span>
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

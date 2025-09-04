"use client"

import { Component } from "@/components/ui/raycast-animated-blue-background"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { memo } from "react"

const MemoizedBackground = memo(Component)

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen font-sans">
      <MemoizedBackground />

      <div className="absolute inset-0 flex flex-col px-6 py-8">
        <div className="mb-8">
          <Link href="/">
            <Button
              variant="outline"
              className="bg-white/90 backdrop-blur-sm border-gray-200 text-gray-700 hover:bg-white rounded-[7px] shadow-none tracking-tighter"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-[7px] p-8 custom-scrollbar overflow-y-auto">
          <h1 className="text-2xl font-medium text-white mb-6 tracking-tighter">Privacy Policy</h1>

          <div className="space-y-6 text-white text-sm tracking-tighter leading-relaxed">
            <section>
              <h2 className="text-lg font-medium mb-3">Information We Collect</h2>
              <p>Indefinita is designed with privacy in mind. We do NOT collect or store:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Personal information (name, email address, phone number)</li>
                <li>Account credentials or user accounts</li>
                <li>Chat history or conversation data</li>
                <li>Personal preferences or settings</li>
              </ul>
              <p className="mt-3">
                Your conversations are processed in real-time through Google's Gemini AI service and are not stored on
                our servers.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-3">How We Process Your Information</h2>
              <p>When you use our chat interface:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Your messages are sent directly to Google's Gemini AI service for processing</li>
                <li>Responses are generated and displayed in real-time</li>
                <li>No conversation data is stored or logged on our servers</li>
                <li>Each session is independent with no memory of previous conversations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-3">Information Sharing</h2>
              <p>
                Since we do not collect or store personal information, we have no personal data to share with third
                parties. Your messages are processed by Google's Gemini AI service according to their privacy policy and
                terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-3">Data Security</h2>
              <p>
                All communications between your browser and our service use HTTPS encryption. Since we don't store
                personal data, there is no risk of data breaches involving your personal information on our servers.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-3">Data Retention</h2>
              <p>
                We do not retain any personal information, chat history, or user data. Each conversation session is
                independent and temporary, with no data persisting after you close the application.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-3">Your Rights</h2>
              <p>
                Since we do not collect or store personal information, traditional data rights (access, deletion,
                portability) do not apply. You maintain complete control over your conversations as they are not stored
                anywhere.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-3">Cookies and Tracking</h2>
              <p>
                We do not use cookies, tracking pixels, or any other tracking technologies. The application functions
                entirely in your browser without storing any persistent data.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-3">Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the
                new policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-3">Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at
                privacy@indefinita.com.
              </p>
            </section>

            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-white/70 text-xs">Last updated: 01 September 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

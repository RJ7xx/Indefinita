"use client"

import { Component } from "@/components/ui/raycast-animated-blue-background"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { memo } from "react"

const MemoizedBackground = memo(Component)

export default function TermsOfService() {
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
          <h1 className="text-2xl font-medium text-white mb-6 tracking-tighter">Terms of Service</h1>

          <div className="space-y-6 text-white text-sm tracking-tighter leading-relaxed">
            <section>
              <h2 className="text-lg font-medium mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Indefinita, you accept and agree to be bound by the terms and provision of this
                agreement.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-3">2. Use License</h2>
              <p>
                Permission is granted to temporarily use Indefinita for personal, non-commercial transitory viewing
                only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to reverse engineer any software contained on the website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-3">3. Disclaimer</h2>
              <p>
                The materials on Indefinita are provided on an 'as is' basis. Indefinita makes no warranties, expressed
                or implied, and hereby disclaims and negates all other warranties including without limitation, implied
                warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
                intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-3">4. Limitations</h2>
              <p>
                In no event shall Indefinita or its suppliers be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability
                to use the materials on Indefinita, even if Indefinita or an authorized representative has been notified
                orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-3">5. Accuracy of Materials</h2>
              <p>
                The materials appearing on Indefinita could include technical, typographical, or photographic errors.
                Indefinita does not warrant that any of the materials on its website are accurate, complete, or current.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-3">6. Links</h2>
              <p>
                Indefinita has not reviewed all of the sites linked to our website and is not responsible for the
                contents of any such linked site. The inclusion of any link does not imply endorsement by Indefinita of
                the site.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-3">7. Modifications</h2>
              <p>
                Indefinita may revise these terms of service at any time without notice. By using this website, you are
                agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-3">8. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws and you irrevocably
                submit to the exclusive jurisdiction of the courts in that state or location.
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

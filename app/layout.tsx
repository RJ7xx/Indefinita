import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import { Suspense } from "react"

const perfectoCalligraphy = localFont({
  src: "../public/fonts/perfecto-calligraphy-personal-use.regular.ttf",
  variable: "--font-perfecto-calligraphy",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Indefinita AI",
  description: "Indefinita AI | Uncensored AI with no limits"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${perfectoCalligraphy.variable} antialiased`}>
      <head>
        <style>{`
html {
  font-family: ${inter.style.fontFamily};
  --font-inter: ${inter.style.fontFamily};
  --font-perfecto-calligraphy: ${perfectoCalligraphy.style.fontFamily};
}
        `}</style>
      </head>
      <body>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

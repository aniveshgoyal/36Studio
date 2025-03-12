import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import { AudioProvider } from "@/contexts/AudioContext"
import RedDot from "@/components/red-dot"
import RevealAnimation from "@/components/RevealAnimation"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Thirtysixstudio",
  description: "Digital production studio for purposeful brands",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="antialiased bg-white dark:bg-black text-black dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AudioProvider>
            <RevealAnimation />
            <RedDot />
            <Header />
            {children}
          </AudioProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
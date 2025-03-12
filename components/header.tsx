"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Sun, Moon, MoreHorizontal } from "lucide-react"
import { useScrollDirection } from "@/hooks/use-scroll-direction"
import { motion, AnimatePresence } from "framer-motion"
import { smoothScroll } from "@/utils/smoothScroll"
import AudioPlayer from "./AudioPlayer"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const scrollDirection = useScrollDirection()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <AnimatePresence>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm"
        initial={{ y: 0 }}
        animate={{ y: scrollDirection === "down" ? "-100%" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="text-base">
              Thirtysixstudio
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#what-we-do"
                className="text-base hover:opacity-70 transition-opacity"
                onClick={(e) => smoothScroll(e, "what-we-do")}
              >
                What we do
              </a>
              <a
                href="#who-we-are"
                className="text-base hover:opacity-70 transition-opacity"
                onClick={(e) => smoothScroll(e, "who-we-are")}
              >
                Who we are
              </a>
              <a
                href="#how-we-give-back"
                className="text-base hover:opacity-70 transition-opacity"
                onClick={(e) => smoothScroll(e, "how-we-give-back")}
              >
                How we give back
              </a>
              <a
                href="#talk-to-us"
                className="text-base hover:opacity-70 transition-opacity"
                onClick={(e) => smoothScroll(e, "talk-to-us")}
              >
                Talk to us
              </a>
              <button className="text-base hover:opacity-70 transition-opacity">...</button>
            </nav>

            <div className="flex items-center gap-6">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <AudioPlayer />
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              <MoreHorizontal className="h-6 w-6" />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden px-6 py-4 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
            <nav className="flex flex-col gap-4">
              <a
                href="#what-we-do"
                className="text-base"
                onClick={(e) => {
                  smoothScroll(e, "what-we-do")
                  setMobileMenuOpen(false)
                }}
              >
                What we do
              </a>
              <a
                href="#who-we-are"
                className="text-base"
                onClick={(e) => {
                  smoothScroll(e, "who-we-are")
                  setMobileMenuOpen(false)
                }}
              >
                Who we are
              </a>
              <a
                href="#how-we-give-back"
                className="text-base"
                onClick={(e) => {
                  smoothScroll(e, "how-we-give-back")
                  setMobileMenuOpen(false)
                }}
              >
                How we give back
              </a>
              <a
                href="#talk-to-us"
                className="text-base"
                onClick={(e) => {
                  smoothScroll(e, "talk-to-us")
                  setMobileMenuOpen(false)
                }}
              >
                Talk to us
              </a>
            </nav>
          </div>
        )}
      </motion.header>
    </AnimatePresence>
  )
}


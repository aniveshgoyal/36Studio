"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useAudio } from "@/contexts/AudioContext"

export default function FloatingMusicPrompt() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { showPrompt } = useAudio()

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          className="fixed z-50 pointer-events-none flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            left: mousePosition.x + 16,
            top: mousePosition.y,
            transform: "translateY(-50%)",
          }}
        >
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <span className="text-red-500 text-sm uppercase tracking-wide">Click for sound</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useAudio } from "@/contexts/AudioContext"

export default function RedDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const { showPrompt, isAudioLoaded } = useAudio()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <motion.div
      className="fixed z-50 pointer-events-none"
      animate={{
        x: position.x - 6,
        y: position.y - 6,
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 250,
        mass: 0.5,
      }}
    >
      <div className="w-6 h-6 rounded-full bg-red-500" />
      {showPrompt && isAudioLoaded && (
        <motion.span
          className="absolute left-8 top-1 -translate-y-1/2 text-red-500 text-xs uppercase tracking-wide whitespace-nowrap"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
        >
          Click for sound
        </motion.span>
      )}
    </motion.div>
  )
}


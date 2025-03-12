"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import { useClickSound } from "@/hooks/use-click-sound"

const roles = [
  "Project Managers",
  "Digital Producers",
  "Designers",
  "Illustrators",
  "Animators",
  "3D Artists",
  "Motion Designers",
  "Developers and Coders",
  "Creative Technologists",
  "Sound Engineers",
]

export default function RolesSection() {
  const [isOpen, setIsOpen] = useState(false)
  const playClickSound = useClickSound()

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
    playClickSound()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border-t border-b border-gray-200 w-full"
    >
      <button onClick={toggleAccordion} className="w-full py-4 flex items-center justify-between text-left">
        <span className="text-sm font-medium">ROLES OPEN</span>
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }}>
          <Plus className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-4 space-y-1">
              {roles.map((role, idx) => (
                <RoleItem key={idx} role={role} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function RoleItem({ role }) {
  const playClickSound = useClickSound()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative py-2 px-4 cursor-pointer overflow-hidden text-xs"
      onMouseEnter={() => {
        setIsHovered(true)
        playClickSound()
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 bg-black dark:bg-white"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ originY: 1 }}
      />
      <div className={`relative block transition-colors duration-200 ${isHovered ? "text-white dark:text-black" : ""}`}>
        {role}
      </div>
    </div>
  )
}


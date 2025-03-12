"use client"

import { motion } from "framer-motion"

interface BigTextOverlayProps {
  isVisible: boolean
}

export default function BigTextOverlay({ isVisible }: BigTextOverlayProps) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-[50vw] mt-5 font-medium text-black dark:text-white opacity-10">Thirtysixstudio</h2>
    </motion.div>
  )
}


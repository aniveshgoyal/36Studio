"use client"

import { motion } from "framer-motion"

export default function MainContent() {
  return (
    <motion.div
      className="flex-1 flex flex-col justify-center items-center p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-light mb-6 text-center"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Creative Design Studio
      </motion.h2>
      <motion.p
        className="text-lg md:text-xl font-light text-center max-w-2xl"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        We create meaningful experiences through design and technology.
      </motion.p>
    </motion.div>
  )
}


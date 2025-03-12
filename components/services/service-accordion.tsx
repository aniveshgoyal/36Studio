"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import type { ServiceCategory } from "./service-data"

interface ServiceAccordionProps {
  category: ServiceCategory
  index: number
}

export default function ServiceAccordion({ category, index }: ServiceAccordionProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // or a loading placeholder
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-border"
    >
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-6 flex items-center justify-between text-left">
        <span className="text-lg font-medium">{category.title}</span>
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }}>
          <Plus className="w-6 h-6" />
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
            <div className="pb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.services.map((service, idx) => (
                <ServiceItem key={idx} service={service} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function ServiceItem({ service }: { service: string }) {
  return (
    <motion.div className="relative overflow-hidden group cursor-pointer" whileHover="hover">
      <motion.div
        className="absolute inset-0 bg-foreground"
        initial={{ scaleX: 0 }}
        variants={{
          hover: {
            scaleX: 1,
            transition: { duration: 0.3, ease: "easeInOut" },
          },
        }}
        style={{ originX: 0 }}
      />
      <motion.span
        className="relative block py-2 px-4"
        variants={{
          hover: {
            color: "white",
            transition: { duration: 0.2 },
          },
        }}
      >
        {service}
      </motion.span>
    </motion.div>
  )
}


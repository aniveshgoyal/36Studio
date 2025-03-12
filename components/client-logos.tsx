"use client"

import { motion } from "framer-motion"

const clients = ["Client 1", "Client 2", "Client 3", "Client 4", "Client 5", "Client 6"]

export default function ClientLogos() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Our Clients
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center h-24 bg-gray-800"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


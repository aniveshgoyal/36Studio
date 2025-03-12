"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const topics = ["General Inquiry", "Project Collaboration", "Career Opportunities", "Partnership", "Other"]

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  })

  return (
    <form className="w-full max-w-md mx-auto space-y-10">
      <div className="space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name*"
            required
            className="w-full p-4 bg-transparent border-b border-gray-200 focus:border-gray-900 outline-none transition-colors text-sm"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <input
            type="email"
            name="email"
            placeholder="Email*"
            required
            className="w-full p-4 bg-transparent border-b border-gray-200 focus:border-gray-900 outline-none transition-colors text-sm"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <select
            name="topic"
            required
            className="w-full p-4 bg-transparent border-b border-gray-200 focus:border-gray-900 outline-none transition-colors text-sm appearance-none"
            onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
          >
            <option value="">Topic*</option>
            {topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            className="w-full p-4 bg-transparent border-b border-gray-200 focus:border-gray-900 outline-none transition-colors resize-none text-sm"
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </motion.div>
      </div>

      <motion.button
        type="submit"
        className="text-xs underline hover:opacity-70 transition-opacity"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        SEND
      </motion.button>
    </form>
  )
}


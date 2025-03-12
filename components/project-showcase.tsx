"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const projects = [
  { id: 1, title: "Project 1", image: "/placeholder.svg?height=400&width=600" },
  { id: 2, title: "Project 2", image: "/placeholder.svg?height=400&width=600" },
  { id: 3, title: "Project 3", image: "/placeholder.svg?height=400&width=600" },
  { id: 4, title: "Project 4", image: "/placeholder.svg?height=400&width=600" },
]

export default function ProjectShowcase() {
  const containerRef = useRef(null)
  const { scrollXProgress } = useScroll({ container: containerRef })
  const x = useTransform(scrollXProgress, [0, 1], ["0%", "-75%"])

  return (
    <section className="py-20 overflow-hidden" ref={containerRef}>
      <motion.div className="flex" style={{ x }}>
        {projects.map((project) => (
          <div key={project.id} className="flex-shrink-0 w-[75vw] px-4">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-[50vh] object-cover"
            />
            <h3 className="text-2xl mt-4">{project.title}</h3>
          </div>
        ))}
      </motion.div>
    </section>
  )
}


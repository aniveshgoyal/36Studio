"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import CircularText from "./circular-text"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  useEffect(() => {
    setIsMounted(true)
    const timer = setTimeout(() => setIsLoaded(true), 1500) 
    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  if (!isMounted) return null

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-between">
      <motion.div
        style={{ y, opacity }}
        className="flex-1 pt-40 px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        <div className="container mx-72">
          <div className="max-w-sm">
            <motion.h1
              className="text-2xl md:text-2xl lg:text-2xl leading-tight tracking-tight mb-12"
              variants={itemVariants}
            >
              At Thirtysixstudio, we build digital assets and immersive experiences for purposeful brands.
            </motion.h1>

            <motion.p className="text-lg md:text-xl mb-12 text-muted-foreground" variants={itemVariants}>
              We're a boutique production studio focused on design, animation, and technology, constantly rethinking
              what digital craft can do for present-day ads and campaigns.
            </motion.p>

            <motion.button className="text-base hover:opacity-70 transition-opacity" variants={itemVariants}>
              Scroll
            </motion.button>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-56 right-[400px] md:right-20 lg:right-80"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <CircularText />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="w-full pb-8"
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className=" overflow-hidden">
          <h2 className="text-[20vw] md:text-[20vw] lg:text-[15vw] mt-5 pl-5 leading-none tracking-tighter font-medium whitespace-nowrap">
            Thirtysixstudio
          </h2>
        </div>
      </motion.div>
    </section>
  )
}


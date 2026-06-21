"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

const stats = [
  { label: "Projects Delivered", value: 5, suffix: "+" },
  { label: "Happy Partners", value: 4, suffix: "+" },
  { label: "Countries Reached", value: 5, suffix: "" },
  { label: "Team Members", value: 5, suffix: "+" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  useEffect(() => {
    if (!inView) return

    let start = 0
    const end = value
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <div ref={ref}>
      <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        {count}
        {suffix}
      </div>
    </div>
  )
}

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="stats"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-foreground/60 mt-4 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

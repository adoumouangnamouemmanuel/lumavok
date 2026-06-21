"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-stack e-commerce solution with payment integration",
    image: "/ecommerce-dashboard.png",
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Development",
    description: "Secure mobile banking application for financial services",
    image: "/mobile-banking-app.png",
  },
  {
    title: "AI Analytics Dashboard",
    category: "AI & Analytics",
    description: "Real-time analytics dashboard powered by machine learning",
    image: "/analytics-dashboard.png",
  },
]

export default function Portfolio() {
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
    <section id="portfolio" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={containerVariants}>
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Our projects
              </span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Showcase of our recent projects and success stories
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -8, transition: { duration: 0.2 } }}>
                <Card className="overflow-hidden bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="text-sm font-medium text-accent mb-2">{project.category}</span>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                    <p className="text-foreground/60 flex-1">{project.description}</p>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="cursor-pointer mt-4 text-accent font-medium flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      View Case Study →
                    </motion.button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

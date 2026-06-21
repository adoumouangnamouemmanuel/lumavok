"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"

const testimonials = [
  {
    name: "Amara Okonkwo",
    role: "CEO, TechStart Ghana",
    content:
      "BYTE transformed our business with their innovative solutions. The team was professional, responsive, and delivered beyond expectations.",
    avatar: "👩‍💼",
  },
  {
    name: "Kwame Mensah",
    role: "Founder, E-Commerce Hub",
    content:
      "Working with BYTE was a game-changer. Their AI solutions helped us increase sales by 300% in just 6 months.",
    avatar: "👨‍💼",
  },
  {
    name: "Zainab Hassan",
    role: "Product Manager, FinTech Solutions",
    content:
      "The quality of their work and attention to detail is unmatched. BYTE is our go-to partner for all digital solutions.",
    avatar: "👩‍💻",
  },
]

export default function Testimonials() {
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
    <section id="testimonials" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={containerVariants}>
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Real feedback from businesses we&apos;ve helped transform
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }}>
                <Card className="p-8 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{testimonial.avatar}</div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-foreground/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-foreground/70 leading-relaxed flex-1">&quot;{testimonial.content}&quot;</p>
                  <div className="flex gap-1 mt-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent">
                        ⭐
                      </span>
                    ))}
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

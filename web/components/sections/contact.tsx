"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      id="contact"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-muted/20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={containerVariants}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div className="inline-block mb-4">
              <span className="px-4 py-2 bg-accent/15 dark:bg-accent/20 border border-accent/40 rounded-full text-sm font-medium text-accent">
                Get in Touch
              </span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Let&apos;s Build Something Great
              </span>
            </h2>
            <p className="text-lg text-foreground/60 dark:text-foreground/65 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your business? Get in touch with our team today and let&apos;s create something amazing
              together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <Card className="p-4 bg-gradient-to-br from-card/80 to-card/40 dark:from-card/60 dark:to-card/30 backdrop-blur-xl border border-border/50 dark:border-border/40 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-accent/30 to-accent/10 dark:from-accent/25 dark:to-accent/5 rounded-lg group-hover:from-accent/40 group-hover:to-accent/15 transition-all duration-300">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email</h3>
                    <a
                      href="mailto:hello@byte.com"
                      className="text-accent hover:text-accent/80 transition-colors text-sm font-medium"
                    >
                      info@byte.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-gradient-to-br from-card/80 to-card/40 dark:from-card/60 dark:to-card/30 backdrop-blur-xl border border-border/50 dark:border-border/40 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-accent/30 to-accent/10 dark:from-accent/25 dark:to-accent/5 rounded-lg group-hover:from-accent/40 group-hover:to-accent/15 transition-all duration-300">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                    <a
                      href="tel:+234123456789"
                      className="text-accent hover:text-accent/80 transition-colors text-sm font-medium"
                    >
                      +233503673195
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-gradient-to-br from-card/80 to-card/40 dark:from-card/60 dark:to-card/30 backdrop-blur-xl border border-border/50 dark:border-border/40 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-accent/30 to-accent/10 dark:from-accent/25 dark:to-accent/5 rounded-lg group-hover:from-accent/40 group-hover:to-accent/15 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Location</h3>
                    <p className="text-foreground/70 dark:text-foreground/75 text-sm font-medium">Accra, Ghana</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-2">
              <Card className="p-4 sm:p-10 bg-gradient-to-br from-card/80 to-card/40 dark:from-card/60 dark:to-card/30 backdrop-blur-xl border border-border/50 dark:border-border/40">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 0.6 }} className="mb-4">
                      <CheckCircle className="w-16 h-16 text-accent mx-auto" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-foreground/60 dark:text-foreground/65">
                      Thank you for reaching out. We&apos;ll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-3">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-input dark:bg-input border border-border dark:border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                          placeholder="Emmanuel Adoum"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-3">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-input dark:bg-input border border-border dark:border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                          placeholder="emmanuel.o.adoum@gmail.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3">Project Details</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-input dark:bg-input border border-border dark:border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your project, goals, and timeline..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="cursor-pointer w-full px-6 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </Button>
                  </form>
                )}
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

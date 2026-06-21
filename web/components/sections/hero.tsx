"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{
        backgroundImage: "url(/hero.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60 dark:from-black/90 dark:via-black/85 dark:to-black/75" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-primary/15 dark:bg-primary/20 border border-primary/40 dark:border-primary/50 rounded-full text-sm font-medium text-primary dark:text-primary">
            ✨ Welcome to ByTe
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-5xl font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Build digital products
          </span>
          <br />
          <span className="text-white">that grow your capital</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-xl text-white/70 dark:text-foreground/75 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Affordable, high-quality software, design, and AI solutions for
          African businesses, startups, and communities. Designed for Africa,
          built for scale.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer px-8 py-6 bg-accent text-accent-foreground rounded-full font-semibold text-base hover:shadow-lg hover:shadow-accent/50 transition-all duration-300"
          >
            Work With Us
          </Button>
          <Button
            onClick={() => scrollToSection("services")}
            variant="outline"
            className="cursor-pointer px-8 py-6 border-2 border-none text-primary dark:text-primary rounded-full font-semibold text-base hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-300"
          >
            Our Services
          </Button>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          className="mt-16 text-foreground/30 dark:text-foreground/40"
        >
          <svg
            className="w-8 h-8 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

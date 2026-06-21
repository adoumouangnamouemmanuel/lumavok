"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="about"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <div className="mb-8">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Our Vision
                </span>
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                To be Africa&apos;s leading software solutions company,
                empowering businesses through innovative, accessible technology.
              </p>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  Our Mission
                </span>
              </h3>
              <p className="text-base text-foreground/60 leading-relaxed">
                We deliver tailored software solutions that drive real business
                growth, bridging the gap between local African needs and global
                technology standards.
              </p>
            </div>
          </motion.div>

          {/* Right Visual - Added generated image for innovation and growth */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 border-none"
          >
            <Image
              src="/innovation-growth-african-tech.jpg"
              alt="Innovation and Growth - African Tech"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

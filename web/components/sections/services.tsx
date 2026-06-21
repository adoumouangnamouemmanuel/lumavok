"use client";

import { Card } from "@/components/ui/card";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Code,
  DollarSign,
  Globe,
  Palette,
  ShoppingCart,
  Smartphone,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const services = [
  {
    icon: Code,
    emoji: "",
    title: "Software Development",
    description:
      "Web, mobile, dashboards, and chatbots built with cutting-edge technology.",
    color: "from-blue-500/20 to-cyan-500/20",
    hoverColor: "group-hover:from-blue-500/30 group-hover:to-cyan-500/30",
    features: ["Web Apps", "Mobile Apps", "APIs", "Chatbots"],
  },
  {
    icon: Palette,
    emoji: "",
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that users love to interact with.",
    color: "from-pink-500/20 to-purple-500/20",
    hoverColor: "group-hover:from-pink-500/30 group-hover:to-purple-500/30",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    icon: Globe,
    emoji: "",
    title: "Portfolio Development",
    description: "Showcase your work with stunning portfolio websites.",
    color: "from-green-500/20 to-emerald-500/20",
    hoverColor: "group-hover:from-green-500/30 group-hover:to-emerald-500/30",
    features: [
      "Personal Sites",
      "Business Portfolios",
      "Creative Showcases",
      "SEO Optimized",
    ],
  },
  {
    icon: ShoppingCart,
    emoji: "",
    title: "E-commerce Platforms",
    description: "Complete e-commerce solutions to scale your online business.",
    color: "from-orange-500/20 to-red-500/20",
    hoverColor: "group-hover:from-orange-500/30 group-hover:to-red-500/30",
    features: [
      "Payment Integration",
      "Inventory Management",
      "Analytics",
      "Mobile Commerce",
    ],
  },
  {
    icon: TrendingUp,
    emoji: "",
    title: "Consulting",
    description: "Strategic guidance to transform your digital presence.",
    color: "from-violet-500/20 to-purple-500/20",
    hoverColor: "group-hover:from-violet-500/30 group-hover:to-purple-500/30",
    features: [
      "Digital Strategy",
      "Tech Audit",
      "Growth Planning",
      "Market Analysis",
    ],
  },
  {
    icon: Smartphone,
    emoji: "",
    title: "Digital Marketing",
    description:
      "Reach your audience with targeted digital marketing strategies.",
    color: "from-teal-500/20 to-cyan-500/20",
    hoverColor: "group-hover:from-teal-500/30 group-hover:to-cyan-500/30",
    features: ["Social Media", "Content Marketing", "SEO/SEM", "Analytics"],
  },
  {
    icon: DollarSign,
    emoji: "",
    title: "Product Monetization",
    description: "Turn your ideas into profitable digital products.",
    color: "from-yellow-500/20 to-amber-500/20",
    hoverColor: "group-hover:from-yellow-500/30 group-hover:to-amber-500/30",
    features: [
      "Revenue Models",
      "Pricing Strategy",
      "Payment Systems",
      "Growth Hacking",
    ],
  },
  {
    icon: Bot,
    emoji: "",
    title: "AI & Machine Learning",
    description:
      "Leverage AI to automate and optimize your business processes.",
    color: "from-indigo-500/20 to-blue-500/20",
    hoverColor: "group-hover:from-indigo-500/30 group-hover:to-blue-500/30",
    features: [
      "Custom AI Models",
      "Automation",
      "Predictive Analytics",
      "NLP Solutions",
    ],
  },
];

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, type: "spring", stiffness: 100 },
    },
  };

  return (
    <section
      id="services"
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-block mb-6"
            >
              <span className="px-6 py-2 bg-linear-to-r from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                What We Offer
              </span>
            </motion.div>

            <h2 className="text-4xl sm:text-6xl font-bold mb-6">
              <span className="bg-linear-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed">
              Comprehensive solutions tailored to your business needs, powered
              by cutting-edge technology
              <motion.span
                className="inline-block ml-2"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🚀
              </motion.span>
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative"
              >
                <Card className="h-full p-6 bg-card/50 backdrop-blur-xl border-primary/20 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 relative overflow-hidden">
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${service.hoverColor}`}
                    animate={{
                      scale: hoveredIndex === index ? [1, 1.05, 1] : 1,
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className="mb-4 flex items-center gap-3"
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="p-3 bg-linear-to-br from-accent/20 to-primary/20 rounded-xl group-hover:from-accent/30 group-hover:to-primary/30 transition-all">
                        <service.icon className="w-6 h-6 text-accent" />
                      </div>
                      <span className="text-3xl">{service.emoji}</span>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-foreground/60 leading-relaxed text-sm mb-4">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        height: hoveredIndex === index ? "auto" : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-border/50 space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ x: -10, opacity: 0 }}
                            animate={{
                              x: hoveredIndex === index ? 0 : -10,
                              opacity: hoveredIndex === index ? 1 : 0,
                            }}
                            transition={{ delay: featureIndex * 0.05 }}
                            className="flex items-center gap-2 text-xs text-foreground/70"
                          >
                            <ArrowRight className="w-3 h-3 text-accent" />
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Learn More Button */}
                    <motion.button
                      className="mt-4 text-sm font-semibold text-accent flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ x: 5 }}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>

                  {/* Glow Effect */}
                  <motion.div
                    className="absolute -inset-1 bg-linear-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-10 blur-xl -z-10 rounded-xl"
                    animate={{
                      opacity: hoveredIndex === index ? [0, 0.2, 0] : 0,
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

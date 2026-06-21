"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Globe,
  Rocket,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function RoadmapPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedQuarter, setSelectedQuarter] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const roadmapItems = [
    {
      quarter: "Q4 2025",
      title: "Foundation & Core Platform",
      icon: Rocket,
      items: [
        "Launch BYTE platform MVP",
        "Implement core authentication system",
        "Deploy initial cloud infrastructure",
        "Establish developer documentation",
      ],
      status: "completed",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/50",
      textColor: "text-green-700 dark:text-green-400",
      bgColor: "bg-green-500/20",
    },
    {
      quarter: "Q1 2026",
      title: "AI Integration & Analytics",
      icon: Zap,
      items: [
        "Integrate AI-powered analytics dashboard",
        "Launch predictive insights feature",
        "Implement real-time data processing",
        "Add machine learning models",
      ],
      status: "in-progress",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/50",
      textColor: "text-blue-700 dark:text-blue-400",
      bgColor: "bg-blue-500/20",
    },
    {
      quarter: "Q2 2026",
      title: "Enterprise Features",
      icon: Shield,
      items: [
        "Multi-tenant architecture",
        "Advanced security protocols",
        "Custom integration APIs",
        "Enterprise support tier",
      ],
      status: "upcoming",
      color: "from-purple-500/20 to-violet-500/20",
      borderColor: "border-purple-500/50",
      textColor: "text-purple-700 dark:text-purple-400",
      bgColor: "bg-purple-500/20",
    },
    {
      quarter: "Q3 2026",
      title: "Global Expansion",
      icon: Globe,
      items: [
        "Multi-language support",
        "Regional data centers",
        "Partner ecosystem launch",
        "Mobile app release",
      ],
      status: "upcoming",
      color: "from-orange-500/20 to-amber-500/20",
      borderColor: "border-orange-500/50",
      textColor: "text-orange-700 dark:text-orange-400",
      bgColor: "bg-orange-500/20",
    },
  ];

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none opacity-30 dark:opacity-20">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [-50, 50, -50],
            y: [-50, 50, -50],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 0.5 }}
        />
      </div>

      <Navbar isScrolled={isScrolled} />

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-block mb-6"
            >
              <span className="px-6 py-2 bg-linear-to-r from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary flex items-center gap-2">
                <Target className="w-4 h-4" />
                Product Roadmap
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-7xl font-bold mb-6">
              <span className="bg-linear-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Our Roadmap
              </span>
            </h1>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
              Discover our vision for the future and the exciting features
              coming to BYTE
              <motion.span
                className="inline-block ml-2"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🚀
              </motion.span>
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-8 mt-12"
            >
              {[
                { icon: CheckCircle2, value: "1", label: "Completed" },
                { icon: Clock, value: "1", label: "In Progress" },
                { icon: Calendar, value: "2", label: "Upcoming" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex items-center gap-3 px-6 py-3 bg-card/50 backdrop-blur-xl rounded-full border border-border/50 hover:border-accent/50 transition-all"
                >
                  <stat.icon className="w-5 h-5 text-accent" />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-xs text-foreground/60">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative"
              >
                <div className="flex gap-6">
                  {/* Timeline Indicator */}
                  <div className="flex flex-col items-center">
                    <motion.div
                      className={`relative w-12 h-12 rounded-full flex items-center justify-center ${item.bgColor} ${item.borderColor} border-2 shadow-lg z-10`}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className={`w-6 h-6 ${item.textColor}`} />

                      {/* Pulse effect */}
                      {item.status === "in-progress" && (
                        <motion.div
                          className={`absolute inset-0 rounded-full ${item.bgColor} ${item.borderColor} border-2`}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </motion.div>

                    {/* Connecting Line */}
                    {index < roadmapItems.length - 1 && (
                      <motion.div
                        className={`w-1 flex-1 bg-linear-to-b ${item.color} rounded-full mt-2`}
                        initial={{ height: 0 }}
                        whileInView={{ height: "100px" }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                      />
                    )}
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className="pb-8 flex-1"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`relative bg-card/50 backdrop-blur-xl border-2 ${
                        hoveredIndex === index
                          ? item.borderColor
                          : "border-border"
                      } rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl overflow-hidden group`}
                      onClick={() =>
                        setSelectedQuarter(
                          selectedQuarter === index ? null : index
                        )
                      }
                    >
                      {/* Background Gradient on Hover */}
                      <motion.div
                        className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                        animate={{
                          scale: hoveredIndex === index ? [1, 1.05, 1] : 1,
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                          <div>
                            <motion.div
                              className="flex items-center gap-3 mb-2"
                              whileHover={{ x: 5 }}
                            >
                              <Calendar
                                className={`w-5 h-5 ${item.textColor}`}
                              />
                              <h3 className="text-2xl sm:text-3xl font-bold">
                                {item.quarter}
                              </h3>
                            </motion.div>
                            <h4 className="text-lg sm:text-xl font-semibold text-foreground/80 group-hover:text-accent transition-colors">
                              {item.title}
                            </h4>
                          </div>

                          <motion.span
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-4 py-2 rounded-full text-sm font-semibold ${item.bgColor} ${item.textColor} border ${item.borderColor} whitespace-nowrap self-start sm:self-center`}
                          >
                            {item.status === "completed" && (
                              <span className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4" />
                                Completed
                              </span>
                            )}
                            {item.status === "in-progress" && (
                              <span className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                In Progress
                              </span>
                            )}
                            {item.status === "upcoming" && (
                              <span className="flex items-center gap-2">
                                <Sparkles className="w-4 h-4" />
                                Upcoming
                              </span>
                            )}
                          </motion.span>
                        </div>

                        {/* Items List */}
                        <ul className="space-y-3">
                          {item.items.map((subitem, subindex) => (
                            <motion.li
                              key={subindex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: subindex * 0.1 }}
                              viewport={{ once: true }}
                              whileHover={{ x: 5 }}
                              className="flex items-start gap-3 text-foreground/70 group/item"
                            >
                              <motion.div
                                className={`mt-1.5 w-2 h-2 rounded-full ${
                                  item.status === "completed"
                                    ? "bg-green-500"
                                    : item.status === "in-progress"
                                    ? "bg-blue-500"
                                    : "bg-gray-400"
                                }`}
                                whileHover={{ scale: 1.5 }}
                              />
                              <span className="flex-1 group-hover/item:text-foreground transition-colors">
                                {subitem}
                              </span>
                              {item.status === "completed" && (
                                <CheckCircle2 className="w-4 h-4 text-green-500 opacity-50" />
                              )}
                            </motion.li>
                          ))}
                        </ul>

                        {/* View More Button */}
                        <motion.button
                          className={`mt-6 flex items-center gap-2 ${item.textColor} font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity`}
                          whileHover={{ x: 5 }}
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </div>

                      {/* Glow Effect */}
                      <motion.div
                        className={`absolute -inset-1 bg-linear-to-r ${item.color} opacity-0 group-hover:opacity-20 blur-xl -z-10 rounded-2xl`}
                        animate={{
                          opacity: hoveredIndex === index ? [0, 0.3, 0] : 0,
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="relative inline-block">
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-primary via-accent to-secondary opacity-20 blur-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative bg-card/50 backdrop-blur-xl border-2 border-primary/20 rounded-3xl p-12 max-w-3xl">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="inline-block mb-6"
                >
                  <TrendingUp className="w-12 h-12 text-accent" />
                </motion.div>
                <h2 className="text-3xl font-bold mb-4">
                  Be Part of Our Journey
                </h2>
                <p className="text-foreground/60 mb-8">
                  Have suggestions or want to stay updated on our progress?
                  We&apos;d love to hear from you!
                </p>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-linear-to-r from-accent via-accent to-accent/90 text-accent-foreground rounded-full font-semibold shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/50 transition-all flex items-center gap-2 mx-auto"
                >
                  <Users className="w-5 h-5" />
                  Join Our Community
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

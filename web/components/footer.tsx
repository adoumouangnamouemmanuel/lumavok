"use client";

import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Github,
  Globe,
  Heart,
  Linkedin,
  Mail,
  Twitter,
  Users,
  Zap,
} from "lucide-react";
import { useRef, useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });

  const footerLinks = {
    Product: [
      { name: "Features", href: "#services" },
      { name: "Pricing", href: "#contact" },
      { name: "Security", href: "#about" },
      { name: "roadmap", href: "/roadmap" },
    ],
    Company: [
      { name: "About", href: "#about" },
      { name: "Blog", href: "#portfolio" },
      { name: "Careers", href: "#contact" },
      { name: "team", href: "/team" },
    ],
    Resources: [
      { name: "Documentation", href: "#services" },
      { name: "API Docs", href: "#services" },
      { name: "Community", href: "#testimonials" },
      { name: "Support", href: "#contact" },
    ],
    Legal: [
      { name: "privacy", href: "/privacy" },
      { name: "Terms", href: "#contact" },
      { name: "Cookies", href: "#contact" },
      { name: "Contact", href: "#contact" },
    ],
  };

  const socialLinks = [
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
      color:
        "hover:bg-[#1DA1F2]/10 hover:text-[#1DA1F2] hover:border-[#1DA1F2]/50",
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      color:
        "hover:bg-[#0077B5]/10 hover:text-[#0077B5] hover:border-[#0077B5]/50",
    },
    {
      icon: Github,
      href: "#",
      label: "GitHub",
      color:
        "hover:bg-foreground/10 hover:text-foreground hover:border-foreground/50",
    },
    {
      icon: Mail,
      href: "mailto:info@byte.com",
      label: "Email",
      color: "hover:bg-accent/10 hover:text-accent hover:border-accent/50",
    },
  ];

  const stats = [
    { icon: Users, value: "5+", label: "Happy Clients" },
    { icon: Zap, value: "10+", label: "Projects Delivered" },
    { icon: Globe, value: "5", label: "Countries Served" },
    { icon: Heart, value: "99%", label: "Client Satisfaction" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <footer
      ref={footerRef}
      className="relative bg-linear-to-b from-background via-background to-muted/30 dark:from-background dark:via-background/95 dark:to-muted/20 border-t border-border/50 dark:border-border/40 overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 pb-16 border-b border-border/50"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-muted/30 to-transparent border border-border/30 hover:border-accent/50 transition-all duration-300 group"
            >
              <motion.div
                className="inline-flex p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 mb-3 group-hover:from-primary/20 group-hover:to-accent/20 transition-all"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-6 h-6 text-accent" />
              </motion.div>
              <motion.h4
                className="text-2xl font-bold text-foreground mb-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                {stat.value}
              </motion.h4>
              <p className="text-sm text-foreground/60">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
        >
          {/* Brand Section */}
          <div>
            <motion.h3
              className="text-3xl font-bold bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              BYTE
              <motion.span
                className="inline-block ml-2 text-accent"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ✦
              </motion.span>
            </motion.h3>
            <p className="text-foreground/70 dark:text-foreground/75 text-base leading-relaxed max-w-sm mb-6">
              Building digital products that grow your capital. Affordable,
              high-quality software, design, and AI solutions for African
              businesses.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.15, y: -4, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 bg-linear-to-br from-muted/80 to-muted/40 dark:from-muted/50 dark:to-muted/20 rounded-xl text-foreground/60 transition-all duration-300 border border-border/50 dark:border-border/40 shadow-md hover:shadow-lg ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative bg-linear-to-br from-muted/50 via-muted/30 to-transparent dark:from-muted/30 dark:to-muted/10 rounded-2xl p-8 border border-border/50 dark:border-border/40 hover:border-accent/50 transition-all duration-300 overflow-hidden group"
          >
            {/* Animated glow effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                background: [
                  "radial-gradient(circle at 0% 0%, rgba(var(--accent-rgb, 234, 179, 8), 0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 100% 100%, rgba(var(--primary-rgb, 139, 92, 246), 0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 0% 0%, rgba(var(--accent-rgb, 234, 179, 8), 0.1) 0%, transparent 50%)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="text-lg font-semibold text-foreground">
                  Stay Updated
                </h4>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✨
                </motion.span>
              </div>
              <p className="text-foreground/60 dark:text-foreground/65 text-sm mb-6">
                Get the latest updates on our services and industry insights.
              </p>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <motion.input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  whileFocus={{ scale: 1.02 }}
                  className="flex-1 px-4 py-3 bg-background dark:bg-background/80 border border-border dark:border-border rounded-xl text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, x: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-3 bg-gradient-to-r from-accent to-accent/90 text-accent-foreground rounded-xl hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 font-medium"
                >
                  {isSubmitted ? (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-xl"
                    >
                      ✓
                    </motion.span>
                  ) : (
                    <ArrowRight className="w-5 h-5" />
                  )}
                </motion.button>
              </form>
              {isSubmitted && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-3 text-sm text-accent font-medium"
                >
                  🎉 Thank you for subscribing!
                </motion.p>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Links Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-border/50 dark:border-border/40"
        >
          {Object.entries(footerLinks).map(
            ([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h5 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <motion.span
                    className="text-accent"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      delay: categoryIndex * 0.2,
                      repeat: Infinity,
                    }}
                  >
                    •
                  </motion.span>
                  {category}
                </h5>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: categoryIndex * 0.1 + linkIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                    >
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 4, color: "var(--accent)" }}
                        className="text-foreground/60 dark:text-foreground/65 hover:text-accent transition-all duration-300 text-sm font-medium inline-flex items-center gap-2 group"
                      >
                        <motion.span
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          initial={{ x: -5 }}
                          whileHover={{ x: 0 }}
                        >
                          →
                        </motion.span>
                        {link.name}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )
          )}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-foreground/60 dark:text-foreground/65"
        >
          <motion.p
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <span>&copy; {currentYear} BYTE. All rights reserved.</span>
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block"
            >
              <Heart className="w-4 h-4 text-accent fill-accent" />
            </motion.span>
            <span>Designed for Africa, built for scale.</span>
          </motion.p>
          <div className="flex gap-6">
            <motion.a
              href="/privacy"
              whileHover={{ y: -2, color: "var(--accent)" }}
              className="hover:text-accent transition-all duration-300 font-medium"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -2, color: "var(--accent)" }}
              className="hover:text-accent transition-all duration-300 font-medium"
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

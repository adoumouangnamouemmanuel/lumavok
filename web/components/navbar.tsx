"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavbarProps {
  isScrolled: boolean;
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const navItems = [
    { label: "Home", href: "#home", icon: "" },
    { label: "About", href: "#about", icon: "" },
    { label: "Services", href: "#services", icon: "" },
    { label: "Portfolio", href: "#portfolio", icon: "" },
    { label: "Testimonials", href: "#testimonials", icon: "" },
    { label: "Contact", href: "#contact", icon: "" },
  ];

  useEffect(() => {
    setMounted(true);
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.slice(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-primary/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Sparkle Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="#home"
              className="text-2xl font-bold bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent relative group"
            >
              <span className="relative">
                BYTE
                <motion.span
                  className="absolute -top-1 -right-1 text-accent"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  ✦
                </motion.span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation with Enhanced Animations */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, type: "spring" }}
                onClick={() => scrollToSection(item.href)}
                onMouseEnter={() => setIsHovered(item.label)}
                onMouseLeave={() => setIsHovered(null)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`cursor-pointer px-4 py-2 text-sm font-medium transition-all duration-300 relative group rounded-lg ${
                  activeSection === item.href.slice(1)
                    ? "text-accent"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <span className="text-base">{item.icon}</span>
                  {item.label}
                </span>

                {/* Animated Background */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: activeSection === item.href.slice(1) ? 1 : 0,
                    scale: activeSection === item.href.slice(1) ? 1 : 0.8,
                  }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                />

                {/* Active Indicator */}
                {activeSection === item.href.slice(1) && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Right Side - Theme Toggle & CTA */}
          <div className="flex items-center gap-3">
            {mounted && (
              <motion.button
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring" }}
                onClick={toggleTheme}
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                className="cursor-pointer p-2.5 rounded-xl bg-gradient-to-br from-muted/80 to-muted/50 hover:from-primary/20 hover:to-accent/20 text-foreground transition-all duration-300 shadow-md hover:shadow-lg border border-border/50 hover:border-accent/50"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {theme === "light" ? (
                    <motion.div
                      key="moon"
                      initial={{ rotate: -90, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      exit={{ rotate: 90, scale: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Moon className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sun"
                      initial={{ rotate: 90, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      exit={{ rotate: -90, scale: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sun className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            )}

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => scrollToSection("#contact")}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-accent via-accent to-accent/90 text-accent-foreground rounded-full font-semibold shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/50 transition-all duration-300 border border-accent/20"
            >
              <span>Work With Us</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>

            {/* Mobile Menu Button with Animation */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground rounded-lg hover:bg-muted transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <motion.div
                className="py-4 space-y-1 bg-gradient-to-b from-muted/50 to-transparent rounded-b-xl"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                    onClick={() => scrollToSection(item.href)}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeSection === item.href.slice(1)
                        ? "bg-gradient-to-r from-primary/20 to-accent/20 text-accent font-semibold"
                        : "text-foreground/70 hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.label}</span>
                    {activeSection === item.href.slice(1) && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto text-accent"
                      >
                        ✓
                      </motion.span>
                    )}
                  </motion.button>
                ))}

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => {
                    scrollToSection("#contact");
                    setMobileMenuOpen(false);
                  }}
                  className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-accent to-accent/90 text-accent-foreground rounded-lg font-semibold shadow-lg"
                >
                  Work With Us
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

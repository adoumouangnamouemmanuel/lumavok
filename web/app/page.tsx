"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Services from "@/components/sections/services"
import Portfolio from "@/components/sections/portfolio"
import Testimonials from "@/components/sections/testimonials"
import Stats from "@/components/sections/stats"
import Contact from "@/components/sections/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      {/* <Stats /> */}
      <Contact />
      <Footer />
    </main>
  )
}

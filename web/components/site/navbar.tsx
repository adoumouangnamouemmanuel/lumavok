'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { ModeToggle } from '@/components/site/mode-toggle'

const links = [
  { label: 'À propos', href: '/#a-propos' },
  { label: 'Services', href: '/#services' },
  { label: 'Projets', href: '/projets' },
  { label: 'Méthode', href: '/#processus' },
  { label: 'Tarifs', href: '/#tarifs' },
  { label: 'Équipe', href: '/#equipe' },
]

function Logo({ isScrolled }: { isScrolled: boolean }) {
  return (
    <Link href="/#accueil" className="flex items-center gap-3">
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M5 5 L17 17 L5 29"
          stroke="oklch(0.78 0.09 200)"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M29 5 L17 17 L29 29"
          stroke="oklch(0.7 0.1 320)"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className={`text-lg font-extrabold uppercase tracking-[0.18em] ${isScrolled ? 'text-foreground' : 'text-white'}`}>
        Lumavok
      </span>
    </Link>
  )
}



export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    
    setScrolled(latest > 40)

    if (latest > previous && latest > 140) {
      setHidden(true)
    } else if (latest < previous) {
      setHidden(false)
    }
  })

  useEffect(() => {
    let idleTimer: NodeJS.Timeout
    const unsubscribe = scrollY.on("change", () => {
      clearTimeout(idleTimer)
      idleTimer = setTimeout(() => {
        setHidden(false)
      }, 500)
    })

    return () => {
      unsubscribe()
      clearTimeout(idleTimer)
    }
  }, [scrollY])

  const isHidden = hidden && !open
  const isScrolled = scrolled || open

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isHidden ? "-100%" : "0%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed inset-x-0 top-0 z-[200] ${
        isScrolled
          ? 'border-b border-border/60 bg-background/80 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
        <Logo isScrolled={isScrolled} />

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-xs font-medium uppercase tracking-[0.14em] transition-colors ${
                  isScrolled
                    ? 'text-muted-foreground hover:text-foreground'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ModeToggle scrolled={isScrolled} />
          <Link
            href="/#contact"
            className={`hidden rounded-full border px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors sm:inline-block ${
              isScrolled
                ? 'border-border text-foreground hover:bg-foreground hover:text-background'
                : 'border-white/30 text-white hover:bg-white hover:text-black'
            }`}
          >
            Contact
          </Link>
          <button
            type="button"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`h-px w-6 transition-transform ${isScrolled ? 'bg-foreground' : 'bg-white'} ${open ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span
              className={`h-px w-6 transition-opacity ${isScrolled ? 'bg-foreground' : 'bg-white'} ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`h-px w-6 transition-transform ${isScrolled ? 'bg-foreground' : 'bg-white'} ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col px-5 py-4">
            {[...links, { label: 'Contact', href: '/#contact' }].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.header>
  )
}

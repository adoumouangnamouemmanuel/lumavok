'use client'

import { useEffect, useState } from 'react'

const links = [
  { label: 'À propos', href: '#a-propos' },
  { label: 'Services', href: '#services' },
  { label: 'Méthode', href: '#processus' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'Équipe', href: '#equipe' },
  { label: 'Témoignages', href: '#temoignages' },
]

function Logo() {
  return (
    <a href="#accueil" className="flex items-center gap-3">
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
      <span className="text-lg font-extrabold uppercase tracking-[0.18em] text-foreground">
        Lumavok
      </span>
    </a>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    let idleTimer: ReturnType<typeof setTimeout>

    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)

      // Hide when scrolling down past the hero; show when scrolling up.
      if (y > lastY && y > 140) {
        setHidden(true)
      } else if (y < lastY) {
        setHidden(false)
      }
      lastY = y

      // Reveal again once the user stops scrolling.
      clearTimeout(idleTimer)
      idleTimer = setTimeout(() => setHidden(false), 220)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(idleTimer)
    }
  }, [])

  // Keep the menu reachable: never stay hidden while the mobile menu is open.
  const isHidden = hidden && !open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[200] transition-[transform,background-color,backdrop-filter] duration-500 ease-out ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        scrolled
          ? 'border-b border-border/60 bg-background/80 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
        <Logo />

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-border px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:bg-foreground hover:text-background sm:inline-block"
          >
            Contact
          </a>
          <button
            type="button"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`h-px w-6 bg-foreground transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span
              className={`h-px w-6 bg-foreground transition-opacity ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`h-px w-6 bg-foreground transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col px-5 py-4">
            {[...links, { label: 'Contact', href: '#contact' }].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

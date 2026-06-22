'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Wordmark } from '@/components/wordmark'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Services', href: '/#services', id: 'services' },
  { label: 'Approach', href: '/#approach', id: 'approach' },
  { label: 'Process', href: '/#process', id: 'process' },
  { label: 'Pricing', href: '/#pricing', id: 'pricing' },
  { label: 'Team', href: '/team', id: 'team' },
  { label: 'Contact', href: '/#contact', id: 'contact' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = ['services', 'approach', 'process', 'pricing', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/70 shadow-sm backdrop-blur-2xl transition-all duration-500"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
          <Link
            href="/"
            className="flex items-center transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
            aria-label="Lumavok home"
          >
            <Wordmark lightText={false} />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const isActive = active === l.id
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    'nav-underline group relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300',
                    isActive
                      ? 'active text-google-blue'
                      : 'text-foreground/70 hover:text-foreground',
                  )}
                >
                  <span
                    className={cn(
                      'absolute inset-0 rounded-full bg-primary/6 transition-all duration-300',
                      isActive
                        ? 'scale-100 opacity-100'
                        : 'scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100',
                    )}
                  />
                  <span className="relative">{l.label}</span>
                </Link>
              )
            })}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/#contact"
              className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-google-blue px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:gap-2.5 hover:shadow-xl hover:shadow-google-blue/20"
            >
              <span className="absolute inset-0 -z-10 bg-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              Start a project
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              'relative z-50 flex size-11 items-center justify-center rounded-full border transition-all duration-300 md:hidden',
              open
                ? 'border-white/20 bg-white/10 text-white'
                : 'border-border bg-card text-foreground hover:bg-secondary',
            )}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-foreground/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col items-center gap-2">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-center text-2xl font-bold tracking-tight text-background transition-colors hover:text-google-blue"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + links.length * 0.06, duration: 0.4 }}
              >
                <Link
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-google-blue px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl"
                >
                  Start a project
                  <ArrowUpRight className="size-5" />
                </Link>
              </motion.div>
            </nav>

            <div className="absolute bottom-12 flex items-center gap-3">
              <span className="size-2.5 rounded-full bg-google-blue" />
              <span className="size-2.5 rounded-full bg-google-red" />
              <span className="size-2.5 rounded-full bg-google-yellow" />
              <span className="size-2.5 rounded-full bg-google-green" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

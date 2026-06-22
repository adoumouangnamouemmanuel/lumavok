'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowUp, ArrowUpRight, Linkedin, Instagram } from 'lucide-react'
import { Wordmark } from '@/components/wordmark'

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const serviceLinks = [
  'Software Development',
  'AI & Machine Learning',
  'UI / UX Design',
  'Portfolio Development',
  'Consulting & Advisory',
  'SaaS Products',
]

const companyLinks = [
  { label: 'Approach', href: '/#approach' },
  { label: 'Process', href: '/#process' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/#contact' },
]

const socialLinks = [
  { label: 'LinkedIn', href: '#', icon: Linkedin },
  { label: 'X (Twitter)', href: '#', icon: XIcon },
  { label: 'Instagram', href: '#', icon: Instagram },
]

export function SiteFooter() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <footer className="relative border-t border-border bg-foreground text-background">
        {/* Top border */}
        <div className="absolute inset-x-0 top-0 h-px bg-google-blue" />

        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-12">
            {/* Brand + newsletter */}
            <div className="col-span-2 md:col-span-4">
              <Wordmark lightText={true} />
              <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-background/60">
                Building innovative, affordable digital solutions for a continent
                on the rise.
              </p>

              {/* Newsletter */}
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-background/40">
                  Stay in the loop
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="mt-3 flex gap-2"
                >
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 rounded-full border border-background/15 bg-background/5 px-4 py-2.5 text-sm text-background placeholder:text-background/35 transition-all focus:border-google-blue focus:outline-none"
                    aria-label="Newsletter email"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 rounded-full bg-google-blue px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-google-blue/90 hover:shadow-lg"
                  >
                    Subscribe
                    <ArrowUpRight className="size-3.5" />
                  </button>
                </form>
              </div>
            </div>

            {/* Services */}
            <div className="md:col-span-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-background/40">
                Services
              </h3>
              <ul className="mt-4 space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="/#services"
                      className="text-sm text-background/65 transition-colors hover:text-google-blue"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="md:col-span-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-background/40">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/65 transition-colors hover:text-google-blue"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="col-span-2 md:col-span-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-background/40">
                Connect
              </h3>
              <div className="mt-4 flex items-center gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex size-10 items-center justify-center rounded-full border border-background/15 text-background/60 transition-all hover:border-google-blue hover:text-google-blue hover:shadow-lg"
                  >
                    <s.icon className="size-4" />
                  </a>
                ))}
              </div>
              <div className="mt-6">
                <p className="text-sm text-background/60">
                  📍 Accra, Ghana; West Africa
                </p>
                <a
                  href="mailto:contact@lumavok.com"
                  className="mt-1 block text-sm text-background/60 transition-colors hover:text-google-blue"
                >
                  contact@lumavok.com
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-background/10 pt-8 text-sm text-background/40 md:flex-row md:items-center">
            <p>© {new Date().getFullYear()} Lumavok. All rights reserved.</p>
            <p className="font-semibold italic text-background/60">
              Local Solutions. Global Standards.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 ${
          showBackToTop
            ? 'translate-y-0 opacity-100'
            : 'translate-y-4 pointer-events-none opacity-0'
        }`}
      >
        <ArrowUp className="size-5" />
      </button>
    </>
  )
}

'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUp, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { useRef, useState } from 'react'
import {
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from './social-icons'

const cols = [
  {
    title: 'Studio',
    links: [
      { label: 'À propos', href: '#a-propos' },
      { label: 'Notre méthode', href: '#processus' },
      { label: 'Nos valeurs', href: '#valeurs' },
      { label: 'L’équipe', href: '#equipe' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Développement', href: '#services' },
      { label: 'IA & Machine Learning', href: '#services' },
      { label: 'UI / UX Design', href: '#services' },
      { label: 'Tarifs', href: '#tarifs' },
    ],
  },
]

const socials = [
  { label: 'LinkedIn', Icon: LinkedInIcon, href: '#' },
  { label: 'Instagram', Icon: InstagramIcon, href: '#' },
  { label: 'X (Twitter)', Icon: XIcon, href: '#' },
  { label: 'YouTube', Icon: YouTubeIcon, href: '#' },
]

export function Footer() {
  const ref = useRef<HTMLElement>(null)
  const [subscribed, setSubscribed] = useState(false)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  })
  const wordY = useTransform(scrollYProgress, [0, 1], ['18%', '0%'])

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden border-t border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-6 pt-20">
        {/* Top: tagline + newsletter */}
        <div className="flex flex-col justify-between gap-10 border-b border-border pb-14 md:flex-row md:items-end">
          <div className="max-w-md">
            <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
              Construisons quelque chose qui compte.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Recevez nos idées sur la technologie, le design et l’innovation en
              Afrique — une fois par mois, sans bruit.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setSubscribed(true)
            }}
            className="flex w-full max-w-sm items-center gap-2 rounded-full border border-border bg-card/60 p-1.5 pl-5 backdrop-blur-sm"
          >
            <input
              required
              type="email"
              placeholder="Votre email"
              className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              {subscribed ? 'Merci !' : 'S’abonner'}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>

        {/* Middle: brand + nav columns + socials */}
        <div className="grid gap-12 py-14 md:grid-cols-[1.6fr_repeat(2,1fr)_1.2fr]">
          <div>
            <Link
              href="#accueil"
              className="flex items-center gap-2 text-2xl font-extrabold uppercase tracking-tight"
            >
              <span
                className="inline-block h-3 w-3 rounded-full bg-accent"
                aria-hidden="true"
              />
              Lumavok
            </Link>
            <p className="mt-5 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              Studio technologique africain mené par la jeunesse. Sites web,
              apps, systèmes IA et produits numériques — abordables, adaptables
              et façonnés avec soin.
            </p>
            <a
              href="mailto:hello@lumavok.com"
              className="mt-6 inline-block border-b border-foreground/30 pb-1 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              hello@lumavok.com
            </a>
          </div>
          {cols.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {c.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="group inline-flex items-center gap-1 text-sm text-foreground/70 transition-colors hover:text-foreground"
                    >
                      <span className="transition-transform group-hover:translate-x-1">
                        {l.label}
                      </span>
                      <ArrowUpRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          {/* Socials as icons */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Suivez-nous
            </h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {socials.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/50 text-foreground/70 transition-all hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-border py-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>{`© ${new Date().getFullYear()} Lumavok. Tous droits réservés.`}</p>
          <p className="font-mono uppercase tracking-wider">
            Local solutions, built to global standards.
          </p>
          <a
            href="#accueil"
            className="group inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Haut de page
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Oversized wordmark — visible, hugging the bottom edge */}
      <motion.div
        style={{ y: wordY }}
        className="pointer-events-none -mb-[2vw] select-none px-4"
        aria-hidden="true"
      >
        <h2 className="heading-tight bg-gradient-to-b from-foreground/30 via-foreground/10 to-transparent bg-clip-text text-center text-[22vw] uppercase leading-[0.78] text-transparent">
          Lumavok
        </h2>
      </motion.div>
    </footer>
  )
}

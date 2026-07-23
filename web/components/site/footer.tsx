'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import {
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from './social-icons'

// cols moved inside component
const socials = [
  { label: 'LinkedIn', Icon: LinkedInIcon, href: '#' },
  { label: 'Instagram', Icon: InstagramIcon, href: '#' },
  { label: 'X (Twitter)', Icon: XIcon, href: '#' },
  { label: 'YouTube', Icon: YouTubeIcon, href: '#' },
]

export function Footer() {
  const t = useTranslations('Footer')
  const tNav = useTranslations('Navbar')
  const tValues = useTranslations('Values')
  const tServices = useTranslations('Services')
  const ref = useRef<HTMLElement>(null)
  const [subscribed, setSubscribed] = useState(false)
  
  const cols = [
    {
      title: t('col_studio'),
      links: [
        { label: tNav('about'), href: '/#a-propos' },
        { label: tNav('method'), href: '/#processus' },
        { label: tValues('title_2'), href: '/#valeurs' },
        { label: tNav('team'), href: '/#equipe' },
      ],
    },
    {
      title: t('col_services'),
      links: [
        { label: tServices('s1_title'), href: '/#services' },
        { label: tServices('s2_title'), href: '/#services' },
        { label: tServices('s3_title'), href: '/#services' },
        { label: tNav('pricing'), href: '/#tarifs' },
      ],
    },
  ]
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
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl"
            >
              {t('tagline')}
            </motion.h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t('newsletter_desc')}
            </p>
          </div>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={(e) => {
              e.preventDefault()
              setSubscribed(true)
            }}
            className="flex w-full max-w-sm items-center gap-2 rounded-full border border-border bg-card/60 p-1.5 pl-5 backdrop-blur-sm"
          >
            <input
              required
              type="email"
              placeholder={t('newsletter_placeholder')}
              className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              {subscribed ? t('newsletter_success') : t('newsletter_btn')}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </motion.form>
        </div>

        {/* Middle: brand + nav columns + socials */}
        <div className="grid gap-12 py-14 md:grid-cols-[1.6fr_repeat(2,1fr)_1.2fr]">
          <div>
            <Link
              href="/#accueil"
              className="flex items-center gap-2 text-2xl font-extrabold uppercase tracking-tight"
            >
              <span
                className="inline-block h-3 w-3 rounded-full bg-primary"
                aria-hidden="true"
              />
              Lumavok
            </Link>
            <p className="mt-5 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              {t('bio')}
            </p>
            <a
              href="mailto:hello@lumavok.com"
              className="mt-6 inline-block border-b border-foreground/30 pb-1 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              hello@lumavok.com
            </a>
          </div>
          {cols.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
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
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {t('col_socials')}
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
          <p>{`© ${new Date().getFullYear()} Lumavok. ${t('rights')}`}</p>
          <p className="font-mono uppercase tracking-wider">
            {t('slogan')}
          </p>
        </div>
      </div>

      {/* Oversized wordmark — visible, hugging the bottom edge */}
      <motion.div
        style={{ y: wordY }}
        className="pointer-events-none -mb-[1.5vw] flex w-full select-none justify-center overflow-hidden"
        aria-hidden="true"
      >
        <h2 className="whitespace-nowrap bg-gradient-to-b from-foreground/30 via-foreground/10 to-transparent bg-clip-text text-center text-[17vw] font-extrabold uppercase leading-[0.8] tracking-[-0.03em] text-transparent">
          Lumavok
        </h2>
      </motion.div>
    </footer>
  )
}

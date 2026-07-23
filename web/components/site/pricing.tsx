'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Sparkles } from 'lucide-react'
import { useTranslations } from 'next-intl'

type Plan = {
  name: string
  desc: string
  from: string
  to: string
  features: string[]
  featured?: boolean
}

// plans and addons are moved inside the component.
// addons moved inside component

const ease = [0.22, 1, 0.36, 1] as const

export function Pricing() {
  const t = useTranslations('Pricing')

  const plans: Plan[] = [
    {
      name: t('plans.starter.name'),
      desc: t('plans.starter.desc'),
      from: t('plans.starter.from'),
      to: t('plans.starter.to'),
      features: t.raw('plans.starter.features') as string[],
    },
    {
      name: t('plans.business.name'),
      desc: t('plans.business.desc'),
      from: t('plans.business.from'),
      to: t('plans.business.to'),
      featured: true,
      features: t.raw('plans.business.features') as string[],
    },
    {
      name: t('plans.ecommerce.name'),
      desc: t('plans.ecommerce.desc'),
      from: t('plans.ecommerce.from'),
      to: t('plans.ecommerce.to'),
      features: t.raw('plans.ecommerce.features') as string[],
    },
    {
      name: t('plans.custom.name'),
      desc: t('plans.custom.desc'),
      from: t('plans.custom.from'),
      to: t('plans.custom.to'),
      features: t.raw('plans.custom.features') as string[],
    },
  ]

  const addons = t.raw('addons') as string[]
  const notes = t.raw('notes') as string[]

  return (
    <section id="tarifs" className="relative bg-background py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground"
            >
              {t('subtitle')}
            </motion.p>
            <h2 className="heading-tight max-w-3xl text-balance text-4xl uppercase sm:text-5xl md:text-7xl">
              {t('title1')}
              <span className="font-serif text-3xl font-light italic tracking-normal text-muted-foreground sm:text-4xl md:text-6xl">
                {t('title2')}
              </span>
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground"
          >
            {t('desc')}
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
              whileHover={{ y: -10 }}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border p-6 backdrop-blur-sm transition-colors ${
                p.featured
                  ? 'border-accent/60 bg-accent/[0.06]'
                  : 'border-border bg-card/50 hover:border-accent/40'
              }`}
            >
              {/* Featured glow */}
              {p.featured && (
                <>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/25 blur-3xl"
                  />
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-primary-foreground">
                    {/* <Sparkles className="h-3 w-3" /> */}
                    {t('popular')}
                  </span>
                </>
              )}
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                {p.name}
              </h3>
              <p className="mt-3 min-h-[72px] text-pretty text-xs leading-relaxed text-muted-foreground">
                {p.desc}
              </p>

              <div className="mt-5 border-t border-border pt-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {t('from')}
                </span>
                <div className="mt-1 flex items-baseline gap-1.5">
                  <span className="text-4xl font-extrabold tracking-tight text-foreground">
                    {p.from}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">{p.to}</span>
              </div>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-foreground/80"
                  >
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        p.featured ? 'bg-accent/20' : 'bg-secondary'
                      }`}
                    >
                      <Check className="h-3 w-3 text-primary" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-wider transition-all group-hover:gap-2.5 ${
                  p.featured
                    ? 'bg-primary text-primary-foreground hover:brightness-110'
                    : 'bg-secondary text-foreground hover:bg-foreground hover:text-background'
                }`}
              >
                {t('cta')}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </motion.article>
          ))}
        </div>

        {/* Add-ons + notes */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mt-12 flex flex-col items-start gap-6 rounded-2xl border border-border bg-card/40 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {t('addons_title')}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {addons.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs text-foreground/80 transition-colors hover:border-accent/50 hover:text-foreground"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
          <div className="flex shrink-0 flex-col gap-2 text-xs text-muted-foreground">
            {notes.map((note) => (
              <span key={note} className="inline-flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-primary" />
                {note}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

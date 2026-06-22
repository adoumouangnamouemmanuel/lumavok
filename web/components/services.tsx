'use client'

import { useState } from 'react'
import {
  Code2,
  BrainCircuit,
  PenTool,
  UserRound,
  Lightbulb,
  Boxes,
  ArrowUpRight,
  Check,
  type LucideIcon,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'

type Service = {
  icon: LucideIcon
  title: string
  tagline: string
  desc: string
  deliverables: string[]
  gradient: string
  iconBg: string
  text: string
  softBg: string
  glowColor: string
}

const services: Service[] = [
  {
    icon: Code2,
    title: 'Software Development',
    tagline: 'Web · Mobile · Systems',
    desc: 'Websites, web & mobile apps, e-commerce, and business systems — secure, scalable, and built to last.',
    deliverables: ['Web & mobile apps', 'E-commerce platforms', 'Custom business systems', 'API & integrations'],
    gradient: 'from-google-blue to-[oklch(0.60_0.20_280)]',
    iconBg: 'bg-google-blue',
    text: 'text-google-blue',
    softBg: 'bg-google-blue/10',
    glowColor: 'shadow-google-blue/30',
  },
  {
    icon: BrainCircuit,
    title: 'AI & Machine Learning',
    tagline: 'Intelligent automation',
    desc: 'We design and deploy AI and ML solutions — from chatbots and recommendation engines to predictive models tailored for African markets.',
    deliverables: ['AI chatbots & assistants', 'Predictive & ML models', 'Computer vision & NLP', 'Data pipelines & MLOps'],
    gradient: 'from-google-green to-[oklch(0.55_0.18_180)]',
    iconBg: 'bg-google-green',
    text: 'text-google-green',
    softBg: 'bg-google-green/10',
    glowColor: 'shadow-google-green/30',
  },
  {
    icon: PenTool,
    title: 'UI / UX Design',
    tagline: 'Human-centered design',
    desc: 'Research, wireframing, prototyping, and design systems crafted in Figma that make products intuitive and delightful.',
    deliverables: ['User research', 'Wireframes & prototypes', 'Design systems', 'Usability testing'],
    gradient: 'from-google-red to-[oklch(0.62_0.22_10)]',
    iconBg: 'bg-google-red',
    text: 'text-google-red',
    softBg: 'bg-google-red/10',
    glowColor: 'shadow-google-red/30',
  },
  {
    icon: UserRound,
    title: 'Portfolio Development',
    tagline: 'Stand out online',
    desc: 'Standout digital portfolios and CV websites for students, graduates, and professionals ready to be seen.',
    deliverables: ['Personal portfolios', 'CV & résumé sites', 'Personal branding', 'Domain & hosting setup'],
    gradient: 'from-google-yellow to-[oklch(0.78_0.14_60)]',
    iconBg: 'bg-google-yellow',
    text: 'text-google-yellow',
    softBg: 'bg-google-yellow/15',
    glowColor: 'shadow-google-yellow/30',
  },
  {
    icon: Lightbulb,
    title: 'Consulting & Advisory',
    tagline: 'Strategy that scales',
    desc: 'Technology strategy, IT modernization, and data-driven market feasibility analysis to guide confident decisions.',
    deliverables: ['Tech strategy', 'IT modernization', 'Feasibility analysis', 'Digital transformation'],
    gradient: 'from-[oklch(0.55_0.18_300)] to-google-blue',
    iconBg: 'bg-google-blue',
    text: 'text-google-blue',
    softBg: 'bg-google-blue/10',
    glowColor: 'shadow-google-blue/30',
  },
  {
    icon: Boxes,
    title: 'SaaS Products',
    tagline: 'Built for scale',
    desc: 'Proprietary tools built for scale — distributed via freemium, subscription, and partnership models.',
    deliverables: ['Product engineering', 'Subscription billing', 'Multi-tenant systems', 'Analytics & dashboards'],
    gradient: 'from-google-green to-[oklch(0.65_0.16_130)]',
    iconBg: 'bg-google-green',
    text: 'text-google-green',
    softBg: 'bg-google-green/10',
    glowColor: 'shadow-google-green/30',
  },
]

export function Services() {
  const [active, setActive] = useState(0)
  const current = services[active]

  return (
    <section id="services" className="relative scroll-mt-24 py-24 md:py-32 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 top-0 size-96 rounded-full bg-google-blue/[0.03] blur-3xl" />
        <div className="absolute -left-40 bottom-0 size-96 rounded-full bg-google-green/[0.03] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-8">
          <SectionHeader
            badgeText="What we do"
            title={
              <>
                Six pillars, one partner{' '}
                <span className="text-google-blue">from idea to launch</span>.
              </>
            }
            watermarkText="SERVICES"
          />
          <Reveal delay={100}>
            <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground md:mb-16">
              We eliminate the false choice between cheap-but-poor and
              excellent-but-unaffordable. Everything we ship is end-to-end.
            </p>
          </Reveal>
        </div>

        {/* Interactive showcase (desktop) */}
        <Reveal delay={120} className="mt-14 hidden gap-5 lg:grid lg:grid-cols-12">
          {/* Left: service tabs */}
          <div className="lg:col-span-5">
            <ul className="flex flex-col gap-2">
              {services.map((s, i) => {
                const isActive = i === active
                return (
                  <li key={s.title}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      aria-pressed={isActive}
                      className={cn(
                        'group flex w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-400',
                        isActive
                          ? `border-transparent bg-card shadow-xl ${s.glowColor}`
                          : 'border-border/50 bg-transparent hover:border-border hover:bg-card/50',
                      )}
                    >
                      <span
                        className={cn(
                          'flex size-12 shrink-0 items-center justify-center rounded-xl transition-all duration-400',
                          isActive
                            ? `${s.iconBg} text-white shadow-lg ${s.glowColor}`
                            : `${s.softBg} ${s.text}`,
                        )}
                      >
                        <s.icon className="size-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center justify-between gap-2">
                          <span className={cn(
                            'truncate text-lg font-bold tracking-tight transition-colors',
                            isActive ? 'text-foreground' : 'text-foreground/80',
                          )}>
                            {s.title}
                          </span>
                          <span
                            className={cn(
                              'font-mono text-xs tabular-nums transition-colors',
                              isActive ? s.text : 'text-muted-foreground/50',
                            )}
                          >
                            0{i + 1}
                          </span>
                        </span>
                        <span className="block truncate text-sm text-muted-foreground">
                          {s.tagline}
                        </span>
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Right: detail panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-xl md:p-10"
              >
                {/* Background gradient decoration */}
                <div className={cn(
                  'pointer-events-none absolute -right-20 -top-20 size-64 rounded-full opacity-10 blur-3xl',
                  current.iconBg,
                )} />

                <div className="relative flex items-start justify-between">
                  <span
                    className={cn(
                      'flex size-16 items-center justify-center rounded-2xl text-white shadow-lg',
                      current.iconBg,
                      current.glowColor,
                    )}
                  >
                    <current.icon className="size-7" />
                  </span>
                  <span className={cn('rounded-full px-3 py-1 text-xs font-semibold', current.softBg, current.text)}>
                    {current.tagline}
                  </span>
                </div>
                <h3 className="relative mt-7 text-3xl font-extrabold tracking-tight">
                  {current.title}
                </h3>
                <p className="relative mt-3 max-w-lg text-pretty leading-relaxed text-muted-foreground">
                  {current.desc}
                </p>

                <ul className="relative mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {current.deliverables.map((d, di) => (
                    <motion.li
                      key={d}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: di * 0.08, duration: 0.3 }}
                      className="flex items-center gap-3 rounded-xl bg-secondary px-4 py-3 text-sm font-medium"
                    >
                      <span
                        className={cn(
                          'flex size-5 shrink-0 items-center justify-center rounded-full text-white',
                          current.iconBg,
                        )}
                      >
                        <Check className="size-3" />
                      </span>
                      {d}
                    </motion.li>
                  ))}
                </ul>

                <a
                  href="/#contact"
                  className="group relative mt-auto inline-flex w-fit items-center gap-2 pt-8 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                >
                  Discuss this service
                  <span
                    className={cn(
                      'flex size-8 items-center justify-center rounded-full text-white transition-all group-hover:translate-x-0.5 group-hover:shadow-lg',
                      current.iconBg,
                      current.glowColor,
                    )}
                  >
                    <ArrowUpRight className="size-4" />
                  </span>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

        {/* Mobile: stacked cards with tilt */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 60}
              className={cn(
                'card-tilt group flex flex-col rounded-2xl border border-border bg-card p-6',
              )}
            >
              <div className="flex items-center justify-between">
                <span className={cn(
                  'flex size-12 items-center justify-center rounded-xl text-white shadow-md',
                  s.iconBg,
                  s.glowColor,
                )}>
                  <s.icon className="size-5" />
                </span>
                <span className="font-mono text-xs text-muted-foreground/60">0{i + 1}</span>
              </div>
              <h3 className="mt-5 text-xl font-bold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <a
                href="/#contact"
                className={cn(
                  'mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold transition-colors',
                  s.text,
                )}
              >
                Learn more
                <ArrowUpRight className="size-3.5" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

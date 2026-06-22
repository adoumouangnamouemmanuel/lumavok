'use client'

import { ArrowUpRight, Sparkles, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Reveal } from '@/components/reveal'

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 1800
    const step = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isInView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {display}{suffix}
    </span>
  )
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Full-bleed hero background image */}
      <div className="relative min-h-[100vh] flex flex-col justify-center">
        {/* Background image */}
        <Image
          src="/images/hero-bg.png"
          alt="Modern African tech workspace at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 pt-32 pb-20 md:px-8 md:pt-40 md:pb-28">

          <Reveal delay={80}>
            <motion.h1
              id="hero-heading"
              className="mx-auto mt-8 max-w-5xl text-balance text-center text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.25rem]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Local solutions, built to{' '}
              <span className="relative inline-block whitespace-nowrap">
                <span className="text-google-yellow">global standards</span>
                <Underline />
              </span>
              .
            </motion.h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-7 max-w-2xl text-center text-pretty text-lg leading-relaxed text-white/80">
              Lumavok is a youth-led African technology studio. We design and build
              websites, apps, AI systems, and digital products that connect people,
              ideas, and opportunity; affordable, adaptable, and crafted with care.
            </p>
          </Reveal>

          <Reveal
            delay={240}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              href="/#contact"
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-semibold text-foreground shadow-xl transition-all duration-300 hover:shadow-2xl sm:w-auto"
            >
              Start a free consultation
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/#services"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/20 sm:w-auto"
            >
              Explore our services
            </Link>
          </Reveal>

          {/* Floating rating card */}
          <Reveal delay={300} className="mt-12 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-md animate-float">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="size-4 fill-google-yellow text-google-yellow"
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-white">Loved by clients across Africa</span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Quick stats strip below hero */}
      <dl className="relative z-10 mx-auto -mt-12 max-w-6xl px-5 md:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-2xl md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="group/stat bg-card px-5 py-7 text-center transition-colors hover:bg-secondary">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-2xl font-extrabold tracking-tight text-google-blue md:text-3xl">
                  {s.animated ? (
                    <AnimatedCounter value={s.num} suffix={s.suffix} />
                  ) : (
                    s.value
                  )}
                </span>
                <span className="mt-1 block text-xs font-medium text-muted-foreground md:text-sm">
                  {s.label}
                </span>
              </dd>
            </div>
          ))}
        </div>
      </dl>
    </section>
  )
}

const stats = [
  { value: '6+', label: 'Core service lines', animated: true, num: 6, suffix: '+' },
  { value: '100%', label: 'Youth-led & African', animated: true, num: 100, suffix: '%' },
  { value: 'Global', label: 'Engineering standards', animated: false, num: 0, suffix: '' },
  { value: '24h', label: 'Avg. response time', animated: true, num: 24, suffix: 'h' },
]

function Underline() {
  return (
    <svg
      className="absolute -bottom-1 left-0 h-3 w-full text-google-yellow"
      viewBox="0 0 300 12"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M2 9C75 4 150 3 298 7"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  )
}

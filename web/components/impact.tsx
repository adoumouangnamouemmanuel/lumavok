'use client'

import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'
import { Reveal } from '@/components/reveal'
import { SectionHeader } from '@/components/section-header'

function AnimatedCounter({ value, suffix = '' }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!isInView) return
    const num = parseFloat(value)
    if (isNaN(num)) {
      setDisplay(value)
      return
    }
    let start = 0
    const duration = 1800
    const step = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = eased * num
      setDisplay(num >= 10 ? Math.round(current).toString() : current.toFixed(1))
      if (progress < 1) requestAnimationFrame(step)
      else setDisplay(value)
    }
    requestAnimationFrame(step)
  }, [isInView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {display}{suffix}
    </span>
  )
}

const stats = [
  { value: '1.4', suffix: 'B', label: 'Africans — the largest digitally ambitious market on earth' },
  { value: '60', suffix: '%', label: 'Under the age of 25, hungry for digital inclusion' },
  { value: '45', suffix: '', label: 'Dollar entry point that serves even micro-entrepreneurs', prefix: '$' },
  { value: '6', suffix: '', label: 'Core service pillars under one trusted partner' },
]

export function Impact() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative order-last aspect-[5/4] overflow-hidden rounded-2xl border border-border lg:order-first">
            <Image
              src="/images/impact.png"
              alt="A thriving West African business district at golden hour"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Dark overlay at bottom for readability */}
            <div className="absolute inset-0 bg-black/40 md:bg-transparent md:bg-black/10" />
          </Reveal>

          <div>
            <SectionHeader
              badgeText="Our impact"
              title={
                <>
                  Every solution is a node in a{' '}
                  <span className="text-google-blue">digital future</span>.
                </>
              }
              description="Economic, social, and technological — we don't just build products, we build people. As we grow, we train and employ young African technologists, compounding local capacity over time."
              watermarkText="IMPACT"
            />

            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
              {stats.map((s, i) => (
                <Reveal key={s.value} delay={i * 70} className="group bg-card p-6 transition-colors hover:bg-secondary">
                  <p className="text-4xl font-extrabold tracking-tight text-google-blue md:text-5xl">
                    {'prefix' in s && s.prefix}
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

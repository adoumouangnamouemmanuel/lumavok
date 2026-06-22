'use client'

import { useState, useEffect, useCallback } from 'react'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'

const testimonials = [
  {
    quote:
      'Lumavok rebuilt our booking platform from the ground up. It is fast, reliable, and our customers finally trust it. Global quality at a price that made sense for us.',
    name: 'Amara Okonkwo',
    role: 'Founder, TravelBox',
    initials: 'AO',
    color: 'bg-google-blue',
    glow: 'shadow-google-blue/40',
  },
  {
    quote:
      'Their AI assistant cut our support response time in half. The team understood our market and shipped something that genuinely works for our customers.',
    name: 'Kwame Mensah',
    role: 'CEO, PayLink',
    initials: 'KM',
    color: 'bg-google-green',
    glow: 'shadow-google-green/40',
  },
  {
    quote:
      'The design work was world-class. Clean, intuitive, and exactly what our users needed. Working with a youth-led African team that delivers at this level is refreshing.',
    name: 'Fatima Diallo',
    role: 'Product Lead, EduReach',
    initials: 'FD',
    color: 'bg-google-red',
    glow: 'shadow-google-red/40',
  },
  {
    quote:
      'From strategy to launch, they were true partners. Honest advice, no jargon, and a portfolio site that landed me three job offers.',
    name: 'Tunde Adebayo',
    role: 'Software Engineer',
    initials: 'TA',
    color: 'bg-google-yellow',
    glow: 'shadow-google-yellow/40',
  },
]

const AUTO_ADVANCE_MS = 6000

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [paused, setPaused] = useState(false)
  const active = testimonials[index]

  const go = useCallback((dir: number) => {
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length)
    setProgress(0)
  }, [])

  // Auto-advance with progress
  useEffect(() => {
    if (paused) return
    const interval = 50
    const timer = setInterval(() => {
      setProgress((p) => {
        const next = p + (interval / AUTO_ADVANCE_MS) * 100
        if (next >= 100) {
          go(1)
          return 0
        }
        return next
      })
    }, interval)
    return () => clearInterval(timer)
  }, [paused, go])

  return (
    <section
      className="scroll-mt-24 bg-secondary py-24 md:py-32"
      aria-label="Testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeader
          align="center"
          badgeText="Client stories"
          title={
            <>
              Loved by ambitious founders{' '}
              <span className="text-google-yellow">and teams</span>.
            </>
          }
          watermarkText="REVIEWS"
        />

        <Reveal delay={120} className="mt-12">
          {/* Progress bar */}
          <div className="mb-6 flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => { setIndex(i); setProgress(0) }}
                aria-label={`Go to testimonial ${i + 1}`}
                className="relative h-1 flex-1 overflow-hidden rounded-full bg-border"
              >
                <span
                  className={cn(
                    'absolute inset-y-0 left-0 rounded-full bg-google-blue transition-all',
                    i < index ? 'w-full' : i > index ? 'w-0' : '',
                  )}
                  style={i === index ? { width: `${progress}%`, transition: 'width 50ms linear' } : undefined}
                />
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl border border-border bg-card p-8 shadow-xl shadow-foreground/5 md:p-12"
            >
              <Quote className="size-12 text-google-blue/15" aria-hidden="true" />
              <div className="mt-4 flex" aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="size-4 fill-google-yellow text-google-yellow" />
                ))}
              </div>
              <blockquote className="mt-5 text-balance text-xl font-medium leading-relaxed tracking-tight md:text-2xl">
                &ldquo;{active.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span
                  className={cn(
                    'flex size-14 items-center justify-center rounded-full text-sm font-bold text-white shadow-lg',
                    active.color,
                    active.glow,
                  )}
                >
                  {active.initials}
                </span>
                <span>
                  <span className="block text-lg font-bold tracking-tight">{active.name}</span>
                  <span className="block text-sm text-muted-foreground">{active.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </Reveal>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="flex size-12 items-center justify-center rounded-full border border-border bg-card transition-all hover:bg-secondary hover:shadow-md"
          >
            <ChevronLeft className="size-5" />
          </button>
          <span className="font-mono text-sm text-muted-foreground">
            {String(index + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
          </span>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="flex size-12 items-center justify-center rounded-full border border-border bg-card transition-all hover:bg-secondary hover:shadow-md"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

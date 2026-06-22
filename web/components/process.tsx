'use client'

import {
  MessageCircle,
  FileText,
  Palette,
  Code2,
  Bug,
  Rocket,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'

type Step = {
  icon: LucideIcon
  title: string
  tag?: string
  desc: string
  color: string
}

const steps: Step[] = [
  {
    icon: MessageCircle,
    title: 'Initial consultation',
    tag: 'Free',
    desc: 'We listen carefully to your goals, challenges, and vision before any cost is discussed.',
    color: 'text-google-blue bg-google-blue/10',
  },
  {
    icon: FileText,
    title: 'Requirements & proposal',
    desc: 'A tailored proposal outlining features, timelines, technologies, and transparent pricing.',
    color: 'text-google-red bg-google-red/10',
  },
  {
    icon: Palette,
    title: 'Design phase',
    desc: 'Wireframes and interactive prototypes refined together until layouts and journeys feel right.',
    color: 'text-google-yellow bg-google-yellow/15',
  },
  {
    icon: Code2,
    title: 'Development',
    desc: 'Modern coding standards, clear documentation, and regular progress check-ins.',
    color: 'text-google-green bg-google-green/10',
  },
  {
    icon: Bug,
    title: 'Testing & review',
    desc: 'Multiple rounds of functional and usability testing, with early access for your feedback.',
    color: 'text-google-blue bg-google-blue/10',
  },
  {
    icon: Rocket,
    title: 'Launch & training',
    desc: 'We deploy to production and train your team to manage everything with confidence.',
    color: 'text-google-green bg-google-green/10',
  },
]

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          badgeText="How we work"
          title={
            <>
              Our process is simple: we reduce risk and increase{' '}
              <span className="text-google-blue">clarity</span>.
            </>
          }
          description="From the first call to the final launch and optional ongoing maintenance; every stage keeps timelines realistic and expectations aligned."
          watermarkText="PROCESS"
        />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 60}
              className="card-tilt group flex flex-col gap-4 rounded-2xl border border-border bg-card p-7 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className={cn(
                  'flex size-11 items-center justify-center rounded-xl transition-all duration-300',
                  s.color,
                )}>
                  <s.icon className="size-5" />
                </span>
                <div className="flex items-center gap-2">
                  {s.tag && (
                    <span className="rounded-full bg-google-green/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-google-green">
                      {s.tag}
                    </span>
                  )}
                  <span className="font-mono text-2xl font-bold text-muted-foreground/20">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

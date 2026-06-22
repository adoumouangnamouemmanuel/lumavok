'use client'

import Image from 'next/image'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const points = [
  {
    title: 'Contextual by design',
    desc: 'We design from the inside out; factoring in local payment systems, infrastructure, languages, and business behaviors.',
    color: 'text-google-blue',
  },
  {
    title: 'Affordable, tiered pricing',
    desc: 'Professional technology that democratizes access. A starter website begins at just $45.',
    color: 'text-google-green',
  },
  {
    title: 'End-to-end ecosystem',
    desc: 'One partner from ideation to deployment to marketing; less cost, less friction, fewer failures.',
    color: 'text-google-yellow',
  },
  {
    title: 'Youth-led, Africa-first',
    desc: 'Built by young Africans who understand the continent from the inside an advantage no outside provider can replicate.',
    color: 'text-google-red',
  },
]

export function Approach() {
  return (
    <section id="approach" className="scroll-mt-24 bg-primary py-24 text-primary-foreground md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader
              badgeText="Why Lumavok"
              title={
                <>
                  Innovation rooted in approach{' '}
                  <span className="text-google-yellow">and model</span>.
                </>
              }
              badgeColorClass="text-google-yellow bg-google-yellow/5 border-google-yellow/10"
              watermarkText="APPROACH"
            />
            <Reveal delay={120} className="relative mt-10 aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/craft.png"
                alt="A Lumavok designer sketching interface wireframes"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20" />
            </Reveal>
          </div>

          <ul className="flex flex-col">
            {points.map((p, i) => (
              <Reveal
                as="li"
                key={p.title}
                delay={i * 80}
                className="group flex gap-6 border-b border-primary-foreground/15 py-7 first:pt-0 last:border-b-0 transition-all duration-300 hover:pl-2"
              >
                <span className={cn('font-mono text-sm transition-colors', p.color)}>
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight transition-colors group-hover:text-google-yellow">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-pretty leading-relaxed text-primary-foreground/70">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

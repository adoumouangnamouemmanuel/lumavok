'use client'

import { Check, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'
import Link from 'next/link'

const tiers = [
  {
    name: 'Starter',
    price: '$45',
    suffix: '+',
    for: 'Individuals, students & micro-businesses',
    features: [
      '1–3 page responsive website',
      'Contact form & basic SEO',
      'Mobile-first layout',
      'Free initial consultation',
    ],
    featured: false,
  },
  {
    name: 'Business',
    price: '$180',
    suffix: '+',
    for: 'Growing SMBs & e-commerce',
    features: [
      '4–8 pages with brand styling',
      'Optional admin dashboard',
      'SEO setup & analytics',
      'Payments & inventory (e-com)',
      'Launch training included',
    ],
    featured: true,
  },
  {
    name: 'Custom System',
    price: '$700',
    suffix: '+',
    for: 'Corporates, firms & institutions',
    features: [
      'Bespoke architecture & workflows',
      'User roles & analytics',
      'API & third-party integrations',
      'Long-term support options',
      'Dedicated project manager',
    ],
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          align="center"
          badgeText="Transparent pricing"
          title={
            <>
              Global quality, kept completely{' '}
              <span className="text-google-yellow">within reach</span>.
            </>
          }
          watermarkText="PRICING"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 90}
              className={cn(
                'relative flex flex-col rounded-3xl p-8 transition-all duration-500 md:p-10',
                t.featured
                  ? 'border-2 border-google-blue bg-primary text-primary-foreground shadow-2xl scale-[1.02]'
                  : 'border border-border bg-card shadow-lg hover:border-foreground/20 hover:shadow-xl',
              )}
            >
              <div className="relative flex items-center justify-between">
                <h3 className="text-2xl font-bold tracking-tight">
                  {t.name}
                </h3>
                {t.featured && (
                  <span className="rounded-full bg-google-yellow px-3 py-1 text-xs font-bold uppercase tracking-wider text-foreground">
                    Popular
                  </span>
                )}
              </div>
              <p
                className={cn(
                  'relative mt-2 text-sm',
                  t.featured ? 'text-primary-foreground/70' : 'text-muted-foreground',
                )}
              >
                {t.for}
              </p>
              <div className="relative mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-extrabold tracking-tight">
                  {t.price}
                </span>
                <span className="text-lg font-semibold text-google-blue">
                  {t.suffix}
                </span>
              </div>

              <ul className="relative mt-8 flex flex-1 flex-col gap-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      className={cn(
                        'mt-0.5 size-4 shrink-0',
                        t.featured ? 'text-google-yellow' : 'text-google-blue',
                      )}
                    />
                    <span
                      className={cn(
                        t.featured
                          ? 'text-primary-foreground/85'
                          : 'text-foreground/80',
                      )}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/#contact"
                className={cn(
                  'mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full py-4 text-sm font-bold shadow-md transition-all hover:shadow-lg',
                  t.featured
                    ? 'bg-google-blue text-white hover:bg-google-blue/90'
                    : 'bg-primary text-primary-foreground hover:bg-primary/90',
                )}
              >
                Get a quote
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Growth-phase perks:{' '}
            <span className="font-semibold text-foreground">20% student discount</span>,{' '}
            <span className="font-semibold text-foreground">$10 referral credit</span>, and
            partnership pricing for schools & NGOs.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

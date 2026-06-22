'use client'

import { Linkedin, Mail, Globe, MapPin } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

type TeamMember = {
  name: string
  role: string
  country: string
  email: string
  linkedin: string
  portfolio: string
  photo: string
  gradient: string
  color: string
}

const team: TeamMember[] = [
  {
    name: 'Deubaybe Dounia',
    role: 'Project Manager',
    country: 'Chad',
    email: 'dounia@lumavok.com',
    linkedin: 'https://linkedin.com/in/',
    portfolio: '#',
    photo: '/images/dounia.png',
    gradient: 'from-google-blue to-[oklch(0.60_0.20_280)]',
    color: 'text-google-blue',
  },
  {
    name: 'Emmanuel Adoum',
    role: 'Chief Technology Officer',
    country: 'Chad',
    email: 'emmanuel.ouangnamou@gmail.com',
    linkedin: 'https://linkedin.com/in/emmanueladoum',
    portfolio: 'https://emmanueladoum.com',
    photo: '/images/emma.png',
    gradient: 'from-google-green to-[oklch(0.55_0.18_180)]',
    color: 'text-google-green',
  },
  {
    name: 'Soaliyé Banyoua Kindo',
    role: 'Lead Engineer',
    country: 'Chad',
    email: 'soaliye@lumavok.com',
    linkedin: 'https://linkedin.com/in/',
    portfolio: '#',
    photo: '/images/team-3.png',
    gradient: 'from-google-red to-[oklch(0.62_0.22_10)]',
    color: 'text-google-red',
  },
  {
    name: 'Clément Sampebgo',
    role: 'Database Administrator',
    country: 'Chad',
    email: 'clement@lumavok.com',
    linkedin: 'https://linkedin.com/in/',
    portfolio: '#',
    photo: '/images/team-4.png',
    gradient: 'from-google-yellow to-[oklch(0.78_0.14_60)]',
    color: 'text-google-yellow',
  },
  {
    name: 'Tomoh Claude',
    role: 'Content & Social Media',
    country: 'Chad',
    email: 'claude@lumavok.com',
    linkedin: 'https://linkedin.com/in/',
    portfolio: '#',
    photo: '/images/team-5.png',
    gradient: 'from-[oklch(0.55_0.18_300)] to-google-blue',
    color: 'text-google-blue',
  },
  {
    name: 'Ramatou Salah Hassane',
    role: 'Media & Communications',
    country: 'Chad',
    email: 'ramatou@lumavok.com',
    linkedin: 'https://linkedin.com/in/',
    portfolio: '#',
    photo: '/images/team-6.png',
    gradient: 'from-google-green to-[oklch(0.65_0.16_130)]',
    color: 'text-google-green',
  },
  {
    name: 'Karimou N\u2019Goila Abdoul-Akim',
    role: 'Multimedia Producer',
    country: 'Chad',
    email: 'karimou@lumavok.com',
    linkedin: 'https://linkedin.com/in/',
    portfolio: '#',
    photo: '/images/team-7.png',
    gradient: 'from-google-red to-[oklch(0.62_0.22_10)]',
    color: 'text-google-red',
  },
]

export default function TeamPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-dot-grid opacity-20" />

          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <SectionHeader
              as="h1"
              align="center"
              badgeText="The people"
              title={
                <>
                  A complementary team of{' '}
                  <span className="text-google-blue">young African builders</span>.
                </>
              }
              description="Each brings specialized expertise and a shared commitment to the mission — building world-class technology from within."
              watermarkText="TEAM"
            />
          </div>
        </section>

        {/* Team Grid */}
        <section className="pb-24 md:pb-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-foreground/10"
                >
                  {/* Photo */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={m.photo}
                      alt={`${m.name} — ${m.role}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient overlay at bottom (keep simple dark fade for text readability) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Info overlaid on photo bottom */}
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h3 className="text-xl font-bold tracking-tight text-white">
                        {m.name}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-google-yellow">
                        {m.role}
                      </p>
                      <p className="mt-2 flex items-center gap-1.5 text-sm text-white/70">
                        <MapPin className="size-3.5" />
                        {m.country}
                      </p>

                      {/* Social links */}
                      <div className="mt-4 flex items-center gap-2 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:translate-y-4 md:opacity-0">
                        <SocialLink href={m.linkedin} label="LinkedIn" icon={Linkedin} />
                        <SocialLink href={`mailto:${m.email}`} label="Email" icon={Mail} />
                        <SocialLink href={m.portfolio} label="Portfolio" icon={Globe} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-20 text-primary-foreground">
          <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
            <Reveal>
              <h2 className="text-balance text-3xl font-extrabold tracking-tight md:text-4xl">
                Want to join us?
              </h2>
              <p className="mt-4 text-primary-foreground/70">
                We&apos;re always looking for talented, passionate people who believe
                in building technology that matters.
              </p>
              <Link
                href="/#contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-foreground shadow-lg transition-all hover:shadow-xl"
              >
                Get in touch
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

function SocialLink({
  href,
  label,
  icon: Icon,
}: {
  href: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="flex size-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/20 hover:shadow-md"
    >
      <Icon className="size-4" />
    </a>
  )
}

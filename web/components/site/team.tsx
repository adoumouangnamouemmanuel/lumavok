'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Mail, X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTranslations } from 'next-intl'

// members array is moved inside component
type Member = { name: string; role: string; country: string; flag: string; img: string; bio: string; linkedin: string; email: string }

function MemberCard({ m, index, onClick }: { m: Member; index: number; onClick: () => void }) {
  return (
    <motion.article
      layoutId={`team-card-${m.name}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-[420px] w-[270px] shrink-0 cursor-pointer flex-col overflow-hidden rounded-xl bg-secondary sm:h-[470px] sm:w-[320px] ring-1 ring-border/50 hover:ring-primary/50 transition-shadow"
      style={{ contain: 'layout style paint' }}
    >
      {/* Optimised image with Next.js <Image> for lazy-loading + decoding */}
      <motion.div
        className="absolute inset-0 h-full w-full"
        style={{ willChange: 'transform' }}
      >
        <Image
          src={m.img}
          alt={`Portrait de ${m.name}`}
          fill
          sizes="(max-width: 640px) 270px, 320px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          loading={index < 2 ? 'eager' : 'lazy'}
          quality={80}
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

      <motion.div layoutId={`team-content-${m.name}`} className="relative mt-auto flex flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <motion.h3 layoutId={`team-name-${m.name}`} className="text-xl font-bold leading-tight text-white">
            {m.name}
          </motion.h3>
          <motion.img 
            layoutId={`team-flag-${m.name}`} 
            src={`https://flagcdn.com/${m.flag}.svg`} 
            alt={m.country} 
            className="w-5 shrink-0 rounded-[2px] shadow-sm ring-1 ring-white/20 opacity-90" 
          />
        </div>
        <motion.div layoutId={`team-role-${m.name}`} className="mt-1 font-mono text-xs uppercase tracking-wider text-white/70">
          <span>{m.role}</span>
        </motion.div>

        {/* Social icons — always visible */}
        <motion.div layoutId={`team-socials-${m.name}`} className="mt-4 flex items-center gap-3">
          <a
            href={m.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label={`LinkedIn de ${m.name}`}
            className="flex h-8 w-8 items-center justify-center rounded-md bg-white/20 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href={m.email ? `mailto:${m.email}` : '#'}
            onClick={(e) => e.stopPropagation()}
            aria-label={`Email de ${m.name}`}
            className="flex h-8 w-8 items-center justify-center rounded-md bg-white/20 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
          >
            <Mail className="h-4 w-4" />
          </a>
        </motion.div>
      </motion.div>
    </motion.article>
  )
}

export function Team() {
  const t = useTranslations('Team')
  const ref = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [maxX, setMaxX] = useState(0)
  const [selectedName, setSelectedName] = useState<string | null>(null)

  const members: Member[] = [
    {
      name: 'Deubaybe Dounia',
      role: t('m1_role'),
      country: t('m1_country'),
      flag: 'td',
      img: '/images/dounia.webp',
      bio: t('m1_bio'),
      linkedin: 'https://www.linkedin.com/in/deubaybe-dounia/',
      email: 'successdouni.a@gmail.com',
    },
    {
      name: 'Emmanuel Adoum',
      role: t('m2_role'),
      country: t('m2_country'),
      flag: 'td',
      img: '/images/emma.webp',
      bio: t('m2_bio'),
      linkedin: 'https://www.linkedin.com/in/emmanueladoum',
      email: 'emmanuel.ouangnamou@gmail.com',
    },
    {
      name: 'Clement Sampebgo',
      role: t('m3_role'),
      country: t('m3_country'),
      flag: 'bf',
      img: '/images/clement.webp',
      bio: t('m3_bio'),
      linkedin: 'https://www.linkedin.com/in/clement-sampebgo/',
      email: 'cl.sampebgo@gmail.com',
    },
    {
      name: 'Soaliye Kindo Albert',
      role: t('m4_role'),
      country: t('m4_country'),
      flag: 'ne',
      img: '/images/soaliye.webp',
      bio: t('m4_bio'),
      linkedin: 'https://www.linkedin.com/in/kindo-soaliye-albert/',
      email: 'kindo.soaliye@gmail.com',
    },
    {
      name: 'Tomoh Claude',
      role: t('m5_role'),
      country: t('m5_country'),
      flag: 'cm',
      img: '/images/tomoh.webp',
      bio: t('m5_bio'),
      linkedin: 'https://www.linkedin.com/in/claude-tomoh',
      email: 'claudetomo20@gmail.com',
    },
    {
      name: 'Abdoul-Akim N\u2019Goila',
      role: t('m6_role'),
      country: t('m6_country'),
      flag: 'ne',
      img: '/images/akim.webp',
      bio: t('m6_bio'),
      linkedin: 'https://www.linkedin.com/in/abdoul-akim',
      email: 'abdoul.akeem998@gmail.com',
    },
  ]

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  // Measure how far the track must travel so the last card ends centered.
  useEffect(() => {
    const measure = () => {
      const track = trackRef.current
      if (!track) return
      const distance = track.scrollWidth - window.innerWidth
      setMaxX(distance > 0 ? distance : 0)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const x = useTransform(scrollYProgress, [0, 1], [0, -maxX])
  const selectedMember = members.find((m) => m.name === selectedName)

  return (
    <section id="equipe" ref={ref} className="relative h-[340vh] bg-background">
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <div className="mx-auto mb-10 w-full max-w-7xl px-6">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {t('subtitle')}
          </p>
          <h2 className="heading-tight w-full max-w-6xl text-3xl uppercase sm:text-4xl md:text-5xl lg:text-6xl">
            {t('title1')}
            <span className="font-serif text-2xl font-light italic tracking-normal text-muted-foreground sm:text-3xl md:text-4xl lg:text-5xl">
              {t('title2')}
            </span>
          </h2>
        </div>

        <motion.div
          ref={trackRef}
          style={{ x, willChange: 'transform' }}
          className="flex items-center gap-6 sm:gap-8"
        >
          {/* Leading spacer centers the first card */}
          <div
            aria-hidden="true"
            className="h-px shrink-0 w-[calc(50vw-135px)] sm:w-[calc(50vw-160px)]"
          />
          {members.map((m, i) => (
            <MemberCard key={m.name} m={m} index={i} onClick={() => setSelectedName(m.name)} />
          ))}
          {/* Trailing spacer keeps the last card centered with margin */}
          <div
            aria-hidden="true"
            className="h-px shrink-0 w-[calc(50vw-135px)] sm:w-[calc(50vw-160px)]"
          />
        </motion.div>
      </div>

      {/* Expanded Modal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedName && selectedMember && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none md:p-10">
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="pointer-events-auto fixed inset-0 z-0 bg-background/80 backdrop-blur-sm"
                onClick={() => setSelectedName(null)}
              />
              
              <motion.div
                key={`modal-${selectedMember.name}`}
                layoutId={`team-card-${selectedMember.name}`}
                className="pointer-events-auto relative z-10 flex w-full max-w-4xl max-h-[90vh] flex-col overflow-hidden rounded-[2rem] bg-card shadow-2xl ring-1 ring-border md:flex-row"
              >
                <div className="relative h-96 w-full shrink-0 md:h-auto md:w-5/12">
                  <Image
                    src={selectedMember.img}
                    alt={selectedMember.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-top"
                  />
                  
                  {/* Mobile close button */}
                  <button
                    onClick={() => setSelectedName(null)}
                    className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/50 backdrop-blur-md transition-colors hover:bg-background md:hidden"
                  >
                    <X className="h-5 w-5 text-foreground" />
                  </button>
                </div>

                {/* Right/Bottom Content */}
                <div className="relative flex flex-col overflow-y-auto p-8 pt-0 md:w-7/12 md:p-14 md:pt-14">
                  {/* Desktop close button */}
                  <button
                    onClick={() => setSelectedName(null)}
                    className="absolute right-6 top-6 z-10 hidden h-10 w-10 items-center justify-center rounded-full bg-muted/50 transition-colors hover:bg-muted md:flex"
                  >
                    <X className="h-5 w-5 text-foreground" />
                  </button>

                  <motion.div layoutId={`team-content-${selectedMember.name}`} className="mt-6 flex flex-col md:mt-0">
                    <div className="flex items-center justify-between gap-4 md:justify-start">
                      <motion.h3 layoutId={`team-name-${selectedMember.name}`} className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
                        {selectedMember.name}
                      </motion.h3>
                      <motion.img 
                        layoutId={`team-flag-${selectedMember.name}`} 
                        src={`https://flagcdn.com/${selectedMember.flag}.svg`} 
                        alt={selectedMember.country} 
                        className="w-8 shrink-0 rounded-sm shadow-sm ring-1 ring-black/10 dark:ring-white/10 md:w-10" 
                      />
                    </div>
                    <motion.div layoutId={`team-role-${selectedMember.name}`} className="mt-2 font-mono text-sm uppercase tracking-widest text-primary flex flex-wrap items-center gap-3">
                      <span>{selectedMember.role}</span>
                      <span className="hidden h-4 w-px bg-primary/30 sm:block" />
                      <span className="text-muted-foreground">{selectedMember.country}</span>
                    </motion.div>

                    <motion.div layoutId={`team-socials-${selectedMember.name}`} className="mt-6 flex items-center gap-3">
                      <a
                        href={selectedMember.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`LinkedIn de ${selectedMember.name}`}
                        className="flex h-10 w-10 items-center justify-center rounded-md bg-foreground/10 text-foreground transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
                      >
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                      <a
                        href={selectedMember.email ? `mailto:${selectedMember.email}` : '#'}
                        aria-label={`Email de ${selectedMember.name}`}
                        className="flex h-10 w-10 items-center justify-center rounded-md bg-foreground/10 text-foreground transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="mt-8 flex flex-col gap-6"
                  >
                    <div className="h-px w-full bg-border" />
                    <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                      {selectedMember.bio}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  )
}

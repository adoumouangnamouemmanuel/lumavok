'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Mail } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'

// members array is moved inside component
type Member = { name: string; role: string; img: string; bio: string; linkedin: string; email: string }

function MemberCard({ m, index }: { m: Member; index: number }) {
  return (
    <motion.article
      whileHover="hover"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-[420px] w-[270px] shrink-0 flex-col overflow-hidden rounded-xl bg-secondary sm:h-[470px] sm:w-[320px]"
      style={{ contain: 'layout style paint' }}
    >
      {/* Optimised image with Next.js <Image> for lazy-loading + decoding */}
      <motion.div
        variants={{ hover: { scale: 1.07 } }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 h-full w-full"
        style={{ willChange: 'transform' }}
      >
        <Image
          src={m.img}
          alt={`Portrait de ${m.name}`}
          fill
          sizes="(max-width: 640px) 270px, 320px"
          className="object-cover transition-transform duration-700"
          loading={index < 2 ? 'eager' : 'lazy'}
          quality={80}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/5 to-transparent dark:from-background dark:via-background/30" />

      <div className="relative mt-auto p-6">
        <h3 className="text-xl font-bold leading-tight text-foreground">
          {m.name}
        </h3>
        <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          {m.role}
        </p>

        {/* Social icons — always visible */}
        <div className="mt-2.5 flex items-center gap-3">
          <a
            href={m.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn de ${m.name}`}
            className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground/10 text-foreground backdrop-blur-sm transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href={m.email ? `mailto:${m.email}` : '#'}
            aria-label={`Email de ${m.name}`}
            className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground/10 text-foreground backdrop-blur-sm transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <motion.p
          variants={{ hover: { height: 'auto', opacity: 1, marginTop: 12 } }}
          initial={{ height: 0, opacity: 0, marginTop: 0 }}
          className="overflow-hidden text-pretty text-sm leading-relaxed text-foreground/80"
        >
          {m.bio}
        </motion.p>
      </div>
    </motion.article>
  )
}

export function Team() {
  const t = useTranslations('Team')
  const ref = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [maxX, setMaxX] = useState(0)

  const members: Member[] = [
    {
      name: 'Deubaybe Dounia',
      role: t('m1_role'),
      img: '/images/dounia.webp',
      bio: t('m1_bio'),
      linkedin: 'https://www.linkedin.com/in/deubaybe-dounia/',
      email: 'successdouni.a@gmail.com',
    },
    {
      name: 'Emmanuel Adoum',
      role: t('m2_role'),
      img: '/images/emma.webp',
      bio: t('m2_bio'),
      linkedin: 'https://www.linkedin.com/in/emmanueladoum',
      email: 'emmanuel.ouangnamou@gmail.com',
    },
    {
      name: 'Clement Sampebgo',
      role: t('m3_role'),
      img: '/images/clement.webp',
      bio: t('m3_bio'),
      linkedin: 'https://www.linkedin.com/in/clement-sampebgo/',
      email: 'cl.sampebgo@gmail.com',
    },
    {
      name: 'Soaliye Kindo Albert',
      role: t('m4_role'),
      img: '/images/soaliye.webp',
      bio: t('m4_bio'),
      linkedin: 'https://www.linkedin.com/in/kindo-soaliye-albert/',
      email: 'kindo.soaliye@gmail.com',
    },
    {
      name: 'Tomoh Claude',
      role: t('m5_role'),
      img: '/images/tomoh.webp',
      bio: t('m5_bio'),
      linkedin: 'https://www.linkedin.com/in/claude-tomoh',
      email: 'claudetomo20@gmail.com',
    },
    {
      name: 'Abdoul-Akim N\u2019Goila',
      role: t('m6_role'),
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

  return (
    <section id="equipe" ref={ref} className="relative h-[340vh] bg-background">
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <div className="mx-auto mb-10 w-full max-w-7xl px-6">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {t('subtitle')}
          </p>
          <h2 className="heading-tight max-w-4xl text-balance text-4xl uppercase md:text-6xl">
            {t('title1')}
            <span className="font-serif text-3xl font-light italic tracking-normal text-muted-foreground md:text-5xl">
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
            <MemberCard key={m.name} m={m} index={i} />
          ))}
          {/* Trailing spacer keeps the last card centered with margin */}
          <div
            aria-hidden="true"
            className="h-px shrink-0 w-[calc(50vw-135px)] sm:w-[calc(50vw-160px)]"
          />
        </motion.div>
      </div>
    </section>
  )
}

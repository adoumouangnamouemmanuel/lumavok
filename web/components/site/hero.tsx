'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { Marquee } from './marquee'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.18])
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const marqueeY = useTransform(scrollYProgress, [0, 1], ['0%', '-60%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])

  return (
    <section
      id="accueil"
      ref={ref}
      className="relative flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ scale: imageScale, y: imageY }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero.png"
          alt="L'équipe Lumavok collaborant dans un studio technologique"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/45 via-background/20 to-background/90" />
        <div className="absolute inset-0 bg-background/10" />
      </motion.div>

      <motion.div
        style={{ y: marqueeY }}
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2"
      >
        <Marquee
          text="DES SOLUTIONS LOCALES · DES STANDARDS MONDIAUX"
          duration={150}
          className="text-[14vw] font-extrabold uppercase leading-none tracking-tight text-foreground/95 [font-stretch:expanded]"
        />
      </motion.div>

      <motion.div
        style={{ y: textY }}
        className="absolute bottom-12 left-5 right-5 z-10 md:bottom-16 md:left-10 md:max-w-2xl"
      >
        <p className="font-serif text-2xl font-light leading-snug text-foreground/90 md:text-4xl">
          Que ce soit un <span className="italic">site web</span>, une{' '}
          <span className="italic">application</span> ou un{' '}
          <span className="italic">système d’IA</span> — nous transformons vos
          idées en produits numériques qui relient les personnes, les idées et
          les opportunités.
        </p>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Défiler
        </span>
        <div className="h-10 w-px bg-gradient-to-b from-foreground/60 to-transparent" />
      </div>
    </section>
  )
}

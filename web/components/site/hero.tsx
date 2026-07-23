'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Marquee } from './marquee'

export function Hero() {
  const t = useTranslations('Hero')
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
          alt={t('alt_img')}
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-background" />
        <div className="absolute inset-0 bg-black/10" />
      </motion.div>

      <motion.div
        style={{ y: marqueeY }}
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2"
      >
        <Marquee
          text={t('marquee')}
          duration={150}
          className="text-[14vw] font-extrabold uppercase leading-none tracking-tight text-white/95 [font-stretch:expanded] dark:text-foreground/95"
        />
      </motion.div>

      <motion.div
        style={{ y: textY }}
        className="absolute bottom-12 left-5 right-5 z-10 md:bottom-16 md:left-10 md:max-w-2xl"
      >
        <p className="font-serif text-2xl font-light leading-snug text-white/90 dark:text-foreground/90 md:text-4xl">
          {t('text_1')}<span className="italic">{t('text_2')}</span>{t('text_3')}
          <span className="italic">{t('text_4')}</span>{t('text_5')}
          <span className="italic">{t('text_6')}</span>{t('text_7')}
        </p>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/60 dark:text-muted-foreground">
          {t('scroll')}
        </span>
        <div className="h-10 w-px bg-gradient-to-b from-white/60 dark:from-foreground/60 to-transparent" />
      </div>
    </section>
  )
}

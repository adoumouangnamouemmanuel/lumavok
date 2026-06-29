'use client'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const words = [
  'Lumavok',
  'est',
  'un',
  'studio',
  'technologique',
  'africain',
  'porté',
  'par',
  'la',
  'jeunesse.',
]

export function About() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Spring-smooth the scroll value so all parallax feels buttery.
  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.4,
  })

  // Heading drifts up and over the portrait; a ghost word drifts the other way.
  const titleY = useTransform(smooth, [0, 1], ['34%', '-26%'])
  const titleX = useTransform(smooth, [0, 1], ['5%', '-6%'])
  const ghostX = useTransform(smooth, [0, 1], ['-12%', '14%'])
  const ghostOpacity = useTransform(smooth, [0, 0.5, 1], [0, 0.06, 0])
  const imgY = useTransform(smooth, [0, 1], ['-12%', '14%'])
  const imgScale = useTransform(smooth, [0, 0.5, 1], [1.18, 1.02, 1.12])
  const imgRotate = useTransform(smooth, [0, 1], [-2.5, 2.5])

  return (
    <section
      id="a-propos"
      ref={ref}
      className="relative mx-auto max-w-7xl overflow-hidden px-5 py-32 md:px-10 md:py-52"
    >
      {/* Ghost wordmark drifting behind everything */}
      <motion.span
        style={{ x: ghostX, opacity: ghostOpacity }}
        aria-hidden="true"
        className="heading-tight pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap text-[26vw] uppercase text-foreground"
      >
        Studio
      </motion.span>

      <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-12">
        {/* Portrait — blended into the background on every edge */}
        <div className="relative md:col-span-5 md:col-start-7 md:row-start-1">
          <motion.div
            initial={{ clipPath: 'inset(14% 8% 14% 8% round 12px)' }}
            whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 12px)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: imgY, rotate: imgRotate }}
            className="relative overflow-hidden rounded-md [mask-image:radial-gradient(125%_125%_at_50%_42%,#000_52%,transparent_100%)]"
          >
            <motion.div
              style={{ scale: imgScale }}
              className="relative aspect-[3/4] w-full md:aspect-[4/5]"
            >
              <Image
                src="/images/about.png"
                alt="Fondatrice du studio Lumavok"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover will-change-transform"
              />
            </motion.div>
            {/* Blend overlays so the photo melts into the page */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/20" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-transparent" />
          </motion.div>
          {/* Floating accent caption */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -left-4 bottom-10 hidden rounded-xl border border-border bg-card/80 px-4 py-3 backdrop-blur-md md:block"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              Depuis 2026
            </p>
            <p className="text-sm font-semibold text-foreground">
              Conçu en Afrique
            </p>
          </motion.div>
        </div>

        <motion.div
          style={{ y: titleY, x: titleX }}
          className="relative z-10 md:col-span-8 md:col-start-1 md:row-start-1"
        >
          <h2 className="heading-tight text-[13vw] uppercase text-foreground drop-shadow-[0_10px_40px_rgba(0,0,0,0.55)] sm:text-6xl md:text-7xl lg:text-8xl">
            Des produits
            <br />
            <span className="text-muted-foreground">numériques</span>
            <br />
            qui marquent
            <br />
            les esprits
          </h2>
        </motion.div>
      </div>

      <div className="relative z-10 mt-16 md:mt-24 md:max-w-2xl">
        <p className="flex flex-wrap gap-x-2 font-serif text-xl font-light leading-relaxed text-foreground/85 md:text-2xl">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={i >= 6 ? 'italic text-foreground' : undefined}
            >
              {w}
            </motion.span>
          ))}
        </p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-serif text-xl font-light leading-relaxed text-foreground/70 md:text-2xl"
        >
          Nous prenons le temps de comprendre votre vision jusque dans les{' '}
          <span className="italic text-foreground">moindres détails</span>, puis
          nous la transformons en un produit{' '}
          <span className="italic text-foreground">
            abordable, adaptable et façonné avec soin
          </span>
          .
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 h-px origin-left bg-gradient-to-r from-accent via-border to-transparent"
        />
      </div>
    </section>
  )
}

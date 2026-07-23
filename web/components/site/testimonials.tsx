'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { useTranslations } from 'next-intl'

// quotes array is moved inside component
export function Testimonials() {
  const t = useTranslations('Testimonials')
  const [[index, dir], setState] = useState<[number, number]>([0, 0])
  const [cursor, setCursor] = useState({ x: 0, y: 0, side: 1, visible: false })
  const areaRef = useRef<HTMLDivElement>(null)

  const quotes = [
    {
      text: t('q1_text'),
      name: t('q1_name'),
      role: t('q1_role'),
      img: '/images/client1.png',
    },
    {
      text: t('q2_text'),
      name: t('q2_name'),
      role: t('q2_role'),
      img: '/images/client2.png',
    },
    {
      text: t('q3_text'),
      name: t('q3_name'),
      role: t('q3_role'),
      img: '/images/client3.png',
    },
    {
      text: t('q4_text'),
      name: t('q4_name'),
      role: t('q4_role'),
      img: '/images/client4.png',
    },
  ]

  const count = quotes.length
  const current = quotes[index]
  const nextIndex = (index + 1) % count

  const paginate = (d: number) =>
    setState(([i]) => [(i + d + count) % count, d])

  const onMove = (e: React.MouseEvent) => {
    const rect = areaRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - rect.left
    const side = x < rect.width / 2 ? -1 : 1
    setCursor({ x, y: e.clientY - rect.top, side, visible: true })
  }

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  }

  return (
    <section id="temoignages" className="relative overflow-hidden py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="heading-tight mb-14 text-5xl uppercase md:text-8xl"
        >
          {t('title_1')}
          <br />
          <span className="text-muted-foreground">{t('title_2')}</span>
        </motion.h2>

        <div
          ref={areaRef}
          onMouseMove={onMove}
          onMouseLeave={() => setCursor((c) => ({ ...c, visible: false }))}
          onClick={() => paginate(cursor.side)}
          className="relative grid cursor-none grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12"
        >
          {/* Preview of the next person */}
          <div className="hidden md:col-span-3 md:block">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              {t('next')}
            </p>
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg opacity-60 transition-opacity hover:opacity-90">
              <Image
                src={quotes[nextIndex].img}
                alt={`Portrait de ${quotes[nextIndex].name}`}
                fill
                sizes="25vw"
                className="object-cover grayscale"
              />
            </div>
          </div>

          {/* Current testimonial */}
          <div className="md:col-span-9">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.figure
                key={index}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 items-center gap-8 sm:grid-cols-[auto_1fr]"
              >
                <div className="relative aspect-[3/4] w-44 overflow-hidden rounded-lg sm:w-56">
                  <Image
                    src={current.img}
                    alt={`Portrait de ${current.name}`}
                    fill
                    sizes="(max-width: 640px) 176px, 224px"
                    className="object-cover grayscale"
                  />
                </div>
                <div>
                  <span className="font-serif text-6xl leading-none text-muted-foreground">
                    {'\u201C'}
                  </span>
                  <blockquote className="-mt-4 text-pretty text-2xl font-light leading-snug md:text-3xl">
                    {current.text}
                  </blockquote>
                  <figcaption className="mt-6">
                    <div className="font-bold">{current.name}</div>
                    <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      {current.role}
                    </div>
                  </figcaption>
                </div>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Custom drag cursor */}
          <motion.div
            aria-hidden="true"
            animate={{
              opacity: cursor.visible ? 1 : 0,
              scale: cursor.visible ? 1 : 0.6,
            }}
            transition={{ duration: 0.18 }}
            style={{ left: cursor.x, top: cursor.y }}
            className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-foreground text-background shadow-xl">
              {cursor.side < 0 ? (
                <ArrowLeft className="h-7 w-7" />
              ) : (
                <ArrowRight className="h-7 w-7" />
              )}
            </div>
          </motion.div>
        </div>

        {/* Dots */}
        <div className="mt-12 flex items-center gap-3">
          {quotes.map((q, i) => (
            <button
              key={q.name}
              type="button"
              aria-label={`Voir le témoignage de ${q.name}`}
              onClick={() => setState([i, i > index ? 1 : -1])}
              className="group h-2 rounded-full transition-all"
            >
              <span
                className={`block h-2 rounded-full transition-all ${
                  i === index
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-foreground/30 group-hover:bg-foreground/60'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useRef } from 'react'

const colA = ['/images/g1.png', '/images/g2.png', '/images/g6.png']
const colB = ['/images/g3.png', '/images/g4.png', '/images/g1.png', '/images/g5.png']
const colC = ['/images/g5.png', '/images/g6.png', '/images/g2.png']

function Column({
  images,
  y,
  scale,
}: {
  images: string[]
  y: MotionValue<string>
  scale: MotionValue<number>
}) {
  return (
    <motion.div style={{ y }} className="flex flex-col gap-4 md:gap-6">
      {images.map((src, i) => (
        <motion.div
          key={i}
          style={{ scale }}
          className="overflow-hidden rounded-md bg-card will-change-transform"
        >
          <img
            src={src || '/placeholder.svg'}
            alt="Projet et savoir-faire Lumavok"
            className="aspect-[4/5] w-full object-cover"
          />
        </motion.div>
      ))}
    </motion.div>
  )
}

export function Gallery() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  // Outer columns slide down, center column slides up — opposite directions.
  const yDown = useTransform(scrollYProgress, [0, 1], ['-18%', '14%'])
  const yUp = useTransform(scrollYProgress, [0, 1], ['16%', '-22%'])

  // Images zoom in as you scroll down, zoom out as you scroll back up.
  const scaleIn = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1, 1.12])
  const scaleOut = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.04, 0.9])

  // Wordmark grows and fades as the gallery passes through.
  const wordScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.05, 1.25])
  const wordOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} className="relative h-[240vh] bg-background">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-4 px-4 md:grid-cols-3 md:gap-6">
          <Column images={colA} y={yDown} scale={scaleOut} />
          <Column images={colB} y={yUp} scale={scaleIn} />
          <div className="hidden md:block">
            <Column images={colC} y={yDown} scale={scaleOut} />
          </div>
        </div>

        <motion.div
          style={{ scale: wordScale, opacity: wordOpacity }}
          className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
        >
          <h2 className="heading-tight text-[18vw] uppercase text-foreground drop-shadow-[0_8px_40px_rgba(0,0,0,0.7)] md:text-[13vw]">
            Lumavok
          </h2>
        </motion.div>
      </div>
    </section>
  )
}

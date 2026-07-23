'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'

// lines array moved to component
// Each line drifts further to the right than the one above it as you scroll.
const ranges = [
  ['-6%', '6%'],
  ['-14%', '18%'],
  ['-22%', '34%'],
]

function Line({
  index,
  line,
  progress,
}: {
  index: number
  line: { plain: string; em: string; tail: string }
  progress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const x = useTransform(progress, [0, 1], ranges[index])
  const opacity = useTransform(progress, [0, 0.25, 0.85, 1], [0.3, 1, 1, 0.6])
  return (
    <motion.p
      style={{ x, opacity }}
      className="font-serif text-2xl font-light leading-snug text-foreground/85 md:text-5xl"
    >
      {line.plain}
      <span className="italic text-foreground">{line.em}</span>
      {line.tail}
    </motion.p>
  )
}

export function Intro() {
  const t = useTranslations('Intro')
  const ref = useRef<HTMLElement>(null)

  const lines = [
    { plain: t('l1_plain'), em: t('l1_em'), tail: t('l1_tail') },
    { plain: t('l2_plain'), em: t('l2_em'), tail: t('l2_tail') },
    { plain: t('l3_plain'), em: t('l3_em'), tail: t('l3_tail') },
  ]
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  return (
    <section
      ref={ref}
      className="relative mx-auto max-w-6xl overflow-hidden px-5 py-32 md:py-56"
    >
      <div className="flex flex-col gap-7 md:gap-10">
        {lines.map((l, i) => (
          <Line key={i} index={i} line={l} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  )
}

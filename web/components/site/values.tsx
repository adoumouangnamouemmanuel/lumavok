'use client'

import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import {
  HandHeart,
  Layers,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { useRef } from 'react'

type Value = {
  num: string
  title: string
  text: string
  Icon: LucideIcon
}

const values: Value[] = [
  {
    num: '01',
    title: 'Innovation',
    text: 'Nous prototypons, testons et améliorons sans relâche pour repousser ce que la technologie peut faire.',
    Icon: Lightbulb,
  },
  {
    num: '02',
    title: 'Intégrité',
    text: 'Nous communiquons avec clarté, tenons nos engagements et travaillons en toute transparence.',
    Icon: ShieldCheck,
  },
  {
    num: '03',
    title: 'Excellence',
    text: 'Nous testons nos produits, affinons nos designs et documentons chaque étape de notre travail.',
    Icon: Sparkles,
  },
  {
    num: '04',
    title: 'Collaboration',
    text: 'Les meilleures solutions se construisent ensemble. Nous écoutons, co-créons et grandissons côte à côte.',
    Icon: Users,
  },
  {
    num: '05',
    title: 'Adaptabilité',
    text: 'Nous évoluons avec les marchés et les technologies, ouverts au changement et aux retours.',
    Icon: Layers,
  },
  {
    num: '06',
    title: 'Autonomisation',
    text: 'Nos outils aident nos clients à croître — dans les affaires, l’éducation et la vie communautaire.',
    Icon: HandHeart,
  },
]

const ease = [0.22, 1, 0.36, 1] as const

function ValueCard({
  value,
  index,
  total,
  progress,
}: {
  value: Value
  index: number
  total: number
  progress: MotionValue<number>
}) {
  const { Icon } = value
  const isFirst = index === 0
  const isLast = index === total - 1
  // Each card owns a slice of the scroll timeline (strictly increasing, 0..1).
  const a = (index - 1) / total // previous slice
  const b = index / total // this card settled
  const c = (index + 1) / total // next card covers it
  const mid = (a + b) / 2

  // Card rises from below and settles; the first one is already in place.
  const y = useTransform(
    progress,
    isFirst ? [0, 1] : [a, b],
    isFirst ? ['0%', '0%'] : ['65%', '0%'],
  )
  const opacity = useTransform(
    progress,
    isFirst ? [0, 1] : [a, mid, b],
    isFirst ? [1, 1] : [0, 0.5, 1],
  )
  // Cards underneath shrink slightly and dim as the next stacks over them.
  const scale = useTransform(progress, [b, c], isLast ? [1, 1] : [1, 0.93])
  const dim = useTransform(progress, [b, c], isLast ? [0, 0] : [0, 0.55])

  return (
    <motion.article
      style={{ y, opacity, scale, zIndex: index + 1 }}
      className="absolute inset-x-0 top-0 mx-auto flex w-full max-w-3xl flex-col gap-5 overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-[0_30px_90px_-30px_rgba(0,0,0,0.85)] sm:p-10 md:flex-row md:items-start md:gap-8"
    >
      {/* progressive dimming layer for stacked-under cards */}
      <motion.div
        aria-hidden="true"
        style={{ opacity: dim }}
        className="pointer-events-none absolute inset-0 rounded-3xl bg-background"
      />
      <div className="relative flex items-center justify-between md:flex-col md:items-start md:gap-6">
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-secondary text-accent">
          <Icon className="h-7 w-7" strokeWidth={1.6} />
        </span>
        <span className="font-serif text-3xl italic text-muted-foreground md:text-5xl">
          {value.num}
        </span>
      </div>
      <div className="relative flex-1">
        <h3 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {value.title}
        </h3>
        <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
          {value.text}
        </p>
      </div>
    </motion.article>
  )
}

function ProgressDots({ progress }: { progress: MotionValue<number> }) {
  return (
    <div className="flex flex-col gap-2">
      {values.map((v, i) => {
        const start = i / values.length
        const end = (i + 1) / values.length
        const h = useTransform(progress, [start, end], [12, 40])
        const bg = useTransform(
          progress,
          [start - 0.001, start, end, end + 0.001],
          [
            'oklch(1 0 0 / 15%)',
            'oklch(0.78 0.09 200)',
            'oklch(0.78 0.09 200)',
            'oklch(1 0 0 / 15%)',
          ],
        )
        return (
          <motion.span
            key={v.num}
            style={{ height: h, backgroundColor: bg }}
            className="w-1 rounded-full"
          />
        )
      })}
    </div>
  )
}

export function Values() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  return (
    <section ref={ref} className="relative bg-background" style={{ height: `${values.length * 90}vh` }}>
      <div className="sticky top-0 flex h-[100svh] flex-col overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-6 pt-24 md:pt-28">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent"
          >
            {'// Ce qui nous guide'}
          </motion.p>
          <h2 className="heading-tight text-balance text-4xl uppercase md:text-6xl">
            {'Nos '}
            <span className="font-serif text-3xl font-light italic tracking-normal text-muted-foreground md:text-5xl">
              valeurs
            </span>
          </h2>
        </div>

        {/* Stacked cards arena */}
        <div className="relative mx-auto flex w-full max-w-7xl flex-1 items-center px-6">
          <div className="hidden md:block md:pr-10">
            <ProgressDots progress={scrollYProgress} />
          </div>
          <div className="relative mx-auto h-[300px] w-full max-w-3xl sm:h-[280px]">
            {values.map((v, i) => (
              <ValueCard
                key={v.num}
                value={v}
                index={i}
                total={values.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

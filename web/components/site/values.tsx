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
import { useTranslations } from 'next-intl'

type Value = {
  num: string
  tag: string
  title: string
  text: string
  Icon: LucideIcon
}

// values array is moved inside component
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

  // Same stacking logic as Process: each card scales down as scroll progresses
  const start = index / total
  const scale = useTransform(progress, [start, 1], [1, 1 - (total - index) * 0.045])
  const y = useTransform(progress, [start, 1], [0, -index * 8])

  return (
    <div
      className="sticky"
      style={{ top: `calc(14vh + ${index * 28}px)`, zIndex: index }}
    >
      <motion.article
        style={{ scale, y }}
        className="mx-auto flex min-h-[36vh] max-w-4xl flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-[0_-20px_60px_-30px_rgba(0,0,0,0.8)] md:min-h-[40vh] md:p-12"
      >
        <div className="flex items-start justify-between gap-6">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {value.tag}
          </span>
          <span className="heading-tight text-6xl leading-none text-foreground/10 md:text-8xl">
            {value.num}
          </span>
        </div>
        <div className="mt-8">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
              <Icon className="h-6 w-6" strokeWidth={1.6} />
            </span>
            <h3 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              {value.title}
            </h3>
          </div>
          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {value.text}
          </p>
        </div>
        <div className="mt-8 h-px w-full bg-gradient-to-r from-accent/60 via-border to-transparent" />
      </motion.article>
    </div>
  )
}

export function Values() {
  const t = useTranslations('Values')
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })
  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  const values: Value[] = [
    { num: '01', tag: t('v1_tag'), title: t('v1_title'), text: t('v1_text'), Icon: Lightbulb },
    { num: '02', tag: t('v2_tag'), title: t('v2_title'), text: t('v2_text'), Icon: ShieldCheck },
    { num: '03', tag: t('v3_tag'), title: t('v3_title'), text: t('v3_text'), Icon: Sparkles },
    { num: '04', tag: t('v4_tag'), title: t('v4_title'), text: t('v4_text'), Icon: Users },
    { num: '05', tag: t('v5_tag'), title: t('v5_title'), text: t('v5_text'), Icon: Layers },
    { num: '06', tag: t('v6_tag'), title: t('v6_title'), text: t('v6_text'), Icon: HandHeart },
  ]

  return (
    <section ref={ref} className="relative bg-background pb-[10vh]">
      <div className="mx-auto max-w-7xl px-6 pt-28 md:pt-40">
        <div className="flex flex-col gap-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground"
          >
            {t('subtitle')}
          </motion.p>
          <h2 className="heading-tight max-w-4xl text-balance text-4xl uppercase md:text-7xl">
            {t('title_1')}
            <span className="font-serif text-3xl font-light italic tracking-normal text-muted-foreground md:text-6xl">
              {t('title_2')}
            </span>
          </h2>
          <div className="relative mt-2 h-px w-full overflow-hidden bg-border">
            <motion.div
              style={{ width: lineWidth }}
              className="absolute inset-y-0 left-0 bg-accent"
            />
          </div>
        </div>

        <div className="mt-16 pb-[20vh]">
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
    </section>
  )
}

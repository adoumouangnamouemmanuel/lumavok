'use client'

import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'

type Step = {
  num: string
  title: string
  text: string
  tag: string
}

// steps array is moved inside the component.
function StepCard({
  step,
  index,
  total,
  progress,
}: {
  step: Step
  index: number
  total: number
  progress: MotionValue<number>
}) {
  // Each card scales down slightly as the next one stacks over it.
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
        className="mx-auto flex min-h-[44vh] max-w-4xl flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-[0_-20px_60px_-30px_rgba(0,0,0,0.8)] md:min-h-[48vh] md:p-12"
      >
        <div className="flex items-start justify-between gap-6">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {step.tag}
          </span>
          <span className="heading-tight text-6xl leading-none text-foreground/10 md:text-8xl">
            {step.num}
          </span>
        </div>
        <div className="mt-8">
          <h3 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {step.title}
          </h3>
          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {step.text}
          </p>
        </div>
        <div className="mt-8 h-px w-full bg-gradient-to-r from-accent/60 via-border to-transparent" />
      </motion.article>
    </div>
  )
}

export function Process() {
  const t = useTranslations('Process')
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })
  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  const steps: Step[] = [
    { num: '01', tag: t('s1_tag'), title: t('s1_title'), text: t('s1_text') },
    { num: '02', tag: t('s2_tag'), title: t('s2_title'), text: t('s2_text') },
    { num: '03', tag: t('s3_tag'), title: t('s3_title'), text: t('s3_text') },
    { num: '04', tag: t('s4_tag'), title: t('s4_title'), text: t('s4_text') },
    { num: '05', tag: t('s5_tag'), title: t('s5_title'), text: t('s5_text') },
    { num: '06', tag: t('s6_tag'), title: t('s6_title'), text: t('s6_text') },
  ]

  return (
    <section id="processus" ref={ref} className="relative bg-background pb-[10vh]">
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
          {steps.map((s, i) => (
            <StepCard
              key={s.num}
              step={s}
              index={i}
              total={steps.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

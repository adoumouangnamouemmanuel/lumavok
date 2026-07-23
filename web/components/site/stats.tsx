'use client'

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from 'framer-motion'
import { useRef, useState } from 'react'

type Stat = {
  value: number
  suffix?: string
  label: string[]
  blurb: string
  countries?: { name: string; code: string }[]
  expertise?: string[]
}

const stats: Stat[] = [
  {
    value: 10,
    suffix: '+',
    label: ['Projets', 'livrés'],
    blurb: 'Des sites, apps et systèmes mis en production à travers le continent.',
  },
  {
    value: 6,
    label: ['Domaines', 'd’expertise'],
    blurb: 'Du développement logiciel à l’IA, en passant par le design et le SaaS.',
    expertise: [
      'Développement Web',
      'Intelligence Artificielle',
      'Design UI/UX',
      'Applications Mobiles',
      'Plateformes SaaS',
      'Architecture & Data',
    ],
  },
  {
    value: 5,
    suffix: '+',
    label: ['Pays', 'servis'],
    blurb: 'Des solutions locales, livrées selon des standards mondiaux.',
    countries: [
      { name: 'Tchad', code: 'td' },
      { name: 'Burkina-Faso', code: 'bf' },
      { name: 'Niger', code: 'ne' },
      { name: 'Cameroun', code: 'cm' },
      { name: 'Ghana', code: 'gh' },
    ],
  },
]

// Each panel rises to cover the previous one over a wide, smooth window.
const windows: [number, number][] = [
  [0, 0.04],
  [0.26, 0.52],
  [0.6, 0.86],
]

function Panel({
  stat,
  index,
  progress,
}: {
  stat: Stat
  index: number
  progress: MotionValue<number>
}) {
  const [win] = useState(windows[index])
  // Smoothly slide up from below ("out of a hole").
  const y = useTransform(progress, win, ['105%', '0%'])
  // The incoming panel rounds its top edge until seated.
  const radius = useTransform(progress, win, [56, 0])
  // The panel underneath eases back slightly as it gets covered.
  const coverEnd = win[1]
  const underScale = useTransform(
    progress,
    [coverEnd, Math.min(1, coverEnd + 0.18)],
    [1, 0.94],
  )
  const underOpacity = useTransform(
    progress,
    [coverEnd, Math.min(1, coverEnd + 0.18)],
    [1, 0.4],
  )
  const isLast = index === stats.length - 1
  const count = useTransform(progress, [win[0], win[1] + 0.08], [0, stat.value])
  const rounded = useTransform(
    count,
    (v) => `${Math.max(0, Math.round(v))}${stat.suffix ?? ''}`,
  )

  return (
    <motion.div
      style={{
        y,
        zIndex: index + 1,
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
      }}
      className="absolute inset-0 overflow-hidden bg-background shadow-[0_-40px_90px_-20px_rgba(0,0,0,0.7)]"
    >
      <motion.div
        style={isLast ? undefined : { scale: underScale, opacity: underOpacity }}
        className="flex h-full w-full items-center"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[72vmin] w-[72vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 dark:bg-primary/30 blur-[80px]" />
        <div className="relative mx-auto w-full max-w-6xl px-6 md:px-16">
          <motion.span className="font-serif text-3xl italic text-muted-foreground md:text-5xl">
            {rounded}
          </motion.span>
          <h3 className="heading-tight mt-2 text-[15vw] uppercase text-foreground md:text-[9vw]">
            <span className="block">{stat.label[0]}</span>
            <span className="block pl-[0.4em] text-muted-foreground">
              {stat.label[1]}
            </span>
          </h3>
          <p className="mt-6 max-w-md font-serif text-lg font-light italic leading-relaxed text-foreground/75 md:text-xl">
            {stat.blurb}
          </p>
          {stat.countries && (
            <div className="mt-8 flex flex-wrap gap-4">
              {stat.countries.map((country) => (
                <div
                  key={country.name}
                  className="flex items-center gap-2.5 rounded-full border border-border bg-card/40 px-4 py-2 backdrop-blur-sm"
                >
                  <img src={`https://flagcdn.com/${country.code}.svg`} alt={`Drapeau ${country.name}`} className="w-5 h-3.5 object-cover rounded-sm shadow-sm" />
                  <span className="text-sm font-medium uppercase tracking-wider text-foreground/80">{country.name}</span>
                </div>
              ))}
            </div>
          )}
          {stat.expertise && (
            <div className="mt-8 flex flex-wrap gap-3">
              {stat.expertise.map((exp) => (
                <div
                  key={exp}
                  className="rounded-full border border-border bg-card/40 px-4 py-2 text-sm font-medium uppercase tracking-wider text-foreground/80 backdrop-blur-sm"
                >
                  {exp}
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Stats() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })
  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 28,
    restDelta: 0.001,
  })
  const [active, setActive] = useState(0)

  useMotionValueEvent(smooth, 'change', (v) => {
    const next = v < 0.39 ? 0 : v < 0.73 ? 1 : 2
    setActive(next)
  })

  return (
    <section ref={ref} className="relative h-[340vh] bg-background">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {stats.map((s, i) => (
          <Panel key={i} stat={s} index={i} progress={smooth} />
        ))}

        {/* Progress bars indicating the active panel */}
        <div className="absolute left-5 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-2 md:left-10">
          {stats.map((_, i) => (
            <motion.span
              key={i}
              animate={{
                height: active === i ? 48 : 20,
                opacity: active === i ? 1 : 0.4,
                backgroundColor:
                  active === i ? 'hsla(191, 40%, 60%, 1)' : 'rgba(240, 239, 236, 1)',
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-px"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

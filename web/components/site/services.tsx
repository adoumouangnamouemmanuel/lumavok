'use client'

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { Boxes, BrainCircuit, CodeXml, LayoutTemplate, Lightbulb, Palette, type LucideIcon } from 'lucide-react'
import Image from 'next/image'
import { useRef, useState } from 'react'

type Service = {
  num: string
  title: string
  sub: string
  insight: string
  Icon: LucideIcon
}

const services: Service[] = [
  {
    num: '01',
    title: 'Développement Logiciel',
    sub: 'Web · Mobile · Systèmes',
    insight:
      'Sites, applications mobiles, e-commerce et systèmes de gestion sur mesure; pensés pour durer et passer à l’échelle.',
    Icon: CodeXml,
  },
  {
    num: '02',
    title: 'IA & Machine Learning',
    sub: 'Automatisation intelligente',
    insight:
      'Chatbots, assistants et automatisations qui apprennent de vos données pour fluidifier vos opérations.',
    Icon: BrainCircuit,
  },
  {
    num: '03',
    title: 'Design UI / UX',
    sub: 'Conception centrée sur l’humain',
    insight:
      'Recherche utilisateur, wireframes et design systems pour des interfaces claires, accessibles et mémorables.',
    Icon: Palette,
  },
  {
    num: '04',
    title: 'Création de Portfolio',
    sub: 'Démarquez-vous en ligne',
    insight:
      'Portfolios académiques, CV web et vitrines numériques qui racontent votre histoire et inspirent confiance.',
    Icon: LayoutTemplate,
  },
  {
    num: '05',
    title: 'Conseil & Stratégie',
    sub: 'Une stratégie qui évolue',
    insight:
      'Choix technologiques, modernisation des systèmes et insights marché pour décider avec lucidité.',
    Icon: Lightbulb,
  },
  {
    num: '06',
    title: 'Produits SaaS',
    sub: 'Conçus pour l’échelle',
    insight:
      'Plateformes freemium et par abonnement, sécurisées et prêtes à grandir avec votre marché.',
    Icon: Boxes,
  },
]

// Gentle symmetric arc across the row — bigger dip at the edges.
const arc = [
  { y: 64, rot: -6 },
  { y: 26, rot: -3.5 },
  { y: 4, rot: -1.5 },
  { y: 4, rot: 1.5 },
  { y: 26, rot: 3.5 },
  { y: 64, rot: 6 },
]

function Card({
  service,
  offset,
  active,
  onHover,
}: {
  service: Service
  offset: { y: number; rot: number }
  active: boolean
  onHover: (v: boolean) => void
}) {
  const { Icon } = service
  return (
    <motion.div
      onHoverStart={() => onHover(true)}
      onHoverEnd={() => onHover(false)}
      style={{ y: offset.y, rotate: offset.rot }}
      whileHover={{ y: offset.y - 28, rotate: 0, scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 220, damping: 24 }}
      className="relative flex h-[380px] w-[230px] shrink-0 flex-col overflow-hidden rounded-2xl shadow-2xl shadow-black/60 ring-1 ring-white/10 sm:h-[400px] sm:w-[250px]"
    >
      <div className="flex flex-[0.9] items-center justify-center bg-gradient-to-br from-[oklch(0.9_0.06_165)] via-[oklch(0.88_0.05_200)] to-[oklch(0.86_0.06_255)]">
        <Icon className="h-14 w-14 text-[oklch(0.2_0.01_285)]" strokeWidth={1.4} />
      </div>
      <div className="relative flex flex-1 flex-col justify-between bg-card p-5">
        <span className="font-serif text-sm italic text-muted-foreground">
          {service.num}
        </span>
        <div>
          <h3 className="font-serif text-xl italic leading-tight text-foreground">
            {service.title}
          </h3>
          <p className="mt-1.5 text-xs text-muted-foreground">{service.sub}</p>
        </div>

        <motion.div
          initial={false}
          animate={{ opacity: active ? 1 : 0, y: active ? 0 : 16 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-card via-card to-card/85 p-5"
        >
          <span className="font-serif text-sm italic text-muted-foreground">
            {service.num}
          </span>
          <h3 className="mt-1 font-serif text-xl italic leading-tight text-foreground">
            {service.title}
          </h3>
          <p className="mt-2.5 text-xs leading-relaxed text-foreground/80">
            {service.insight}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function Services() {
  const ref = useRef<HTMLElement>(null)
  const [hovered, setHovered] = useState<number | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  // Smooth the scroll so the row glides instead of tracking 1:1.
  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    restDelta: 0.001,
  })

  // Cards start fully off-screen right (hidden) and the last exits left.
  const x = useTransform(smooth, [0, 1], ['100%', '-118%'])
  // Background drifts and zooms throughout.
  const bgScale = useTransform(smooth, [0, 0.5, 1], [1.08, 1.2, 1.08])
  const bgX = useTransform(smooth, [0, 1], ['3%', '-3%'])

  return (
    <section id="services" ref={ref} className="relative h-[420vh]">
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <motion.div
          style={{ scale: bgScale, x: bgX }}
          className="absolute inset-0"
        >
          <Image
            src="/images/g6.jpeg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/35 to-background/95" />
        </motion.div>

        {/* Title sits BEHIND the cards, lower on the screen */}
        <div className="pointer-events-none absolute inset-x-0 bottom-6 z-0 flex flex-col items-center md:bottom-10">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground md:text-xs">
            {'// Ce que nous construisons'}
          </p>
          <h2 className="heading-tight text-[16vw] uppercase text-foreground/90 md:text-[12vw]">
            Nos Services
          </h2>
        </div>

        {/* Cards pass OVER the title */}
        <motion.div
          style={{ x }}
          className="relative z-10 flex items-center gap-12 px-[10vw] will-change-transform sm:gap-16"
        >
          {services.map((s, i) => (
            <Card
              key={s.num}
              service={s}
              offset={arc[i]}
              active={hovered === i}
              onHover={(v) => setHovered(v ? i : null)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

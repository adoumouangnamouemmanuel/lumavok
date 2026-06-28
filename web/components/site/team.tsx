'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const members = [
  {
    name: 'Deubaybe Dounia',
    role: 'Cheffe de projet',
    img: '/images/dounia.png',
    bio: 'Pilote la planification, l’exécution et la livraison de chaque projet Lumavok, dans les délais et les standards de qualité.',
  },
  {
    name: 'Emmanuel Adoum',
    role: 'Directeur Technique (CTO)',
    img: '/images/emma.png',
    bio: 'Définit la vision technologique et veille à des produits sécurisés, évolutifs et toujours en avance sur les tendances.',
  },
  {
    name: 'Clement Sampebgo',
    role: 'Administrateur Base de données',
    img: '/images/team3.png',
    bio: 'Conçoit et maintient des bases de données fiables, sécurisées et performantes pour chaque produit.',
  },
  {
    name: 'Soaliye Kindo Albert',
    role: 'Ingénieur principal',
    img: '/images/team5.png',
    bio: 'Guide la direction technique, garantit la qualité du code et l’architecture de nos solutions.',
  },
  {
    name: 'Tomoh Claude',
    role: 'Responsable Contenu & Réseaux sociaux',
    img: '/images/team7.png',
    bio: 'Crée et gère un contenu cohérent et engageant sur toutes nos plateformes en ligne.',
  },
  {
    name: 'Karimou N’Goila Abdoul-Akim',
    role: 'Producteur Multimédia',
    img: '/images/team8.png',
    bio: 'Imagine, filme et monte les vidéos qui racontent l’histoire et les projets de Lumavok.',
  },
]

function MemberCard({ m, index }: { m: (typeof members)[number]; index: number }) {
  return (
    <motion.article
      whileHover="hover"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-[420px] w-[270px] shrink-0 flex-col overflow-hidden rounded-xl bg-secondary sm:h-[470px] sm:w-[320px]"
    >
      <motion.img
        variants={{ hover: { scale: 1.07 } }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        src={m.img || '/placeholder.svg'}
        alt={`Portrait de ${m.name}`}
        className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      <div className="relative mt-auto p-6">
        <h3 className="text-xl font-bold leading-tight text-foreground">
          {m.name}
        </h3>
        <p className="mt-1 font-mono text-xs uppercase tracking-wider text-accent">
          {m.role}
        </p>
        <motion.p
          variants={{ hover: { height: 'auto', opacity: 1, marginTop: 12 } }}
          initial={{ height: 0, opacity: 0, marginTop: 0 }}
          className="overflow-hidden text-pretty text-sm leading-relaxed text-foreground/80"
        >
          {m.bio}
        </motion.p>
      </div>
    </motion.article>
  )
}

export function Team() {
  const ref = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [maxX, setMaxX] = useState(0)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  // Measure how far the track must travel so the last card ends centered.
  useEffect(() => {
    const measure = () => {
      const track = trackRef.current
      if (!track) return
      const distance = track.scrollWidth - window.innerWidth
      setMaxX(distance > 0 ? distance : 0)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const x = useTransform(scrollYProgress, [0, 1], [0, -maxX])

  return (
    <section id="equipe" ref={ref} className="relative h-[340vh] bg-background">
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <div className="mx-auto mb-10 w-full max-w-7xl px-6">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent">
            {'// L’équipe'}
          </p>
          <h2 className="heading-tight max-w-4xl text-balance text-4xl uppercase md:text-6xl">
            {'Des esprits jeunes, '}
            <span className="font-serif text-3xl font-light italic tracking-normal text-muted-foreground md:text-5xl">
              une ambition mondiale
            </span>
          </h2>
        </div>

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex items-center gap-6 sm:gap-8"
        >
          {/* Leading spacer centers the first card */}
          <div
            aria-hidden="true"
            className="h-px shrink-0 w-[calc(50vw-135px)] sm:w-[calc(50vw-160px)]"
          />
          {members.map((m, i) => (
            <MemberCard key={m.name} m={m} index={i} />
          ))}
          {/* Trailing spacer keeps the last card centered with margin */}
          <div
            aria-hidden="true"
            className="h-px shrink-0 w-[calc(50vw-135px)] sm:w-[calc(50vw-160px)]"
          />
        </motion.div>
      </div>
    </section>
  )
}

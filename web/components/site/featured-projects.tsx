'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    id: '01',
    title: 'Plateforme E-commerce B2B',
    category: 'Web & Backend',
    img: '/images/g1.png',
  },
  {
    id: '02',
    title: 'Application Fintech Sahel',
    category: 'Mobile & UI/UX',
    img: '/images/g3.png',
  },
  {
    id: '03',
    title: 'Système Logistique IA',
    category: 'Intelligence Artificielle',
    img: '/images/g5.png',
  },
]

export function FeaturedProjects() {
  const [hoveredIndex, setHoveredIndex] = useState(0)

  return (
    <section className="relative bg-background py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent"
            >
              {'// Nos Réalisations'}
            </motion.p>
            <h2 className="heading-tight max-w-2xl text-balance text-4xl uppercase md:text-6xl">
              {'Projets '}
              <span className="font-serif font-light italic tracking-normal text-muted-foreground">
                Récents
              </span>
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/projets"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground"
            >
              Voir tous les projets
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 lg:gap-24">
          {/* Left: Project List */}
          <div className="flex w-full flex-col">
            {projects.map((p, i) => (
              <Link
                href={`/projets/${p.id}`}
                key={p.id}
                onMouseEnter={() => setHoveredIndex(i)}
                className="group flex items-center justify-between border-b border-border/40 py-8 transition-colors hover:border-foreground md:py-12"
              >
                <div className="flex flex-col gap-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-accent">
                    {p.id} // {p.category}
                  </span>
                  <h3 className="text-3xl font-extrabold uppercase tracking-tight text-foreground/50 transition-all duration-500 group-hover:translate-x-4 group-hover:text-foreground md:text-4xl lg:text-5xl">
                    {p.title}
                  </h3>
                </div>
                <div className="overflow-hidden">
                  <ArrowUpRight className="h-8 w-8 -translate-x-8 text-accent opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
              </Link>
            ))}
          </div>

          {/* Right: Sticky Image Preview */}
          <div className="sticky top-[20vh] hidden aspect-square w-full overflow-hidden rounded-3xl bg-muted md:block lg:aspect-[4/5]">
            <AnimatePresence mode="wait">
              <motion.div
                key={hoveredIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={projects[hoveredIndex].img}
                  alt={projects[hoveredIndex].title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

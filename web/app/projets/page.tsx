'use client'


import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const projects = [
  {
    id: '01',
    title: 'Marché Atlas',
    subtitle: 'Plateforme E-commerce B2B',
    category: 'Web & Backend',
    year: '2025',
    img: '/images/g1.png',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: '02',
    title: 'Baobab Pay',
    subtitle: 'Application Fintech Sahel',
    category: 'Mobile & UI/UX',
    year: '2025',
    img: '/images/g3.png',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: '03',
    title: 'Logistique IA',
    subtitle: 'Système d\'optimisation prédictif',
    category: 'Intelligence Artificielle',
    year: '2024',
    img: '/images/g5.png',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: '04',
    title: 'Horizon Retail',
    subtitle: 'Tableau de bord Analytics',
    category: 'SaaS & Web',
    year: '2024',
    img: '/images/g4.png',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: '05',
    title: 'Fondation Éducation',
    subtitle: 'Identité Numérique & Portail',
    category: 'Design & Web',
    year: '2024',
    img: '/images/g2.png',
    demoUrl: '#',
    githubUrl: '#',
  },
]

export default function ProjectsPage() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // Move the container horizontally based on scroll progress
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%'])
  // Background parallax to give depth during horizontal scroll
  const bgX = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  return (
    <main className="relative bg-background">

      {/* Hero Intro */}
      <section className="relative flex min-h-[50vh] flex-col items-center justify-center pt-32 px-6 pb-20 text-center md:min-h-[60vh]">
        <div className="mx-auto flex max-w-4xl flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-accent"
          >
            {'// Innovation Sans Limites'}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="heading-tight text-balance text-6xl uppercase sm:text-7xl md:text-8xl lg:text-9xl"
          >
            Notre <span className="font-serif font-light italic text-muted-foreground">Portfolio</span>
          </motion.h1>
        </div>
      </section>

      {/* Horizontal Scroll Gallery */}
      <section ref={targetRef} className="relative h-[400vh] bg-background">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          {/* Subtle background texture that moves slightly against the scroll */}
          <motion.div
            style={{ x: bgX }}
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            aria-hidden="true"
          >
            <div className="h-full w-full bg-[url('data:image/svg+xml;utf8,%3Csvg%20viewBox=%220%200%20200%20200%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter%20id=%22noiseFilter%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.65%22%20numOctaves=%223%22%20stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] bg-repeat" />
          </motion.div>

          <motion.div style={{ x }} className="flex h-full items-center gap-12 px-[10vw] md:gap-24">
            {projects.map((p, i) => (
              <div key={p.id} className="group relative flex h-[70vh] w-[80vw] shrink-0 flex-col justify-center sm:w-[60vw] lg:w-[45vw]">
                {/* Number Watermark */}
                <span className="absolute -left-12 -top-12 z-0 font-serif text-[180px] font-bold leading-none text-foreground/[0.03] transition-colors duration-700 group-hover:text-accent/[0.08] md:-left-20 md:-top-20 md:text-[300px]">
                  {p.id}
                </span>

                <Link href={`/projets/${p.id}`} className="relative z-10 block h-full w-full overflow-hidden rounded-3xl bg-card shadow-2xl transition-all duration-700 group-hover:shadow-accent/20">
                  <div className="relative h-full w-full transition-transform duration-1000 group-hover:scale-105">
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      sizes="(max-width: 1024px) 80vw, 45vw"
                      className="object-cover opacity-80 transition-opacity duration-700 group-hover:opacity-100"
                      priority={i === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
                  </div>
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 flex w-full flex-col justify-end p-8 md:p-12">
                    <div className="flex items-center gap-4 text-accent">
                      <span className="font-mono text-xs uppercase tracking-widest">
                        {p.year}
                      </span>
                      <span className="h-px w-8 bg-accent/50" />
                      <span className="font-mono text-xs uppercase tracking-widest">
                        {p.category}
                      </span>
                    </div>
                    
                    <h2 className="mt-4 text-4xl font-extrabold uppercase tracking-tight text-foreground md:text-6xl">
                      {p.title}
                    </h2>
                    <p className="mt-2 max-w-md font-serif text-xl font-light italic text-foreground/80 md:text-2xl">
                      {p.subtitle}
                    </p>
                    
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <div className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold uppercase tracking-wider text-background transition-transform hover:scale-105">
                        Lire l'étude de cas
                        <ArrowRight className="h-4 w-4" />
                      </div>
                      
                      {/* Interactive Buttons (Stop propagation so they don't trigger the Link wrapper if they were separate, but here we placed them inside a Link. Let's fix that by making the buttons standalone) */}
                    </div>
                  </div>
                </Link>
                
                {/* External Actions (Placed OUTSIDE the Link to prevent hydration mismatch / nested anchors) */}
                <div className="relative z-20 mt-6 flex items-center gap-4 pl-4">
                  <a
                    href={p.demoUrl}
                    className="group/btn inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-foreground transition-all hover:border-accent hover:text-accent"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                    Live Demo
                  </a>
                  <a
                    href={p.githubUrl}
                    className="group/btn inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-foreground transition-all hover:bg-foreground hover:text-background"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="h-4 w-4 transition-transform group-hover/btn:scale-110" />
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

    </main>
  )
}

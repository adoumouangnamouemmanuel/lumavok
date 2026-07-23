'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { Link } from '@/i18n/routing'

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

import { useLocale } from 'next-intl'
import { getProjects } from '@/lib/projects'

export default function ProjectsPage() {
  const locale = useLocale()
  const projects = getProjects(locale)

  return (
    <main className="relative bg-background">

      {/* Hero Intro */}
      <section className="relative flex flex-col items-center justify-center pt-40 px-6 pb-20 text-center">
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
            className="heading-tight text-balance text-5xl font-extrabold uppercase sm:text-7xl md:text-8xl lg:text-9xl"
          >
            Notre <span className="font-serif font-light italic text-muted-foreground">Portfolio</span>
          </motion.h1>
        </div>
      </section>

      {/* Bento Box Gallery */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-4 pb-32 sm:px-6">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense">
          {projects.map((p, i) => {
            // Featured projects span 2 columns on medium screens and up
            const isLarge = p.featured;
            
            return (
              <motion.div 
                key={p.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`group relative flex flex-col overflow-hidden rounded-3xl bg-card shadow-2xl transition-all duration-700 hover:shadow-accent/20 
                  ${isLarge ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'}
                  min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]
                `}
              >
                <Link href={`/projets/${p.slug}`} className="absolute inset-0 z-10 block">
                  <span className="sr-only">Voir le projet {p.title}</span>
                </Link>

                {/* Number Watermark */}
                <span className="absolute -left-6 -top-6 z-0 font-serif text-[120px] font-bold leading-none text-foreground/[0.03] transition-colors duration-700 group-hover:text-accent/[0.08] sm:-left-8 sm:-top-8 sm:text-[150px]">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Background Image */}
                <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
                  <Image
                    src={p.image || '/images/projects/logo.png'}
                    alt={p.title}
                    fill
                    sizes={isLarge ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                    className="object-cover opacity-80 transition-opacity duration-700 group-hover:opacity-100"
                    priority={i < 3}
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
                </div>
                
                {/* Overlay Content */}
                <div className="relative z-20 mt-auto flex flex-col justify-end p-6 sm:p-8 md:p-10 pointer-events-none">
                  <div className="flex items-center gap-4 text-white/80">
                    <span className="font-mono text-xs uppercase tracking-widest drop-shadow-sm">
                      {p.date.split('-')[0]}
                    </span>
                    <span className="h-px w-6 bg-white/50" />
                    <span className="font-mono text-xs uppercase tracking-widest drop-shadow-sm">
                      {p.category}
                    </span>
                  </div>
                  
                  <h2 className="mt-3 text-2xl font-extrabold uppercase tracking-tight text-white drop-shadow-md sm:text-3xl md:text-4xl">
                    {p.title}
                  </h2>
                  
                  <div className="mt-6 flex flex-wrap items-center gap-4 pointer-events-auto">
                    <Link 
                      href={`/projets/${p.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black transition-transform hover:scale-105 shadow-lg"
                    >
                      Étude de cas
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    
                    {p.demo && (
                      <a
                        href={p.demo}
                        className="group/btn inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:border-white hover:bg-white hover:text-black"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                        Live
                      </a>
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        className="group/btn inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-black hover:border-white"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Github className="h-4 w-4 transition-transform group-hover/btn:scale-110" />
                        {p.github.split('/').pop() || 'Code'}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

    </main>
  )
}

'use client'


import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import Image from 'next/image'

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
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useRef } from 'react'

const projectsData = {
  '01': {
    title: 'Marché Atlas',
    subtitle: 'Plateforme E-commerce B2B',
    category: 'Web & Backend',
    year: '2025',
    client: 'Atlas Corp',
    img: '/images/g1.png',
    demoUrl: '#',
    githubUrl: '#',
    challenge:
      "Le client avait besoin d'une solution e-commerce B2B capable de gérer des milliers de transactions complexes par jour avec un système de tarification dynamique par client.",
    solution:
      "Nous avons développé une plateforme sur mesure utilisant Next.js et Node.js, intégrant un moteur de règles de tarification ultra-rapide et un tableau de bord analytique en temps réel.",
    tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'],
    results: [
      { label: 'Transactions/jour', value: '10k+' },
      { label: 'Temps de réponse', value: '< 50ms' },
      { label: 'Croissance', value: '+300%' },
    ],
    features: [
      'Tarification dynamique en temps réel',
      'Tableau de bord B2B complet',
      'Intégration ERP & CRM',
      'Gestion multi-devises',
    ],
    timeline: [
      { phase: 'Recherche', desc: 'Analyse des besoins et architecture' },
      { phase: 'Conception', desc: 'Prototypage UI/UX B2B' },
      { phase: 'Développement', desc: 'Sprints agiles sur 3 mois' },
      { phase: 'Lancement', desc: 'Déploiement et formation' },
    ],
  },
  '02': {
    title: 'Baobab Pay',
    subtitle: 'Application Fintech Sahel',
    category: 'Mobile & UI/UX',
    year: '2025',
    client: 'Baobab Finance',
    img: '/images/g3.png',
    demoUrl: '#',
    githubUrl: '#',
    challenge:
      "Créer une application de transfert d'argent intuitive fonctionnant parfaitement même sur des réseaux à faible bande passante.",
    solution:
      "Une application mobile React Native optimisée pour le mode hors ligne avec synchronisation optimiste et une interface utilisateur ultra-simplifiée.",
    tech: ['React Native', 'Expo', 'Go', 'GraphQL'],
    results: [
      { label: 'Utilisateurs actifs', value: '250k' },
      { label: 'Disponibilité', value: '99.99%' },
      { label: 'Taux de rétention', value: '85%' },
    ],
    features: [
      'Transferts hors ligne (USSD fallback)',
      'Interface multi-langues',
      'Sécurité biométrique',
      'Notifications push en temps réel',
    ],
    timeline: [
      { phase: 'UX Research', desc: 'Tests terrains et interviews' },
      { phase: 'Design', desc: 'Système de design accessible' },
      { phase: 'Engineering', desc: 'Développement React Native & Go' },
      { phase: 'Rollout', desc: 'Lancement progressif par région' },
    ],
  },
  '03': {
    title: 'Logistique IA',
    subtitle: "Système d'optimisation prédictif",
    category: 'Intelligence Artificielle',
    year: '2024',
    client: 'Logistique Sahel',
    img: '/images/g5.png',
    demoUrl: '#',
    githubUrl: '#',
    challenge:
      "Optimiser les itinéraires de livraison à travers des zones urbaines denses avec un trafic imprévisible.",
    solution:
      "Intégration d'un modèle de machine learning prédictif qui ajuste les itinéraires en temps réel en fonction des données de trafic historiques et en direct.",
    tech: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    results: [
      { label: 'Réduction des coûts', value: '25%' },
      { label: 'Temps de trajet', value: '-30%' },
      { label: 'Livraisons/jour', value: '+50%' },
    ],
    features: [
      'Algorithme de routage prédictif',
      'Suivi en temps réel des flottes',
      'Application conducteur dédiée',
      'Analyse des performances',
    ],
    timeline: [
      { phase: 'Data Science', desc: 'Collecte et nettoyage des données' },
      { phase: 'Machine Learning', desc: 'Entraînement des modèles' },
      { phase: 'Intégration', desc: 'API FastAPI et dashboard React' },
      { phase: 'Déploiement', desc: 'Phase pilote sur 50 véhicules' },
    ],
  },
}

export default function ProjectDetail() {
  const params = useParams()
  const id = params.id as string
  const project = projectsData[id as keyof typeof projectsData]

  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <h1 className="text-2xl font-bold">Projet non trouvé</h1>
      </div>
    )
  }

  return (
    <main className="relative bg-background">
      {/* Hero Parallax */}
      <section ref={heroRef} className="relative h-[80vh] w-full overflow-hidden sm:h-[90vh]">
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <Image
            src={project.img}
            alt={project.title}
            fill
            className="object-cover opacity-50 transition-opacity duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center pt-20">
          <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 flex items-center gap-4 text-accent"
            >
              <span className="rounded-full border border-accent/30 bg-accent/10 px-4 py-1 font-mono text-xs uppercase tracking-widest text-accent">
                {project.year}
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-accent/80">
                {project.category}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-balance text-5xl font-extrabold uppercase tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-[7rem]"
            >
              {project.title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 max-w-2xl font-serif text-2xl font-light italic text-muted-foreground sm:text-3xl"
            >
              {project.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="relative z-10 -mt-32 bg-background px-6 py-24 md:py-36 rounded-t-[3rem] shadow-[0_-40px_80px_-24px_rgba(0,0,0,0.7)]">
        <div className="mx-auto max-w-7xl">
          
          {/* Results Highlight Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-24 grid grid-cols-1 divide-y divide-border rounded-3xl border border-border bg-card/40 backdrop-blur-md md:grid-cols-3 md:divide-x md:divide-y-0"
          >
            {project.results.map((res, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-10 text-center">
                <span className="text-4xl font-extrabold text-foreground md:text-5xl">{res.value}</span>
                <span className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">{res.label}</span>
              </div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_2fr]">
            
            {/* Sticky Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-12 lg:sticky lg:top-32 lg:h-fit"
            >
              <div>
                <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Client
                </h3>
                <p className="text-2xl font-medium text-foreground">
                  {project.client}
                </p>
              </div>
              
              <div>
                <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Technologies
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li key={t} className="rounded-full border border-border bg-muted px-4 py-1.5 text-xs font-semibold text-foreground">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4 pt-6">
                <a
                  href={project.demoUrl}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-4 text-sm font-semibold uppercase tracking-wider text-background transition-transform hover:scale-105"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  Visiter le site
                </a>
                <a
                  href={project.githubUrl}
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-4 text-sm font-semibold uppercase tracking-wider text-foreground transition-all hover:bg-muted"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="h-4 w-4 transition-transform group-hover:scale-110" />
                  Code Source
                </a>
              </div>
            </motion.aside>

            {/* Main Content Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-20"
            >
              <div className="flex flex-col gap-8">
                <h2 className="text-3xl font-bold uppercase tracking-tight md:text-4xl">
                  Le Défi
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground md:text-2xl">
                  {project.challenge}
                </p>
              </div>

              <div className="flex flex-col gap-8">
                <h2 className="text-3xl font-bold uppercase tracking-tight md:text-4xl">
                  La Solution
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground md:text-2xl">
                  {project.solution}
                </p>
              </div>

              {/* Key Features */}
              <div className="flex flex-col gap-8">
                <h2 className="text-3xl font-bold uppercase tracking-tight md:text-4xl">
                  Fonctionnalités Clés
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {project.features.map((feat, i) => (
                    <li key={i} className="rounded-2xl border border-border/50 bg-card/30 p-6 flex items-start gap-4">
                      <div className="mt-1 h-2 w-2 rounded-full bg-accent shrink-0" />
                      <span className="text-lg text-foreground/90">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline */}
              <div className="flex flex-col gap-8">
                <h2 className="text-3xl font-bold uppercase tracking-tight md:text-4xl">
                  Processus
                </h2>
                <div className="relative border-l border-border/50 ml-4 pl-8 flex flex-col gap-12">
                  {project.timeline.map((step, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full bg-background border border-accent">
                        <div className="h-2 w-2 rounded-full bg-accent" />
                      </div>
                      <h4 className="font-mono text-sm uppercase tracking-widest text-accent mb-2">Phase 0{i + 1} // {step.phase}</h4>
                      <p className="text-lg text-muted-foreground">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        </div>

        {/* Back Link */}
        <div className="mx-auto mt-32 max-w-7xl border-t border-border pt-16">
          <Link
            href="/projets"
            className="group inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            Retour aux projets
          </Link>
        </div>
      </section>

    </main>
  )
}

'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Sparkles } from 'lucide-react'

type Plan = {
  name: string
  desc: string
  from: string
  to: string
  features: string[]
  featured?: boolean
}

const plans: Plan[] = [
  {
    name: 'Starter',
    desc: 'Pour les particuliers, étudiants et micro-entreprises qui lancent leur première identité en ligne.',
    from: '$45',
    to: "jusqu'à $199",
    features: [
      '1 à 3 pages',
      'Design responsive',
      'Formulaire de contact',
      'SEO de base',
    ],
  },
  {
    name: 'Business',
    desc: 'Pour les PME qui ont besoin d’une présence en ligne complète et professionnelle.',
    from: '$180',
    to: "jusqu'à $1 200",
    featured: true,
    features: [
      '4 à 8 pages',
      'Tableau de bord admin (option)',
      'Identité de marque',
      'Configuration SEO complète',
    ],
  },
  {
    name: 'E-Commerce',
    desc: 'Pour vendre produits physiques ou numériques avec un paiement sécurisé.',
    from: '$450',
    to: 'jusqu’à $2 499+',
    features: [
      'Paiement intégré',
      'Gestion de stock',
      'Comptes clients',
      'Gestion des commandes',
    ],
  },
  {
    name: 'Sur mesure',
    desc: 'Plateformes taillées autour de workflows uniques et d’exigences avancées.',
    from: '$1 400',
    to: 'jusqu’à $5 000+',
    features: [
      'Analyse des besoins',
      'Architecture personnalisée',
      'Rôles & analytics',
      'Support long terme',
    ],
  },
]

const addons = [
  'Applications mobiles',
  'UI / UX Design',
  'Portfolios pro',
  'Conseil & stratégie',
  'Chatbots & IA',
  'Maintenance',
]

const ease = [0.22, 1, 0.36, 1] as const

export function Pricing() {
  return (
    <section id="tarifs" className="relative bg-background py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent"
            >
              {'// Tarifs transparents'}
            </motion.p>
            <h2 className="heading-tight max-w-3xl text-balance text-4xl uppercase sm:text-5xl md:text-7xl">
              {'La qualité, '}
              <span className="font-serif text-3xl font-light italic tracking-normal text-muted-foreground sm:text-4xl md:text-6xl">
                à portée de main
              </span>
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground"
          >
            La valeur d’abord, des livrables clairs, des paliers adaptés à votre
            budget. Le prix évolue uniquement avec la complexité du projet.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
              whileHover={{ y: -10 }}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border p-6 backdrop-blur-sm transition-colors ${
                p.featured
                  ? 'border-accent/60 bg-accent/[0.06]'
                  : 'border-border bg-card/50 hover:border-accent/40'
              }`}
            >
              {/* Featured glow */}
              {p.featured && (
                <>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/25 blur-3xl"
                  />
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-accent-foreground">
                    <Sparkles className="h-3 w-3" />
                    Populaire
                  </span>
                </>
              )}
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                {p.name}
              </h3>
              <p className="mt-3 min-h-[72px] text-pretty text-xs leading-relaxed text-muted-foreground">
                {p.desc}
              </p>

              <div className="mt-5 border-t border-border pt-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  À partir de
                </span>
                <div className="mt-1 flex items-baseline gap-1.5">
                  <span className="text-4xl font-extrabold tracking-tight text-foreground">
                    {p.from}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">{p.to}</span>
              </div>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-foreground/80"
                  >
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        p.featured ? 'bg-accent/20' : 'bg-secondary'
                      }`}
                    >
                      <Check className="h-3 w-3 text-accent" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-wider transition-all group-hover:gap-2.5 ${
                  p.featured
                    ? 'bg-accent text-accent-foreground hover:brightness-110'
                    : 'bg-secondary text-foreground hover:bg-foreground hover:text-background'
                }`}
              >
                Demander un devis
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </motion.article>
          ))}
        </div>

        {/* Add-ons + notes */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mt-12 flex flex-col items-start gap-6 rounded-2xl border border-border bg-card/40 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              Aussi disponibles à la demande
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {addons.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs text-foreground/80 transition-colors hover:border-accent/50 hover:text-foreground"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
          <div className="flex shrink-0 flex-col gap-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-accent" />
              Réduction étudiante de 20 %
            </span>
            <span className="inline-flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-accent" />
              Crédit de parrainage de $10
            </span>
            <span className="inline-flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-accent" />
              Paiement échelonné possible
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

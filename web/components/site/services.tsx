'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Boxes, BrainCircuit, CodeXml, LayoutTemplate, Lightbulb, Palette, X, type LucideIcon } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

type Service = {
  num: string
  title: string
  sub: string
  insight: string
  details: string
  Icon: LucideIcon
  span: string
  image: string
}

export function Services() {
  const t = useTranslations('Services')
  const [selectedId, setSelectedId] = useState<string | null>(null)

  // Block scroll when modal is open
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => { document.body.style.overflow = 'auto' }
  }, [selectedId])

  const services: Service[] = [
    {
      num: '01',
      title: t('s1_title'),
      sub: t('s1_sub'),
      insight: t('s1_insight'),
      details: t('s1_details'),
      Icon: CodeXml,
      span: 'md:col-span-2 md:row-span-1',
      image: '/images/services/sofware_dev.jpeg',
    },
    {
      num: '02',
      title: t('s2_title'),
      sub: t('s2_sub'),
      insight: t('s2_insight'),
      details: t('s2_details'),
      Icon: BrainCircuit,
      span: 'md:col-span-1 md:row-span-1',
      image: '/images/services/ai_ml.jpeg',
    },
    {
      num: '03',
      title: t('s3_title'),
      sub: t('s3_sub'),
      insight: t('s3_insight'),
      details: t('s3_details'),
      Icon: Palette,
      span: 'md:col-span-1 md:row-span-2',
      image: '/images/services/design.jpeg',
    },
    {
      num: '04',
      title: t('s4_title'),
      sub: t('s4_sub'),
      insight: t('s4_insight'),
      details: t('s4_details'),
      Icon: LayoutTemplate,
      span: 'md:col-span-1 md:row-span-1',
      image: '/images/services/portfolio_creation.jpeg',
    },
    {
      num: '05',
      title: t('s5_title'),
      sub: t('s5_sub'),
      insight: t('s5_insight'),
      details: t('s5_details'),
      Icon: Lightbulb,
      span: 'md:col-span-1 md:row-span-1',
      image: '/images/services/consulting_strategy.jpeg',
    },
    {
      num: '06',
      title: t('s6_title'),
      sub: t('s6_sub'),
      insight: t('s6_insight'),
      details: t('s6_details'),
      Icon: Boxes,
      span: 'md:col-span-2 md:row-span-1',
      image: '/images/services/saas_product.jpeg',
    },
  ]

  const selectedService = services.find((s) => s.num === selectedId)

  return (
    <section id="services" className="relative bg-background py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        
        <div className="mb-16 flex flex-col items-center text-center">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground md:text-xs">
            {t('subtitle')}
          </p>
          <h2 className="heading-tight text-4xl uppercase text-foreground md:text-6xl">
            {t('title')}
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 md:auto-rows-[300px]">
          {services.map((service, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              layoutId={`card-${service.num}`}
              key={service.num}
              onClick={() => setSelectedId(service.num)}
              className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-border/40 bg-card p-6 shadow-xl transition-all hover:border-border/80 hover:shadow-2xl ${service.span} min-h-[300px] md:min-h-0`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover opacity-20 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-30"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-transparent" />
              </div>
              
              <div className="relative z-10 flex h-full flex-col">
                <motion.div layoutId={`icon-bg-${service.num}`} className="mb-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 backdrop-blur-md">
                  <service.Icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                </motion.div>
                
                <div className="mt-8 flex flex-col">
                  <motion.span layoutId={`num-${service.num}`} className="font-serif text-sm italic text-muted-foreground">
                    {service.num}
                  </motion.span>
                  <motion.h3 layoutId={`title-${service.num}`} className="font-serif text-2xl italic leading-tight text-foreground md:text-3xl">
                    {service.title}
                  </motion.h3>
                  <motion.p layoutId={`sub-${service.num}`} className="mt-1 text-sm font-medium text-primary/80">
                    {service.sub}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {selectedId && selectedService && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[250] bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedId(null)}
            />
            
            <div className="fixed inset-0 z-[251] flex items-center justify-center p-4 pointer-events-none md:p-10">
              <motion.div
                layoutId={`card-${selectedService.num}`}
                className="pointer-events-auto relative flex w-full max-w-2xl flex-col overflow-hidden rounded-3xl bg-card shadow-2xl ring-1 ring-border"
              >
                {/* Image Cover */}
                <div className="relative h-48 md:h-64 w-full">
                  <Image
                    src={selectedService.image}
                    alt={selectedService.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  
                  <button
                    onClick={() => setSelectedId(null)}
                    className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/50 backdrop-blur-md transition-colors hover:bg-background"
                  >
                    <X className="h-5 w-5 text-foreground" />
                  </button>
                </div>

                <div className="relative p-8 pt-0 md:p-12 md:pt-0">
                  <motion.div layoutId={`icon-bg-${selectedService.num}`} className="relative -mt-8 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-card ring-4 ring-background shadow-lg">
                    <selectedService.Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                  </motion.div>

                  <motion.span layoutId={`num-${selectedService.num}`} className="font-serif text-sm italic text-muted-foreground">
                    {selectedService.num}
                  </motion.span>
                  <motion.h3 layoutId={`title-${selectedService.num}`} className="mb-2 font-serif text-3xl italic leading-tight text-foreground md:text-5xl">
                    {selectedService.title}
                  </motion.h3>
                  <motion.p layoutId={`sub-${selectedService.num}`} className="mb-8 text-sm font-medium uppercase tracking-widest text-primary">
                    {selectedService.sub}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="flex flex-col gap-6"
                  >
                    <p className="text-lg leading-relaxed text-foreground/90">
                      {selectedService.insight}
                    </p>
                    <div className="h-px w-full bg-border" />
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {selectedService.details}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

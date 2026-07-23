'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Boxes, BrainCircuit, CodeXml, LayoutTemplate, Lightbulb, Palette, X, type LucideIcon } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { createPortal } from 'react-dom'

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
              <div className="absolute inset-0 z-0 bg-black">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority={i === 0 || i === 1}
                  className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
              </div>
              
              <div className="relative z-10 flex h-full flex-col">
                <motion.div layoutId={`icon-bg-${service.num}`} className="mb-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md">
                  <service.Icon className="h-7 w-7 text-white" strokeWidth={1.5} />
                </motion.div>
                
                <div className="mt-8 flex flex-col drop-shadow-md">
                  <motion.span layoutId={`num-${service.num}`} className="font-serif text-sm italic text-white/70">
                    {service.num}
                  </motion.span>
                  <motion.h3 layoutId={`title-${service.num}`} className="font-serif text-2xl italic leading-tight text-white md:text-3xl">
                    {service.title}
                  </motion.h3>
                  <motion.p layoutId={`sub-${service.num}`} className="mt-1 text-sm font-medium text-white/90">
                    {service.sub}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Expanded Modal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedId && selectedService && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none p-4 md:p-10">
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-0 bg-background/80 backdrop-blur-sm pointer-events-auto"
                onClick={() => setSelectedId(null)}
              />
              
              <motion.div
                key={`modal-${selectedService.num}`}
                layoutId={`card-${selectedService.num}`}
                className="pointer-events-auto relative z-10 flex w-full max-w-5xl max-h-[90vh] flex-col md:flex-row overflow-hidden rounded-[2rem] bg-card shadow-2xl ring-1 ring-border"
              >
                {/* Left/Top Image Cover */}
                <div className="relative h-56 w-full shrink-0 md:h-auto md:w-5/12">
                  <Image
                    src={selectedService.image}
                    alt={selectedService.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                  
                  {/* Mobile close button */}
                  <button
                    onClick={() => setSelectedId(null)}
                    className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/50 backdrop-blur-md transition-colors hover:bg-background md:hidden"
                  >
                    <X className="h-5 w-5 text-foreground" />
                  </button>
                </div>

                {/* Right/Bottom Content */}
                <div className="relative flex flex-col overflow-y-auto p-8 pt-0 md:w-7/12 md:p-14">
                  {/* Desktop close button */}
                  <button
                    onClick={() => setSelectedId(null)}
                    className="absolute right-6 top-6 z-10 hidden h-10 w-10 items-center justify-center rounded-full bg-muted/50 transition-colors hover:bg-muted md:flex"
                  >
                    <X className="h-5 w-5 text-foreground" />
                  </button>

                  <motion.div 
                    layoutId={`icon-bg-${selectedService.num}`} 
                    className="relative -mt-8 mb-8 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-card shadow-lg ring-4 ring-background md:mt-0 md:bg-primary/10 md:shadow-none md:ring-0"
                  >
                    <selectedService.Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                  </motion.div>

                  <div className="flex flex-col">
                    <motion.span layoutId={`num-${selectedService.num}`} className="font-serif text-sm italic text-muted-foreground">
                      {selectedService.num}
                    </motion.span>
                    <motion.h3 layoutId={`title-${selectedService.num}`} className="mb-2 mt-1 font-serif text-3xl italic leading-tight text-foreground md:text-4xl lg:text-5xl">
                      {selectedService.title}
                    </motion.h3>
                    <motion.p layoutId={`sub-${selectedService.num}`} className="mb-8 text-sm font-medium uppercase tracking-widest text-primary">
                      {selectedService.sub}
                    </motion.p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="flex flex-col gap-6"
                  >
                    <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
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
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  )
}

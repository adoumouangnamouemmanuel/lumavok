'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  badgeText: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
  badgeColorClass?: string
  watermarkText?: string
  as?: 'h1' | 'h2'
}

export function SectionHeader({
  badgeText,
  title,
  description,
  align = 'left',
  badgeColorClass = 'text-google-blue bg-google-blue/5 border-google-blue/10',
  watermarkText,
  as = 'h2',
}: SectionHeaderProps) {
  const isCenter = align === 'center'
  const HeadingTag = as

  return (
    <div
      className={cn(
        'relative mb-16 flex flex-col',
        isCenter ? 'items-center text-center' : 'items-start text-left',
      )}
    >
      {/* Massive subtle background watermark */}
      {watermarkText && (
        <span
          className={cn(
            'pointer-events-none absolute -top-8 left-1/2 -z-10 -translate-x-1/2 select-none text-[8rem] font-extrabold leading-none text-foreground/[0.02] tracking-tighter sm:text-[12rem] md:text-[16rem]',
            !isCenter && 'left-0 translate-x-0',
          )}
        >
          {watermarkText}
        </span>
      )}

      {/* Modern Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className={cn(
          'inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] shadow-sm',
          badgeColorClass,
        )}
      >
        <span className="relative flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-75"></span>
          <span className="relative inline-flex size-2 rounded-full bg-current"></span>
        </span>
        {badgeText}
      </motion.div>

      {/* Main Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={cn(
          'mt-6 text-balance text-3xl font-extrabold leading-[1.1] tracking-tight md:text-4xl lg:text-5xl',
          isCenter ? 'max-w-3xl' : 'max-w-2xl',
        )}
      >
        <HeadingTag>{title}</HeadingTag>
      </motion.div>

      {/* Thin elegant rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={cn(
          'mt-6 h-px w-24 bg-border origin-left',
          isCenter && 'origin-center',
        )}
      />

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={cn(
            'mt-6 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg',
            isCenter ? 'max-w-2xl' : 'max-w-xl',
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}

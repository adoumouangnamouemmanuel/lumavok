'use client'

import { motion } from 'framer-motion'

type MarqueeProps = {
  /** Single phrase repeated across the marquee */
  text?: string
  /** Multiple phrases joined and repeated across the marquee */
  items?: string[]
  /** seconds for one full loop */
  duration?: number
  className?: string
  reverse?: boolean
  repeat?: number
}

export function Marquee({
  text,
  items: itemsProp,
  duration = 28,
  className,
  reverse = false,
  repeat = 6,
}: MarqueeProps) {
  const phrases = itemsProp && itemsProp.length > 0 ? itemsProp : [text ?? '']
  const items = Array.from({ length: repeat })

  return (
    <div className={`relative w-full overflow-hidden ${className ?? ''}`}>
      <motion.div
        className="flex w-max flex-nowrap"
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration, ease: 'linear', repeat: Number.POSITIVE_INFINITY }}
      >
        {[0, 1].map((group) => (
          <div key={group} className="flex flex-nowrap" aria-hidden={group === 1}>
            {items.map((_, i) =>
              phrases.map((phrase, j) => (
                <span
                  key={`${i}-${j}`}
                  className="flex shrink-0 items-center whitespace-nowrap"
                >
                  {phrase}
                  <span className="px-4 text-accent sm:px-8">—</span>
                </span>
              )),
            )}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

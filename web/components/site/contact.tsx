'use client'

import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Check, Copy, Mail, Phone } from 'lucide-react'
import { useRef, useState } from 'react'
import { Marquee } from './marquee'

const EMAIL = 'hello@lumavok.com'
const PHONE = '+221 77 000 00 00'

function CopyField({
  icon: Icon,
  label,
  value,
  delay,
}: {
  icon: typeof Mail
  label: string
  value: string
  delay: number
}) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      /* clipboard unavailable */
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0, x: -32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-card/60 p-4 backdrop-blur-sm transition-colors hover:border-accent/50"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-accent transition-transform duration-500 group-hover:-translate-y-0.5">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {label}
          </p>
          <p className="text-sm font-medium text-foreground">{value}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={copy}
        aria-label={`Copier ${label}`}
        className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-secondary text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.span
              key="check"
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -14, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Check className="h-4 w-4" />
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -14, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Copy className="h-4 w-4" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  )
}

const fieldClasses =
  'peer w-full rounded-lg border border-border bg-background/60 px-4 pb-2.5 pt-5 text-sm text-foreground outline-none transition-all placeholder-transparent focus:border-accent focus:ring-2 focus:ring-accent/30'

function Field({
  index,
  children,
}: {
  index: number
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {children}
    </motion.div>
  )
}

const labelClasses =
  'pointer-events-none absolute left-4 top-2 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-placeholder-shown:normal-case peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.15em] peer-focus:text-accent'

export function Contact() {
  const ref = useRef<HTMLElement>(null)
  const [sent, setSent] = useState(false)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.22, 1])
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const glowY = useTransform(scrollYProgress, [0, 1], ['20%', '-20%'])

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden">
      <motion.div style={{ scale: bgScale, y: bgY }} className="absolute inset-0">
        <img
          src="/images/contact.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
      </motion.div>

      {/* Drifting + pulsing accent glow */}
      <motion.div
        style={{ y: glowY }}
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2"
      >
        <motion.div
          animate={{ scale: [1, 1.18, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="h-[60vmin] w-[60vmin] rounded-full bg-[radial-gradient(circle,oklch(0.5_0.09_320/0.4),transparent_70%)] blur-3xl"
        />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center font-mono text-xs uppercase tracking-[0.3em] text-accent"
        >
          {'// Démarrons un projet'}
        </motion.p>
        <h2 className="heading-tight mx-auto max-w-4xl text-balance text-center text-5xl uppercase md:text-8xl">
          {['Donnons', 'vie', 'à', 'votre'].map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mr-[0.25em] inline-block"
            >
              {w}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block font-serif font-light italic tracking-normal text-accent"
          >
            idée
          </motion.span>
        </h2>

        <div
          style={{ perspective: 1200 }}
          className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2"
        >
          {/* Contact details */}
          <div className="flex flex-col justify-center gap-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-pretty font-serif text-lg font-light italic leading-relaxed text-foreground/80"
            >
              Parlez-nous de votre projet. La première consultation est gratuite,
              et nous revenons vers vous sous 24 heures — où que vous soyez.
            </motion.p>
            <CopyField icon={Mail} label="Email" value={EMAIL} delay={0.1} />
            <CopyField icon={Phone} label="Téléphone" value={PHONE} delay={0.2} />
          </div>

          {/* Premium form, animates in on scroll */}
          <motion.form
            initial={{ opacity: 0, y: 60, scale: 0.96, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
            className="relative rounded-2xl border border-border bg-card/70 p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] backdrop-blur-md transition-shadow md:p-8"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [padding:1px] hover:opacity-100"
            />
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field index={0}>
                  <input id="c-name" required placeholder="Nom" className={fieldClasses} />
                  <label htmlFor="c-name" className={labelClasses}>
                    Nom
                  </label>
                </Field>
                <Field index={1}>
                  <input
                    id="c-email"
                    required
                    type="email"
                    placeholder="Email"
                    className={fieldClasses}
                  />
                  <label htmlFor="c-email" className={labelClasses}>
                    Email
                  </label>
                </Field>
              </div>
              <Field index={2}>
                <input
                  id="c-company"
                  placeholder="Entreprise"
                  className={fieldClasses}
                />
                <label htmlFor="c-company" className={labelClasses}>
                  Entreprise (optionnel)
                </label>
              </Field>
              <Field index={3}>
                <textarea
                  id="c-msg"
                  required
                  rows={4}
                  placeholder="Projet"
                  className={`${fieldClasses} resize-none`}
                />
                <label htmlFor="c-msg" className={labelClasses}>
                  Parlez-nous de votre projet
                </label>
              </Field>
              <Field index={4}>
                <button
                  type="submit"
                  disabled={sent}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {sent ? (
                      <motion.span
                        key="sent"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2"
                      >
                        Message envoyé <Check className="h-4 w-4" />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="send"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="inline-flex items-center gap-2"
                      >
                        Envoyer le message
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </Field>
            </div>
          </motion.form>
        </div>
      </div>

      <div className="relative border-y border-border py-6">
        <Marquee
          duration={110}
          className="text-5xl md:text-8xl"
          items={['Parlons-en', 'Lumavok', 'Parlons-en', 'Lumavok']}
        />
      </div>
    </section>
  )
}

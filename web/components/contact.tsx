'use client'

import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Check, Mail, MapPin, Phone, Linkedin, Instagram } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { SectionHeader } from '@/components/section-header'
import { Reveal } from '@/components/reveal'

const socialLinks = [
  { label: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:text-google-blue' },
  { label: 'Instagram', href: '#', icon: Instagram, color: 'hover:text-google-red' },
]

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="scroll-mt-24 py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          align="center"
          badgeText="Let's build together"
          title={
            <>
              Tell us about your <span className="text-google-green">project</span>.
            </>
          }
          description="Every project begins with a free consultation. No jargon, no pressure; just a clear conversation about what we can achieve together."
          watermarkText="CONTACT"
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: Contact form */}
          <Reveal>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center rounded-3xl border border-border bg-card p-12 text-center shadow-xl"
                >
                  <span className="flex size-16 items-center justify-center rounded-full bg-google-green text-white shadow-lg shadow-google-green/30">
                    <Check className="size-8" />
                  </span>
                  <h3 className="mt-6 text-2xl font-bold tracking-tight">
                    Thank you; message received.
                  </h3>
                  <p className="mt-3 text-muted-foreground">
                    Our team will be in touch within one business day to schedule
                    your free consultation.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 shadow-xl md:p-8"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Name" name="name" placeholder="Your name" />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                    />
                  </div>
                  <Field
                    label="Company / Project"
                    name="company"
                    placeholder="What are we building?"
                    required={false}
                  />
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us a little about your goals…"
                      className="rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all focus:border-google-blue focus:shadow-md focus:shadow-google-blue/10 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:shadow-primary/20"
                  >
                    Send message
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>

          {/* Right: Map + contact info */}
          <Reveal delay={100}>
            <div className="flex flex-col gap-5">
              {/* Google Map */}
              <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254434.5601923685!2d-0.2004797!3d5.606137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf14676e1b27cd3d%3A0x1e5575b2f1b9c9a5!2sAccra%2C%20Ghana!5e0!3m2!1sen!2s!4v1753356757200!5m2!1sen!2s"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lumavok Office Location; Accra, Ghana"
                  className="w-full"
                />
              </div>

              {/* Contact info cards */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <ContactCard
                  icon={Mail}
                  label="Email us"
                  value="contact@lumavok.dev"
                  href="mailto:contact@lumavok.dev"
                  color="bg-google-blue/10 text-google-blue"
                />
                <ContactCard
                  icon={Phone}
                  label="Call us"
                  value="+233503673195"
                  href="tel:+233503673195"
                  color="bg-google-green/10 text-google-green"
                />
                <ContactCard
                  icon={MapPin}
                  label="Visit us"
                  value="Accra, Ghana"
                  color="bg-google-red/10 text-google-red"
                />
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-muted-foreground">Follow us:</span>
                <div className="flex items-center gap-2">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className={cn(
                        'flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:shadow-md',
                        s.color,
                      )}
                    >
                      <s.icon className="size-4" />
                    </a>
                  ))}
                  <a
                    href="#"
                    aria-label="X (Twitter)"
                    className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:text-foreground hover:shadow-md"
                  >
                    <XIcon />
                  </a>
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:text-google-blue hover:shadow-md"
                  >
                    <FacebookIcon />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  color,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  href?: string
  color: string
}) {
  const Comp = href ? 'a' : 'div'
  return (
    <Comp
      {...(href ? { href } : {})}
      className="card-tilt flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:shadow-md"
    >
      <span className={cn('flex size-10 items-center justify-center rounded-lg', color)}>
        <Icon className="size-5" />
      </span>
      <div>
        <p className="text-xs font-semibold text-muted-foreground">{label}</p>
        <p className="text-sm font-medium text-foreground">{value}</p>
      </div>
    </Comp>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required = true,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-sm font-semibold text-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all focus:border-google-blue focus:shadow-md focus:shadow-google-blue/10 focus:outline-none"
      />
    </div>
  )
}

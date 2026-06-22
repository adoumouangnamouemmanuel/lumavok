import { Reveal } from '@/components/reveal'

const team = [
  { name: 'Deubaybe Dounia', role: 'Project Manager' },
  { name: 'Emmanuel Adoum', role: 'Chief Technology Officer' },
  { name: 'Soaliyé Banyoua Kindo', role: 'Lead Engineer' },
  { name: 'Clément Sampebgo', role: 'Database Administrator' },
  { name: 'Tomoh Claude', role: 'Content & Social Media' },
  { name: 'Ramatou Salah Hassane', role: 'Media & Communications' },
  { name: 'Karimou N\u2019Goila Abdoul-Akim', role: 'Multimedia Producer' },
]

function initials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase()
}

export function Team() {
  return (
    <section id="team" className="scroll-mt-24 bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
              The people
            </p>
            <h2 className="mt-4 max-w-2xl text-balance font-serif text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              A complementary team of young African builders.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
              Each brings specialized expertise and a shared commitment to the
              mission, building world-class technology from within.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal
              key={m.name}
              delay={i * 60}
              className="group flex items-center gap-4 bg-card p-6 transition-colors hover:bg-background"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent/12 font-serif text-base font-medium text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                {initials(m.name)}
              </span>
              <div>
                <p className="font-medium tracking-tight text-foreground">
                  {m.name}
                </p>
                <p className="text-sm text-muted-foreground">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

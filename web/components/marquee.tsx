const items = [
  'Software Development',
  'AI & Machine Learning',
  'UI / UX Design',
  'Portfolio Development',
  'Consulting & Advisory',
  'SaaS Products',
]

const dotColors = [
  'bg-google-blue',
  'bg-google-red',
  'bg-google-yellow',
  'bg-google-green',
]

export function Marquee() {
  return (
    <section
      className="marquee-pause relative mt-20 overflow-hidden border-y border-border bg-primary py-5 md:mt-28"
      aria-label="Our services"
    >

      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="px-8 text-xl font-semibold tracking-tight text-primary-foreground/90 md:text-2xl">
                {item}
              </span>
              <span
                className={`size-2 rounded-full ${dotColors[i % dotColors.length]}`}
                aria-hidden="true"
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

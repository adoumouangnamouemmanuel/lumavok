'use client'

import { cn } from '@/lib/utils'

export function Wordmark({
  className,
  showMark = true,
  lightText = false,
}: {
  className?: string
  showMark?: boolean
  lightText?: boolean
}) {
  return (
    <span
      className={cn(
        'group/logo inline-flex items-center gap-2.5 font-sans text-[1.4rem] font-extrabold tracking-tight select-none',
        lightText ? 'text-white' : 'text-foreground',
        className,
      )}
    >
      {showMark && <LogoMark lightText={lightText} />}
      <span className="relative leading-none transition-all duration-300 group-hover/logo:tracking-wide">
        <span className={lightText ? 'text-white' : 'text-foreground'}>Luma</span>
        <span className={lightText ? 'text-google-blue' : 'text-google-blue'}>vok</span>
        <span
          className="ml-0.5 inline-block size-1.5 rounded-full align-baseline animate-color-cycle"
          aria-hidden="true"
        />
      </span>
    </span>
  )
}

export function LogoMark({ className, lightText = false }: { className?: string, lightText?: boolean }) {
  return (
    <span
      className={cn(
        'relative grid size-10 shrink-0 place-items-center rounded-xl transition-all duration-700 ease-out group-hover/logo:rotate-[225deg] group-hover/logo:rounded-2xl group-hover/logo:scale-105',
        lightText ? 'bg-white' : 'bg-foreground',
        className,
      )}
      aria-hidden="true"
    >
      {/* Four orbiting brand dots */}
      <span className="absolute left-1.5 top-1.5 size-2.5 rounded-full bg-google-blue transition-all duration-700 group-hover/logo:scale-110 group-hover/logo:shadow-[0_0_8px_var(--google-blue)]" />
      <span className="absolute right-1.5 top-1.5 size-2.5 rounded-full bg-google-red transition-all duration-700 group-hover/logo:scale-110 group-hover/logo:shadow-[0_0_8px_var(--google-red)]" />
      <span className="absolute bottom-1.5 left-1.5 size-2.5 rounded-full bg-google-yellow transition-all duration-700 group-hover/logo:scale-110 group-hover/logo:shadow-[0_0_8px_var(--google-yellow)]" />
      <span className="absolute bottom-1.5 right-1.5 size-2.5 rounded-full bg-google-green transition-all duration-700 group-hover/logo:scale-110 group-hover/logo:shadow-[0_0_8px_var(--google-green)]" />
      {/* Center dot */}
      <span className={cn(
        "size-2 rounded-full transition-all duration-500 group-hover/logo:scale-75",
        lightText ? 'bg-black' : 'bg-background'
      )} />
    </span>
  )
}

'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ModeToggle({ scrolled = true }: { scrolled?: boolean }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Ensure hydration matches client side
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground opacity-50"
        aria-label="Chargement du thème"
      >
        <span className="sr-only">Chargement du thème</span>
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
        scrolled
          ? 'border-border text-foreground hover:bg-foreground hover:text-background'
          : 'border-white/30 text-white hover:bg-white hover:text-black'
      }`}
      aria-label="Basculer le thème"
    >
      {theme === 'dark' ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
      <span className="sr-only">Basculer le thème</span>
    </button>
  )
}

import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Newsreader } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/site/navbar'
import { Footer } from '@/components/site/footer'
import { ScrollToTop } from '@/components/site/scroll-to-top'
import { ThemeProvider } from '@/components/theme-provider'

const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

const newsreader = Newsreader({
  variable: '--font-newsreader',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'Lumavok — Des solutions locales, des standards mondiaux',
  description:
    'Lumavok est un studio technologique africain porté par la jeunesse. Nous concevons des sites web, des applications, des systèmes d’IA et des produits numériques qui relient les personnes, les idées et les opportunités.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: '#22272e' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={`${archivo.variable} ${newsreader.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <ScrollToTop />
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}

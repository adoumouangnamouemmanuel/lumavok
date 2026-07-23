import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Newsreader } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import '../globals.css'
import { Navbar } from '@/components/site/navbar'
import { Footer } from '@/components/site/footer'
import { ScrollToTop } from '@/components/site/scroll-to-top'
import { ThemeProvider } from '@/components/theme-provider'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'

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

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${GeistSans.variable} ${newsreader.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-background text-foreground" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
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
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

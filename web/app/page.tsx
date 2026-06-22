import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { Services } from '@/components/services'
import { Approach } from '@/components/approach'
import { Process } from '@/components/process'
import { Pricing } from '@/components/pricing'
import { Impact } from '@/components/impact'
import { Testimonials } from '@/components/testimonials'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="w-full overflow-hidden">
        <Hero />
        <Marquee />
        <Services />
        <Approach />
        <Process />
        <Pricing />
        <Impact />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}

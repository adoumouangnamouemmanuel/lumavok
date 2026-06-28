import { Navbar } from "@/components/site/navbar"
import { Hero } from "@/components/site/hero"
import { Intro } from "@/components/site/intro"
import { Gallery } from "@/components/site/gallery"
import { About } from "@/components/site/about"
import { Services } from "@/components/site/services"
import { Process } from "@/components/site/process"
import { Pricing } from "@/components/site/pricing"
import { Stats } from "@/components/site/stats"
import { Values } from "@/components/site/values"
import { Team } from "@/components/site/team"
import { Testimonials } from "@/components/site/testimonials"
import { Contact } from "@/components/site/contact"
import { Footer } from "@/components/site/footer"

/** Normal-flow sections rise over the previous one with a rounded lip + shadow. */
function Cover({
  children,
  z,
}: {
  children: React.ReactNode
  z: number
}) {
  return (
    <div
      style={{ zIndex: z }}
      className="relative -mt-[6vh] overflow-hidden rounded-t-[2.5rem] bg-background shadow-[0_-40px_80px_-24px_rgba(0,0,0,0.7)]"
    >
      {children}
    </div>
  )
}

/** Pinned sections just stack above the previous one. */
function Stack({
  children,
  z,
}: {
  children: React.ReactNode
  z: number
}) {
  return (
    <div style={{ zIndex: z }} className="relative">
      {children}
    </div>
  )
}

export default function Page() {
  return (
    <main className="relative">
      <Navbar />
      <Stack z={0}>
        <Hero />
      </Stack>
      <Cover z={10}>
        <Intro />
      </Cover>
      <Stack z={20}>
        <Gallery />
      </Stack>
      <Cover z={30}>
        <About />
      </Cover>
      <Stack z={40}>
        <Services />
      </Stack>
      <Stack z={50}>
        <Process />
      </Stack>
      <Cover z={60}>
        <Pricing />
      </Cover>
      <Stack z={70}>
        <Stats />
      </Stack>
      <Stack z={80}>
        <Values />
      </Stack>
      <Stack z={90}>
        <Team />
      </Stack>
      <Cover z={100}>
        <Testimonials />
      </Cover>
      <Cover z={110}>
        <Contact />
      </Cover>
      <Stack z={120}>
        <Footer />
      </Stack>
    </main>
  )
}

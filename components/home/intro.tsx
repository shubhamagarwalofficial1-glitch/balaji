import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container, Eyebrow } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { siteConfig } from '@/lib/site'

const points = [
  'Single trusted partner across multiple product categories',
  'Competitive bulk pricing with GST-compliant invoicing',
  'Dedicated account management from enquiry to delivery',
]

export function Intro() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/about-facility.png"
                alt="Shree Balaji Enterprises procurement and inventory facility"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 hidden rounded-xl border border-border bg-card px-6 py-5 shadow-xl sm:block lg:-right-6">
              <p className="font-serif text-3xl font-bold text-primary">Since {siteConfig.founded}</p>
              <p className="text-sm text-muted-foreground">Serving industry across India</p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-6">
            <Eyebrow>Who We Are</Eyebrow>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              A dependable sourcing partner built for modern industry
            </h2>
            <p className="leading-relaxed text-muted-foreground text-pretty">
              {siteConfig.name} is an industrial trading, procurement and sourcing company based in
              India. We help manufacturers, contractors and enterprises simplify their supply chains
              by delivering the right products, at the right price, on time — every time.
            </p>
            <ul className="flex flex-col gap-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{p}</span>
                </li>
              ))}
            </ul>
            <div>
              <Button
                render={
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="size-4" />
                  </Link>
                }
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

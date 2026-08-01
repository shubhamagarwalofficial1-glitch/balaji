import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container, Eyebrow } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { siteConfig } from '@/lib/site'

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white lg:py-28">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(/images/cta-industrial.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60" aria-hidden="true" />
      <Container className="relative">
        <Reveal className="flex max-w-2xl flex-col items-start gap-5">
          <Eyebrow>Let&apos;s Work Together</Eyebrow>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl md:text-5xl">
            Ready to streamline your industrial supply chain?
          </h2>
          <p className="text-base leading-relaxed text-white/70 text-pretty">
            Tell us what you need and our procurement specialists will get back to you with a
            competitive quote — usually within one business day.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="bg-gold text-gold-foreground hover:bg-gold/90"
              render={
                <Link href="/quote">
                  Request a Quote
                  <ArrowRight className="size-4" />
                </Link>
              }
            />
            <Button
              size="lg"
              variant="outline"
              className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
              render={
                <a href={`tel:${siteConfig.phoneHref}`}>
                  <Phone className="size-4" />
                  {siteConfig.phone}
                </a>
              }
            />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

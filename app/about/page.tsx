import type { Metadata } from 'next'
import Image from 'next/image'
import { Target, Eye, Gem, CheckCircle2 } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Container, SectionHeading, Eyebrow } from '@/components/section'
import { Reveal, Stagger, StaggerItem } from '@/components/reveal'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { StatsSection } from '@/components/home/stats'
import { CtaBanner } from '@/components/cta-banner'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${siteConfig.name} — an industrial trading, procurement and sourcing company delivering reliable supply solutions to businesses across India since ${siteConfig.founded}.`,
  alternates: { canonical: `${siteConfig.url}/about` },
}

const pillars = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To simplify industrial procurement for businesses by delivering the right products, at the right price, on time — backed by transparent processes and dependable service.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'To be India\u2019s most trusted single-window sourcing partner, recognised for quality, integrity and long-term client relationships.',
  },
  {
    icon: Gem,
    title: 'Our Values',
    description:
      'Integrity, reliability, quality and customer-first thinking guide every quotation we send and every order we fulfil.',
  },
]

const milestones = [
  'Established relationships with 200+ certified manufacturers and suppliers',
  'Expanded logistics coverage to serve businesses pan-India',
  'Introduced dedicated account management and custom sourcing services',
  'Built a catalogue of over 2,000 industrial SKUs across six categories',
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A sourcing partner your business can rely on"
        description={`Since ${siteConfig.founded}, ${siteConfig.name} has helped manufacturers, contractors and enterprises across India streamline their supply chains.`}
        crumbs={[{ label: 'About Us' }]}
      />

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/about-facility.png"
                alt="Inside the Shree Balaji Enterprises facility"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </Reveal>
            <Reveal delay={0.1} className="flex flex-col gap-6">
              <Eyebrow>Our Story</Eyebrow>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Built on relationships, driven by reliability
              </h2>
              <div className="flex flex-col gap-4 leading-relaxed text-muted-foreground">
                <p>
                  {siteConfig.name} began with a simple belief: that industrial procurement should
                  be straightforward, transparent and dependable. What started as a focused trading
                  operation has grown into a full-service sourcing partner serving a wide range of
                  industries.
                </p>
                <p>
                  Today we supply industrial products, electrical items, hardware, safety equipment,
                  construction materials and packaging — and we source hard-to-find items on request.
                  Our strength lies in deep supplier relationships, disciplined quality control and a
                  genuine commitment to our clients&apos; success.
                </p>
              </div>
              <ul className="flex flex-col gap-3">
                {milestones.map((m) => (
                  <li key={m} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{m}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-secondary py-20 lg:py-28">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Mission, vision and values"
          />
          <Stagger className="grid gap-5 md:grid-cols-3">
            {pillars.map((p) => (
              <StaggerItem key={p.title}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <p.icon className="size-6" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-card-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <StatsSection />
      <WhyChooseUs />
      <CtaBanner />
    </>
  )
}

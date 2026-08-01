import type { Metadata } from 'next'
import { ClipboardList, Handshake, PackageCheck, MessageSquare } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Container, SectionHeading } from '@/components/section'
import { Stagger, StaggerItem, Reveal } from '@/components/reveal'
import { CtaBanner } from '@/components/cta-banner'
import { services, siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Services',
  description: `Industrial trading, procurement management, custom sourcing, logistics and quality assurance services from ${siteConfig.name}.`,
  alternates: { canonical: `${siteConfig.url}/services` },
}

const process = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Share Requirements',
    description: 'Send us your product list, specifications and quantities through the quote form or directly.',
  },
  {
    icon: ClipboardList,
    step: '02',
    title: 'Receive a Quote',
    description: 'Our team sources the best value from certified suppliers and returns a detailed quote, usually within a day.',
  },
  {
    icon: Handshake,
    step: '03',
    title: 'Confirm the Order',
    description: 'Approve the quotation and we handle purchase orders, documentation and GST-compliant invoicing.',
  },
  {
    icon: PackageCheck,
    step: '04',
    title: 'Delivered On Time',
    description: 'We manage quality checks, consolidation and logistics to deliver your order on schedule.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Sourcing and procurement services"
        description="From ready-stock trading to complex custom sourcing, we manage every step of the supply process on your behalf."
        crumbs={[{ label: 'Services' }]}
      />

      <section className="py-20 lg:py-28">
        <Container>
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <s.icon className="size-6" />
                  </div>
                  <h2 className="mt-5 font-serif text-lg font-semibold text-card-foreground">
                    {s.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="bg-secondary py-20 lg:py-28">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            eyebrow="How It Works"
            title="A simple, transparent process"
            description="Four straightforward steps from enquiry to delivery — designed to save you time and reduce procurement overhead."
          />
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <StaggerItem key={p.step}>
                <div className="relative h-full rounded-2xl border border-border bg-card p-7">
                  <span className="font-serif text-4xl font-bold text-primary/15">{p.step}</span>
                  <div className="mt-2 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <p.icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-serif text-base font-semibold text-card-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="text-center text-sm text-muted-foreground">
            Need a tailored procurement arrangement? We set up recurring supply agreements with
            dedicated pricing for regular customers.
          </Reveal>
        </Container>
      </section>

      <CtaBanner />
    </>
  )
}

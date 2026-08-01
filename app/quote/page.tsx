import type { Metadata } from 'next'
import { Phone, Mail, Clock, ShieldCheck } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Section, Container } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { QuoteForm } from '@/components/quote-form'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Request a Quote',
  description:
    'Request a competitive quote from Shree Balaji Enterprises for industrial products, electrical items, hardware, safety equipment, construction materials, packaging and custom sourcing.',
  alternates: { canonical: '/quote' },
}

const assurances = [
  { icon: Clock, title: 'Fast Response', text: 'Most quotes returned within one business day.' },
  { icon: ShieldCheck, title: 'No Obligation', text: 'Transparent pricing with no hidden charges.' },
  { icon: Phone, title: 'Dedicated Contact', text: 'A single point of contact for your enquiry.' },
]

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Get Started"
        title="Request a Quote"
        description="Share your requirements and our procurement team will prepare a competitive, no-obligation quote tailored to your business."
        crumbs={[{ label: 'Request a Quote' }]}
      />
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:gap-14">
            <div>
              <QuoteForm />
            </div>
            <aside className="flex flex-col gap-6">
              <Reveal className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-6">
                <h3 className="font-serif text-xl font-bold">Why request from us</h3>
                <ul className="flex flex-col gap-5">
                  {assurances.map((a) => (
                    <li key={a.title} className="flex gap-3">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <a.icon className="size-5" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold">{a.title}</span>
                        <span className="block text-sm text-muted-foreground">{a.text}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal className="flex flex-col gap-4 rounded-2xl border border-border bg-navy p-6 text-white">
                <h3 className="font-serif text-xl font-bold">Prefer to talk?</h3>
                <p className="text-sm leading-relaxed text-white/75">
                  Our team is available during business hours to discuss your requirements directly.
                </p>
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="flex items-center gap-3 text-sm font-medium transition-colors hover:text-gold"
                >
                  <Phone className="size-4 text-gold" />
                  {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-sm font-medium transition-colors hover:text-gold"
                >
                  <Mail className="size-4 text-gold" />
                  {siteConfig.email}
                </a>
              </Reveal>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  )
}

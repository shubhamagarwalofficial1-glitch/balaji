import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Section, Container } from '@/components/section'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service governing the use of the Shree Balaji Enterprises website and our trading, procurement and sourcing services.',
  alternates: { canonical: '/terms' },
}

const sections = [
  {
    heading: 'Acceptance of Terms',
    body: 'By accessing and using this website, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.',
  },
  {
    heading: 'Products and Services',
    body: 'Shree Balaji Enterprises provides industrial trading, procurement and custom sourcing services. Product availability, specifications and pricing are subject to change and are confirmed at the time of quotation and order acceptance.',
  },
  {
    heading: 'Quotations and Orders',
    body: 'All quotations are valid for the period stated and are subject to stock availability. Orders are confirmed only upon our written acceptance. Prices are exclusive of applicable taxes unless stated otherwise.',
  },
  {
    heading: 'Payment Terms',
    body: 'Payment terms are agreed on a per-order or per-account basis. Timely payment is required as per the agreed terms. Delays may affect fulfilment and future credit arrangements.',
  },
  {
    heading: 'Delivery',
    body: 'We make reasonable efforts to meet stated delivery timelines. However, delivery dates are estimates and we are not liable for delays caused by factors beyond our reasonable control.',
  },
  {
    heading: 'Warranties',
    body: 'Products are supplied with manufacturer warranties where applicable. Shree Balaji Enterprises passes through such warranties but does not provide additional warranties unless expressly agreed in writing.',
  },
  {
    heading: 'Limitation of Liability',
    body: 'To the fullest extent permitted by law, Shree Balaji Enterprises shall not be liable for any indirect, incidental or consequential damages arising from the use of our website, products or services.',
  },
  {
    heading: 'Governing Law',
    body: 'These Terms are governed by the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts of Ahmedabad, Gujarat.',
  },
  {
    heading: 'Contact Us',
    body: `For questions regarding these Terms, please contact us at ${siteConfig.email} or ${siteConfig.phone}.`,
  },
]

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="The terms governing your use of our website and services."
        crumbs={[{ label: 'Terms of Service' }]}
      />
      <Section>
        <Container className="max-w-3xl">
          <p className="mb-10 text-sm text-muted-foreground">Last updated: January 2026</p>
          <div className="flex flex-col gap-8">
            {sections.map((s) => (
              <div key={s.heading} className="flex flex-col gap-2">
                <h2 className="font-serif text-xl font-bold">{s.heading}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}

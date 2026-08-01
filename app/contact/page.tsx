import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Section, Container } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { ContactForm } from '@/components/contact-form'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Shree Balaji Enterprises for industrial trading, procurement and sourcing enquiries. Call, email, WhatsApp or send us a message.',
  alternates: { canonical: '/contact' },
}

const details = [
  { icon: Phone, label: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phoneHref}` },
  { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: siteConfig.phone,
    href: `https://wa.me/${siteConfig.whatsapp}`,
  },
  { icon: MapPin, label: 'Address', value: siteConfig.address },
  { icon: Clock, label: 'Business Hours', value: 'Mon – Sat, 9:30 AM – 6:30 PM IST' },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        description="Have a question or a requirement? Reach out to our team — we respond quickly and are happy to help with any industrial supply need."
        crumbs={[{ label: 'Contact' }]}
      />
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[360px_1fr] lg:gap-14">
            <aside className="flex flex-col gap-6">
              <Reveal className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 sm:p-8">
                <h2 className="font-serif text-xl font-bold">Contact Information</h2>
                <ul className="flex flex-col gap-5">
                  {details.map((d) => (
                    <li key={d.label} className="flex gap-3">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <d.icon className="size-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          {d.label}
                        </span>
                        {d.href ? (
                          <a
                            href={d.href}
                            className="block break-words text-sm font-medium transition-colors hover:text-primary"
                          >
                            {d.value}
                          </a>
                        ) : (
                          <span className="block text-sm font-medium">{d.value}</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal className="overflow-hidden rounded-2xl border border-border">
                <iframe
                  title="Shree Balaji Enterprises location map"
                  src="https://www.google.com/maps?q=Ahmedabad%20Gujarat%20India&output=embed"
                  className="h-56 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Reveal>
            </aside>
            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

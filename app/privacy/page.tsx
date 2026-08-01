import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Section, Container } from '@/components/section'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Shree Balaji Enterprises describing how we collect, use and protect your information.',
  alternates: { canonical: '/privacy' },
}

const sections = [
  {
    heading: 'Information We Collect',
    body: 'We collect information you provide directly to us, such as your name, company, email address, phone number and details of your enquiry when you request a quote, contact us or otherwise interact with our website.',
  },
  {
    heading: 'How We Use Your Information',
    body: 'We use the information we collect to respond to your enquiries, prepare quotes, fulfil orders, provide customer support, and improve our products and services. We do not sell your personal information to third parties.',
  },
  {
    heading: 'Sharing of Information',
    body: 'We may share your information with trusted logistics and supply partners strictly to fulfil your orders and enquiries. These partners are obligated to keep your information confidential and use it only for the intended purpose.',
  },
  {
    heading: 'Data Security',
    body: 'We implement reasonable technical and organisational measures to protect your information against unauthorised access, alteration, disclosure or destruction. However, no method of transmission over the internet is completely secure.',
  },
  {
    heading: 'Cookies',
    body: 'Our website may use cookies and similar technologies to improve your browsing experience and understand how visitors use the site. You can control cookies through your browser settings.',
  },
  {
    heading: 'Your Rights',
    body: 'You may request access to, correction of, or deletion of your personal information at any time by contacting us using the details below.',
  },
  {
    heading: 'Contact Us',
    body: `If you have any questions about this Privacy Policy, please contact us at ${siteConfig.email} or ${siteConfig.phone}.`,
  },
]

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How Shree Balaji Enterprises collects, uses and protects your information."
        crumbs={[{ label: 'Privacy Policy' }]}
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

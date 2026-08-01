import Link from 'next/link'
import { Boxes, Phone, Mail, MapPin } from 'lucide-react'
import { Container } from '@/components/section'
import {
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
} from '@/components/social-icons'
import { siteConfig, navItems, productCategories } from '@/lib/site'

const socials = [
  { icon: LinkedinIcon, href: siteConfig.social.linkedin, label: 'LinkedIn' },
  { icon: TwitterIcon, href: siteConfig.social.twitter, label: 'Twitter' },
  { icon: FacebookIcon, href: siteConfig.social.facebook, label: 'Facebook' },
  { icon: InstagramIcon, href: siteConfig.social.instagram, label: 'Instagram' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-navy text-white">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5" aria-label={siteConfig.name}>
              <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Boxes className="size-5" />
              </span>
              <span className="font-serif text-lg font-bold text-white">{siteConfig.shortName}</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              Your trusted partner for industrial trading, procurement and sourcing across India.
            </p>
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-md border border-white/15 text-white/80 transition-colors hover:border-gold hover:text-gold"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/70 transition-colors hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/quote" className="text-white/70 transition-colors hover:text-gold">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-white">
              Product Categories
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {productCategories.map((cat) => (
                <li key={cat.title}>
                  <Link
                    href="/products"
                    className="text-white/70 transition-colors hover:text-gold"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <ul className="mt-4 flex flex-col gap-3.5 text-sm">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                <span>{siteConfig.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="flex items-center gap-3 text-white/70 transition-colors hover:text-gold"
                >
                  <Phone className="size-4 shrink-0 text-gold" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 break-all text-white/70 transition-colors hover:text-gold"
                >
                  <Mail className="size-4 shrink-0 text-gold" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-gold">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-gold">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

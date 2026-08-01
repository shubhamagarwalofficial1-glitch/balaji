import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Container, Eyebrow } from '@/components/section'
import { Reveal } from '@/components/reveal'

type Crumb = { label: string; href?: string }

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs = [],
}: {
  eyebrow?: string
  title: string
  description?: string
  crumbs?: Crumb[]
}) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white lg:py-24">
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: 'url(/images/hero-warehouse.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/70" aria-hidden="true" />
      <Container className="relative">
        <Reveal className="flex flex-col gap-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
              <li>
                <Link href="/" className="transition-colors hover:text-gold">
                  Home
                </Link>
              </li>
              {crumbs.map((c) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  <ChevronRight className="size-3.5" />
                  {c.href ? (
                    <Link href={c.href} className="transition-colors hover:text-gold">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-white/90">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h1 className="max-w-3xl font-serif text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="max-w-2xl text-base leading-relaxed text-white/75 text-pretty">
              {description}
            </p>
          ) : null}
        </Reveal>
      </Container>
    </section>
  )
}

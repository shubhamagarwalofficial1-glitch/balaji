'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight, ShieldCheck, Truck, BadgeCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/section'
import { siteConfig } from '@/lib/site'

const trust = [
  { icon: BadgeCheck, label: 'Verified Suppliers' },
  { icon: Truck, label: 'Pan-India Delivery' },
  { icon: ShieldCheck, label: 'Compliance First' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/hero-warehouse.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy/70"
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="flex min-h-[92vh] flex-col justify-center py-24 md:min-h-[88vh]">
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold"
          >
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            Industrial Procurement Partner
          </motion.span>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-4xl font-serif text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            Sourcing that keeps your{' '}
            <span className="text-gold">operations moving.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-base leading-relaxed text-white/75 text-pretty sm:text-lg"
          >
            {siteConfig.name} supplies industrial products, electrical items, hardware, safety
            equipment, construction materials and packaging — plus custom sourcing for whatever your
            business needs next.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button
              className="h-12 bg-gold px-6 text-base text-gold-foreground hover:bg-gold/90"
              render={
                <Link href="/products">
                  Explore Products
                  <ArrowRight className="size-4" />
                </Link>
              }
            />
            <Button
              variant="outline"
              className="h-12 border-white/25 bg-white/5 px-6 text-base text-white hover:bg-white/10 hover:text-white"
              render={<Link href="/quote">Request a Quote</Link>}
            />
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            {trust.map((t) => (
              <div key={t.label} className="flex items-center gap-2.5 text-sm text-white/80">
                <t.icon className="size-5 text-gold" />
                {t.label}
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

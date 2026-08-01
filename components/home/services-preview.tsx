import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading, Container } from '@/components/section'
import { Stagger, StaggerItem, Reveal } from '@/components/reveal'
import { services } from '@/lib/site'

export function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="What We Do"
          title="End-to-end sourcing and procurement services"
          description="From ready-stock trading to complex custom sourcing, we manage every step so you can focus on running your business."
        />
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <div className="flex size-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <s.icon className="size-6" />
                </div>
                <h3 className="mt-5 font-serif text-lg font-semibold text-card-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="flex justify-center">
          <Button
            variant="outline"
            render={
              <Link href="/services">
                View All Services
                <ArrowRight className="size-4" />
              </Link>
            }
          />
        </Reveal>
      </Container>
    </section>
  )
}

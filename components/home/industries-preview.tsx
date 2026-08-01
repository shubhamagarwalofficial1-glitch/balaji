import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading, Container } from '@/components/section'
import { Stagger, StaggerItem, Reveal } from '@/components/reveal'
import { industries } from '@/lib/site'

export function IndustriesPreview() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Trusted across every sector"
          description="Our sourcing expertise spans a broad range of industries, each with its own standards, timelines and compliance needs."
        />
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind) => (
            <StaggerItem key={ind.title}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <ind.icon className="size-7" />
                </div>
                <h3 className="mt-4 font-serif text-base font-semibold text-card-foreground">
                  {ind.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {ind.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="flex justify-center">
          <Button
            variant="outline"
            render={
              <Link href="/industries">
                Explore Industries
                <ArrowRight className="size-4" />
              </Link>
            }
          />
        </Reveal>
      </Container>
    </section>
  )
}

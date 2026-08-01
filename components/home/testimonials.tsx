import { Quote, Star } from 'lucide-react'
import { SectionHeading, Container } from '@/components/section'
import { Stagger, StaggerItem } from '@/components/reveal'
import { testimonials } from '@/lib/site'

export function Testimonials() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our clients say"
          description="Long-term relationships built on consistent delivery, transparent pricing and genuine partnership."
        />
        <Stagger className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                <Quote className="size-8 text-primary/25" />
                <div className="mt-4 flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-card-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="font-semibold text-card-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}

import { SectionHeading, Container } from '@/components/section'
import { Stagger, StaggerItem } from '@/components/reveal'
import { whyChooseUs } from '@/lib/site'

export function WhyChooseUs() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built on reliability, quality and trust"
          description="We combine deep supplier relationships with disciplined processes to deliver a sourcing experience your business can depend on."
        />
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((f) => (
            <StaggerItem key={f.title}>
              <div className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <f.icon className="size-6" />
                </div>
                <h3 className="mt-5 font-serif text-lg font-semibold text-card-foreground">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}

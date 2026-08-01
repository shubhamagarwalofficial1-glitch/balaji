import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Container } from '@/components/section'
import { Stagger, StaggerItem } from '@/components/reveal'
import { StatsSection } from '@/components/home/stats'
import { CtaBanner } from '@/components/cta-banner'
import { industries, siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: `${siteConfig.name} serves manufacturing, construction, electronics, pharmaceuticals, oil & gas, agriculture, engineering and automotive industries across India.`,
  alternates: { canonical: `${siteConfig.url}/industries` },
}

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title="Trusted across every sector"
        description="Our sourcing expertise spans a broad range of industries, each with its own standards, timelines and compliance requirements."
        crumbs={[{ label: 'Industries' }]}
      />

      <section className="py-20 lg:py-28">
        <Container>
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <StaggerItem key={ind.title}>
                <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <ind.icon className="size-7" />
                  </div>
                  <h2 className="mt-5 font-serif text-lg font-semibold text-card-foreground">
                    {ind.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {ind.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <StatsSection />
      <CtaBanner />
    </>
  )
}

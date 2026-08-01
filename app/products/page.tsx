import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Container } from '@/components/section'
import { Stagger, StaggerItem } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import { CtaBanner } from '@/components/cta-banner'
import { productCategories, siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Products',
  description: `Explore the industrial product catalogue of ${siteConfig.name} — industrial products, electrical items, hardware, safety equipment, construction materials and packaging.`,
  alternates: { canonical: `${siteConfig.url}/products` },
}

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Catalogue"
        title="Products we supply"
        description="Over 2,000 SKUs across six core categories, sourced from certified manufacturers and available for bulk and recurring orders."
        crumbs={[{ label: 'Products' }]}
      />

      <section className="py-20 lg:py-28">
        <Container>
          <Stagger className="grid gap-6 md:grid-cols-2">
            {productCategories.map((cat) => (
              <StaggerItem key={cat.title}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <cat.icon className="size-7" />
                    </div>
                    <h2 className="font-serif text-xl font-semibold text-card-foreground">
                      {cat.title}
                    </h2>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {cat.description}
                  </p>
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                        <Check className="size-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 border-t border-border pt-5">
                    <Button
                      variant="outline"
                      size="sm"
                      render={
                        <Link href="/quote">
                          Enquire About {cat.title}
                          <ArrowRight className="size-3.5" />
                        </Link>
                      }
                    />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-14 rounded-2xl border border-dashed border-border bg-secondary p-8 text-center sm:p-10">
            <h2 className="font-serif text-2xl font-bold text-balance">
              Can&apos;t find what you&apos;re looking for?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty">
              Our custom sourcing team specialises in locating non-standard, imported and
              hard-to-find items. Send us your requirement and we&apos;ll do the rest.
            </p>
            <div className="mt-6 flex justify-center">
              <Button
                render={
                  <Link href="/quote">
                    Request Custom Sourcing
                    <ArrowRight className="size-4" />
                  </Link>
                }
              />
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  )
}

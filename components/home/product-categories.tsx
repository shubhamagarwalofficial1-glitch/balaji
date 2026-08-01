import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading, Container } from '@/components/section'
import { Stagger, StaggerItem, Reveal } from '@/components/reveal'
import { productCategories } from '@/lib/site'

export function ProductCategoriesSection() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Our Catalogue"
          title="Product categories we supply"
          description="Thousands of SKUs across six core categories, all sourced from certified manufacturers and available for bulk and recurring orders."
        />
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((cat) => (
            <StaggerItem key={cat.title}>
              <Link
                href="/products"
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <cat.icon className="size-6" />
                  </div>
                  <ArrowRight className="size-5 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
                </div>
                <h3 className="mt-5 font-serif text-lg font-semibold text-card-foreground">
                  {cat.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {cat.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {cat.items.slice(0, 3).map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="flex justify-center">
          <Button
            render={
              <Link href="/products">
                Browse Full Catalogue
                <ArrowRight className="size-4" />
              </Link>
            }
          />
        </Reveal>
      </Container>
    </section>
  )
}

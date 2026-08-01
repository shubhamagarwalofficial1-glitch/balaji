import { Container } from '@/components/section'
import { Stagger, StaggerItem } from '@/components/reveal'
import { stats } from '@/lib/site'

export function StatsSection() {
  return (
    <section className="bg-primary py-16 text-primary-foreground lg:py-20">
      <Container>
        <Stagger className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.label} className="text-center">
              <p className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm font-medium text-primary-foreground/80">{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}

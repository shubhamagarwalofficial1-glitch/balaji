import { SectionHeading, Container } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { FaqAccordion } from '@/components/faq-accordion'
import { faqs } from '@/lib/site'

export function FaqSection() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know about working with us. Can't find an answer? Reach out and we'll help."
        />
        <Reveal>
          <FaqAccordion items={faqs} />
        </Reveal>
      </Container>
    </section>
  )
}

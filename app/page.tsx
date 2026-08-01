import { Hero } from '@/components/home/hero'
import { Intro } from '@/components/home/intro'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { ServicesPreview } from '@/components/home/services-preview'
import { ProductCategoriesSection } from '@/components/home/product-categories'
import { IndustriesPreview } from '@/components/home/industries-preview'
import { StatsSection } from '@/components/home/stats'
import { Testimonials } from '@/components/home/testimonials'
import { FaqSection } from '@/components/home/faq-section'
import { CtaBanner } from '@/components/cta-banner'
import { OrganizationSchema, FaqSchema } from '@/components/structured-data'

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <FaqSchema />
      <Hero />
      <Intro />
      <WhyChooseUs />
      <ServicesPreview />
      <StatsSection />
      <ProductCategoriesSection />
      <IndustriesPreview />
      <Testimonials />
      <FaqSection />
      <CtaBanner />
    </>
  )
}

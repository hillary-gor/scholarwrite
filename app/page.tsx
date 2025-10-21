import { HeroSection } from "@/components/hero-section"
import { WritersSection } from "@/components/writers-section"
import { BenefitsSection } from "@/components/benefits-section"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <WritersSection />
      <BenefitsSection />
      <PricingSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <Footer />
    </main>
  )
}

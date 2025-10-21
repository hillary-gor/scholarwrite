import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, X } from "lucide-react"
import { Footer } from "@/components/footer"

const pricingTiers = [
  {
    name: "Standard",
    description: "Perfect for most assignments",
    pricePerPage: "$8",
    features: [
      { name: "Qualified writer", included: true },
      { name: "Plagiarism report", included: true },
      { name: "Unlimited revisions", included: true },
      { name: "24/7 support", included: true },
      { name: "Top 10 writer", included: false },
      { name: "Priority support", included: false },
      { name: "Advanced writer", included: false },
    ],
  },
  {
    name: "Premium",
    description: "For important assignments",
    pricePerPage: "$12",
    popular: true,
    features: [
      { name: "Qualified writer", included: true },
      { name: "Plagiarism report", included: true },
      { name: "Unlimited revisions", included: true },
      { name: "24/7 support", included: true },
      { name: "Top 10 writer", included: true },
      { name: "Priority support", included: true },
      { name: "Advanced writer", included: false },
    ],
  },
  {
    name: "Ultimate",
    description: "For critical projects",
    pricePerPage: "$16",
    features: [
      { name: "Qualified writer", included: true },
      { name: "Plagiarism report", included: true },
      { name: "Unlimited revisions", included: true },
      { name: "24/7 support", included: true },
      { name: "Top 10 writer", included: true },
      { name: "Priority support", included: true },
      { name: "Advanced writer", included: true },
    ],
  },
]

const deadlinePricing = [
  { deadline: "14+ days", multiplier: "1.0x" },
  { deadline: "7-13 days", multiplier: "1.2x" },
  { deadline: "3-6 days", multiplier: "1.5x" },
  { deadline: "24-48 hours", multiplier: "2.0x" },
  { deadline: "12-23 hours", multiplier: "2.5x" },
  { deadline: "3-11 hours", multiplier: "3.0x" },
]

export default function PricingPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Transparent Pricing</h1>
            <p className="text-lg text-muted-foreground mb-8">
              No hidden fees. Pay only for what you order. Starting at just $8 per page.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Choose your writer level</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`p-6 relative ${tier.popular ? "border-primary border-2 shadow-lg" : ""}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>
                  <div className="text-4xl font-bold text-primary mb-1">{tier.pricePerPage}</div>
                  <p className="text-sm text-muted-foreground">per page</p>
                </div>

                <div className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${!feature.included ? "text-muted-foreground" : ""}`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full ${
                    tier.popular
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  Select {tier.name}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">How deadlines affect pricing</h2>
            <p className="text-center text-muted-foreground mb-12">
              The sooner you need it, the higher the price. Plan ahead to save money!
            </p>

            <Card className="p-6">
              <div className="space-y-4">
                {deadlinePricing.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b last:border-0">
                    <span className="font-medium">{item.deadline}</span>
                    <span className="text-primary font-bold">{item.multiplier}</span>
                  </div>
                ))}
              </div>
            </Card>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Example: A 5-page essay at Standard level ($8/page) with a 7-day deadline would cost: 5 × $8 × 1.2 = $48
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Money-back guarantee</h2>
            <p className="text-muted-foreground mb-8">
              We stand behind our work. If you're not satisfied with the result, we offer a full refund according to our
              refund policy. Your satisfaction is our priority.
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Get started now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

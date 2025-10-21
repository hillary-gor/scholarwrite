import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

const includedServices = [
  { name: "Topic suggestion", price: "Free" },
  { name: "Formatting", price: "Free" },
  { name: "Title page & references", price: "Free" },
  { name: "Editor quality check", price: "Free" },
  { name: "Unlimited revisions", price: "Free" },
]

const additionalServices = [
  { name: "Grade A guarantee", price: "from $3.99" },
  { name: "Early draft", price: "+15% to 100% price" },
  { name: "1-Page abstract", price: "from $8.00" },
  { name: "VIP support", price: "$3.99" },
  { name: "Detailed outline", price: "$10.00" },
]

const paymentMethods = ["VISA", "Mastercard", "Amex", "Discover"]

export function PricingSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prices and services</h2>
          <p className="text-muted-foreground mb-2">
            Prices start at <span className="font-bold text-primary">$8/page</span> and depend on the page count,
            deadline, and writer's level
          </p>
          <a href="#" className="text-primary hover:underline text-sm">
            How we secure your payment →
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Included services</h3>
            <p className="text-sm text-muted-foreground mb-6">You get them for free</p>
            <div className="space-y-4">
              {includedServices.map((service, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span className="text-sm">{service.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-green-600">{service.price}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Additional services</h3>
            <p className="text-sm text-muted-foreground mb-6">You can add them at extra payment</p>
            <div className="space-y-4">
              {additionalServices.map((service, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm">{service.name}</span>
                  <span className="text-sm font-semibold text-muted-foreground">{service.price}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground mb-4">We accept:</p>
          <div className="flex items-center justify-center gap-4 mb-6">
            {paymentMethods.map((method, index) => (
              <div key={index} className="px-4 py-2 border rounded bg-white text-sm font-semibold">
                {method}
              </div>
            ))}
            <span className="text-sm text-muted-foreground">+3 more</span>
          </div>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Choose an expert
          </Button>
        </div>
      </div>
    </section>
  )
}

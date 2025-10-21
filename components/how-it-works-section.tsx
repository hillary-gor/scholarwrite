import { Button } from "@/components/ui/button"
import { FileText, Users, CreditCard, Download } from "lucide-react"

const steps = [
  {
    number: 1,
    icon: FileText,
    title: "Create your order (it's free)",
    description: "Tell us what you need: topic, deadline, and any special requirements",
  },
  {
    number: 2,
    icon: Users,
    title: "Choose a writer",
    description: "Review writer profiles, ratings, and pick the best expert for your needs",
  },
  {
    number: 3,
    icon: CreditCard,
    title: "Make a payment",
    description: "Pay securely and only pay for what you ordered, with full money-back guarantee",
  },
  {
    number: 4,
    icon: Download,
    title: "Get your paper",
    description: "Your essay will be in your account and you receive the result",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Your ScholarWrite journey</h2>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-bold text-primary">{step.number}.</span>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                    {index === 0 && (
                      <Button className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90">Get started</Button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

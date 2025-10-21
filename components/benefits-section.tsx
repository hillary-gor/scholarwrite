import { Shield, Clock, FileCheck, MessageCircle, DollarSign } from "lucide-react"

const benefits = [
  {
    icon: FileCheck,
    title: "Following instructions precisely",
    description: "Every writer follows your requirements to the letter",
  },
  {
    icon: DollarSign,
    title: "Guaranteed money-back policy",
    description: "Full refund if you're not satisfied with the result",
  },
  {
    icon: Clock,
    title: "Early on-time delivery",
    description: "Get your paper before the deadline, every time",
  },
  {
    icon: Shield,
    title: "Full protection of your privacy",
    description: "Your personal information is always secure",
  },
  {
    icon: FileCheck,
    title: "AI- and plagiarism-free results",
    description: "Original content written from scratch by real experts",
  },
  {
    icon: MessageCircle,
    title: "24/7 customer support",
    description: "Our team is always here to help you",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Benefits and guarantees</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

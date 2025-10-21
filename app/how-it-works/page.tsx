import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FileText, Users, CreditCard, Download, MessageCircle, CheckCircle } from "lucide-react"
import { Footer } from "@/components/footer"

const steps = [
  {
    number: 1,
    icon: FileText,
    title: "Submit your order",
    description:
      "Fill out our simple order form with your assignment details, deadline, and any special instructions. It's completely free to create an order.",
    details: ["Choose your assignment type", "Set your deadline", "Specify academic level", "Upload any materials"],
  },
  {
    number: 2,
    icon: Users,
    title: "Choose your writer",
    description:
      "Browse through qualified writers who bid on your project. Review their profiles, ratings, completed orders, and select the best match.",
    details: [
      "View writer profiles and ratings",
      "Check their expertise",
      "Read previous reviews",
      "Compare bids and select",
    ],
  },
  {
    number: 3,
    icon: CreditCard,
    title: "Make a secure payment",
    description:
      "Pay securely using your preferred payment method. Your money is held safely until you approve the final work.",
    details: ["Multiple payment options", "Secure transaction processing", "Money-back guarantee", "No hidden fees"],
  },
  {
    number: 4,
    icon: MessageCircle,
    title: "Track progress",
    description:
      "Stay in touch with your writer through our messaging system. Request updates, provide additional information, or ask questions anytime.",
    details: ["Direct messaging with writer", "Real-time notifications", "Request drafts", "Provide feedback"],
  },
  {
    number: 5,
    icon: Download,
    title: "Receive your paper",
    description:
      "Get your completed paper before the deadline. Review it carefully and request free revisions if needed.",
    details: ["Download from your account", "Review the work", "Request revisions", "Approve and release payment"],
  },
  {
    number: 6,
    icon: CheckCircle,
    title: "Leave a review",
    description:
      "Share your experience by leaving a review for your writer. Your feedback helps other students make informed decisions.",
    details: ["Rate your writer", "Write a review", "Help the community", "Build writer reputation"],
  },
]

export default function HowItWorksPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">How ScholarWrite Works</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Getting expert help with your assignments is simple and straightforward
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                    <div className="flex gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                          <Icon className="h-8 w-8" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-3xl font-bold text-primary">Step {step.number}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Get started now
              </Button>
              <p className="text-sm text-muted-foreground mt-4">Join 250,000+ students who trust ScholarWrite</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-2">How long does it take to get my paper?</h3>
                <p className="text-muted-foreground">
                  Delivery time depends on your deadline. We can deliver papers in as little as 3 hours for urgent
                  orders, or you can choose a longer deadline for better rates.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-2">Is my personal information safe?</h3>
                <p className="text-muted-foreground">
                  Absolutely. We use industry-standard encryption and never share your personal information with third
                  parties. Your privacy is our top priority.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-2">What if I'm not satisfied with the paper?</h3>
                <p className="text-muted-foreground">
                  We offer unlimited free revisions within 14 days of delivery. If you're still not satisfied, you may
                  be eligible for a refund according to our money-back guarantee policy.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-2">Are the papers plagiarism-free?</h3>
                <p className="text-muted-foreground">
                  Yes, every paper is written from scratch and checked for plagiarism. We provide a free plagiarism
                  report with every order.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

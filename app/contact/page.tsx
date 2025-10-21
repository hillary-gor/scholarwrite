import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageCircle, Phone, Clock } from "lucide-react"
import { Footer } from "@/components/footer"

const contactMethods = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team in real-time",
    action: "Start chat",
    available: "24/7",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us an email and we'll respond within 2 hours",
    action: "support@scholarwrite.com",
    available: "24/7",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with a support representative",
    action: "+1 (555) 123-4567",
    available: "24/7",
  },
]

export default function ContactPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Contact Us</h1>
            <p className="text-lg text-muted-foreground mb-8">
              We're here to help 24/7. Reach out anytime and we'll get back to you right away.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                  <p className="text-sm font-semibold text-primary mb-2">{method.action}</p>
                  <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{method.available}</span>
                  </div>
                </Card>
              )
            })}
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us more about your inquiry..." className="min-h-[150px]" />
                </div>

                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-bold mb-2">What are your response times?</h3>
                <p className="text-sm text-muted-foreground">
                  We typically respond to emails within 2 hours and live chat messages instantly during business hours.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold mb-2">Can I speak to my writer directly?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes! Once you've selected a writer, you can communicate directly through our secure messaging system.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold mb-2">Do you offer refunds?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, we have a money-back guarantee policy. Contact us if you're not satisfied with your order.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold mb-2">Is my information confidential?</h3>
                <p className="text-sm text-muted-foreground">
                  Absolutely. We use encryption and never share your personal information with anyone.
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

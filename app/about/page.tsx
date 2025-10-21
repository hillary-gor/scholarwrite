import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Users, Award, Shield, Clock } from "lucide-react"
import { Footer } from "@/components/footer"

const stats = [
  { number: "250K+", label: "Happy Students" },
  { number: "800+", label: "Expert Writers" },
  { number: "1.5M+", label: "Papers Delivered" },
  { number: "98%", label: "Satisfaction Rate" },
]

const values = [
  {
    icon: Shield,
    title: "Trust & Security",
    description:
      "We prioritize your privacy and security. All transactions are encrypted, and your personal information is never shared.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description:
      "Every writer is carefully vetted and must pass rigorous tests. We maintain the highest standards of academic writing.",
  },
  {
    icon: Users,
    title: "Student-Focused",
    description:
      "We understand student needs and challenges. Our service is designed to help you succeed academically while learning.",
  },
  {
    icon: Clock,
    title: "Always Available",
    description:
      "Our support team and writers work around the clock to ensure you get help whenever you need it, day or night.",
  },
]

const team = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Chief Academic Officer",
    image: "/team-member-sarah.jpg",
    description: "PhD in English Literature, 15+ years in academic writing",
  },
  {
    name: "James Rodriguez",
    role: "Head of Quality Assurance",
    image: "/team-member-james.jpg",
    description: "Former university professor, ensures every paper meets standards",
  },
  {
    name: "Emily Chen",
    role: "Customer Success Director",
    image: "/team-member-emily.jpg",
    description: "Dedicated to ensuring every student has a positive experience",
  },
]

export default function AboutPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">About ScholarWrite</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Empowering students to achieve academic excellence since 2015
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                ScholarWrite was founded in 2015 by a group of educators and former students who recognized the growing
                challenges students face in today's demanding academic environment. We saw talented students struggling
                not because they lacked ability, but because they were overwhelmed by competing demands on their time.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                What started as a small team of dedicated writers has grown into a thriving community of over 800 expert
                writers and editors, serving more than 250,000 students worldwide. We've delivered over 1.5 million
                papers, maintaining a 98% satisfaction rate that we're incredibly proud of.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, ScholarWrite stands as a trusted partner for students seeking academic support. We're not just a
                writing service—we're a community dedicated to helping students learn, grow, and succeed in their
                academic journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Meet Our Leadership Team</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our experienced team is dedicated to maintaining the highest standards of academic integrity and customer
            service
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join thousands of successful students</h2>
            <p className="text-muted-foreground mb-8">
              Experience the ScholarWrite difference and take your academic performance to the next level
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Get started today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

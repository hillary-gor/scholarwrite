import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FileText, BookOpen, Pencil, FileCheck, GraduationCap, Briefcase, FlaskConical, Calculator } from "lucide-react"
import { Footer } from "@/components/footer"

const services = [
  {
    icon: FileText,
    title: "Essay Writing",
    description: "Custom essays on any topic, written from scratch by expert writers",
    price: "from $8/page",
  },
  {
    icon: BookOpen,
    title: "Research Papers",
    description: "In-depth research papers with proper citations and methodology",
    price: "from $10/page",
  },
  {
    icon: Pencil,
    title: "Editing & Proofreading",
    description: "Professional editing to polish your work to perfection",
    price: "from $5/page",
  },
  {
    icon: FileCheck,
    title: "Thesis & Dissertations",
    description: "Comprehensive support for your thesis or dissertation project",
    price: "from $15/page",
  },
  {
    icon: GraduationCap,
    title: "Admission Essays",
    description: "Compelling admission essays that help you stand out",
    price: "from $12/page",
  },
  {
    icon: Briefcase,
    title: "Business Writing",
    description: "Professional business reports, proposals, and case studies",
    price: "from $11/page",
  },
  {
    icon: FlaskConical,
    title: "Lab Reports",
    description: "Detailed lab reports with proper scientific formatting",
    price: "from $9/page",
  },
  {
    icon: Calculator,
    title: "Math & Statistics",
    description: "Problem-solving and analysis for math and statistics assignments",
    price: "from $13/page",
  },
]

const subjects = [
  "English Literature",
  "History",
  "Psychology",
  "Sociology",
  "Business",
  "Economics",
  "Political Science",
  "Philosophy",
  "Biology",
  "Chemistry",
  "Physics",
  "Mathematics",
  "Computer Science",
  "Engineering",
  "Nursing",
  "Law",
]

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Our Writing Services</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Professional academic writing help across all subjects and assignment types
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What we can help you with</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <p className="text-sm font-semibold text-primary">{service.price}</p>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Order your paper now
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">We cover all subjects</h2>
            <p className="text-center text-muted-foreground mb-12">
              Our expert writers specialize in over 50+ academic disciplines
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {subjects.map((subject, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer"
                >
                  <span className="text-sm font-medium">{subject}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a href="#" className="text-primary hover:underline font-medium">
                View all 50+ subjects →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Why choose ScholarWrite?</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <p className="text-sm text-muted-foreground">Customer satisfaction rate</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-sm text-muted-foreground">Support availability</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">3hrs</div>
                <p className="text-sm text-muted-foreground">Minimum deadline</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

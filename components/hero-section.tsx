import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Clock, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Star className="h-8 w-8 text-primary fill-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">A+ essay writing service</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Get personalized essay services starting at only $8 per page
          </p>

          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">24h paper: Any deadline or complexity</span>
              </div>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                Order and get your essay
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <label htmlFor="essay-help" className="block text-left text-sm font-medium mb-2">
              What do you need help with today?
            </label>
            <Textarea
              id="essay-help"
              placeholder="Describe your assignment, topic, or any specific requirements..."
              className="min-h-[120px] mb-4"
            />
            <div className="flex items-center justify-between">
              <button className="text-sm text-primary hover:underline flex items-center gap-1">
                <span>📎</span> Attach files
              </button>
              <Button className="bg-primary hover:bg-primary/90">Submit →</Button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">250K+</div>
              <div className="text-muted-foreground">students</div>
              <div className="text-xs text-muted-foreground">trusted us with their projects</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-2xl font-bold">
                <Star className="h-5 w-5 fill-accent text-accent" />
                <span>4.8</span>
              </div>
              <div className="text-muted-foreground">on Trustpilot</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-2xl font-bold">
                <Star className="h-5 w-5 fill-accent text-accent" />
                <span>4.7</span>
              </div>
              <div className="text-muted-foreground">on Sitejabber</div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm">No AI, no shortcuts — just real writers delivering plagiarism-free essays</span>
          </div>
        </div>
      </div>
    </section>
  )
}

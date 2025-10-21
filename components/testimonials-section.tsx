import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">We know what students need, 1.5M+ papers prove it</h2>
              <p className="text-muted-foreground mb-6">We've earned their trust and handle every order with care</p>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Try EduBirdie
              </Button>
            </div>

            <Card className="p-6 bg-white">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm mb-4 leading-relaxed">
                "Juggling full-time classes and work, I was falling behind. Found it psychology expert here - the paper
                came three days early. Got an A+ and honestly, it felt relevant."
              </p>
              <div className="flex items-center gap-3">
                <img src="/diverse-student-profiles.png" alt="Student" className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-semibold text-sm">Samuel J.</p>
                  <p className="text-xs text-muted-foreground">Psychology student</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 flex-wrap opacity-60">
            <span className="text-2xl font-bold">Forbes</span>
            <span className="text-2xl font-bold">Newsweek</span>
            <span className="text-2xl font-bold">CNBC</span>
            <span className="text-2xl font-bold">Cosmopolitan</span>
            <span className="text-2xl font-bold">New York Post</span>
            <span className="text-2xl font-bold">HuffPost</span>
          </div>
        </div>
      </div>
    </section>
  )
}

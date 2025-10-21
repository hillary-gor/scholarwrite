import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const writers = [
  {
    name: "Brooklyn",
    field: "Psychology",
    rating: 4.9,
    orders: 1847,
    image: "/professional-woman-writer-smiling.jpg",
  },
  {
    name: "Samuel",
    field: "English Literature",
    rating: 4.8,
    orders: 2156,
    image: "/professional-man-with-glasses-writer.jpg",
  },
  {
    name: "Madison",
    field: "Sociology",
    rating: 4.9,
    orders: 1623,
    image: "/professional-black-woman-writer.jpg",
  },
  {
    name: "Matthew",
    field: "Business",
    rating: 4.8,
    orders: 1934,
    image: "/professional-man-writer-smiling.jpg",
  },
  {
    name: "Chloe",
    field: "History",
    rating: 4.9,
    orders: 1512,
    image: "/professional-woman-writer-outdoor.jpg",
  },
]

export function WritersSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Top essay writers ready to help you</h2>
          <p className="text-muted-foreground mb-2">
            800+ writers who always follow instructions.{" "}
            <a href="#" className="text-primary hover:underline">
              See all top writers →
            </a>
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {writers.map((writer, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-[280px] snap-start overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-[320px]">
                  <img
                    src={writer.image || "/placeholder.svg"}
                    alt={writer.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-lg">{writer.name}</h3>
                      <div className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <span className="text-sm font-semibold">{writer.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-white/90">{writer.field}</p>
                    <p className="text-xs text-white/70">{writer.orders} orders</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 hidden md:block">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 hidden md:block">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="text-center mt-8">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Find your expert
          </Button>
          <p className="text-xs text-muted-foreground mt-2">Guaranteed to follow instructions</p>
        </div>
      </div>
    </section>
  )
}

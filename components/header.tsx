"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { GraduationCap, ChevronDown } from "lucide-react"
import { useState } from "react"
import { OrderFormModal } from "./order-form-modal"

const services = {
  "Essays & Papers": [
    "Write my research paper",
    "Apa paper writing service",
    "Write my scholarship essay",
    "Dissertation writing services",
    "Coursework writing service",
    "Case study writing service",
  ],
  "Homework & Assignment": [
    "Pay for homework",
    "English assignment help",
    "Do my assignment",
    "Assignment help",
    "Finance assignment help",
    "Do my math homework",
    "Spss assignment help",
    "Do my homework",
    "Biology assignment help",
    "Chemistry assignment help",
  ],
  "More services": [
    "Do my powerpoint presentation",
    "Do my excel assignment",
    "Law essay writing service",
    "Annotated bibliography writing service",
    "Research proposal writing services",
    "Nursing assignment help",
    "Write my lab report",
    "Capstone project writing service",
    "Personal statement writing service",
  ],
}

export function Header() {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false)
  const [selectedService, setSelectedService] = useState("")

  const handleServiceClick = (service: string) => {
    setSelectedService(service)
    setIsOrderFormOpen(true)
  }

  return (
    <>
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-primary">ScholarWrite</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                  Services
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 max-h-[500px] overflow-y-auto">
                  {Object.entries(services).map(([category, items], idx) => (
                    <div key={category}>
                      {idx > 0 && <DropdownMenuSeparator />}
                      <DropdownMenuLabel className="text-primary font-semibold">{category}</DropdownMenuLabel>
                      {items.map((service) => (
                        <DropdownMenuItem
                          key={service}
                          onClick={() => handleServiceClick(service)}
                          className="cursor-pointer"
                        >
                          {service}
                        </DropdownMenuItem>
                      ))}
                    </div>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="/how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
                How it works
              </Link>
              <Link href="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
                About us
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
              <Button
                size="sm"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={() => setIsOrderFormOpen(true)}
              >
                Order now
              </Button>
            </div>
          </div>
        </div>
      </header>

      <OrderFormModal
        isOpen={isOrderFormOpen}
        onClose={() => setIsOrderFormOpen(false)}
        selectedService={selectedService}
      />
    </>
  )
}

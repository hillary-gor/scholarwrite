import Link from "next/link"
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8" />
              <span className="text-2xl font-bold">ScholarWrite</span>
            </Link>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Professional essay writing service helping students achieve academic excellence since 2015.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Essay Writing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Research Papers
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Editing & Proofreading
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Thesis Writing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Admission Essays
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-primary-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-primary-foreground/80 hover:text-primary-foreground">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Money-Back Guarantee
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <p>&copy; 2025 ScholarWrite. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-primary-foreground">
                Terms
              </Link>
              <Link href="#" className="hover:text-primary-foreground">
                Privacy
              </Link>
              <Link href="#" className="hover:text-primary-foreground">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

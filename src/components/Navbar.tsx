import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 w-full bg-white border-b border-neutral-200/50 py-4">
      <div className="container-master flex items-center justify-between">
        {/* Left Links */}
        <div className="hidden md:flex items-center gap-6 text-base font-medium text-neutral-600">
          <Link href="/services" className="hover:text-biznorx-red transition-colors">Services</Link>
          <Link href="/features" className="hover:text-biznorx-red transition-colors">Features</Link>
          <Link href="/blog" className="hover:text-biznorx-red transition-colors">Blog</Link>
          <Link href="/services" className="hover:text-biznorx-red transition-colors">Services</Link>
        </div>

        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="block">
            <img src="/logo/logo.png" alt="BiznorX Logo" className="w-auto h-auto max-h-8 md:max-h-10" />
          </Link>
        </div>

        {/* Right Links & CTA */}
        <div className="hidden md:flex items-center gap-6 text-base font-medium text-neutral-600">
          <Link href="/about" className="hover:text-biznorx-red transition-colors">About</Link>
          <Link href="/pricing" className="hover:text-biznorx-red transition-colors">Pricing</Link>
          <Link href="/contact" className="hover:text-biznorx-red transition-colors">Contact</Link>
          <Button className="rounded-full pl-5 pr-2 gap-2 text-base bg-gradient-to-r from-biznorx-deep-red to-biznorx-red hover:opacity-90 h-10 border-0">
            Get started 
            <div className="bg-white/20 rounded-full p-1 flex items-center justify-center">
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Button>
        </div>
      </div>
    </nav>
  )
}

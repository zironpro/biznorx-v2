"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function DigitalCTA() {
  return (
    <section className="w-full bg-biznorx-navy py-12 md:py-12 md:py-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-biznorx-red/5 to-transparent pointer-events-none"></div>
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-biznorx-red/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container-master px-4 max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-white tracking-tight mb-8">
          Ready to accelerate your digital growth?
        </h2>
        
        <p className="text-lg text-white/70 font-medium leading-relaxed mb-12 max-w-2xl mx-auto">
          Partner with our team of experts to build scalable products and data-driven campaigns that deliver measurable business results.
        </p>
        
        <Button asChild className="h-14 px-8 rounded-full bg-biznorx-red text-white hover:bg-white hover:text-biznorx-navy transition-all duration-300 text-base group cursor-pointer">
          <Link href="/contact">
            Start a Project
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

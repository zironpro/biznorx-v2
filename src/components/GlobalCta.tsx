import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GlobalCtaProps {
  title?: string
  description?: string
  buttonText?: string
  buttonLink?: string
}

export function GlobalCta({
  title = "Ready to transform your workforce?",
  description = "Partner with us to find the right talent and solutions for your business.",
  buttonText = "Get in touch today",
  buttonLink = "/contact"
}: GlobalCtaProps) {
  return (
    <section className="w-full px-4 py-12 md:py-16">
      <div className="container-master mx-auto max-w-6xl">
        <div className="bg-biznorx-navy rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
          
          {/* Subtle background effects */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-biznorx-red/10 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>

          {/* Left Text */}
          <div className="flex flex-col relative z-10 w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-white font-bold mb-3 tracking-tight">
              {title}
            </h2>
            <p className="text-white/70 text-base md:text-lg max-w-2xl">
              {description}
            </p>
          </div>

          {/* Right Button */}
          <div className="relative z-10 shrink-0">
            <Button asChild className="rounded-full pl-6 pr-3 gap-3 text-base md:text-lg bg-gradient-to-r from-biznorx-deep-red to-biznorx-red hover:opacity-90 h-14 border-0 shadow-lg shadow-biznorx-red/20 transition-all hover:scale-105">
              <Link href={buttonLink}>
                {buttonText}
                <div className="bg-white/20 rounded-full p-1.5 flex items-center justify-center ml-1">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </Link>
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  )
}

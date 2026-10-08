"use client"

import { useRef, useEffect, useState } from "react"
import { 
  Heart, Settings, Target, Shapes, AppWindow, ChevronLeft, ChevronRight,
  Factory, Stethoscope, Laptop, ShoppingBag, Building, Truck,
  GraduationCap, Hotel, Landmark, Zap, PlaneTakeoff, HardHat
} from "lucide-react"
import Link from "next/link"

export function IndustriesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -260, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 260, behavior: "smooth" })
    }
  }

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
        
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" })
        } else {
          scrollContainerRef.current.scrollBy({ left: 260, behavior: "smooth" })
        }
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [isPaused])

  const industries = [
    { name: "Manufacturing", icon: Factory, href: "/industries/manufacturing" },
    { name: "Healthcare", icon: Stethoscope, href: "/industries/healthcare" },
    { name: "Technology", icon: Laptop, href: "/industries/technology" },
    { name: "Retail", icon: ShoppingBag, href: "/industries/retail" },
    { name: "Real Estate", icon: Building, href: "/industries/real-estate" },
    { name: "Logistics", icon: Truck, href: "/industries/logistics" },
    { name: "Education", icon: GraduationCap, href: "/industries/education" },
    { name: "Hospitality", icon: Hotel, href: "/industries/hospitality" },
    { name: "Banking & Finance", icon: Landmark, href: "/industries/banking-finance" },
    { name: "Energy", icon: Zap, href: "/industries/energy" },
    { name: "Aviation", icon: PlaneTakeoff, href: "/industries/aviation" },
    { name: "Construction", icon: HardHat, href: "/industries/construction" },
  ]

  return (
    <section className="w-full bg-[#f8f6f6] py-12 md:py-20 relative overflow-hidden">
      <div className="container-master px-4 max-w-7xl mx-auto">
        <div className="flex flex-col mb-8 md:mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-6 text-biznorx-navy text-center md:text-left">
            Built for Businesses <br/> Across Industries
          </h2>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 -mx-4 px-4 md:mx-0 md:px-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {industries.map((ind, i) => {
              const Icon = ind.icon
              return (
                <div 
                  key={i}
                  className="shrink-0 w-[200px] md:w-[240px] snap-center relative group cursor-pointer"
                >
                  <Link href={ind.href} className="absolute inset-0 z-10"></Link>
                  <div className="bg-white rounded-lg p-8 aspect-square flex items-center justify-center shadow-sm group-hover:shadow-xl transition-shadow duration-300 mb-6">
                    <Icon className="w-14 h-14 text-biznorx-red group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-center font-bold text-biznorx-navy text-base md:text-lg group-hover:text-biznorx-red transition-colors">
                    {ind.name}
                  </h3>
                </div>
              )
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-biznorx-navy shadow-sm hover:shadow-md transition-all hover:bg-neutral-50 active:scale-95"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-biznorx-navy shadow-sm hover:shadow-md transition-all hover:bg-neutral-50 active:scale-95"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  )
}

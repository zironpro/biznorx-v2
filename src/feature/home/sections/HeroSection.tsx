"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const portraits = [
    "https://i.pravatar.cc/300?img=33",
    "https://i.pravatar.cc/300?img=11",
    "https://i.pravatar.cc/300?img=12",
    "https://i.pravatar.cc/300?img=5",
    "https://i.pravatar.cc/300?img=15",
    "https://i.pravatar.cc/300?img=32",
    "https://i.pravatar.cc/300?img=59",
  ]

  const [scrollOffset, setScrollOffset] = useState(0)

  // Infinite animation loop
  useEffect(() => {
    let animationFrameId: number
    let lastTime = performance.now()

    const animate = (time: number) => {
      const deltaTime = time - lastTime
      lastTime = time
      
      // Control the speed of the carousel here (units per ms)
      const speed = 0.0006 
      setScrollOffset(prev => prev + deltaTime * speed)
      
      animationFrameId = requestAnimationFrame(animate)
    }
    
    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <section className="w-full bg-white flex flex-col items-center justify-center min-h-[calc(100vh-72px)] py-8 md:py-12 overflow-hidden">
      <div className="container-master flex flex-col items-center text-center">
        
        {/* Typography */}
        <h1 className="flex flex-col gap-1 md:gap-2 mb-4">
          <span className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-biznorx-navy tracking-tight">
            Find Top Talent,
          </span>
          <span className="font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-biznorx-deep-red to-biznorx-red pb-2 md:pb-4">
            Build World-Class Teams
          </span>
        </h1>
        
        <p className="text-sm md:text-base text-slate-600 max-w-lg mx-auto mb-6 font-medium">
          The premier recruiting agency connecting ambitious professionals <br className="hidden sm:block"/>
          with industry-leading companies.
        </p>
        
        {/* CTA */}
        <Button className="rounded-full pl-6 pr-2 py-5 gap-3 text-sm md:text-base bg-gradient-to-r from-biznorx-red to-biznorx-deep-red hover:opacity-90 h-11 md:h-12 z-20 relative border-0">
          Start Hiring Now
          <div className="bg-white/20 rounded-full p-1 md:p-1.5 flex items-center justify-center">
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
        </Button>
      </div>

      {/* Curved Images Layout */}
      <div 
        className="w-full max-w-[1000px] mx-auto flex justify-center items-center h-[300px] md:h-[460px] relative mb-12 md:mb-16 -mt-8 md:-mt-16"
        style={{ perspective: '800px' }}
      >
        {portraits.map((src, i) => {
          const total = portraits.length;
          // Calculate the continuous wrapped offset
          const rawOffset = i - 3 + scrollOffset;
          const offset = ((rawOffset + 3.5) % total + total) % total - 3.5;
          const absOffset = Math.abs(offset);
          
          // Fade out the cards when they reach the extreme edges so they don't visibly snap back
          const opacity = Math.max(0, 1 - Math.max(0, absOffset - 2.5));

          return (
            <div
              key={i}
              // Removed transition-transform so the requestAnimationFrame applies instantly without stuttering
              className="absolute rounded-xl md:rounded-[24px] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] bg-neutral-100"
              style={{
                width: 'clamp(100px, 18vw, 200px)',
                aspectRatio: '3/4.2',
                left: `calc(50% + ${offset} * clamp(85px, 15vw, 170px))`,
                transform: `translateX(-50%) translateZ(${(absOffset - 1.2) * 140}px) rotateY(${offset * -18}deg)`,
                zIndex: Math.round(absOffset * 10),
                opacity,
              }}
            >
              <img 
                src={src} 
                alt="Team member" 
                className="absolute inset-0"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          )
        })}
      </div>

      {/* Features Grid */}
      <div className="container-master grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-5xl text-center px-4">
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-bold text-base md:text-lg text-biznorx-navy">Vetted Talent Pools</h3>
          <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
            Access thousands of pre-screened professionals ready to make an immediate impact on your organization.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-bold text-base md:text-lg text-biznorx-navy">Streamlined Hiring</h3>
          <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
            Our efficient process reduces time-to-hire by 40%, getting the right people in the right seats faster.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-bold text-base md:text-lg text-biznorx-navy">Perfect Culture Fit</h3>
          <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
            We don't just match skills; we utilize deep behavioral analysis to ensure long-term cultural alignment.
          </p>
        </div>
      </div>
    </section>
  )
}

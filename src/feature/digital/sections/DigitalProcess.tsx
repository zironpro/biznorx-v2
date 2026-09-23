"use client"

import { Search, Map, Rocket } from "lucide-react"

export function DigitalProcess() {
  const steps = [
    {
      id: "01",
      title: "Discovery",
      subtitle: "We learn your business inside out.",
      desc: "Every great project starts with listening. We conduct a thorough discovery session covering your goals, target audience, competitive landscape, and digital footprint.",
      icon: Search
    },
    {
      id: "02",
      title: "Strategy",
      subtitle: "We build a roadmap, not a guess.",
      desc: "Before a single pixel is pushed, we deliver a clear, phased digital strategy. You see exactly what we will do, why we are doing it, and the expected outcomes.",
      icon: Map
    },
    {
      id: "03",
      title: "Execution",
      subtitle: "We build and launch with precision.",
      desc: "Our specialists execute across design, development, and content. Every deliverable is rigorously QA-tested and reviewed against your core business objectives.",
      icon: Rocket
    }
  ]

  return (
    <section className="w-full bg-white py-12 md:py-12 md:py-20 border-t border-neutral-100">
      <div className="container-master px-4 max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-biznorx-red mb-4">
            Our Proven Process
          </p>
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-biznorx-navy tracking-tight mb-6">
            A disciplined methodology.
          </h2>
          <p className="text-slate-600 font-medium leading-relaxed">
            A three-step methodology that turns complex business goals into measurable, scalable digital results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-[4.5rem] left-[15%] right-[15%] h-px bg-neutral-200 z-0"></div>

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-white rounded-full border-4 border-neutral-50 shadow-sm flex items-center justify-center mb-6 group-hover:border-biznorx-red/20 group-hover:shadow-md transition-all duration-300">
                  <Icon className="w-8 h-8 text-biznorx-navy group-hover:text-biznorx-red transition-colors duration-300" strokeWidth={1.5} />
                </div>
                
                <span className="text-xs font-bold text-slate-300 mb-3">{step.id}</span>
                <h3 className="text-2xl font-bold text-biznorx-navy mb-1">{step.title}</h3>
                <h4 className="text-sm font-bold text-biznorx-red mb-4">{step.subtitle}</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-[320px]">
                  {step.desc}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

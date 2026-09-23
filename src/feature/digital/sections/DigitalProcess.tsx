"use client"

import { Search, Map, Rocket } from "lucide-react"
import { motion } from "framer-motion"

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
          <div 
            className="hidden md:block absolute top-[2.5rem] left-[15%] right-[15%] h-1 z-0"
            style={{
              backgroundImage: 'radial-gradient(circle, #d4d4d8 2px, transparent 2px)',
              backgroundSize: '24px 4px',
              backgroundPosition: 'left center',
              backgroundRepeat: 'repeat-x'
            }}
          >
            <motion.div 
              className="absolute top-0 left-0 h-full z-10"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2, ease: "easeOut" }}
              style={{
                backgroundImage: 'radial-gradient(circle, #ea0000 2.5px, transparent 2.5px)',
                backgroundSize: '24px 4px',
                backgroundPosition: 'left center',
                backgroundRepeat: 'repeat-x'
              }}
            />
          </div>

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                <motion.div 
                  initial={{ backgroundColor: "#ffffff", borderColor: "#fafafa" }}
                  whileInView={{ backgroundColor: "#ea0000", borderColor: "#fecaca" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: i * 1.0 }}
                  className="w-20 h-20 rounded-full border-4 shadow-sm flex items-center justify-center mb-6 group-hover:shadow-md transition-shadow duration-300"
                >
                  <motion.div
                    initial={{ color: "#0b1221" }}
                    whileInView={{ color: "#ffffff" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: i * 1.0 }}
                  >
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </motion.div>
                </motion.div>
                
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

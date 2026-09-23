"use client"

import { Shield, Target, Compass } from "lucide-react"

export function OurValuesSection() {
  const values = [
    {
      icon: Shield,
      title: "Integrity First",
      desc: "Every recommendation is grounded in verified data and honest reasoning. We prioritize transparency and accountability above short-term gains."
    },
    {
      icon: Compass,
      title: "Built to Last",
      desc: "60+ years of operational experience shape every decision we make today. We construct scalable solutions that stand the test of time."
    },
    {
      icon: Target,
      title: "Global Precision",
      desc: "Dual-market operations across India and UAE with seamless cross-border execution, delivering exact solutions to complex global challenges."
    }
  ]

  return (
    <section className="w-full bg-biznorx-navy py-12 md:py-12 md:py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

      <div className="container-master px-4 relative z-10">
        <div className="text-center mb-8 md:mb-16 md:mb-12 md:mb-24">
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-biznorx-red mb-4">
            Our Core Pillars
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-white tracking-tight">
            Values that define us.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((v, i) => {
            const Icon = v.icon
            return (
              <div 
                key={i} 
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all duration-500 overflow-hidden"
              >
                {/* Hover gradient flare */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-biznorx-red/20 to-transparent transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-biznorx-red transition-all duration-500 shadow-lg">
                  <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:-translate-y-1 transition-transform duration-500">
                  {v.title}
                </h3>
                
                <p className="text-slate-300 leading-relaxed group-hover:-translate-y-1 transition-transform duration-500 delay-75">
                  {v.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

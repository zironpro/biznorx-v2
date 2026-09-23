"use client"

import { CheckCircle2, ArrowDown } from "lucide-react"

export function ServiceProcess() {
  const steps = [
    { num: "01", title: "Discovery & Alignment", desc: "We begin by understanding your organizational culture, technical requirements, and long-term business objectives." },
    { num: "02", title: "Global Talent Sourcing", desc: "Our network connects you with pre-vetted, high-caliber professionals across multiple international markets." },
    { num: "03", title: "Rigorous Assessment", desc: "Candidates undergo multi-stage technical and behavioral interviews to ensure absolute alignment." },
    { num: "04", title: "Seamless Onboarding", desc: "We handle compliance, contracts, and continuous support to ensure successful integration." }
  ]

  return (
    <section className="w-full bg-white py-12 md:py-12 md:py-20">
      <div className="container-master px-4 max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-biznorx-navy tracking-tight mb-6">
            The BiznorX Methodology
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            A transparent, data-driven approach designed to eliminate hiring risks and accelerate organizational growth.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-neutral-200 -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, i) => {
              const isEven = i % 2 !== 0;
              return (
                <div key={i} className={`relative flex flex-col md:flex-row items-center md:items-start ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Content Box */}
                  <div className={`w-full md:w-[calc(50%-3rem)] bg-neutral-50 p-8 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="inline-block text-sm font-bold text-biznorx-red mb-2 tracking-widest uppercase">Phase {step.num}</span>
                    <h3 className="text-2xl font-bold text-biznorx-navy mb-3">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed font-medium">{step.desc}</p>
                  </div>

                  {/* Center Node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-neutral-50 items-center justify-center shadow-sm z-10 top-8">
                    <div className="w-4 h-4 bg-biznorx-red rounded-full"></div>
                  </div>

                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

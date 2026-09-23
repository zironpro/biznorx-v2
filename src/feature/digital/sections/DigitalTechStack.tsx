"use client"

import { CheckCircle2 } from "lucide-react"

export function DigitalTechStack() {
  const reasons = [
    {
      id: "01",
      title: "Strategy before execution",
      desc: "We refuse to operate on assumptions. Every engagement begins with a comprehensive audit of your digital ecosystem to ensure we are solving the right problems."
    },
    {
      id: "02",
      title: "Premium design standards",
      desc: "We build enduring brands with striking visual systems that cut through the noise and elevate your market positioning."
    },
    {
      id: "03",
      title: "Measurable, revenue-focused results",
      desc: "Data-driven campaigns and conversion-optimized designs created specifically to capture intent and scale revenue predictably."
    },
    {
      id: "04",
      title: "A long-term growth partner",
      desc: "We don't just launch and leave. We are built for long-term partnerships, providing continuous optimization and support."
    }
  ]

  return (
    <section className="w-full bg-neutral-50 py-12 border-t border-neutral-100 overflow-hidden">
      <div className="container-master px-4 max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center">
          
          {/* Left Side: Quote & Stats */}
          <div className="w-full lg:w-5/12 flex flex-col">
            <div className="mb-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-biznorx-red mb-6">
                The BiznorX Standard
              </p>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-biznorx-navy tracking-tight mb-8 leading-snug">
                Why leading brands choose BiznorX.
              </h2>
              <blockquote className="border-l-4 border-biznorx-red pl-6 py-2">
                <p className="text-lg md:text-xl text-slate-700 italic font-medium leading-relaxed mb-4">
                  "Digital isn't a checkbox — it's the storefront of the modern era. We partner only with brands ready to own their space."
                </p>
                <footer className="text-sm font-bold text-slate-900 uppercase tracking-widest">— BiznorX Team</footer>
              </blockquote>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-200">
              <div>
                <div className="text-3xl font-bold text-biznorx-navy mb-1">5+</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Years Exp.</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-biznorx-navy mb-1">120+</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-biznorx-navy mb-1">98%</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Side: Reasons */}
          <div className="w-full lg:w-7/12">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-neutral-200/50 border border-neutral-100">
              <div className="space-y-8">
                {reasons.map((reason, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-xs font-bold text-biznorx-navy group-hover:bg-biznorx-red group-hover:text-white transition-colors duration-300">
                        {reason.id}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-biznorx-navy mb-2 group-hover:text-biznorx-red transition-colors duration-300">
                        {reason.title}
                      </h3>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">
                        {reason.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

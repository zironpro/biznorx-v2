"use client"

import { Plus, Circle, Square, Star } from "lucide-react"

export function WhyChooseUsSection() {
  const listItems = [
    { icon: Plus, label: "Empirically Validated Methodologies" },
    { icon: Circle, label: "International Compliance Frameworks" },
    { icon: Plus, label: "Data-Driven Talent Acquisition" },
    { icon: Square, label: "Comprehensive Risk Architecture" },
  ]

  const metrics = [
    {
      value: "60+",
      label: "Years of operational resiliency and enterprise reliability"
    },
    {
      value: "100%",
      label: "Adherence to multijurisdictional labor frameworks"
    },
    {
      value: "Zero",
      label: "Tolerance for compliance deviations and reputational vulnerabilities"
    }
  ]

  return (
    <section className="w-full bg-neutral-50 py-12 md:py-12 md:py-20">
      <div className="container-master px-4 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-8">

        {/* Left Column */}
        <div className="w-full lg:w-3/12 flex flex-col">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-biznorx-navy tracking-tight leading-none mb-12">
            The Architecture of<br />Institutional Trust
          </h2>

          <ul className="flex flex-col gap-3 mb-8 md:mb-16">
            {listItems.map((item, i) => {
              const Icon = item.icon
              return (
                <li key={i} className="flex items-center gap-3">
                  <Icon className="w-4 h-4 text-biznorx-navy" strokeWidth={2.5} />
                  <span className="text-sm font-medium text-slate-700">{item.label}</span>
                </li>
              )
            })}
          </ul>


        </div>

        {/* Right Column */}
        <div className="w-full lg:w-9/12 flex flex-col pt-2 lg:pl-10">
          <p className="text-2xl md:text-3xl text-biznorx-navy font-medium leading-snug tracking-tight mb-8 md:mb-16 max-w-3xl">
            We engineer robust workforce paradigms by synthesizing decades of institutional expertise with advanced data analytics. Our methodology ensures scalable, high-performance talent acquisition while rigorously mitigating compliance and operational vulnerabilities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((m, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-8 pb-12 shadow-sm border border-neutral-100 flex flex-col justify-between h-[280px] relative overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              >
                {/* Watermark text */}
                <span className="absolute top-4 left-4 text-[120px] font-bold text-neutral-50/50 leading-none tracking-tighter -z-10 select-none group-hover:scale-110 transition-transform duration-700 origin-top-left">
                  {m.value}
                </span>

                <h3 className="text-5xl md:text-6xl font-bold text-biznorx-navy tracking-tight z-10 mt-4">
                  {m.value}
                </h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed z-10">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

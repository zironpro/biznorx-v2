"use client"

import { Briefcase, Users, Cpu } from "lucide-react"

export function WhatDrivesUs() {
  const drivers = [
    {
      title: "Experience",
      desc: "Decades of understanding people and businesses.",
      icon: Briefcase,
      offset: "lg:mt-0"
    },
    {
      title: "People",
      desc: "Human relationships remain at the heart of recruitment.",
      icon: Users,
      offset: "lg:mt-16"
    },
    {
      title: "Innovation",
      desc: "Technology helps us create smarter workforce solutions.",
      icon: Cpu,
      offset: "lg:mt-32"
    }
  ]

  return (
    <section className="w-full bg-gradient-to-b from-neutral-50 to-neutral-200/50 py-12 md:py-12 md:py-20 relative overflow-hidden">
      <div className="container-master px-4 max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-20">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-neutral-200/50 text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
            Our Core Principles
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-biznorx-navy tracking-tight mb-4">
            What Drives Us
          </h2>
          <p className="text-slate-600 font-medium max-w-xl mx-auto text-sm md:text-base">
            The foundational elements that power our approach to global recruitment and workforce management.
          </p>
        </div>

        {/* Cascading Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {drivers.map((d, i) => {
            const Icon = d.icon
            return (
              <div
                key={i}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-8 md:p-10 flex flex-col gap-8 border border-white shadow-xl shadow-black/5 hover:shadow-2xl transition-all duration-500"
              >
                {/* Big Title Top */}
                <h3 className="text-3xl md:text-4xl font-bold text-biznorx-navy tracking-tight">
                  {d.title}
                </h3>

                {/* Icon & Text Bottom */}
                <div className="flex items-start gap-4">
                  <div className="shrink-0 mt-1">
                    <Icon className="w-5 h-5 text-biznorx-red" strokeWidth={2} />
                  </div>
                  <p className="text-sm font-bold text-slate-800 leading-snug">
                    {d.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>

      {/* Bottom fade out to blend with next section if needed */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  )
}

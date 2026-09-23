"use client"

import Image from "next/image"

export function IndustriesHero() {
  return (
    <section className="w-full relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/process_2.jpg" // Abstract/industrial placeholder
          alt="Industries"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-biznorx-navy/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-biznorx-navy via-transparent to-transparent"></div>
      </div>
      
      <div className="container-master relative z-10 flex flex-col items-center text-center px-4">
        <div className="w-16 h-1 bg-biznorx-red mb-8 rounded-full"></div>
        
        <h1 className="flex flex-col gap-2 mb-6 text-white">
          <span className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none">
            Transforming
          </span>
          <span className="font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight pb-2 leading-none">
            global industries.
          </span>
        </h1>
        
        <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
          From manufacturing floors to corporate boardrooms, we provide tailored talent solutions that understand the unique demands and compliance requirements of your specific sector.
        </p>
      </div>
    </section>
  )
}

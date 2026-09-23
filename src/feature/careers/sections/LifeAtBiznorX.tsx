"use client"

import Image from "next/image"

export function LifeAtBiznorX() {
  return (
    <section className="w-full bg-white py-12 border-b border-neutral-100">
      <div className="container-master px-4 max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-biznorx-red mb-4">
            Culture & Community
          </p>
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-biznorx-navy tracking-tight mb-6">
            Life at BiznorX
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">
            We're building more than just a recruitment agency. We're building a global community of innovators, leaders, and change-makers.
          </p>
        </div>

        {/* Masonry Grid Simulation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[600px]">
          {/* Main Large Image */}
          <div className="md:col-span-8 relative rounded-3xl overflow-hidden group">
            <Image 
              src="/images/process_1.jpg" // Placeholder
              alt="Team collaboration"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-[10s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-6 left-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 delay-100">
              <p className="text-sm font-bold uppercase tracking-widest mb-1">Mumbai Office</p>
              <h3 className="text-2xl font-bold">Annual Strategy Summit</h3>
            </div>
          </div>
          
          {/* Right Column Stack */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="h-1/2 relative rounded-3xl overflow-hidden group">
              <Image 
                src="/images/process_2.jpg" // Placeholder
                alt="Dubai Office"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[10s]"
              />
              <div className="absolute inset-0 bg-biznorx-navy/40 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-300"></div>
            </div>
            <div className="h-1/2 relative rounded-3xl overflow-hidden bg-biznorx-navy flex items-center justify-center text-center p-8">
              <div>
                <h3 className="text-4xl font-bold text-white mb-2 text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-400">40+</h3>
                <p className="text-white/80 font-medium">Nationalities Represented</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

export function ContactHero() {
  return (
    <section className="w-full bg-white flex flex-col items-center justify-center min-h-[50vh] py-10 md:py-16 overflow-hidden relative border-b border-neutral-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-100 via-white to-white -z-10" />
      
      <div className="container-master flex flex-col items-center text-center px-4">
        <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-biznorx-red mb-6">
          Get in Touch
        </p>

        <h1 className="flex flex-col gap-1 md:gap-2 mb-6">
          <span className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-[60px] text-biznorx-navy tracking-tight">
            Connect with
          </span>
          <span className="font-bold text-4xl md:text-5xl lg:text-[60px] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-biznorx-deep-red to-biznorx-red pb-2">
            BiznorX.
          </span>
        </h1>
        
        <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Enterprise-grade workforce solutions built on 60+ years of legacy. Serving global organisations with discipline and precision from our offices in India and the UAE.
        </p>
      </div>
    </section>
  )
}

"use client"

export function CareersHero() {
  return (
    <section className="w-full bg-biznorx-navy flex flex-col items-center justify-center min-h-[50vh] py-10 md:py-16 overflow-hidden relative text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-biznorx-navy via-biznorx-navy to-black -z-10" />
      
      <div className="container-master flex flex-col items-center text-center px-4">
        <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-biznorx-red mb-6">
          Join Our Network
        </p>

        <h1 className="flex flex-col gap-1 md:gap-2 mb-6">
          <span className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-[60px] tracking-tight">
            Submit Your CV
          </span>
        </h1>
        
        <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
          Connect with industry-leading companies and unlock your next career opportunity. Our intelligent systems match your profile with the perfect role.
        </p>
      </div>
    </section>
  )
}

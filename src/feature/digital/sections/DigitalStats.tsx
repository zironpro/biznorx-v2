"use client"

export function DigitalStats() {
  const stats = [
    { value: "3x", label: "Organic traffic growth", desc: "Average increase in qualified visitor traffic." },
    { value: "40%", label: "Conversion lift", desc: "Average improvement in lead generation rates." },
    { value: "12w", label: "To reach page one", desc: "Average time to rank for competitive keywords." },
    { value: "98%", label: "Client retention", desc: "Long-term partnerships built on consistent ROI." },
  ]

  return (
    <section className="w-full bg-biznorx-navy py-12 md:py-12 md:py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-biznorx-red/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="container-master px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center px-6 py-8 md:py-0 group">
              <div className="relative">
                {/* Watermark effect */}
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[100px] font-bold text-white/5 select-none -z-10 group-hover:scale-110 transition-transform duration-500">
                  {stat.value}
                </span>
                <span className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-400 block">
                  {stat.value}
                </span>
              </div>
              <span className="text-sm font-bold text-white mb-2 tracking-wide">
                {stat.label}
              </span>
              <p className="text-xs text-white/50 font-medium max-w-[200px]">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

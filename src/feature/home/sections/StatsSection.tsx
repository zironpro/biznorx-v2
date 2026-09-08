export function StatsSection() {
  const stats = [
    {
      value: "98%",
      label: "Retention Rate",
      description: "Of our placements stay with their companies for over 2 years, driving long-term value."
    },
    {
      value: "14",
      label: "Days to Hire",
      description: "Average time from initial search to an accepted offer, drastically reducing downtime."
    },
    {
      value: "500+",
      label: "Top Placements",
      description: "Successfully placed executives, specialized engineers, and vital leadership roles."
    },
    {
      value: "1%",
      label: "Elite Talent",
      description: "Exclusive access to the top tier of passive candidates hidden from typical job boards."
    }
  ];

  return (
    <section className="w-full bg-biznorx-navy relative overflow-hidden">
      <div className="w-full mx-auto max-w-[2000px]">
        
        {/* Top Header Area */}
        <div className="px-6 md:px-12 lg:px-24 py-16 lg:py-24 border-b border-white/10">
          <span className="text-biznorx-red tracking-widest text-sm font-bold uppercase mb-6 block">Proven Impact</span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-7xl text-white tracking-tight leading-tight max-w-3xl">
              The Numbers <br className="hidden lg:block"/>Behind Our Success.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-md lg:pb-3">
              We don't just talk about finding great talent—we deliver measurable results that transform businesses and accelerate growth globally.
            </p>
          </div>
        </div>

        {/* Full-width 4 Column Brutalist Grid */}
        <div className="flex flex-col lg:flex-row w-full">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className={`flex-1 flex flex-col justify-between p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/10 hover:bg-white/[0.03] transition-colors duration-500 group ${i === stats.length - 1 ? 'lg:border-r-0' : ''}`}
            >
              <div className="mb-8 lg:mb-12">
                <div className="text-5xl md:text-6xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 tracking-tighter group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-left">
                  {stat.value}
                </div>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-biznorx-red mb-1 leading-tight">
                  {stat.label}
                </div>
                <p className="text-white/50 leading-relaxed text-sm md:text-base pr-4">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

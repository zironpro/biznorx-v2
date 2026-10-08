export function IndustriesSection() {
  const industries = [
    "Technology", "Real Estate", "Construction", "Healthcare", 
    "Finance", "Manufacturing", "Logistics", "Retail", 
    "Hospitality", "Professional Services"
  ];

  return (
    <section className="w-full bg-neutral-50 py-24 md:py-32">
      <div className="container-master">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-biznorx-navy tracking-tight leading-tight">
            Built for Businesses <br/> Across Industries
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {industries.map((industry, i) => (
            <div 
              key={i} 
              className="px-8 py-4 bg-white rounded-full shadow-sm border border-neutral-200 text-lg font-medium text-gray-700 hover:border-biznorx-navy hover:text-biznorx-navy transition-colors cursor-pointer"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

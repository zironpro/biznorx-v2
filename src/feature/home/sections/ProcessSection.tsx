import Image from "next/image";

export function ProcessSection() {
  const steps = [
    {
      id: "01",
      title: "Discover",
      description: "We conduct a deep-dive analysis into your unique business requirements, market positioning, and operational bottlenecks.",
      image: "/images/methodology_discover.jpg",
    },
    {
      id: "02",
      title: "Strategize",
      description: "Our experts design a tailored, data-driven roadmap to address your challenges and identify sustainable growth opportunities.",
      image: "/images/methodology_strategize.jpg",
    },
    {
      id: "03",
      title: "Execute",
      description: "Our specialized teams and global partners implement the strategy with precision, ensuring quality and minimal disruption.",
      image: "/images/methodology_execute.jpg",
    },
    {
      id: "04",
      title: "Grow",
      description: "We continuously monitor performance metrics, adapting and scaling our solutions as your business evolves in a dynamic market.",
      image: "/images/methodology_grow.jpg",
    }
  ];

  return (
    <section className="w-full bg-neutral-50 py-24 md:py-32">
      <div className="container-master max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-20">
          <span className="block font-bold text-sm tracking-widest uppercase text-biznorx-red mb-4">The BiznorX Methodology</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-6 text-biznorx-navy">
            A seamless process for <br className="hidden md:block"/>sustainable scaling.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, i) => {
            return (
              <div key={i} className="flex flex-col group cursor-pointer">
                <div className="w-full aspect-square bg-[#f2f4f7] rounded-3xl overflow-hidden flex items-center justify-center mb-6 relative">
                  <Image 
                    src={step.image} 
                    alt={step.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                </div>
                <h4 className="font-bold text-xl text-biznorx-navy mb-3 leading-tight pr-4">
                  {step.title}
                </h4>
                <p className="text-gray-500 leading-relaxed text-sm pr-4">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

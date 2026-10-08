import { Search, Lightbulb, Rocket, TrendingUp } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      id: "01",
      title: "Discover",
      description: "We understand your requirement.",
      icon: Search,
    },
    {
      id: "02",
      title: "Strategize",
      description: "We identify the right solution.",
      icon: Lightbulb,
    },
    {
      id: "03",
      title: "Execute",
      description: "Our teams and partners deliver.",
      icon: Rocket,
    },
    {
      id: "04",
      title: "Grow",
      description: "We stay involved as your business evolves.",
      icon: TrendingUp,
    }
  ];

  return (
    <section className="w-full bg-neutral-50 py-24 md:py-32">
      <div className="container-master max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-20">
          <h2 className="font-bold text-sm tracking-widest uppercase text-gray-500 mb-4">How BiznorX Works</h2>
          <h3 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-biznorx-navy tracking-tight leading-tight">
            A seamless process for <br className="hidden md:block"/>every vertical.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (desktop only) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gray-200 z-0"></div>

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="flex flex-col items-center text-center relative z-10 group">
                <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-gray-100">
                  <Icon className="w-8 h-8 text-biznorx-navy group-hover:text-biznorx-navy/70 transition-colors" />
                </div>
                <h4 className="font-bold text-xl text-biznorx-navy mb-2">{step.title}</h4>
                <p className="text-gray-500 leading-relaxed text-sm max-w-[200px]">
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

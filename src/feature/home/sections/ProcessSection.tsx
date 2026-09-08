import { Search, Network, CheckSquare, Rocket, Star, ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ProcessSection() {
  const steps = [
    {
      id: "01",
      title: "Discovery",
      description: "Deep dive into your company culture and goals.",
      icon: Search,
    },
    {
      id: "02",
      title: "Sourcing",
      description: "Accessing exclusive networks of top 1% talent.",
      icon: Network,
    },
    {
      id: "03",
      title: "Vetting",
      description: "Multi-stage behavioral and technical assessments.",
      icon: CheckSquare,
    },
    {
      id: "04",
      title: "Placement",
      description: "Smooth negotiations and onboarding follow-up.",
      icon: Rocket,
    }
  ];

  return (
    <section className="w-full bg-white py-24 md:py-32 border-t border-neutral-100">
      <div className="container-master">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Column - Images & Stats (approx 5/12) */}
          <div className="w-full lg:w-5/12 flex flex-col gap-4">
            {/* Top Large Image */}
            <div className="w-full h-64 md:h-80 relative rounded-3xl overflow-hidden shadow-sm">
              <Image 
                src="/images/process_1.jpg" 
                alt="Recruiting professionals" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Bottom Row */}
            <div className="flex flex-row gap-4 h-48 md:h-56">
              {/* Stat Card */}
              <div className="w-1/2 bg-gradient-to-r from-biznorx-deep-red to-biznorx-red rounded-3xl p-6 flex flex-col justify-center items-center text-center text-white relative overflow-hidden shadow-md group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-1 tracking-tighter">10K+</h3>
                <p className="text-white/90 text-xs lg:text-sm font-medium">Total Placements</p>
              </div>

              {/* Bottom Small Image */}
              <div className="w-1/2 relative rounded-3xl overflow-hidden shadow-sm">
                <Image 
                  src="/images/process_2.jpg" 
                  alt="Job interview" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content (approx 7/12) */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center lg:pl-6">
            
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-4 h-4 text-biznorx-red fill-biznorx-red" />
              <span className="text-biznorx-navy font-bold text-sm tracking-widest uppercase">How We Work</span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-biznorx-navy mb-6 tracking-tight leading-tight">
              A Proven Process for <br className="hidden lg:block"/>Exceptional Results
            </h2>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
              We've engineered a rigorous, data-driven methodology that eliminates the guesswork from hiring, saving you time while drastically improving quality in competitive markets all over the world.
            </p>

            <div className="flex items-center gap-6 mb-12">
              <Button className="rounded-full bg-gradient-to-r from-biznorx-deep-red to-biznorx-red hover:opacity-90 text-white px-8 h-12 gap-3 group border-0 shadow-md">
                Start Hiring
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Button>
              
              <div className="flex items-center gap-3">
                {/* Simulated Avatar Stack or Leader */}
                <div className="flex -space-x-3">
                   <div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-200 overflow-hidden relative shadow-sm">
                     <Image src="/images/process_1.jpg" alt="Team" fill className="object-cover" />
                   </div>
                   <div className="w-10 h-10 rounded-full border-2 border-white bg-biznorx-navy flex items-center justify-center text-white text-xs font-bold shadow-sm relative z-10">
                     5+
                   </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-biznorx-navy font-bold text-sm leading-tight">Expert Team</span>
                  <span className="text-slate-600 text-xs">Dedicated Recruiters</span>
                </div>
              </div>
            </div>

            {/* The 4 Process Steps in a single row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={i} className="bg-[#F8F9FA] rounded-[1rem] p-4 md:p-5 border border-neutral-100 hover:bg-white hover:shadow-lg transition-all duration-300 group flex flex-col">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-biznorx-red transition-colors mb-3">
                      <Icon className="w-4 h-4 text-biznorx-red group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="font-bold text-biznorx-navy text-sm mb-1">{step.title}</h4>
                    <p className="text-slate-600 text-xs leading-relaxed opacity-90">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

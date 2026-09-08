"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ServicesSection() {
  const [active, setActive] = useState<'employer' | 'candidate' | null>(null);

  const employerFeatures = [
    "Access to exclusive passive candidate networks",
    "Rigorous technical and behavioral screening",
    "Dedicated account managers & hiring strategy",
    "40% average reduction in time-to-hire",
  ];

  const candidateFeatures = [
    "Unlisted and highly exclusive job opportunities",
    "Expert resume and portfolio optimization",
    "1-on-1 interview preparation and coaching",
    "Salary negotiation and career mapping",
  ];

  return (
    <section className="w-full min-h-[900px] lg:min-h-[600px] lg:h-[80vh] flex flex-col lg:flex-row overflow-hidden border-t border-neutral-100">
      
      {/* Employer Panel */}
      <div 
        onMouseEnter={() => setActive('employer')}
        onMouseLeave={() => setActive(null)}
        className={`relative flex flex-col justify-center p-8 md:p-12 lg:p-24 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          active === 'employer' ? 'lg:w-[65%]' : active === 'candidate' ? 'lg:w-[35%]' : 'lg:w-[50%]'
        } bg-biznorx-navy text-white overflow-hidden group cursor-pointer`}
      >
        <div className={`relative z-10 w-full max-w-xl mx-auto flex flex-col transition-all duration-500 ${
          active === 'candidate' ? 'lg:opacity-0 lg:translate-x-[-20px] pointer-events-none' : 'opacity-100 translate-x-0'
        }`}>
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl lg:text-7xl mb-6 tracking-tight leading-none">
            For<br/>Employers
          </h2>
          
          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-md">
            We don't just fill seats. We source, vet, and secure top-tier professionals who perfectly align with your company's culture and long-term vision.
          </p>

          <ul className="space-y-4 mb-12">
            {employerFeatures.map((f, i) => (
              <li key={i} className="flex items-center gap-4">
                <Check className="w-5 h-5 text-biznorx-red shrink-0" />
                <span className="text-white/90 font-medium">{f}</span>
              </li>
            ))}
          </ul>

          <Button className="w-fit rounded-full bg-white text-biznorx-navy hover:bg-neutral-100 h-12 px-8 gap-3 group/btn">
            Build Your Team
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Candidate Panel */}
      <div 
        onMouseEnter={() => setActive('candidate')}
        onMouseLeave={() => setActive(null)}
        className={`relative flex flex-col justify-center p-8 md:p-12 lg:p-24 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          active === 'candidate' ? 'lg:w-[65%]' : active === 'employer' ? 'lg:w-[35%]' : 'lg:w-[50%]'
        } bg-neutral-50 text-biznorx-navy overflow-hidden group cursor-pointer`}
      >
        <div className={`relative z-10 w-full max-w-xl mx-auto flex flex-col transition-all duration-500 ${
          active === 'employer' ? 'lg:opacity-0 lg:translate-x-[20px] pointer-events-none' : 'opacity-100 translate-x-0'
        }`}>
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl lg:text-7xl mb-6 tracking-tight leading-none">
            For<br/>Job Seekers
          </h2>
          
          <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-md">
            Your next career leap shouldn't be left to chance. We connect ambitious professionals directly with unlisted, highly exclusive opportunities.
          </p>

          <ul className="space-y-4 mb-12">
            {candidateFeatures.map((f, i) => (
              <li key={i} className="flex items-center gap-4">
                <Check className="w-5 h-5 text-biznorx-red shrink-0" />
                <span className="text-biznorx-navy/80 font-medium">{f}</span>
              </li>
            ))}
          </ul>

          <Button className="w-fit rounded-full bg-gradient-to-r from-biznorx-deep-red to-biznorx-red text-white hover:opacity-90 border-0 h-12 px-8 gap-3 group/btn">
            Discover Roles
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

    </section>
  );
}

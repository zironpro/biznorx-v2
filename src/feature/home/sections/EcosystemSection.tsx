"use client"

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

type Panel = {
  id: string;
  index: string;
  title: string[];
  blurb: string[];
  tags: string[];
  cta: string;
  href: string;
  image: string; 
  fallback: string; 
  position: "tl" | "tr" | "bl" | "br";
};

const panels: Panel[] = [
  {
    id: "talent", index: "01", title: ["Talent &", "Workforce"],
    blurb: ["Connecting the right people", "with the right opportunities."],
    tags: ["Recruitment", "Staffing", "Executive Search", "Workforce Solutions"],
    cta: "Explore Talent", href: "/services/talent-workforce", image: "/images/process_1.jpg",
    fallback: "linear-gradient(120deg,#141922 0%,#2a3342 55%,#6b5a52 100%)", position: "tl",
  },
  {
    id: "real-estate", index: "02", title: ["Real Estate", "& Land"],
    blurb: ["From land opportunities", "to lasting value."],
    tags: ["Land Brokerage", "Property Sales", "Investment Advisory", "Property Sourcing"],
    cta: "Explore Real Estate", href: "/services/real-estate-land", image: "/images/process_2.jpg",
    fallback: "linear-gradient(120deg,#12151c 0%,#3a2f2c 55%,#c9854a 100%)", position: "tr",
  },
  {
    id: "digital", index: "03", title: ["Digital &", "Technology"],
    blurb: ["Digital infrastructure", "for businesses ready to move", "forward."],
    tags: ["Web Development", "App Development", "Digital Marketing", "Branding"],
    cta: "Explore Digital", href: "/services/digital-technology", image: "/images/process_1.jpg",
    fallback: "linear-gradient(120deg,#0e1218 0%,#1b2733 55%,#3b5568 100%)", position: "bl",
  },
  {
    id: "growth", index: "04", title: ["Business &", "Growth"],
    blurb: ["Strategic solutions for", "sustainable growth."],
    tags: ["Consulting", "Strategy", "Partnerships", "Market Entry"],
    cta: "Explore Growth", href: "/services/business-growth", image: "/images/process_2.jpg",
    fallback: "linear-gradient(120deg,#12151c 0%,#37302f 55%,#d08a4e 100%)", position: "br",
  },
];

function Connectors() {
  return (
    <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none hidden md:block" viewBox="0 0 862 468" preserveAspectRatio="none" aria-hidden="true">
      <g fill="none" stroke="var(--color-biznorx-red)" strokeWidth="1">
        <path d="M392 115 Q430 120 432 160" />
        <path d="M468 110 Q432 122 432 160" opacity="0" />
        <path d="M470 180 Q445 160 432 160" opacity="0" />
        <path d="M432 262 Q432 300 470 292" />
        <path d="M432 262 Q430 300 392 292" opacity="0" />
      </g>
      <g fill="var(--color-biznorx-red)">
        <circle cx="392" cy="115" r="2.5" />
        <circle cx="470" cy="292" r="2.5" />
      </g>
    </svg>
  );
}

export function EcosystemSection() {
  return (
    <section className="w-full bg-[#F4F4F4] py-24 md:py-32 relative overflow-hidden" aria-label="BiznorX services">
      
      <div className="container-master max-w-[1400px] mx-auto px-4 relative flex items-center justify-center">
        
        {/* Background Map Graphic (Placeholder) */}
        <div className="absolute inset-0 bg-[url('/images/map-dots.png')] bg-center bg-no-repeat bg-contain opacity-10 pointer-events-none z-0" aria-hidden="true" />
        
        <Connectors />

        {/* The Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 relative z-10">
          {panels.map((p) => (
            <article
              key={p.id}
              className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] flex flex-col justify-start text-left min-h-[400px] lg:min-h-[450px] cursor-pointer group bg-cover bg-right bg-no-repeat"
              style={{ 
                backgroundImage: `linear-gradient(90deg, rgba(10,12,18,1) 0%, rgba(10,12,18,.8) 40%, rgba(10,12,18,.05) 100%), url(${p.image}), ${p.fallback}`,
              }}
            >
              <Link href={p.href} className="absolute inset-0 z-30"></Link>

              {/* Hover Ambient Glow */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_60%)]"></div>

              <div className="relative z-20 flex flex-col h-full p-8 md:p-10 lg:p-12 w-full md:w-[75%] lg:w-[65%]">
                
                <span className="flex items-center gap-3 mb-6 text-white/60 text-sm font-medium tracking-widest">
                  {p.index}
                  <i className="block w-6 h-px bg-white/30" />
                </span>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                  {p.title[0]}
                  <br />
                  {p.title[1]}
                </h2>
                
                <p className="text-white/70 text-sm lg:text-base leading-relaxed mb-8">
                  {p.blurb.map((l, i) => (
                    <span key={i} className="block">{l}</span>
                  ))}
                </p>
                
                <ul className="flex flex-wrap gap-2 md:gap-3 mb-10 lg:mb-12">
                  {p.tags.map((t) => (
                    <li key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/80 text-[11px] lg:text-xs font-medium">
                      {t}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto flex items-center gap-4 text-white text-sm lg:text-base font-bold group-hover:text-biznorx-red transition-colors">
                  {p.cta}
                  <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:border-biznorx-red group-hover:bg-biznorx-red/10 transition-colors">
                    <ArrowRight className="w-4 h-4 text-current" />
                  </span>
                </div>
                
              </div>
            </article>
          ))}
        </div>

        {/* Central Logo Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-white rounded-full shadow-2xl flex items-center justify-center p-6 md:p-10">
           {/* Decorative inner rings */}
           <div className="absolute inset-0 rounded-full border border-gray-100 m-2 pointer-events-none"></div>
           <div className="absolute inset-0 rounded-full border border-gray-50 m-4 pointer-events-none"></div>
           
           {/* Main Logo */}
           <div className="flex flex-col md:flex-row items-center gap-2">
             <svg width="30" height="26" viewBox="0 0 30 26" aria-hidden="true" className="w-8 h-8 md:w-10 md:h-10">
               <path d="M2 2h9l15 11-15 11H2l15-11z" fill="var(--color-biznorx-red)" />
               <path d="M2 2h9l5 4-6 0z" fill="var(--color-biznorx-deep-red)" />
             </svg>
             <span className="text-xl md:text-3xl font-bold tracking-tight text-[#1a1a1a]">
               biznor<b className="text-biznorx-red font-bold">X</b>
             </span>
           </div>
        </div>

      </div>
    </section>
  );
}

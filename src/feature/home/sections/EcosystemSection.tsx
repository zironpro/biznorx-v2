"use client"

import Link from "next/link";
import { ArrowRight, ShoppingCart, Stethoscope, Building, Smartphone } from "lucide-react";
import Image from "next/image";

type Panel = {
  id: string;
  title: string;
  subtitle: string;
  blurb: string;
  href: string;
  image: string; 
  icon: React.ElementType;
};

const panels: Panel[] = [
  {
    id: "case-1", title: "Global Retail Expansion", subtitle: "Market Entry & E-Commerce",
    blurb: "Market entry strategy and digital transformation for a Fortune 500 retailer, resulting in a 200% increase in online sales.",
    href: "/case-studies", image: "/images/process_1.jpg", icon: ShoppingCart
  },
  {
    id: "case-2", title: "Healthcare Recruitment", subtitle: "Bulk Hiring & Compliance",
    blurb: "Scaling medical staff by 300% across 50 clinics in just 6 months while maintaining strict industry compliance standards.",
    href: "/case-studies", image: "/images/process_2.jpg", icon: Stethoscope
  },
  {
    id: "case-3", title: "Commercial Acquisition", subtitle: "Land Brokerage & Due Diligence",
    blurb: "Securing prime real estate for a major tech headquarters, managing the entire lifecycle from negotiation to closing.",
    href: "/case-studies", image: "/images/process_1.jpg", icon: Building
  },
  {
    id: "case-4", title: "Fintech App Launch", subtitle: "UI/UX Design & Mobile App",
    blurb: "End-to-end design and development of a leading finance platform, reaching 1M+ active users within the first year.",
    href: "/case-studies", image: "/images/process_2.jpg", icon: Smartphone
  },
];

export function EcosystemSection() {
  return (
    <section className="w-full bg-[#f8f6f6] py-24 md:py-32 relative overflow-hidden" aria-label="Featured Case Studies">
      
      <div className="container-master max-w-[1400px] mx-auto px-4 relative flex flex-col items-center justify-center">
        
        <div className="w-full text-center mb-16 relative z-20">
          <span className="block font-bold text-sm tracking-widest uppercase text-biznorx-red mb-4">Case Studies</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-6 text-biznorx-navy">
            Featured Projects
          </h2>
        </div>

        {/* The Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {panels.map((p) => {
            return (
              <article
                key={p.id}
                className="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden relative"
              >
                <Link href={p.href} className="absolute inset-0 z-20"></Link>

                {/* Top Image */}
                <div className="relative w-full h-48 md:h-52 shrink-0 z-0">
                  <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>

                {/* Bottom Text Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10">
                  <h4 className="font-bold text-lg text-biznorx-navy mb-3 leading-tight">{p.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{p.blurb}</p>
                  
                  <div className="mt-auto">
                    <span className="text-biznorx-navy font-bold text-sm underline underline-offset-4 decoration-2 decoration-biznorx-navy/30 group-hover:decoration-biznorx-red group-hover:text-biznorx-red transition-colors cursor-pointer">
                      See more
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

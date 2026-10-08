"use client"

import Link from "next/link";
import Image from "next/image";

type BlogPost = {
  id: string;
  title: string;
  category: string;
  date: string;
  href: string;
  image: string; 
};

const blogPosts: BlogPost[] = [
  {
    id: "1", title: "The future of global expansion and strategic workforce planning.", category: "Talent & Workforce",
    date: "Oct 08, 2026",
    href: "/blogs/1", image: "/images/services/talent_workforce.jpg"
  },
  {
    id: "2", title: "Navigating emerging markets: A roadmap for successful entry.", category: "Business Growth",
    date: "Oct 02, 2026",
    href: "/blogs/2", image: "/images/services/business_growth.jpg"
  },
  {
    id: "3", title: "Why commercial real estate remains the ultimate hedge.", category: "Real Estate & Land",
    date: "Sep 28, 2026",
    href: "/blogs/3", image: "/images/services/real_estate.jpg"
  },
  {
    id: "4", title: "Digital transformation is no longer optional for legacy brands.", category: "Digital & Technology",
    date: "Sep 20, 2026",
    href: "/blogs/4", image: "/images/digital.webp"
  },
];

export function BlogHomeSection() {
  return (
    <section className="w-full bg-white py-24 md:py-32 relative overflow-hidden" aria-label="Latest Insights">
      
      <div className="container-master max-w-[1400px] mx-auto px-4 relative flex flex-col items-center justify-center">
        
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between mb-16 relative z-20 gap-8 text-left">
          <div>
            <span className="block font-bold text-sm tracking-widest uppercase text-biznorx-red mb-4">Our Perspectives</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight text-biznorx-navy">
              Latest Insights
            </h2>
          </div>
          <Link href="/blogs" className="shrink-0 w-fit rounded-full bg-biznorx-navy text-white hover:bg-slate-800 transition-colors h-12 px-8 flex items-center justify-center font-bold shadow-lg hover:shadow-xl">
            View All Articles
          </Link>
        </div>

        {/* The Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {blogPosts.map((p) => {
            return (
              <article
                key={p.id}
                className="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden relative"
              >
                <Link href={p.href} className="absolute inset-0 z-20"></Link>

                {/* Top Image */}
                <div className="relative w-full h-48 shrink-0 z-0 overflow-hidden">
                  <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>

                {/* Bottom Text Content */}
                <div className="p-6 flex flex-col flex-grow relative z-10">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-biznorx-red mb-3">
                    <span>{p.category}</span>
                  </div>
                  <h4 className="font-bold text-lg text-biznorx-navy mb-3 leading-snug group-hover:text-biznorx-red transition-colors">{p.title}</h4>
                  
                  <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100">
                    <span className="text-gray-400 text-xs font-medium">{p.date}</span>
                    <span className="text-biznorx-navy font-bold text-xs uppercase tracking-wider group-hover:text-biznorx-red transition-colors cursor-pointer">
                      Read
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

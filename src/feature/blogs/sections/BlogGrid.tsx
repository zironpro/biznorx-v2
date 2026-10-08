"use client"

import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "The future of global expansion and strategic workforce planning.",
    category: "Talent & Workforce",
    date: "Oct 08, 2026",
    excerpt: "Discover how leading organizations are adapting their talent acquisition models to build highly resilient international operations.",
    image: "/images/services/talent_workforce.jpg"
  },
  {
    id: 2,
    title: "Navigating emerging markets: A roadmap for successful entry.",
    category: "Business Growth",
    date: "Oct 02, 2026",
    excerpt: "Emerging markets offer unparalleled upside, but present unique regulatory challenges. Here is how to architect a secure go-to-market strategy.",
    image: "/images/services/business_growth.jpg"
  },
  {
    id: 3,
    title: "Why commercial real estate remains the ultimate hedge.",
    category: "Real Estate & Land",
    date: "Sep 28, 2026",
    excerpt: "Despite economic fluctuations, strategic land and commercial property acquisitions continue to provide unmatched portfolio stability.",
    image: "/images/services/real_estate.jpg"
  },
  {
    id: 4,
    title: "Digital transformation is no longer optional for legacy brands.",
    category: "Digital & Technology",
    date: "Sep 20, 2026",
    excerpt: "Legacy businesses are rapidly losing market share to agile startups. Learn how to modernize your tech stack without disrupting core operations.",
    image: "/images/digital.webp"
  },
  {
    id: 5,
    title: "The ROI of Premium Brand Positioning in B2B Markets.",
    category: "Branding",
    date: "Sep 15, 2026",
    excerpt: "A striking visual identity and strategic narrative can significantly shorten B2B sales cycles and justify premium pricing models.",
    image: "/images/process_1.jpg"
  },
  {
    id: 6,
    title: "How intelligent automation is reshaping executive roles.",
    category: "AI & Automation",
    date: "Sep 05, 2026",
    excerpt: "As routine operational tasks become fully automated, executive leadership is shifting focus entirely toward high-level strategy and M&A.",
    image: "/images/process_2.jpg"
  }
]

export function BlogGrid() {
  return (
    <section id="articles" className="w-full py-24 bg-white relative">
      <div className="container-master max-w-7xl mx-auto px-4">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-biznorx-navy tracking-tight mb-4">
            Latest Articles
          </h2>
          <div className="w-12 h-1 bg-biznorx-red rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {blogPosts.map((post) => (
            <Link href={`/blogs/${post.id}`} key={post.id} className="flex flex-col group cursor-pointer">
              <div className="w-full aspect-[4/3] rounded-3xl bg-neutral-100 mb-6 overflow-hidden relative shadow-sm border border-neutral-100">
                <div className="absolute inset-0 bg-biznorx-navy/0 group-hover:bg-biznorx-navy/10 transition-colors z-10 duration-500"></div>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-biznorx-red mb-4">
                <span>{post.category}</span>
                <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
                <span className="text-neutral-400">{post.date}</span>
              </div>
              <h3 className="text-2xl font-bold text-biznorx-navy mb-4 leading-snug group-hover:text-biznorx-red transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-slate-500 line-clamp-2 leading-relaxed font-medium">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

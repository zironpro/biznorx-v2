import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Share2 } from "lucide-react"

interface BlogDetailProps {
  id: string
}

export function BlogDetail({ id }: BlogDetailProps) {
  // In a real app, fetch data based on ID. We use mock data here.
  const post = {
    title: "The future of global expansion and strategic workforce planning.",
    category: "Talent & Workforce",
    date: "Oct 08, 2026",
    image: "/images/services/talent_workforce.jpg",
  }

  return (
    <article className="w-full bg-white py-16 md:py-24 border-b border-neutral-100">
      <div className="container-master max-w-4xl mx-auto px-4">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 md:gap-3 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-12 flex-wrap">
          <Link href="/" className="hover:text-biznorx-navy transition-colors">Home</Link>
          <span className="text-neutral-300">/</span>
          <Link href="/blogs" className="hover:text-biznorx-navy transition-colors">Insights</Link>
          <span className="text-neutral-300">/</span>
          <span className="text-biznorx-red">{post.category}</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-biznorx-red mb-6">
            <span>{post.category}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
            <span className="text-neutral-400">{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-biznorx-navy tracking-tight leading-tight mb-8">
            {post.title}
          </h1>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-y border-neutral-100 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center font-bold text-biznorx-navy">
                BX
              </div>
              <div>
                <p className="text-sm font-bold text-biznorx-navy">BiznorX Editorial</p>
                <p className="text-xs text-neutral-500 font-medium">5 min read</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Share</span>
              <button className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-600 hover:bg-biznorx-navy hover:text-white transition-colors cursor-pointer">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden relative mb-16 shadow-sm border border-neutral-100">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content Body */}
        <div className="flex flex-col gap-6 text-base md:text-lg text-slate-600 leading-relaxed font-medium">
          <p>
            As organizations scale across borders, the complexity of managing a global workforce increases exponentially. The traditional models of talent acquisition are no longer sufficient to meet the demands of rapid international expansion.
          </p>
          
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-biznorx-navy mt-8 mb-2 tracking-tight">
            The Shift in Talent Strategy
          </h2>
          <p>
            Companies are moving away from reactive hiring toward proactive, strategic workforce planning. This involves deep market analysis to identify emerging talent hubs and understanding local regulatory environments before establishing a presence.
          </p>
          <p>
            Furthermore, the integration of advanced analytics allows HR leaders to predict talent shortages and skill gaps years in advance, ensuring that the organization is never caught off guard.
          </p>

          <blockquote className="border-l-4 border-biznorx-red bg-neutral-50 py-8 px-8 md:px-12 rounded-r-3xl my-8">
            <p className="text-xl md:text-2xl text-biznorx-navy italic font-[family-name:var(--font-playfair)] leading-relaxed">
              "The most successful global companies don't just expand their physical footprint; they expand their cultural intelligence."
            </p>
          </blockquote>

          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-biznorx-navy mt-8 mb-2 tracking-tight">
            Building Resilient Operations
          </h2>
          <p>
            Resilience in global operations requires a diversified approach to talent. Relying on a single geographic location for critical operations is a risk that modern enterprises can no longer afford to take. By distributing teams across strategic hubs, companies can mitigate geopolitical and economic risks while tapping into diverse talent pools.
          </p>
          <p>
            Ultimately, successful global expansion hinges on the ability to align talent strategy with the overarching business vision. It requires a nuanced understanding of local markets combined with a unified global corporate culture.
          </p>
        </div>

      </div>
    </article>
  )
}

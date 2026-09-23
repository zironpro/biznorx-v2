import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import { IndustryData } from "@/data/industries"
import { GlobalCta } from "@/components/GlobalCta"

export function IndustryDetailView({ industry }: { industry: IndustryData }) {
  const Icon = industry.icon;
  
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full bg-biznorx-navy min-h-[60vh] flex flex-col justify-center relative overflow-hidden pt-12 md:pt-24 pb-16 md:py-16 md:py-32">
        <div className="absolute inset-0 z-0">
          <Image 
            src={industry.image}
            alt={industry.name}
            fill
            className="object-cover opacity-20 object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-biznorx-navy via-biznorx-navy/80 to-transparent"></div>
        </div>

        <div className="container-master px-4 max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <Link href="/industries" className="flex items-center gap-2 text-white/70 hover:text-white text-sm font-bold uppercase tracking-widest mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Industries
          </Link>
          
          <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-8">
            <Icon className="w-8 h-8 text-biznorx-red" strokeWidth={1.5} />
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)] text-white tracking-tight mb-6 max-w-4xl">
            {industry.heroHeadline}
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl font-medium leading-relaxed">
            {industry.heroSubheadline}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full bg-white py-16 md:py-12 md:py-24">
        <div className="container-master px-4 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-24">
            
            {/* Main Overview */}
            <div className="w-full lg:w-2/3 flex flex-col">
              <h2 className="text-3xl font-bold text-biznorx-navy mb-6">
                Transforming the {industry.name} Sector
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-12">
                {industry.overview}
              </p>

              <h3 className="text-2xl font-bold text-biznorx-navy mb-8 border-b border-neutral-100 pb-4">
                Our Specialized Offerings
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {industry.keyOfferings.map((offering, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-neutral-50 border border-neutral-100">
                    <div className="mt-1 bg-white rounded-full shadow-sm p-1">
                      <CheckCircle2 className="w-5 h-5 text-biznorx-red" />
                    </div>
                    <span className="font-bold text-slate-800 text-lg leading-tight">{offering}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Stats & Info */}
            <div className="w-full lg:w-1/3">
              <div className="sticky top-32 bg-biznorx-navy rounded-3xl p-8 text-white shadow-xl shadow-neutral-200">
                <h3 className="text-xl font-[family-name:var(--font-playfair)] mb-8 text-biznorx-red">Industry Impact</h3>
                
                <div className="flex flex-col gap-8 mb-10">
                  {industry.stats.map((stat, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-5xl font-bold mb-2 tracking-tight">{stat.value}</span>
                      <span className="text-sm font-bold text-white/60 uppercase tracking-widest">{stat.label}</span>
                    </div>
                  ))}
                </div>

                <div className="w-full h-px bg-white/10 mb-8"></div>

                <Link href="/contact" className="flex items-center justify-between w-full group">
                  <span className="font-bold">Partner with us</span>
                  <div className="w-10 h-10 rounded-full bg-biznorx-red flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <GlobalCta 
        title={`Ready to elevate your ${industry.name} business?`} 
        description="Let's build a strategy tailored exactly to your operational needs and growth goals."
      />
    </div>
  )
}

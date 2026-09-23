"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const services = [
  { 
    id: "01", 
    title: "Executive Recruitment", 
    subtitle: "Sourcing top-tier leadership to guide your organization.",
    desc: "Great leadership is key to any company strategy. Our team sources high-quality, experienced executives that drive growth and navigate complex business challenges.", 
    features: [
      "C-Suite placements", 
      "Board member sourcing", 
      "Leadership assessment", 
      "Succession planning"
    ],
    image: "/images/services/executive-recruitment.webp",
  },
  { 
    id: "02", 
    title: "Bulk Recruitment",      
    subtitle: "Maximizing reach with targeted volume hiring.",
    desc: "Reach your workforce goals wherever they are. From seasonal hiring to facility expansions, our bulk campaigns are designed to scale and build strong operational teams.", 
    features: [
      "Mass hiring campaigns", 
      "Rapid onboarding", 
      "Volume screening", 
      "Performance tracking"
    ],
    image: "/images/services/bulk-recruitment.webp",
  },
  { 
    id: "03", 
    title: "EOR Services",          
    subtitle: "Creating impactful teams globally with full compliance.",
    desc: "From payroll to compliance, we ensure seamless global team management. Whether it's a new market entry or remote hires, we handle it all to deliver a smooth experience.", 
    features: [
      "Global payroll management", 
      "Local legal compliance", 
      "Benefits administration", 
      "Contract management"
    ],
    image: "/images/services/eor-services.webp",
  },
  { 
    id: "04", 
    title: "Blue Collar Hiring",    
    subtitle: "Driving operational excellence and generating output.",
    desc: "Powerful operational teams are essential for growth. Our team sources and manages skilled workers that build your facilities and generate valuable output across sectors.", 
    features: [
      "Skilled trades sourcing", 
      "Safety compliance checks", 
      "Shift management", 
      "Performance analytics"
    ],
    image: "/images/services/blue-collar-hiring.webp",
  },
  { 
    id: "05", 
    title: "Global Placement",      
    subtitle: "Connecting talent without borders for maximum impact.",
    desc: "Expand your horizons with international talent. We handle the complexities of cross-border recruitment, ensuring smooth transitions and absolute legal compliance.", 
    features: [
      "Visa & immigration support", 
      "Relocation assistance", 
      "Cultural orientation", 
      "International sourcing"
    ],
    image: "/images/services/global-placement.webp",
  },
  { 
    id: "06", 
    title: "Technical Consulting",  
    subtitle: "Innovating for the future with strategic insights.",
    desc: "Leverage our deep industry insights to solve complex challenges. We provide strategic consulting that blends technical expertise with precise business acumen.", 
    features: [
      "Digital transformation", 
      "Process optimization", 
      "Tech stack assessment", 
      "Innovation strategy"
    ],
    image: "/images/services/Technical Consulting.webp",
  },
]

export function ServiceList() {
  return (
    <section className="w-full bg-white py-12 md:py-12 md:py-20 border-t border-neutral-100 relative">
      <div className="container-master px-4 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-10 md:mb-20 gap-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-biznorx-navy tracking-tight max-w-2xl leading-tight">
            Services to <br className="hidden md:block" />
            grow powerful businesses
          </h2>
          <p className="text-slate-500 font-medium max-w-sm lg:mt-4 text-sm leading-relaxed">
            Whether you're looking to build your team from the ground up or refine your existing workforce strategy, we offer a full range of recruitment services tailored to your needs.
          </p>
        </div>

        {/* Services List */}
        <div className="flex flex-col w-full border-t border-neutral-200/60">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="flex flex-col lg:flex-row py-16 border-b border-neutral-200/60 gap-10 lg:gap-16"
            >
              
              {/* Left Column: Title, Desc, Button */}
              <div className="w-full lg:w-5/12 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm font-bold text-neutral-300">
                    {service.id}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-biznorx-navy tracking-tight">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-sm text-neutral-400 font-medium mb-6 uppercase tracking-wider leading-relaxed max-w-xs">
                  {service.subtitle}
                </p>
                
                <p className="text-slate-600 leading-relaxed font-medium mb-10 max-w-md">
                  {service.desc}
                </p>

                <Button asChild className="w-fit rounded-full bg-biznorx-navy text-white hover:bg-biznorx-navy/90 transition-colors h-12 px-6 gap-3 group cursor-pointer">
                  <Link href="/contact">
                    Get In Touch
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white transition-colors">
                      <ArrowRight className="w-3 h-3 text-white group-hover:text-biznorx-navy transition-colors" />
                    </div>
                  </Link>
                </Button>
              </div>

              {/* Middle Column: Bullet Points */}
              <div className="w-full lg:w-3/12 flex flex-col justify-center">
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-biznorx-red shrink-0 mt-2"></span>
                      <span className="text-sm text-slate-600 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Image */}
              <div className="w-full lg:w-4/12 flex justify-center lg:justify-end mt-8 lg:mt-0">
                <div className="relative w-full max-w-[320px] aspect-square rounded-3xl overflow-hidden bg-neutral-100 flex items-center justify-center p-8 border border-neutral-100 shadow-sm group">
                  {/* Subtle hover effect on the image */}
                  <div className="absolute inset-0 bg-biznorx-navy/0 group-hover:bg-biznorx-navy/5 transition-colors duration-500 z-10"></div>
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

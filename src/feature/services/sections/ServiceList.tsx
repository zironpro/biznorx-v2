"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const services = [
  { 
    id: "01", 
    slug: "talent-workforce",
    title: "Talent & Workforce", 
    subtitle: "Connecting the right people with the right opportunities.",
    desc: "Global recruitment, manpower, staffing and end-to-end workforce solutions. Whether you're looking to build your team from the ground up or refine your existing workforce strategy, we offer full-scale support.", 
    features: [
      "Executive Recruitment", 
      "Bulk Recruitment", 
      "EOR Services", 
      "Blue Collar Hiring",
      "Global Placement"
    ],
    image: "/images/services/talent_workforce.jpg",
  },
  { 
    id: "02", 
    slug: "real-estate-land",
    title: "Real Estate & Land",      
    subtitle: "From land opportunities to lasting value.",
    desc: "Prime land brokerage, property sourcing, and comprehensive real estate advisory. We help you secure the best locations and properties for your business operations and expansions.", 
    features: [
      "Land Brokerage", 
      "Property Sales", 
      "Investment Advisory", 
      "Property Sourcing"
    ],
    image: "/images/services/real_estate.jpg",
  },
  { 
    id: "03", 
    slug: "digital-technology",
    title: "Digital & Technology",          
    subtitle: "Digital infrastructure for businesses ready to move forward.",
    desc: "High-performance applications, digital transformation, and intelligent technology solutions. We provide the solid technical foundation necessary for scalable modern growth.", 
    features: [
      "Web Development", 
      "App Development", 
      "Digital Marketing", 
      "Branding",
      "Technical Consulting"
    ],
    image: "/images/services/digital_technology.jpg",
  },
  { 
    id: "04", 
    slug: "business-growth",
    title: "Business & Growth",    
    subtitle: "Strategic solutions for sustainable growth.",
    desc: "Strategic business consulting, market entry planning, and global growth partnerships. We help you navigate complex new markets with expert advisory and hands-on guidance.", 
    features: [
      "Consulting & Strategy", 
      "Partnerships", 
      "Market Entry",
      "Performance Analytics"
    ],
    image: "/images/services/business_growth.jpg",
  }
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
                  <Link href={`/services/${service.slug}`}>
                    Detail View
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

"use client"

import { CheckCircle2, ArrowUpRight } from "lucide-react"
import Image from "next/image"

export function DigitalServiceList() {
  const services = [
    {
      title: "Brand Identity",
      desc: "We build enduring brands with strategic foundations and striking visual systems that cut through the noise.",
      categories: ["Logo Design", "Visual Identity", "Brand Guidelines", "Typography Systems", "Color Systems", "Brand Strategy"],
      image: "/images/process_1.jpg",
    },
    {
      title: "Digital Design",
      desc: "Websites and digital experiences that convert. We design with purpose, creating user journeys that turn visitors into customers.",
      categories: ["Web Design", "Landing Pages", "E-commerce", "UI/UX Audit", "Wireframing", "Prototyping"],
      image: "/images/process_2.jpg",
    },
    {
      title: "Product Design",
      desc: "Intuitive, highly functional interfaces for complex software. We bridge the gap between user needs and business goals.",
      categories: ["SaaS Design", "Mobile Apps", "Design Systems", "User Testing", "Interaction Design"],
      image: "/images/process_1.jpg",
    },
    {
      title: "Marketing & Growth",
      desc: "Data-driven campaigns designed to capture intent, build communities, and scale revenue predictably.",
      categories: ["SEO", "Content Strategy", "Performance Ads", "Social Media", "Conversion Rate Optimization"],
      image: "/images/process_2.jpg",
    },
    {
      title: "Development",
      desc: "Robust, scalable, and secure engineering. We bring high-fidelity designs to life with modern technology stacks.",
      categories: ["Frontend", "Backend", "API Integration", "CMS Development", "Web Animations"],
      image: "/images/process_1.jpg",
    }
  ]

  return (
    <section className="w-full bg-gradient-to-b from-biznorx-navy via-biznorx-navy to-black py-12 md:py-12 md:py-20 overflow-hidden">
      <div className="container-master px-4 max-w-7xl mx-auto mb-8 md:mb-16 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-white tracking-tight">
          Specialized digital solutions.
        </h2>
      </div>

      <div className="w-full px-4 md:px-8 xl:px-12 pb-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-8">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="group relative flex flex-col h-[480px] bg-neutral-900 rounded-3xl border border-white/10 overflow-hidden hover:border-biznorx-red transition-all duration-500"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-30 group-hover:opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black z-10"></div>
              </div>

              {/* Content */}
              <div className="relative z-20 flex flex-col h-full p-8">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-biznorx-red rounded-full p-1 shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {service.title}
                  </h3>
                </div>

                <p className="text-white/70 text-sm mb-6 leading-relaxed flex-grow">
                  {service.desc}
                </p>

                {/* Categories */}
                <div className="space-y-2 mt-auto">
                  <p className="text-xs font-bold uppercase tracking-widest text-biznorx-red mb-3">Capabilities</p>
                  <ul className="space-y-2">
                    {service.categories.map((cat, idx) => (
                      <li key={idx} className="flex items-center text-sm text-white/80 gap-2">
                        <ArrowUpRight className="w-3 h-3 text-biznorx-red/70" />
                        {cat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

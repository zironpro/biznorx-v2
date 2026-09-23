"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function DigitalServiceList() {
  const services = [
    {
      id: "01.",
      title: "Brand Identity",
      desc: "We build enduring brands with strategic foundations and striking visual systems that cut through the noise.",
      categories: ["Logo Design", "Visual Identity", "Brand Guidelines", "Typography Systems", "Color Systems", "Brand Strategy"],
    },
    {
      id: "02.",
      title: "Digital Design",
      desc: "Websites and digital experiences that convert. We design with purpose, creating user journeys that turn visitors into customers.",
      categories: ["Web Design", "Landing Pages", "E-commerce", "UI/UX Audit", "Wireframing", "Prototyping"],
    },
    {
      id: "03.",
      title: "Product Design",
      desc: "Intuitive, highly functional interfaces for complex software. We bridge the gap between user needs and business goals.",
      categories: ["SaaS Design", "Mobile Apps", "Design Systems", "User Testing", "Interaction Design"],
    },
    {
      id: "04.",
      title: "Marketing & Growth",
      desc: "Data-driven campaigns designed to capture intent, build communities, and scale revenue predictably.",
      categories: ["SEO", "Content Strategy", "Performance Ads", "Social Media", "Conversion Rate Optimization"],
    },
    {
      id: "05.",
      title: "Development",
      desc: "Robust, scalable, and secure engineering. We bring high-fidelity designs to life with modern technology stacks.",
      categories: ["Frontend", "Backend", "API Integration", "CMS Development", "Web Animations"],
    }
  ]

  return (
    <section className="w-full bg-white py-20 md:py-32 relative">
      <div className="container-master px-4 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 relative">

        {/* Left Side (Sticky) */}
        <div className="w-full md:w-5/12 lg:w-4/12 relative">
          <div className="sticky top-24 md:top-32 flex flex-col pt-4">
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-biznorx-red"></span>
              Capabilities
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-biznorx-navy tracking-tight leading-tight flex flex-col gap-2">
              <span>Specialized</span>
              <span className="font-[family-name:var(--font-inter)] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-biznorx-deep-red to-biznorx-red">
                digital solutions.
              </span>
            </h2>
            <div className="flex flex-col gap-6 mt-8 max-w-sm">
              <p className="text-neutral-500 font-medium leading-relaxed">
                We combine strategic thinking with beautiful design and robust engineering to help businesses scale confidently in the digital landscape.
              </p>
              <p className="text-neutral-500 font-medium leading-relaxed">
                Whether you need a complete brand overhaul, a high-converting web presence, or a complex software product, our team of experts delivers tailored solutions that drive measurable growth.
              </p>
              <Button asChild className="w-fit mt-4 rounded-full bg-biznorx-navy text-white hover:bg-biznorx-navy/90 transition-colors h-12 px-6 gap-3 group">
                <Link href="/contact">
                  Start a Project
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white transition-colors">
                    <ArrowRight className="w-3 h-3 text-white group-hover:text-biznorx-navy transition-colors" />
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Right Side (Scrolling List) */}
        <div className="w-full md:w-7/12 lg:w-8/12 flex flex-col">
          <div className="flex flex-col border-t border-neutral-200">
            {services.map((service, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row py-12 border-b border-neutral-200 gap-6 md:gap-10 group"
              >
                {/* Number */}
                <div className="text-4xl md:text-5xl font-bold text-biznorx-navy font-[family-name:var(--font-playfair)] shrink-0 group-hover:text-biznorx-red transition-colors duration-300">
                  {service.id}
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold text-biznorx-navy mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-neutral-500 font-medium leading-relaxed mb-8 max-w-lg">
                    {service.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.categories.map((cat, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-full bg-neutral-100 text-neutral-600 text-xs font-medium"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

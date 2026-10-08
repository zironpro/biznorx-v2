"use client"

import { useState, useEffect } from "react"
import { Globe, Building2, MonitorSmartphone, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export function ServicesSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const carouselImages = [
    "/images/services/business_growth.jpg",
    "/images/digital.webp",
    "/images/services/real_estate.jpg",
    "/images/services/talent_workforce.jpg"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [carouselImages.length])

  const leftVerticals = [
    {
      icon: Globe,
      title: "Talent & Workforce",
      desc: "Global recruitment, manpower, staffing and end-to-end workforce solutions.",
      link: "/services/talent-workforce",
    },
    {
      icon: Building2,
      title: "Real Estate & Land",
      desc: "Prime land brokerage, property sourcing, and comprehensive real estate advisory.",
      link: "/services/real-estate-land",
    },
  ]

  const rightVerticals = [
    {
      icon: MonitorSmartphone,
      title: "Digital & Technology",
      desc: "High-performance applications, digital transformation, and intelligent technology solutions.",
      link: "/services/digital-technology",
    },
    {
      icon: TrendingUp,
      title: "Business & Growth",
      desc: "Strategic business consulting, market entry planning, and global growth partnerships.",
      link: "/services/business-growth",
    },
  ]

  return (
    <section className="w-full bg-white text-biznorx-navy py-24 lg:py-32 overflow-hidden border-t border-neutral-100">
      <div className="container-master max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-6 text-biznorx-navy">
            Core verticals that set us <br className="hidden md:block" /> apart from the competition
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            Explore our standout business sectors designed to deliver exceptional performance and value, distinguishing us as a unified global partner.
          </p>
        </div>

        {/* 3 Column Layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch justify-center h-full">
          
          {/* Left Column - 2 Cards */}
          <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-[30%]">
            {leftVerticals.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex-1 flex flex-col p-8 rounded-lg bg-[#F4F4F4] hover:shadow-lg transition-shadow group relative overflow-hidden h-full"
                >
                  <Link href={v.link} className="absolute inset-0 z-10"></Link>
                  <div className="w-12 h-12 rounded-xl bg-biznorx-navy flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-300 relative z-20">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="mt-auto flex flex-col items-start">
                    <div>
                      <h3 className="font-bold text-lg text-biznorx-navy inline-block">{v.title}</h3>
                      <span className="text-gray-600 text-base ml-1 leading-relaxed inline">
                        {v.desc}
                      </span>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-biznorx-navy font-bold text-sm group-hover:text-biznorx-red transition-colors">
                      Explore Details <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Center Column - Image Carousel */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[40%] rounded-lg overflow-hidden relative min-h-[400px] lg:min-h-full flex shadow-sm bg-gray-100"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full"
              >
                <Image 
                  src={carouselImages[currentImageIndex]} 
                  alt="BiznorX Service Area"
                  fill
                  className="object-cover object-center"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Column - 2 Cards */}
          <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-[30%]">
            {rightVerticals.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i * 0.1) + 0.3 }}
                  className="flex-1 flex flex-col p-8 rounded-lg bg-[#F4F4F4] hover:shadow-lg transition-shadow group relative overflow-hidden h-full"
                >
                  <Link href={v.link} className="absolute inset-0 z-10"></Link>
                  <div className="w-12 h-12 rounded-xl bg-biznorx-navy flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-300 relative z-20">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="mt-auto flex flex-col items-start">
                    <div>
                      <h3 className="font-bold text-lg text-biznorx-navy inline-block">{v.title}</h3>
                      <span className="text-gray-600 text-base ml-1 leading-relaxed inline">
                        {v.desc}
                      </span>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-biznorx-navy font-bold text-sm group-hover:text-biznorx-red transition-colors">
                      Explore Details <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}

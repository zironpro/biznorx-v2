"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { GlobalCta } from "@/components/GlobalCta"
import { ProcessSection } from "@/feature/home/sections/ProcessSection"

interface ServiceOffer {
  title: string;
  description?: string;
}

interface VerticalViewProps {
  title: string;
  subtitle: string;
  description: string;
  offers: ServiceOffer[];
  bgImage?: string;
}

export function VerticalView({ title, subtitle, description, offers, bgImage = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" }: VerticalViewProps) {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full bg-black text-white pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
          style={{ backgroundImage: `url('${bgImage}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>

        <div className="container-master relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-white/60 uppercase tracking-[0.2em] text-sm font-bold mb-6 block">Business Vertical</span>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl tracking-tight leading-tight mb-8">
              {title}
            </h1>
            <p className="text-gray-300 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto font-medium">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="w-full bg-white py-20 md:py-24 border-b border-gray-100">
        <div className="container-master max-w-4xl mx-auto text-center px-4">
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            {description}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full bg-neutral-50 py-24 md:py-32">
        <div className="container-master max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-black tracking-tight mb-4">
              What We Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {offers.map((offer, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-8 md:p-10 rounded-[2rem] border border-neutral-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-black shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl md:text-2xl text-black mb-3">{offer.title}</h3>
                    {offer.description && (
                      <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                        {offer.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      
      <GlobalCta />
    </div>
  )
}

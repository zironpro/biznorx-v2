"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Settings } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
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

export function VerticalView({ title, subtitle, description, offers, bgImage = "/images/process_1.jpg" }: VerticalViewProps) {
  
  // A helper to split the title for the gradient effect
  const titleParts = title.split(' ');
  const firstPart = titleParts[0];
  const restPart = titleParts.slice(1).join(' ');

  return (
    <div className="flex flex-col w-full">
      
      {/* Split Hero Section (Matches ServicesHero) */}
      <section className="w-full min-h-[85vh] bg-neutral-50 flex flex-col lg:flex-row border-b border-neutral-100">
        
        {/* Left Text Side */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-24 lg:py-0 relative z-10">
          <div className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 overflow-hidden text-ellipsis whitespace-nowrap">
            <Link href="/" className="hover:text-biznorx-red transition-colors shrink-0">Home</Link>
            <span className="text-slate-300 shrink-0">/</span>
            <Link href="/services" className="hover:text-biznorx-red transition-colors shrink-0">Services</Link>
            <span className="text-slate-300 shrink-0">/</span>
            <span className="text-biznorx-red truncate">{title}</span>
          </div>

          <h1 className="flex flex-col gap-2 mb-8">
            <span className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl text-biznorx-navy tracking-tight leading-none">
              {firstPart}
            </span>
            {restPart && (
              <span className="font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-biznorx-deep-red to-biznorx-red pb-2 leading-none">
                {restPart}
              </span>
            )}
          </h1>

          <p className="text-base md:text-lg text-slate-600 max-w-lg mb-10 font-medium leading-relaxed">
            {subtitle}
          </p>

          <Button asChild className="w-fit rounded-full bg-biznorx-navy text-white hover:bg-slate-800 transition-colors h-12 px-8 gap-3 group cursor-pointer">
            <Link href="/contact">
              Initiate Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Right Image Side */}
        <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-auto overflow-hidden bg-biznorx-navy">
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-neutral-50/20 z-10"></div>
          {/* Next Image requires exact paths or domains. bgImage is passed as string */}
          <div 
            className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-[20s] ease-linear"
            style={{ backgroundImage: `url('${bgImage}')` }}
          ></div>

          {/* Floating Stat Badge */}
          <div className="absolute bottom-12 right-12 md:bottom-24 md:right-24 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl text-white shadow-2xl">
            <div className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
              360°
            </div>
            <p className="text-sm font-bold uppercase tracking-widest text-white/80">Support</p>
          </div>
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

      {/* Services List (What We Offer) */}
      <section className="w-full bg-white py-24 md:py-32">
        <div className="container-master max-w-7xl mx-auto px-4">
          
          <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-16 md:mb-20 gap-8">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-biznorx-navy tracking-tight mb-4">
              What We Offer
            </h2>
            <p className="text-gray-500 max-w-sm lg:mt-4 text-sm leading-relaxed">
              Tailored solutions designed to elevate your business operations and drive sustainable growth across every vertical.
            </p>
          </div>

          <div className="flex flex-col w-full border-t border-neutral-200/60">
            {offers.map((offer, index) => (
              <div 
                key={index} 
                className="flex flex-col lg:flex-row py-12 md:py-16 border-b border-neutral-200/60 gap-8 lg:gap-16 group"
              >
                
                {/* Left Column: Title */}
                <div className="w-full lg:w-5/12 flex flex-col">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-neutral-300 group-hover:text-biznorx-red transition-colors duration-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-biznorx-navy tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                      {offer.title}
                    </h3>
                  </div>
                </div>

                {/* Right Column: Description & Link */}
                <div className="w-full lg:w-7/12 flex flex-col justify-center">
                  {offer.description && (
                    <p className="text-slate-600 leading-relaxed font-medium mb-8 max-w-2xl">
                      {offer.description}
                    </p>
                  )}
                  
                  <Link href="/contact" className="w-fit flex items-center text-biznorx-red font-bold text-xs tracking-wider uppercase cursor-pointer hover:opacity-80 transition-opacity">
                    Inquire Now 
                    <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      <ProcessSection />
      
      <GlobalCta />
    </div>
  )
}

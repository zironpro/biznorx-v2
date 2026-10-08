"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Settings } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GlobalCta } from "@/components/GlobalCta"
import { ProcessSection } from "@/feature/home/sections/ProcessSection"
export interface ServiceOffer {
  title: string;
  description?: string;
  categories?: string[];
}

export interface Stat {
  value: string;
  label: string;
  desc: string;
}

export interface Reason {
  id: string;
  title: string;
  desc: string;
}

export interface VerticalViewProps {
  title: string;
  subtitle: string;
  description: string;
  offers: ServiceOffer[];
  bgImage?: string;
  stats?: Stat[];
  reasons?: Reason[];
  quote?: string;
}

export function VerticalView({ title, subtitle, description, offers, bgImage = "/images/process_1.jpg", stats, reasons, quote }: VerticalViewProps) {
  
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
      <section className="w-full bg-white py-20 md:py-32 relative border-t border-neutral-100">
        <div className="container-master px-4 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 relative">

          {/* Left Side (Sticky) */}
          <div className="w-full md:w-5/12 lg:w-4/12 relative">
            <div className="sticky top-24 md:top-32 flex flex-col pt-4">
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-biznorx-red"></span>
                Capabilities
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-biznorx-navy tracking-tight leading-tight flex flex-col gap-2">
                <span className="font-[family-name:var(--font-playfair)]">Specialized</span>
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-biznorx-deep-red to-biznorx-red">
                  industry solutions.
                </span>
              </h2>
              <div className="flex flex-col gap-6 mt-8 max-w-sm">
                <p className="text-neutral-500 font-medium leading-relaxed">
                  Tailored solutions designed to elevate your business operations and drive sustainable growth across every vertical.
                </p>
                <Button asChild className="w-fit mt-4 rounded-full bg-biznorx-navy text-white hover:bg-biznorx-navy/90 transition-colors h-12 px-6 gap-3 group">
                  <Link href="/contact">
                    Inquire Now
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
              {offers.map((offer, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row py-12 border-b border-neutral-200 gap-6 md:gap-10 group"
                >
                  {/* Number */}
                  <div className="text-4xl md:text-5xl font-bold text-biznorx-navy font-[family-name:var(--font-playfair)] shrink-0 group-hover:text-biznorx-red transition-colors duration-300">
                    {String(index + 1).padStart(2, '0')}.
                  </div>

                  {/* Content */}
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold text-biznorx-navy mb-4 tracking-tight">
                      {offer.title}
                    </h3>
                    {offer.description && (
                      <p className="text-neutral-500 font-medium leading-relaxed mb-8 max-w-lg">
                        {offer.description}
                      </p>
                    )}

                    {/* Tags */}
                    {offer.categories && offer.categories.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {offer.categories.map((cat, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 rounded-full bg-neutral-100 text-neutral-600 text-xs font-medium"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {stats && stats.length > 0 && (
        <section className="w-full bg-biznorx-navy py-12 md:py-20 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-biznorx-red/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
          
          <div className="container-master px-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center px-6 py-8 md:py-0 group">
                  <div className="relative">
                    {/* Watermark effect */}
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[100px] font-bold text-white/5 select-none -z-10 group-hover:scale-110 transition-transform duration-500">
                      {stat.value}
                    </span>
                    <span className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-400 block">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-white mb-2 tracking-wide">
                    {stat.label}
                  </span>
                  <p className="text-xs text-white/50 font-medium max-w-[200px]">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {reasons && reasons.length > 0 && (
        <section className="w-full bg-neutral-50 py-12 md:py-24 border-t border-neutral-100 overflow-hidden">
          <div className="container-master px-4 max-w-7xl mx-auto">
            
            <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center">
              
              {/* Left Side: Quote & Stats */}
              <div className="w-full lg:w-5/12 flex flex-col">
                <div className="mb-12">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-biznorx-red mb-6">
                    The BiznorX Standard
                  </p>
                  <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-biznorx-navy tracking-tight mb-8 leading-snug">
                    Why leading brands choose BiznorX.
                  </h2>
                  {quote && (
                    <blockquote className="border-l-4 border-biznorx-red pl-6 py-2">
                      <p className="text-lg md:text-xl text-slate-700 italic font-medium leading-relaxed mb-4">
                        "{quote}"
                      </p>
                      <footer className="text-sm font-bold text-slate-900 uppercase tracking-widest">— BiznorX Team</footer>
                    </blockquote>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-200">
                  <div>
                    <div className="text-3xl font-bold text-biznorx-navy mb-1">5+</div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Years Exp.</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-biznorx-navy mb-1">120+</div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Projects</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-biznorx-navy mb-1">98%</div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Right Side: Reasons */}
              <div className="w-full lg:w-7/12">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-neutral-200/50 border border-neutral-100">
                  <div className="space-y-8">
                    {reasons.map((reason, i) => (
                      <div key={i} className="flex gap-6 group">
                        <div className="shrink-0 mt-1">
                          <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-xs font-bold text-biznorx-navy group-hover:bg-biznorx-red group-hover:text-white transition-colors duration-300">
                            {reason.id}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-biznorx-navy mb-2 group-hover:text-biznorx-red transition-colors duration-300">
                            {reason.title}
                          </h3>
                          <p className="text-sm text-slate-500 font-medium leading-relaxed">
                            {reason.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>
      )}

      <ProcessSection />
      
      <GlobalCta />
    </div>
  )
}

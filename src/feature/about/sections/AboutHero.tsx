"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, History } from "lucide-react"

export function AboutHero() {
  return (
    <section className="w-full min-h-[85vh] bg-neutral-50 flex flex-col lg:flex-row border-b border-neutral-100">

      {/* Left Text Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 lg:py-0 relative z-10">
        <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-biznorx-red mb-6 flex items-center gap-3">
          <History className="w-4 h-4" />
          Our Heritage
        </p>

        <h1 className="flex flex-col gap-2 mb-8">
          <span className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl text-biznorx-navy tracking-tight leading-none">
            A modern revival of
          </span>
          <span className="font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-biznorx-deep-red to-biznorx-red pb-2 leading-none">
            Old Ethics.
          </span>
        </h1>

        <p className="text-base md:text-lg text-slate-600 max-w-lg mb-10 font-medium leading-relaxed">
          At <strong className="text-biznorx-navy font-bold">BiznorX</strong>, we are more than a platform — we are a new old business street. Rooted in integrity and honour, we blend the legacy of past generations with the speed and innovation of tomorrow's technology.
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
        <Image
          src="/images/process_1.jpg" // We'll use a premium placeholder image here
          alt="BiznorX Heritage"
          fill
          className="object-cover hover:scale-105 transition-transform duration-[20s] ease-linear"
        />

        {/* Floating Stat Badge */}
        <div className="absolute bottom-12 left-12 md:bottom-24 md:left-24 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl text-white shadow-2xl">
          <div className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
            60+
          </div>
          <p className="text-sm font-bold uppercase tracking-widest text-white/80">Years of Trust</p>
        </div>
      </div>

    </section>
  )
}

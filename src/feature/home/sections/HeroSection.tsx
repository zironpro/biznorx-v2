"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative w-full bg-black text-white flex flex-col items-center justify-center min-h-screen pt-20 pb-16 overflow-hidden">
      {/* Abstract Background Animation */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/biznorx-hero.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container-master relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto px-4 mt-6 md:mt-12">

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-1 mb-4"
        >
          <span className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl lg:text-7xl tracking-tight text-white">
            One Global Partner.
          </span>
          <span className="font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white pb-1">
            Many Ways to Grow.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm md:text-lg text-white/80 max-w-2xl mx-auto mb-8 font-medium leading-relaxed"
        >
          BiznorX brings together business solutions across talent, real estate, digital technology and growth — helping individuals and organizations move from opportunity to execution.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button asChild className="rounded-full pl-6 pr-2 py-6 gap-3 text-sm md:text-base bg-white text-biznorx-navy hover:bg-gray-200 h-12 md:h-14 border-0 w-full sm:w-auto cursor-pointer font-bold transition-all">
            <Link href="/services">
              Explore Our Services
              <div className="bg-biznorx-navy/10 rounded-full p-2 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-biznorx-navy" />
              </div>
            </Link>
          </Button>
          <Button asChild className="group rounded-full pl-6 pr-2 py-6 gap-3 text-sm md:text-base border-2 border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white transition-colors h-12 md:h-14 w-full sm:w-auto cursor-pointer font-bold backdrop-blur-sm">
            <Link href="/contact">
              Talk to BiznorX
              <div className="bg-white/10 rounded-full p-2 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { Globe, Building2, MonitorSmartphone, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export function FeatureIconsSection() {
  return (
    <section className="w-full bg-biznorx-navy py-16 md:py-24 border-t border-white/10 relative z-20">
      <div className="container-master max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">Our Core Verticals</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center text-center gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group"
          >
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-base md:text-lg text-white">Talent & Workforce</h3>
            <p className="text-gray-400 text-sm hidden md:block leading-relaxed">
              Global recruitment and talent acquisition.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center text-center gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group"
          >
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-base md:text-lg text-white">Real Estate & Land</h3>
            <p className="text-gray-400 text-sm hidden md:block leading-relaxed">
              Prime properties and investment advisory.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center text-center gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group"
          >
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <MonitorSmartphone className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-base md:text-lg text-white">Digital & Technology</h3>
            <p className="text-gray-400 text-sm hidden md:block leading-relaxed">
              Web development, AI, and digital growth.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center text-center gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group"
          >
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-base md:text-lg text-white">Business & Growth</h3>
            <p className="text-gray-400 text-sm hidden md:block leading-relaxed">
              Consulting and strategic partnerships.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

"use client"

import { Globe, Building2, MonitorSmartphone, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export function FeatureIconsSection() {
  return (
    <section className="w-full py-6 md:py-10 border-b border-gray-100 relative z-20 bg-white">
      <div className="container-master max-w-6xl mx-auto px-4">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-row items-center gap-4 p-2 pr-6 rounded-full hover:bg-gray-50 transition-all cursor-pointer group"
          >
            <div className="w-12 h-12 shrink-0 rounded-full bg-biznorx-navy/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-6 h-6 text-biznorx-navy group-hover:text-biznorx-red transition-colors" />
            </div>
            <h3 className="font-bold text-sm md:text-base text-biznorx-navy truncate">Talent & Workforce</h3>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-row items-center gap-4 p-2 pr-6 rounded-full hover:bg-gray-50 transition-all cursor-pointer group"
          >
            <div className="w-12 h-12 shrink-0 rounded-full bg-biznorx-navy/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Building2 className="w-6 h-6 text-biznorx-navy group-hover:text-biznorx-red transition-colors" />
            </div>
            <h3 className="font-bold text-sm md:text-base text-biznorx-navy truncate">Real Estate & Land</h3>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-row items-center gap-4 p-2 pr-6 rounded-full hover:bg-gray-50 transition-all cursor-pointer group"
          >
            <div className="w-12 h-12 shrink-0 rounded-full bg-biznorx-navy/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <MonitorSmartphone className="w-6 h-6 text-biznorx-navy group-hover:text-biznorx-red transition-colors" />
            </div>
            <h3 className="font-bold text-sm md:text-base text-biznorx-navy truncate">Digital & Technology</h3>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex flex-row items-center gap-4 p-2 pr-6 rounded-full hover:bg-gray-50 transition-all cursor-pointer group"
          >
            <div className="w-12 h-12 shrink-0 rounded-full bg-biznorx-navy/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-6 h-6 text-biznorx-navy group-hover:text-biznorx-red transition-colors" />
            </div>
            <h3 className="font-bold text-sm md:text-base text-biznorx-navy truncate">Business & Growth</h3>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

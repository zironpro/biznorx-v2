"use client"

import Link from "next/link"
import { Plus } from "lucide-react"
import { industriesData } from "@/data/industries"

export function IndustryGrid() {
  return (
    <section className="w-full bg-white py-12 relative -mt-10 rounded-t-[3rem] z-20">
      <div className="container-master px-4 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {industriesData.map((ind, i) => {
            const Icon = ind.icon
            return (
              <Link href={`/industries/${ind.slug}`} key={i} className="block group">
                <div className="relative aspect-square bg-[#F3F4F6] rounded-2xl md:rounded-[2rem] overflow-hidden hover:bg-neutral-200 transition-colors duration-300 flex flex-col items-center justify-center p-6 border border-neutral-100">
                  
                  {/* Top Right Plus Button */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-200/60 flex items-center justify-center group-hover:bg-white group-hover:text-biznorx-red transition-all duration-300">
                    <Plus className="w-4 h-4 text-neutral-500 group-hover:text-biznorx-red" strokeWidth={2} />
                  </div>
                  
                  {/* Center Icon */}
                  <div className="mb-4 text-slate-800 group-hover:text-biznorx-red transition-colors duration-300 group-hover:scale-110 transform ease-out">
                    <Icon className="w-12 h-12 md:w-16 md:h-16" strokeWidth={1} />
                  </div>
                  
                  {/* Label */}
                  <h3 className="text-sm md:text-base font-bold text-slate-800 text-center tracking-tight group-hover:text-biznorx-red transition-colors duration-300">
                    {ind.name}
                  </h3>
                  
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { IndustriesHero } from "./sections/IndustriesHero"
import { IndustryGrid } from "./sections/IndustryGrid"
import { GlobalCta } from "@/components/GlobalCta"

export function IndustriesView() {
  return (
    <div className="flex flex-col w-full">
      <IndustriesHero />
      <IndustryGrid />
      <GlobalCta />
    </div>
  )
}

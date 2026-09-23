import { AboutHero } from "./sections/AboutHero"
import { OurValuesSection } from "./sections/OurValuesSection"
import { WhatDrivesUs } from "./sections/WhatDrivesUs"
import { WhyChooseUsSection } from "./sections/WhyChooseUs"
import { AboutIndustries } from "./sections/AboutIndustries"
import { GlobalCta } from "@/components/GlobalCta"

export function AboutView() {
  return (
    <div className="flex flex-col w-full">
      <AboutHero />
      <WhatDrivesUs />
      <OurValuesSection />
      <AboutIndustries />
      <WhyChooseUsSection />
      <GlobalCta />
    </div>
  )
}

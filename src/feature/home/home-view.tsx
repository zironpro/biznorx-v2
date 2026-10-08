import { HeroSection } from "./sections/HeroSection";
import { FeatureIconsSection } from "./sections/FeatureIconsSection";
import { ServicesSection } from "./sections/ServicesSection";
import { ProcessSection } from "./sections/ProcessSection";
import { StatsSection } from "./sections/StatsSection";
import { BlogHomeSection } from "./sections/BlogHomeSection";
import { GlobalSection } from "./sections/GlobalSection";
import { IndustriesSection } from "./sections/IndustriesSection";

import { FaqSection } from "./sections/FaqSection";
import { CtaSection } from "./sections/CtaSection";
import { GlobalCta } from "@/components/GlobalCta";

export function HomeView() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <FeatureIconsSection />
      <ServicesSection />
      <BlogHomeSection />
      <GlobalSection />
      <IndustriesSection />
      <ProcessSection />
      <StatsSection />
      <FaqSection />
      {/* <CtaSection /> */}
      <GlobalCta />
    </div>
  );
}

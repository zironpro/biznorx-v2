import { HeroSection } from "./sections/HeroSection";
import { FeatureIconsSection } from "./sections/FeatureIconsSection";
import { ServicesSection } from "./sections/ServicesSection";
import { ProcessSection } from "./sections/ProcessSection";
import { StatsSection } from "./sections/StatsSection";
import { EcosystemSection } from "./sections/EcosystemSection";
import { GlobalSection } from "./sections/GlobalSection";
import { IndustriesSection } from "./sections/IndustriesSection";
import { CtaSection } from "./sections/CtaSection";

export function HomeView() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <FeatureIconsSection />
      <ServicesSection />
      <EcosystemSection />
      <GlobalSection />
      <IndustriesSection />
      <ProcessSection />
      <StatsSection />
      <CtaSection />
    </div>
  );
}

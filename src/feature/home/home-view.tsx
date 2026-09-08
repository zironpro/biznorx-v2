import { HeroSection } from "./sections/HeroSection";
import { ServicesSection } from "./sections/ServicesSection";
import { ProcessSection } from "./sections/ProcessSection";
import { StatsSection } from "./sections/StatsSection";
import { FaqSection } from "./sections/FaqSection";

export function HomeView() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <StatsSection />
      <FaqSection />
    </div>
  );
}

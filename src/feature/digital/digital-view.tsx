import { DigitalHero } from "./sections/DigitalHero"
import { DigitalStats } from "./sections/DigitalStats"
import { DigitalServiceList } from "./sections/DigitalServiceList"
import { DigitalProcess } from "./sections/DigitalProcess"
import { DigitalTechStack } from "./sections/DigitalTechStack"
import { GlobalCta } from "@/components/GlobalCta"

export function DigitalView() {
  return (
    <div className="flex flex-col w-full">
      <DigitalHero />
      <DigitalStats />
      <DigitalServiceList />
      <DigitalProcess />
      <DigitalTechStack />
      <GlobalCta />
    </div>
  )
}

import { ServicesHero } from "./sections/ServicesHero"
import { ServiceList } from "./sections/ServiceList"
import { ServiceProcess } from "./sections/ServiceProcess"
import { GlobalCta } from "@/components/GlobalCta"

export function ServicesView() {
  return (
    <div className="flex flex-col w-full">
      <ServicesHero />
      <ServiceList />
      <ServiceProcess />
      {/* <DigitalServices /> */}
      <GlobalCta />
    </div>
  )
}

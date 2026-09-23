import { CareersHero } from "./sections/CareersHero"
import { ApplicationForm } from "./sections/ApplicationForm"

export function CareersView() {
  return (
    <div className="flex flex-col w-full">
      <CareersHero />
      <ApplicationForm />
    </div>
  )
}

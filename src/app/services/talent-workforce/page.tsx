import { VerticalView } from "@/feature/services/VerticalView";

export default function TalentWorkforcePage() {
  const offers = [
    { title: "Executive Search", description: "Finding visionary leaders to drive your business forward." },
    { title: "Recruitment", description: "End-to-end recruitment services for critical roles." },
    { title: "Manpower Solutions", description: "Deploying skilled professionals for large-scale operations." },
    { title: "Contract Staffing", description: "Flexible workforce solutions tailored to project demands." },
    { title: "Workforce Planning", description: "Strategic consulting to optimize team structure and efficiency." },
    { title: "Talent Acquisition", description: "Continuous sourcing and pipelining of top-tier candidates." },
    { title: "Candidate Screening", description: "Rigorous technical and behavioral assessments." },
    { title: "Career Solutions", description: "Guiding professionals to their next major career milestone." },
  ];

  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <VerticalView 
        title="Talent & Workforce"
        subtitle="The right people can change the trajectory of a business."
        description="BiznorX connects ambitious professionals with industry-leading organizations. We don't just fill seats; we strategically align talent with long-term company visions."
        offers={offers}
        bgImage="/images/services/talent_workforce.jpg"
      />
    </main>
  );
}

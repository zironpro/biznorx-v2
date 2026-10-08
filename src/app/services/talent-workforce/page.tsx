import { VerticalView } from "@/feature/services/VerticalView";

export default function TalentWorkforcePage() {
  const offers = [
    { title: "Executive Search", description: "Discover visionary leaders who have the power to fundamentally drive your business forward. We utilize an extensive, discrete global network to identify and secure top-tier C-level executives, VPs, and Directors perfectly matched to your culture.", categories: ["C-Level Recruitment", "VP Search", "Board Directors", "Confidential Hiring", "Leadership Assessment"] },
    { title: "Recruitment", description: "Our end-to-end recruitment services streamline the hiring process for critical technical and operational roles. We handle everything from drafting compelling job descriptions to managing negotiations, ensuring you secure the best talent in the market.", categories: ["Technical Hiring", "Operational Roles", "Offer Negotiation", "Market Mapping", "Employer Branding"] },
    { title: "Manpower Solutions", description: "Rapidly deploy skilled professionals to support large-scale industrial or corporate operations. We specialize in bulk hiring and blue-collar staffing, ensuring you have a reliable, compliant workforce ready to meet aggressive project deadlines.", categories: ["Blue Collar Staffing", "Bulk Hiring", "Industrial Deployment", "Compliance Verification", "Onboarding"] },
    { title: "Contract Staffing", description: "Maintain absolute operational agility with flexible workforce solutions tailored to fluctuating project demands. We provide highly qualified temporary staff and specialized contractors to fill immediate gaps without the long-term overhead.", categories: ["Temporary Staffing", "Project-Based Contractors", "Freelance Talent", "Payroll Management", "Agile Workforce"] },
    { title: "Workforce Planning", description: "Optimize your team structure for maximum efficiency and future scalability. Our strategic consultants analyze your current workforce capabilities, forecast future talent requirements, and design a comprehensive plan to bridge the gap.", categories: ["Workforce Consulting", "Team Structuring", "Capacity Planning", "Skills Gap Analysis", "Retention Strategy"] },
    { title: "Talent Acquisition", description: "Build a continuous pipeline of top-tier candidates to drastically reduce time-to-hire. We leverage advanced sourcing techniques and market intelligence to engage passive talent long before you have an active vacancy.", categories: ["Talent Pipelining", "Passive Sourcing", "Market Intelligence", "Candidate Engagement", "Diversity Hiring"] },
    { title: "Candidate Screening", description: "Eliminate hiring risks with our rigorous technical, cultural, and behavioral assessment protocols. We conduct in-depth background checks and multi-stage interviews to ensure only the most qualified candidates reach your desk.", categories: ["Behavioral Assessments", "Technical Vetting", "Background Checks", "Cultural Fit Analysis", "Reference Checking"] },
    { title: "Career Solutions", description: "Empower professionals to reach their next major career milestone. We provide personalized career coaching, executive resume crafting, and strategic placement services to guide ambitious individuals toward fulfilling leadership roles.", categories: ["Executive Coaching", "Outplacement Services", "Resume Optimization", "Career Transitions", "Interview Preparation"] },
  ];

  const stats = [
    { value: "5k+", label: "Placements", desc: "Successful executive and technical placements globally." },
    { value: "45%", label: "Faster Hiring", desc: "Reduced time-to-fill for critical leadership roles." },
    { value: "95%", label: "Retention Rate", desc: "High retention of candidates placed in the first two years." },
    { value: "Global", label: "Talent Pool", desc: "Access to passive candidates across 20+ countries." },
  ];

  const reasons = [
    { id: "01", title: "Deep Industry Networks", desc: "We don't just rely on job boards. We leverage decades of industry relationships to find talent that isn't actively looking." },
    { id: "02", title: "Rigorous Vetting Process", desc: "Every candidate undergoes extensive behavioral, cultural, and technical screening before they reach your desk." },
    { id: "03", title: "Cultural Alignment", desc: "We believe a resume is only half the story. We ensure candidates perfectly align with your company's core values." },
    { id: "04", title: "End-to-End Partnership", desc: "From drafting the initial role profile to onboarding, we act as an extension of your internal HR team." }
  ];

  const quote = "A company's trajectory is determined by the people it hires. We don't just fill seats; we find the leaders of tomorrow.";

  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <VerticalView 
        title="Talent & Workforce"
        subtitle="The right people can change the trajectory of a business. We provide end-to-end workforce solutions—from executive search to large-scale staffing—ensuring you have the exact talent needed to execute your vision and drive sustainable corporate growth."
        description="BiznorX connects ambitious professionals with industry-leading organizations. We don't just fill seats; we strategically align talent with long-term company visions."
        offers={offers}
        bgImage="/images/services/talent_workforce.jpg"
        stats={stats}
        reasons={reasons}
        quote={quote}
      />
    </main>
  );
}

import { VerticalView } from "@/feature/services/VerticalView";

export default function DigitalTechnologyPage() {
  const offers = [
    { title: "Web Development", description: "Corporate websites, business platforms and high-performance web applications." },
    { title: "Mobile Applications", description: "iOS / Android applications and cross-platform solutions." },
    { title: "UI/UX Design", description: "Digital experiences designed around users and business goals." },
    { title: "Digital Marketing", description: "SEO, social media, performance marketing and lead generation." },
    { title: "Branding", description: "Brand identity, strategy, creative direction and communication." },
    { title: "AI & Automation", description: "AI-powered workflows, business automation and intelligent systems." },
    { title: "E-Commerce", description: "Online stores, commerce platforms and digital sales systems." },
  ];

  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <VerticalView 
        title="Digital & Technology"
        subtitle="Digital infrastructure for businesses ready to move forward."
        description="In a digital-first world, your technology stack defines your scalability. We build, market, and automate digital experiences that drive measurable business outcomes."
        offers={offers}
        bgImage="/images/services/digital_technology.jpg"
      />
    </main>
  );
}

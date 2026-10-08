import { VerticalView } from "@/feature/services/VerticalView";

export default function BusinessGrowthPage() {
  const offers = [
    { title: "Business Consulting", description: "Strategic guidance to optimize operations and scale efficiently." },
    { title: "Market Entry", description: "Comprehensive plans for successfully entering new global markets." },
    { title: "Strategic Partnerships", description: "Connecting businesses with the right allies for mutual growth." },
    { title: "Growth Strategy", description: "Data-driven roadmaps to increase market share and revenue." },
    { title: "Advisory", description: "Expert counsel on complex business challenges and opportunities." },
    { title: "Business Structuring", description: "Organizational design to support sustainable long-term expansion." },
  ];

  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <VerticalView 
        title="Business & Growth"
        subtitle="Consulting, market entry, strategic partnerships and growth solutions."
        description="Growth is not accidental; it is engineered. BiznorX provides the strategic oversight and operational frameworks required to take your business to its next stage of evolution."
        offers={offers}
        bgImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
      />
    </main>
  );
}

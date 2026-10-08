import { VerticalView } from "@/feature/services/VerticalView";

export default function RealEstateLandPage() {
  const offers = [
    { title: "Land Brokerage", description: "Acquisition and sale of prime land parcels." },
    { title: "Property Buying", description: "End-to-end assistance for securing the right properties." },
    { title: "Property Selling", description: "Strategic marketing and negotiation for high-value sales." },
    { title: "Property Sourcing", description: "Finding off-market and exclusive property opportunities." },
    { title: "Investment Advisory", description: "Data-driven insights for high-yield real estate investments." },
    { title: "Commercial Property", description: "Office spaces, retail units, and industrial real estate." },
    { title: "Residential Property", description: "Luxury homes, apartments, and premium residential spaces." },
    { title: "NRI Property Services", description: "Dedicated real estate management for non-resident clients." },
    { title: "Property Documentation", description: "Seamless legal, regulatory, and transfer paperwork." },
    { title: "Market Analysis", description: "In-depth research on emerging real estate trends." },
  ];

  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <VerticalView 
        title="Real Estate & Land"
        subtitle="From land discovery to successful transactions."
        description="Navigating the real estate market requires local expertise and global foresight. BiznorX provides comprehensive property and land solutions for investors, businesses, and individuals."
        offers={offers}
        bgImage="/images/services/real_estate.jpg"
      />
    </main>
  );
}

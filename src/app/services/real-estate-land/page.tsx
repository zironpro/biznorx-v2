import { VerticalView } from "@/feature/services/VerticalView";

export default function RealEstateLandPage() {
  const offers = [
    { title: "Land Brokerage", description: "Navigate the complex landscape of acquiring and selling prime land parcels with complete confidence. We provide comprehensive market analysis, zoning assessments, and expert negotiation to secure high-value land for major commercial developments.", categories: ["Land Acquisition", "Zoning Assessment", "Commercial Sales", "Valuation", "Development Planning"] },
    { title: "Property Buying", description: "Experience seamless, end-to-end assistance in securing the perfect properties for your portfolio. We guide you through market evaluation, property inspections, financial structuring, and final closing, ensuring your investment is fundamentally sound.", categories: ["Buyer Advisory", "Property Procurement", "Market Evaluation", "Financial Structuring", "Inspections"] },
    { title: "Property Selling", description: "Maximize your returns with our strategic property marketing and negotiation expertise. We leverage high-end digital marketing, exclusive buyer networks, and aggressive negotiation tactics to execute high-value sales efficiently and profitably.", categories: ["Strategic Marketing", "Sales Negotiation", "Asset Valuation", "Exclusive Networks", "Digital Showcasing"] },
    { title: "Property Sourcing", description: "Gain a competitive edge by accessing exclusive, off-market property opportunities before they become public. We utilize deep industry connections to source rare, high-yield assets that perfectly align with your specific investment criteria.", categories: ["Off-Market Access", "Exclusive Listings", "Asset Sourcing", "Targeted Acquisition", "Portfolio Expansion"] },
    { title: "Investment Advisory", description: "Make informed, high-yield real estate investments backed by rigorous data-driven insights. Our advisors analyze emerging market trends, calculate projected ROIs, and design risk-mitigated strategies to build a robust property portfolio.", categories: ["Yield Analysis", "Investment Strategy", "ROI Modeling", "Risk Mitigation", "Market Forecasting"] },
    { title: "Commercial Property", description: "Secure premium office spaces, retail units, and industrial real estate that elevate your business operations. We understand the specific logistical and locational requirements of modern businesses and negotiate leases or purchases accordingly.", categories: ["Office Spaces", "Retail Units", "Industrial Facilities", "Lease Negotiation", "Tenant Representation"] },
    { title: "Residential Property", description: "Discover luxury homes, high-end apartments, and premium residential spaces tailored to your lifestyle. We provide white-glove service throughout the entire residential transaction, ensuring discretion, efficiency, and ultimate satisfaction.", categories: ["Luxury Residential", "Premium Apartments", "White-Glove Service", "Relocation Support", "Private Showings"] },
    { title: "NRI Property Services", description: "We offer dedicated, trustworthy real estate management for non-resident clients managing assets from abroad. Our comprehensive NRI services cover tenant management, legal representation, tax compliance, and regular property maintenance.", categories: ["NRI Management", "Tenant Relations", "Tax Compliance", "Property Maintenance", "Legal Representation"] },
    { title: "Property Documentation", description: "Ensure absolute legal security with our flawless documentation services. We handle all regulatory paperwork, title deeds, transfer documents, and local compliance checks so your transaction proceeds without any bureaucratic friction.", categories: ["Legal Compliance", "Title Deeds", "Transfer Paperwork", "Regulatory Approvals", "Due Diligence"] },
    { title: "Market Analysis", description: "Stay ahead of the curve with our in-depth research on emerging real estate trends and micro-markets. We provide custom intelligence reports detailing pricing fluctuations, upcoming infrastructure projects, and neighborhood growth trajectories.", categories: ["Market Research", "Trend Analysis", "Intelligence Reports", "Micro-Market Data", "Infrastructure Impact"] },
  ];

  const stats = [
    { value: "$500M+", label: "Transactions", desc: "Total value of commercial and residential deals closed." },
    { value: "20%", label: "Below Market", desc: "Average savings achieved through strategic acquisitions." },
    { value: "50+", label: "Prime Parcels", desc: "Exclusive land parcels secured for major developments." },
    { value: "100%", label: "Compliance", desc: "Flawless legal and regulatory documentation track record." },
  ];

  const reasons = [
    { id: "01", title: "Exclusive Off-Market Access", desc: "We provide our clients with access to premium properties and land parcels before they hit the open market." },
    { id: "02", title: "Comprehensive Due Diligence", desc: "We handle the complex legal, zoning, and regulatory checks to ensure your investment is completely secure." },
    { id: "03", title: "Strategic Valuation", desc: "Our data-driven approach to property valuation ensures you never overpay and always maximize your ROI." },
    { id: "04", title: "End-to-End Advisory", desc: "From initial sourcing to final transfer and management, we provide a seamless real estate experience." }
  ];

  const quote = "Real estate is more than just square footage; it's the foundation of your business operations and long-term wealth.";

  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <VerticalView 
        title="Real Estate & Land"
        subtitle="From land discovery and acquisition to successful transactions. We navigate complex markets to secure high-value commercial properties, land parcels, and investment assets, providing end-to-end advisory and flawless execution."
        description="Navigating the real estate market requires local expertise and global foresight. BiznorX provides comprehensive property and land solutions for investors, businesses, and individuals."
        offers={offers}
        bgImage="/images/services/real_estate.jpg"
        stats={stats}
        reasons={reasons}
        quote={quote}
      />
    </main>
  );
}

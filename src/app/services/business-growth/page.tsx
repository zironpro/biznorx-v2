import { VerticalView } from "@/feature/services/VerticalView";

export default function BusinessGrowthPage() {
  const offers = [
    { title: "Business Consulting", description: "We provide executive-level strategic guidance designed to eliminate bottlenecks, optimize your daily operations, and prepare your organization for aggressive scaling. Our holistic approach ensures that all departments align with your overarching business objectives.", categories: ["Operations Optimization", "Scaling Strategies", "Executive Advisory", "Change Management", "Process Engineering"] },
    { title: "Market Entry", description: "Successfully navigate the complexities of expanding into emerging global markets. We deliver comprehensive, data-backed plans covering regulatory compliance, local competitor analysis, localization strategies, and initial go-to-market execution.", categories: ["Global Strategy", "Localization", "Regulatory Compliance", "Competitor Analysis", "Go-To-Market"] },
    { title: "Strategic Partnerships", description: "Accelerate your growth by connecting with the right industry allies. We identify, negotiate, and establish powerful joint ventures, strategic alliances, and channel partnerships that provide mutual leverage and immediate market access.", categories: ["Joint Ventures", "Strategic Alliances", "Channel Partnerships", "Contract Negotiation", "M&A Advisory"] },
    { title: "Growth Strategy", description: "Stop guessing and start scaling with our rigorous, data-driven roadmaps. We analyze market trends and internal performance metrics to design actionable strategies that significantly increase your market share and multiply revenue streams.", categories: ["Revenue Scaling", "Market Share Acquisition", "Trend Analysis", "Financial Modeling", "KPI Tracking"] },
    { title: "Advisory", description: "Gain access to expert, objective counsel on your most complex business challenges. From navigating economic downturns to planning an exit strategy, we provide C-suite executives with the insights needed to make high-stakes decisions confidently.", categories: ["C-Suite Counsel", "Risk Mitigation", "Exit Strategy", "Crisis Management", "Financial Advisory"] },
    { title: "Business Structuring", description: "Build a resilient organizational foundation that supports sustainable, long-term expansion. We specialize in corporate restructuring, team hierarchy design, and deploying agile frameworks that improve communication and operational efficiency.", categories: ["Organizational Design", "Change Management", "Agile Frameworks", "Corporate Restructuring", "Efficiency Audits"] },
  ];

  const stats = [
    { value: "2.5x", label: "Revenue Multiplier", desc: "Average revenue growth for our consulting clients." },
    { value: "15+", label: "New Markets", desc: "Successfully guided expansions into emerging markets." },
    { value: "30%", label: "Cost Reduction", desc: "Average operational savings through strategic restructuring." },
    { value: "100%", label: "Data-Driven", desc: "Every strategy is backed by deep market intelligence." },
  ];

  const reasons = [
    { id: "01", title: "Actionable Market Intelligence", desc: "We provide deep, proprietary market insights that give you a competitive advantage before you make a move." },
    { id: "02", title: "Holistic Growth Strategies", desc: "We look at the big picture, aligning your operations, marketing, and sales funnels to drive unified growth." },
    { id: "03", title: "Risk Mitigation", desc: "Entering new markets or scaling operations carries risk. Our frameworks are designed to minimize exposure and maximize upside." },
    { id: "04", title: "Execution Focused", desc: "We don't just deliver a presentation and leave. We stand by you during the implementation phase to ensure success." }
  ];

  const quote = "Growth is not a game of chance. It is a systematic process of identifying opportunities and executing with precision.";

  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <VerticalView 
        title="Business & Growth"
        subtitle="Consulting, market entry, strategic partnerships and growth solutions."
        description="Growth is not accidental; it is engineered. BiznorX provides the strategic oversight and operational frameworks required to take your business to its next stage of evolution."
        offers={offers}
        bgImage="/images/services/business_growth.jpg"
        stats={stats}
        reasons={reasons}
        quote={quote}
      />
    </main>
  );
}

import { VerticalView } from "@/feature/services/VerticalView";

export default function DigitalTechnologyPage() {
  const offers = [
    { title: "Web Development", description: "We build high-performance, accessible, and scalable web applications tailored to your business needs. Our solutions prioritize fast load times, robust security architectures, and seamless user experiences across all devices to drive maximum engagement.", categories: ["Next.js", "React", "Node.js", "Architecture", "Performance Optimization"] },
    { title: "Mobile Applications", description: "Deliver flawless mobile experiences with native or cross-platform apps designed for both iOS and Android ecosystems. We handle everything from the initial UI concept to rigorous QA testing and final app store deployment.", categories: ["React Native", "iOS", "Android", "Cross-Platform", "App Store Deployment"] },
    { title: "UI/UX Design", description: "Transform complex digital products into intuitive, stunning interfaces. Our design process relies heavily on user research, wireframing, and interactive prototyping to ensure every interaction feels natural and drives conversions.", categories: ["Figma", "User Research", "Wireframing", "Prototyping", "Interaction Design", "Usability Testing"] },
    { title: "Digital Marketing", description: "Scale your online presence with data-driven marketing campaigns. We leverage advanced SEO techniques, targeted performance marketing (PPC), and strategic social media management to generate high-quality leads and measurable ROI.", categories: ["SEO", "PPC", "Content Strategy", "Social Media", "Lead Generation", "Analytics"] },
    { title: "Branding", description: "Build a brand that commands authority and resonates with your target audience. We craft comprehensive brand identities, including striking visual systems, detailed style guidelines, and compelling strategic narratives.", categories: ["Visual Identity", "Brand Guidelines", "Strategic Positioning", "Typography", "Communication"] },
    { title: "AI & Automation", description: "Future-proof your operations by integrating intelligent automation into your workflows. We implement machine learning models, predictive analytics, and automated data pipelines to eliminate redundant tasks and optimize efficiency.", categories: ["Machine Learning", "Workflow Automation", "Predictive Analytics", "Data Pipelines", "Process Optimization"] },
    { title: "E-Commerce", description: "Launch and scale powerful digital storefronts that turn visitors into loyal customers. We build customized e-commerce platforms with secure payment gateways, efficient inventory management, and conversion-optimized checkout flows.", categories: ["Shopify", "Custom Commerce", "Payment Gateways", "Inventory Management", "CRO"] },
  ];

  const stats = [
    { value: "3x", label: "Organic traffic growth", desc: "Average increase in qualified visitor traffic." },
    { value: "40%", label: "Conversion lift", desc: "Average improvement in lead generation rates." },
    { value: "12w", label: "To reach page one", desc: "Average time to rank for competitive keywords." },
    { value: "98%", label: "Client retention", desc: "Long-term partnerships built on consistent ROI." },
  ];

  const reasons = [
    { id: "01", title: "Strategy before execution", desc: "We refuse to operate on assumptions. Every engagement begins with a comprehensive audit of your digital ecosystem to ensure we are solving the right problems." },
    { id: "02", title: "Premium design standards", desc: "We build enduring brands with striking visual systems that cut through the noise and elevate your market positioning." },
    { id: "03", title: "Measurable, revenue-focused results", desc: "Data-driven campaigns and conversion-optimized designs created specifically to capture intent and scale revenue predictably." },
    { id: "04", title: "A long-term growth partner", desc: "We don't just launch and leave. We are built for long-term partnerships, providing continuous optimization and support." }
  ];

  const quote = "Digital isn't a checkbox — it's the storefront of the modern era. We partner only with brands ready to own their space.";

  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <VerticalView 
        title="Digital & Technology"
        subtitle="Digital infrastructure for businesses ready to move forward."
        description="In a digital-first world, your technology stack defines your scalability. We build, market, and automate digital experiences that drive measurable business outcomes."
        offers={offers}
        bgImage="/images/services/digital_technology.jpg"
        stats={stats}
        reasons={reasons}
        quote={quote}
      />
    </main>
  );
}

import {
  Factory, Stethoscope, Laptop, ShoppingBag, Building, Truck,
  GraduationCap, Hotel, Landmark, Zap, PlaneTakeoff, HardHat,
  LucideIcon
} from "lucide-react"

export interface IndustryData {
  slug: string;
  name: string;
  icon: LucideIcon;
  heroHeadline: string;
  heroSubheadline: string;
  overview: string;
  keyOfferings: string[];
  stats: { value: string; label: string }[];
  image: string;
}

export const industriesData: IndustryData[] = [
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    heroHeadline: "Powering Modern Production Facilities",
    heroSubheadline: "We provide skilled labor, engineering talent, and digital transformation strategies to optimize your manufacturing operations.",
    overview: "In a rapidly evolving industrial landscape, staying competitive means embracing automation while maintaining a highly skilled workforce. We partner with manufacturing leaders to streamline production, enhance supply chain efficiency, and integrate Industry 4.0 technologies.",
    keyOfferings: [
      "Skilled Labor Sourcing",
      "Supply Chain Optimization",
      "Process Automation Consulting",
      "Safety Protocol Training"
    ],
    stats: [
      { value: "40%", label: "Increase in Output" },
      { value: "2x", label: "Faster Hiring Cycle" }
    ],
    image: "/images/process_1.jpg"
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: Stethoscope,
    heroHeadline: "Elevating Patient Care Through Exceptional Talent",
    heroSubheadline: "Connect with qualified medical professionals and administrative support staff dedicated to healthcare excellence.",
    overview: "The healthcare sector requires precision, empathy, and rigorous compliance. We supply top-tier medical talent and digital healthcare solutions that empower hospitals and clinics to deliver better patient outcomes efficiently.",
    keyOfferings: [
      "Medical Staffing",
      "Healthcare IT Integration",
      "Compliance & Credentialing",
      "Administrative Support"
    ],
    stats: [
      { value: "99%", label: "Compliance Rate" },
      { value: "10k+", label: "Placements Made" }
    ],
    image: "/images/process_2.jpg"
  },
  {
    slug: "technology",
    name: "Technology",
    icon: Laptop,
    heroHeadline: "Fueling the Digital Frontier",
    heroSubheadline: "Access elite software engineers, IT specialists, and digital transformation experts.",
    overview: "Tech companies move fast, and they need talent that can keep up. We provide specialized recruitment and technology consulting to help you build robust software, scale infrastructure, and secure your digital assets.",
    keyOfferings: [
      "Software Engineering Talent",
      "Cloud Infrastructure Design",
      "Cybersecurity Solutions",
      "Product Management"
    ],
    stats: [
      { value: "3x", label: "Development Speed" },
      { value: "500+", label: "Tech Roles Filled" }
    ],
    image: "/images/process_1.jpg"
  },
  {
    slug: "retail",
    name: "Retail",
    icon: ShoppingBag,
    heroHeadline: "Transforming the Retail Experience",
    heroSubheadline: "From store management to supply chain personnel and e-commerce solutions.",
    overview: "The retail landscape is shifting towards omnichannel experiences. We help retailers build strong teams and implement digital solutions that create seamless customer journeys from the storefront to the checkout cart.",
    keyOfferings: [
      "Store Management Recruitment",
      "E-commerce Strategy",
      "Customer Experience Design",
      "Inventory Management Systems"
    ],
    stats: [
      { value: "30%", label: "Sales Lift" },
      { value: "24/7", label: "Support Coverage" }
    ],
    image: "/images/process_2.jpg"
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: Building,
    heroHeadline: "Building the Future of Property",
    heroSubheadline: "Connecting you with property managers, sales agents, and facilities maintenance experts.",
    overview: "Real estate is about more than just physical spaces; it's about communities and investments. We provide the personnel and proptech solutions needed to manage portfolios, drive sales, and maintain high-value assets.",
    keyOfferings: [
      "Property Management Staffing",
      "PropTech Integration",
      "Facilities Maintenance",
      "Real Estate Marketing"
    ],
    stats: [
      { value: "$2B+", label: "Assets Managed" },
      { value: "95%", label: "Occupancy Rates" }
    ],
    image: "/images/process_1.jpg"
  },
  {
    slug: "logistics",
    name: "Logistics",
    icon: Truck,
    heroHeadline: "Moving the World Forward",
    heroSubheadline: "Drivers, warehouse operations, and supply chain coordinators ready to deploy.",
    overview: "Efficiency is the backbone of logistics. We supply the operational talent and tracking software required to keep supply chains moving flawlessly, reducing overhead and improving delivery times.",
    keyOfferings: [
      "Warehouse Personnel",
      "Fleet Management",
      "Supply Chain Consulting",
      "Last-Mile Optimization"
    ],
    stats: [
      { value: "1M+", label: "Shipments Tracked" },
      { value: "25%", label: "Cost Reduction" }
    ],
    image: "/images/process_2.jpg"
  },
  {
    slug: "education",
    name: "Education",
    icon: GraduationCap,
    heroHeadline: "Empowering the Next Generation",
    heroSubheadline: "Educators, administrators, and specialized instructional staff for institutions of all sizes.",
    overview: "Education is evolving with technology. We help schools and EdTech platforms find passionate educators and build digital learning environments that foster student engagement and success.",
    keyOfferings: [
      "Educator Recruitment",
      "EdTech Development",
      "Administrative Staffing",
      "Curriculum Design Support"
    ],
    stats: [
      { value: "50+", label: "Partner Schools" },
      { value: "100%", label: "Vetted Staff" }
    ],
    image: "/images/process_1.jpg"
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    icon: Hotel,
    heroHeadline: "Exceptional Service, Delivered",
    heroSubheadline: "Front desk, culinary, and guest services professionals that elevate the guest experience.",
    overview: "In hospitality, the team makes the brand. We source dedicated professionals who understand the art of service, ensuring your guests receive memorable experiences that turn them into loyal patrons.",
    keyOfferings: [
      "Guest Services Staffing",
      "Culinary Recruitment",
      "Hotel Management",
      "Event Coordination"
    ],
    stats: [
      { value: "5 Stars", label: "Average Rating" },
      { value: "2x", label: "Repeat Bookings" }
    ],
    image: "/images/process_2.jpg"
  },
  {
    slug: "banking-finance",
    name: "Banking & Finance",
    icon: Landmark,
    heroHeadline: "Securing Financial Futures",
    heroSubheadline: "Financial analysts, compliance officers, and accounting experts for a dynamic market.",
    overview: "Trust and accuracy are paramount in finance. We provide vetted financial professionals and secure FinTech solutions to help institutions manage risk, ensure compliance, and drive fiscal growth.",
    keyOfferings: [
      "Financial Analysis",
      "Compliance & Risk Management",
      "FinTech Development",
      "Accounting & Auditing"
    ],
    stats: [
      { value: "0", label: "Compliance Breaches" },
      { value: "$10B+", label: "Capital Advised" }
    ],
    image: "/images/process_1.jpg"
  },
  {
    slug: "energy",
    name: "Energy",
    icon: Zap,
    heroHeadline: "Powering a Sustainable Tomorrow",
    heroSubheadline: "Engineers and technicians for renewable and traditional energy sectors.",
    overview: "The energy sector is undergoing a massive transition. We supply the specialized engineering talent and digital grid solutions required to innovate in renewables and optimize traditional energy sources.",
    keyOfferings: [
      "Renewable Energy Engineering",
      "Grid Optimization",
      "Safety Management",
      "Field Technicians"
    ],
    stats: [
      { value: "100%", label: "Safety Record" },
      { value: "500MW+", label: "Projects Supported" }
    ],
    image: "/images/process_2.jpg"
  },
  {
    slug: "aviation",
    name: "Aviation",
    icon: PlaneTakeoff,
    heroHeadline: "Elevating Aviation Operations",
    heroSubheadline: "Ground crew, maintenance technicians, and aviation operations experts.",
    overview: "Aviation demands uncompromising safety and precision. We partner with airlines and airports to provide highly trained ground crew and operational staff to keep flights on schedule.",
    keyOfferings: [
      "Ground Handling Staff",
      "Aviation Maintenance",
      "Operations Management",
      "Regulatory Compliance"
    ],
    stats: [
      { value: "99.9%", label: "On-time Dispatch" },
      { value: "24/7", label: "Operational Support" }
    ],
    image: "/images/process_1.jpg"
  },
  {
    slug: "construction",
    name: "Construction",
    icon: HardHat,
    heroHeadline: "Building the Foundations of Tomorrow",
    heroSubheadline: "Project managers, skilled trades, and site supervisors to execute your vision.",
    overview: "From skyscrapers to infrastructure, construction requires skilled hands and visionary management. We provide the tradespeople and project managers necessary to deliver projects on time and under budget.",
    keyOfferings: [
      "Skilled Trades Recruitment",
      "Project Management",
      "Site Safety Supervision",
      "Equipment Operations"
    ],
    stats: [
      { value: "200+", label: "Sites Completed" },
      { value: "0", label: "Lost Time Incidents" }
    ],
    image: "/images/process_2.jpg"
  }
];

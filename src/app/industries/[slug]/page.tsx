import { industriesData } from "@/data/industries";
import { IndustryDetailView } from "@/feature/industries/industry-detail-view";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return industriesData.map((ind) => ({
    slug: ind.slug,
  }));
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const industry = industriesData.find((ind) => ind.slug === resolvedParams.slug);

  if (!industry) {
    notFound();
  }

  return <IndustryDetailView industry={industry} />;
}

import { BlogDetail } from "@/feature/blogs/sections/BlogDetail"
import { GlobalCta } from "@/components/GlobalCta"

export default async function BlogSlugPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  
  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <BlogDetail id={id} />
      <GlobalCta />
    </main>
  )
}

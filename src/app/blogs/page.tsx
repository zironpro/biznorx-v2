import { BlogsHero } from "@/feature/blogs/sections/BlogsHero";
import { BlogGrid } from "@/feature/blogs/sections/BlogGrid";

export default function BlogsPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <BlogsHero />
      <BlogGrid />
    </main>
  );
}

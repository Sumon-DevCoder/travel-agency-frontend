import type { Metadata } from "next";
import DynamicHeader from "@/app/(commonLayout)/components/DynamicHeader";
import { getAllBlogPosts } from "@/assets/dummyBlogData";
import { BlogCard } from "../../components/blog/BlogCard";
import { Pagination } from "../../components/Pagination";
import { Newsletter } from "../../components/blog/NewsLetter";
export const metadata: Metadata = {
  title: "Blog Grid | Tripfy Travel Agency",
  description:
    "Explore travel tips, destination guides, and adventure stories on the Tripfy travel blog.",
};

export default function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const postsPerPage = 6;
  const allPosts = getAllBlogPosts();

  // Calculate pagination
  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = allPosts.slice(startIndex, endIndex);

  return (
    <div>
      <DynamicHeader pageName={"Blog"} />

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          basePath="/blog"
        />

        <Newsletter />
      </main>
    </div>
  );
}

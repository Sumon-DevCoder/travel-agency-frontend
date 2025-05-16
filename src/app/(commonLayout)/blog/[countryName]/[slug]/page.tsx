import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar, User } from "lucide-react";
import { getAllBlogPosts, getBlogPostBySlug } from "@/assets/dummyBlogData";
import Image from "next/image";
import DynamicHeader from "@/app/(commonLayout)/components/DynamicHeader";
import { Newsletter } from "@/app/(commonLayout)/components/blog/NewsLetter";
import { BlogSidebar } from "@/app/(commonLayout)/components/blog/BlogSidebar";
import { ShareButtons } from "@/app/(commonLayout)/components/blog/ShareButtons";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found | Tripfy Travel Agency",
    };
  }

  return {
    title: `${post.title} | Tripfy Travel Agency`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Get recent posts for sidebar
  const recentPosts = getAllBlogPosts().slice(0, 3);

  return (
    <div>
      <DynamicHeader pageName={"Blog"} />

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className=" rounded-lg shadow-md overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                height={500}
                width={1000}
                className="w-full h-80 object-cover"
              />

              <div className="p-6">
                <div className="flex flex-wrap items-center text-gray-500 text-sm mb-4">
                  <span
                    className={`
                    px-3 py-1 rounded-full text-xs font-medium mr-4
                    ${
                      post.category === "Tips & Tricks"
                        ? "bg-green-500"
                        : post.category === "Cautions"
                        ? "bg-red-500"
                        : "bg-blue-500"
                    }
                  `}
                  >
                    {post.category}
                  </span>

                  <div className="flex items-center mr-4">
                    <User size={14} className="mr-1" />
                    <span>By {post.author}</span>
                  </div>

                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <h1 className="text-3xl font-bold mb-6">{post.title}</h1>

                <div
                  className="prose max-w-none mb-8"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <ShareButtons
                  url={`https://tripfy.com/blog/${post.slug}`}
                  title={post.title}
                />
              </div>
            </article>

            <Newsletter />
          </div>

          {/* Sidebar */}
          <div>
            <BlogSidebar recentPosts={recentPosts} />
          </div>
        </div>
      </main>
    </div>
  );
}

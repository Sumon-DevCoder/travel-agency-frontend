import Link from "next/link";
import { Calendar, User } from "lucide-react";
import Image from "next/image";
import { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="dark:border border-gray-600 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <Link
        href={`/blog/${post.category}/${post.slug}`}
        className="block relative"
      >
        <div className="absolute top-4 left-4 z-10">
          <span
            className={`
            px-3 py-1 rounded-full text-xs font-medium text-white
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
        </div>
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={600}
          height={400}
          className="w-full h-48 object-cover transition-transform hover:scale-105"
        />
      </Link>

      <div className="p-5">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <div className="flex items-center mr-4">
            <User size={14} className="mr-1" />
            <span>By {post.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{post.date}</span>
          </div>
        </div>

        <Link href={`/blog/${post.category}/${post.slug}`}>
          <h3 className="text-xl font-bold mb-3 text-neutral hover:text-green-500 transition-colors">
            {post.title}
          </h3>
        </Link>

        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>

        <Link
          href={`/blog/${post.category}/${post.slug}`}
          className="inline-flex items-center text-green-500 hover:text-green-600 font-medium"
        >
          Continue Reading →
        </Link>
      </div>
    </div>
  );
}

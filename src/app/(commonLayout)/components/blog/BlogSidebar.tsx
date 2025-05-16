import Link from "next/link";
import { Search, Tag } from "lucide-react";
import Image from "next/image";
import { BlogPost } from "@/types";

interface BlogSidebarProps {
  recentPosts: BlogPost[];
}

export function BlogSidebar({ recentPosts }: BlogSidebarProps) {
  const categories = [
    { name: "Tips & Tricks", count: 15 },
    { name: "Destinations", count: 23 },
    { name: "Adventure", count: 7 },
    { name: "Cautions", count: 9 },
    { name: "Travel Guides", count: 18 },
  ];

  const tags = [
    "Travel",
    "Adventure",
    "Europe",
    "Asia",
    "Beach",
    "Mountain",
    "City Break",
    "Food",
    "Budget",
    "Luxury",
  ];

  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="dark:border border-gray-600 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Search</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-green-500">
            <Search size={18} />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="dark:border border-gray-600 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Categories</h3>
        <ul className="space-y-3">
          {categories.map((category) => (
            <li key={category.name}>
              <Link
                href={`/blog/category/${category.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="flex items-center justify-between text-gray-700 hover:text-green-500 transition-colors"
              >
                <span>{category.name}</span>
                <span className="bg-gray-100  dark:text-gray-700 text-gray-600  text-xs px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="dark:border border-gray-600 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post.id} className="flex space-x-3">
              <Link href={`/blog/${post.slug}`} className="flex-shrink-0">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={200}
                  height={200}
                  className="w-16 h-16 object-cover rounded"
                />
              </Link>
              <div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-medium hover:text-green-500 transition-colors line-clamp-2"
                >
                  {post.title}
                </Link>
                <p className="text-gray-500 text-sm">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="dark:border border-gray-600 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag.toLowerCase()}`}
              className="flex items-center bg-gray-100 hover:bg-green-100 text-gray-700 hover:text-green-700 px-3 py-1 rounded-full text-sm transition-colors"
            >
              <Tag size={12} className="mr-1" />
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

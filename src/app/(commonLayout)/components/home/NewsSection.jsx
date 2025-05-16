"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function NewsSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const articles = [
    {
      id: 1,
      category: "Featured",
      categoryColor: "bg-green-500",
      image:
        "https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/6-2-705x540.jpg",
      title: "Exploring The Hidden Gems Of Bali Beyond The Trails",
      author: "Admin",
      date: "Dec 12, 2024",
      readTime: "5 Min Read",
    },
    {
      id: 2,
      category: "Tips & Tricks",
      categoryColor: "bg-green-500",
      image:
        "https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/7-2-705x540.jpg",
      title: "10 Safest Destinations For Solo Female Travelers",
      author: "Admin",
      date: "Dec 12, 2024",
      readTime: "5 Min Read",
    },
    {
      id: 3,
      category: "Adventure",
      categoryColor: "bg-green-500",
      image:
        "https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/1-1-900x490.jpg",
      title: "Hidden Destinations Of 2024 Waiting To Be Explored",
      author: "Admin",
      date: "Dec 12, 2024",
      readTime: "5 Min Read",
    },
    {
      id: 4,
      category: "Beach",
      categoryColor: "bg-blue-500",
      image:
        "https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/12/4-900x490.jpg",
      title: "Top 10 Tropical Beaches To Visit In 2024",
      author: "Admin",
      date: "Dec 15, 2024",
      readTime: "6 Min Read",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Top section with logo and heading */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="text-green-500 border border-green-500 rounded-full px-4 py-1 text-sm font-medium italic">
            Travel Insights
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-4xl font-bold mb-2">News Tips & Insights</h2>
            <p className="text-gray-600 max-w-xl">
              Stay informed with the latest travel news, expert tips, and
              insider insights to enhance your next adventure.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 border border-gray-300 rounded-full px-6 py-2 hover:bg-gray-50 transition-colors"
          >
            See All <ArrowRight size={16} />
          </motion.button>
        </div>
      </div>

      {/* Articles grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article) => (
          <motion.div
            key={article.id}
            className="rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            onMouseEnter={() => setHoveredCard(article.id)}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span
                  className={`${article.categoryColor} text-white px-3 py-1 rounded-md text-sm font-medium`}
                >
                  {article.category}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <span className="text-orange-400">By</span>
                  <span className="font-medium">{article.author}</span>
                </div>
                <div className="flex items-center">
                  <span>{article.date}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">{article.title}</h3>

              <div className="flex items-center justify-between">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-gray-200 rounded-full px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                >
                  Keep Reading
                </motion.button>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="inline-block w-4 h-4 border-t-2 border-l-2 border-gray-300 transform rotate-45"></span>
                  {article.readTime}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile See All button */}
      <div className="mt-8 flex justify-center md:hidden">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 border border-gray-300 rounded-full px-6 py-2 hover:bg-gray-50 transition-colors"
        >
          See All <ArrowRight size={16} />
        </motion.button>
      </div>
    </div>
  );
}

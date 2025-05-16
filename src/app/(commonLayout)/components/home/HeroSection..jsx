"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TravelBanner() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative bg-orange-50/30 overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col-reverse gap-5 md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="w-full md:w-1/2 z-10 mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <div className="inline-block px-4 py-1 rounded-full border border-green-500 bg-white text-green-600 font-medium mb-4">
                <span className="text-sm">Adventure Awaits</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Explore The World
                <br />
                One <span className="text-green-500">Adventure</span>
                <br />
                At A Time
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-gray-600 mb-8"
              >
                Save up to 40% on the best attractions, tours and activities
                with Tripfy
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
              >
                Explore Now
              </motion.button>
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-64 h-16 bg-yellow-100 rounded-full blur-md opacity-60"></div>
              <img
                src="https://demo.qzency.com/html/tripfy/preview/assets/image/banner-img/banner-gril.png"
                alt="Traveler with luggage"
                className="relative z-10 max-w-full"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute top-20 right-10 w-16 h-16"
      >
        <div className="w-8 h-8 rounded-full border border-gray-200 absolute"></div>
        <div className="w-4 h-4 rounded-full bg-green-100 absolute top-4 left-8"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 0.7, duration: 1.2 }}
        className="absolute bottom-20 left-10 w-24 h-24"
      >
        <div className="w-12 h-12 rounded-lg bg-yellow-100 rotate-12 absolute"></div>
        <div className="w-8 h-8 rounded-lg border border-green-200 absolute bottom-2 right-2"></div>
      </motion.div>

      <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-100 rounded-full opacity-30"></div>
      <div className="absolute top-1/4 right-1/3 w-6 h-6 bg-yellow-200 rounded-full opacity-40"></div>
      <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-orange-100 rounded-full opacity-20"></div>
    </div>
  );
}

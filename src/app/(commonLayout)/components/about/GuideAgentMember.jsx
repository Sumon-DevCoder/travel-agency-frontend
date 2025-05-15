"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Mock data for tour guides - in real implementation, you would use real images
const tourGuides = [
  {
    id: 1,
    name: "James Turner",
    role: "Tour Planner",
    bgColor: "bg-orange-100",
    image: "/images/about/tour-guides-1.png",
  },
  {
    id: 2,
    name: "Emma Carter",
    role: "Tour Guide",
    bgColor: "bg-green-100",
    image: "/images/about/tour-guides-2.png",
  },
  {
    id: 3,
    name: "James Turner",
    role: "Tour Planner",
    bgColor: "bg-teal-100",
    image: "/images/about/tour-guides-3.png",
  },
  {
    id: 4,
    name: "Daniel Roberts",
    role: "Finance Officer",
    bgColor: "bg-blue-100",
    image: "/images/about/tour-guides-4.png",
  },
  {
    id: 5,
    name: "Sarah Johnson",
    role: "Tour Planner",
    bgColor: "bg-orange-100",
    image: "/api/placeholder/400/480",
  },
  {
    id: 6,
    name: "Michael Chen",
    role: "Adventure Specialist",
    bgColor: "bg-purple-100",
    image: "/api/placeholder/400/480",
  },
];

export default function TourGuideCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxVisibleCards = 4;

  const nextSlide = () => {
    if (currentIndex < tourGuides.length - maxVisibleCards) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the beginning
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(tourGuides.length - maxVisibleCards); // Loop to the end
    }
  };

  // Get visible tour guides based on current index
  const visibleGuides = tourGuides.slice(
    currentIndex,
    currentIndex + maxVisibleCards
  );

  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16 ">
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="inline-block relative mb-4">
            <div className="relative">
              <div className="border border-green-500 rounded-full px-6 py-1">
                <span className="text-green-600 font-medium">Tour Guides</span>
              </div>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Agents
          </h2>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center gap-6 overflow-hidden">
            {visibleGuides.map((guide) => (
              <div
                key={guide.id}
                className="w-full max-w-xs rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
              >
                {/* Card Header with colored background */}
                <div className="p-4 text-center">
                  <p className="text-gray-600 font-medium">{guide.role}</p>
                  <h3 className="text-xl font-bold">{guide.name}</h3>
                </div>

                {/* Guide Image with colored background wedge */}
                <div className={`relative h-80 ${guide.bgColor}`}>
                  {/* Top diagonal shape */}
                  <div
                    className="absolute top-0 left-0 right-0 h-16 bg-white"
                    style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%, 0 0)" }}
                  ></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={guide.image}
                      alt={guide.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Bottom diagonal shape */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-16 bg-white"
                    style={{
                      clipPath: "polygon(50% 0, 100% 100%, 0 100%, 50% 0)",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100 border border-gray-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100 border border-gray-200"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}

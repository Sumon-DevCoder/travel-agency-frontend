"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";
import Image from "next/image";

export default function AdventureWebsite() {
  const [showVideoModal, setShowVideoModal] = useState(false);

  const handlePlayClick = () => {
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden font-sans px-4 sm:px-6">
      {/* Enhanced gradient background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 opacity-60"></div>
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.2' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E')",
        }}
      ></div>

      {/* About Us Section */}
      <section className="relative z-10 container mx-auto py-10 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative order-1 lg:order-1 mt-10 lg:mt-0">
          {/* Experience Badge - Responsive positioning */}
          <div className="absolute -left-2 sm:-left-4 top-4 sm:top-8 flex items-center shadow-lg">
            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-green-600 rounded-full text-white text-base sm:text-xl font-bold shadow-inner">
              20+
            </div>
            <div className="ml-2 bg-green-600 text-white px-3 py-1 rounded-tr-full rounded-br-full">
              <span className="text-xs uppercase tracking-wider">Years Of</span>
              <p className="font-semibold text-sm sm:text-base">Experience</p>
            </div>
          </div>

          {/* Main Image - Responsive sizing */}
          <div className="rounded-lg overflow-hidden border-4 sm:border-8 border-white shadow-2xl ml-4 sm:ml-8 mt-10 sm:mt-12 transition-all duration-300 hover:shadow-green-100 transform hover:scale-[1.02]">
            <Image
              src="/images/about/a1.png"
              alt="Adventurers exploring mountain terrain"
              className="w-full h-full object-cover"
              height={500}
              width={500}
            />
          </div>

          {/* Improved dots pattern - Hide on smaller screens */}
          <div className="absolute -bottom-6 -left-6 hidden sm:grid grid-cols-10 gap-1 sm:gap-2">
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-green-400 opacity-70"
              ></div>
            ))}
          </div>

          {/* Video thumbnail with responsive sizing */}
          <div
            className="absolute -right-4 sm:-right-8 bottom-12 sm:bottom-24 w-48 sm:w-64 h-32 sm:h-44 rounded-lg overflow-hidden shadow-2xl border-2 sm:border-4 border-white transform hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={handlePlayClick}
          >
            <Image
              src="/images/about/a1.png"
              alt="Experience the adventure video thumbnail"
              className="w-full h-full object-cover"
              height={500}
              width={500}
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all duration-300">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg">
                <Play size={20} className="text-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 sm:p-3">
              <p className="text-white text-xs sm:text-sm font-medium">
                Watch Our Story
              </p>
            </div>
          </div>
        </div>

        <div className="lg:pl-8 xl:pl-12 order-2 lg:order-2">
          <div className="inline-block px-3 py-1 bg-green-600 text-white rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 shadow-md">
            Our Journey
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
            Inspiring Adventures &<br />
            <span className="text-green-600">Transformative Journeys</span>{" "}
            Since 2006
          </h2>

          <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
            At Odyzaa, we're passionate about connecting curious souls with
            life-changing adventures. Our platform brings together travel
            enthusiasts and expert operators who specialize in creating
            unforgettable, sustainable experiences across the globe.
          </p>

          <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            Every journey with us is thoughtfully crafted by our team of
            seasoned adventurers and local experts, ensuring authentic
            experiences that respect both culture and environment while creating
            memories that last a lifetime.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="bg-green-50 rounded-xl p-3 sm:p-4 text-center transform hover:scale-105 transition-transform duration-300 shadow-md border border-green-100">
              <h3 className="text-2xl sm:text-3xl font-bold text-green-700">
                20+
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-medium">
                Global Offices
              </p>
            </div>

            <div className="bg-orange-50 rounded-xl p-3 sm:p-4 text-center transform hover:scale-105 transition-transform duration-300 shadow-md border border-orange-100">
              <h3 className="text-2xl sm:text-3xl font-bold text-orange-600">
                15K+
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-medium">
                Epic Destinations
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-3 sm:p-4 text-center transform hover:scale-105 transition-transform duration-300 shadow-md border border-blue-100">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-600">
                50K+
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-medium">
                Happy Explorers
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-gray-700 mb-5 sm:mb-6 leading-relaxed">
            Ready to showcase your exceptional tours, activities, or unique
            attractions to our community of passionate travelers? Join our
            network of trusted partners today!
          </p>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <button className="relative overflow-hidden px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-green-600 text-white font-medium group shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base">
              <span className="relative z-10">Discover Our Journeys</span>
              <div className="absolute inset-0 w-0 bg-green-700 group-hover:w-full transition-all duration-300 ease-in-out"></div>
            </button>
            <button className="px-6 sm:px-8 py-2 sm:py-3 rounded-full border-2 border-green-600 text-green-600 font-medium hover:bg-green-50 transition-colors duration-300 text-sm sm:text-base">
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* Video Modal - Responsive sizing and padding */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-2 sm:p-4">
          <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-3xl">
            <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10">
              <button
                onClick={closeVideoModal}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg text-gray-800 hover:text-red-600"
              >
                <X size={20} />
              </button>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/mkdGSlmLO6U?si=BY-xPOUyztIQOFY3&autoplay=1"
                title="Adventure Travel Experiences"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full aspect-video"
              ></iframe>
            </div>
            <div className="p-4 sm:p-6 bg-gray-50 rounded-b-lg">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">
                Experience the Adventure
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                Join our community of passionate travelers and discover
                breathtaking destinations with our expert guides.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

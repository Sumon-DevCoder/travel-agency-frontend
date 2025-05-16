"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Separated data fetching function
export async function getTourCategories() {
  return [
    {
      id: "luxury",
      title: "Luxury Tour",
      description:
        "Experience the ultimate in comfort and elegance with our premium luxury tours.",
      image:
        "https://demo.qzency.com/html/tripfy/preview/assets/image/card-img/lusuary-tour.png",
      link: "/tours/luxury",
    },
    {
      id: "wildlife",
      title: "Wildlife Tour",
      description:
        "Book your wildlife adventure today and immerse yourself in the wonders of nature like never before!",
      image:
        "https://demo.qzency.com/html/tripfy/preview/assets/image/card-img/wildlife-tour.png",
      link: "/tours/wildlife",
    },
    {
      id: "beach",
      title: "Beach Tour",
      description:
        "Relax and unwind on pristine beaches with crystal clear waters.",
      image:
        "https://demo.qzency.com/html/tripfy/preview/assets/image/card-img/beach-tour.png",
      link: "/tours/beach",
    },
    {
      id: "adventure",
      title: "Adventure Tour",
      description:
        "Challenge yourself with thrilling adventures in breathtaking landscapes.",
      image:
        "https://demo.qzency.com/html/tripfy/preview/assets/image/card-img/adventure-tour.png",
      link: "/tours/adventure",
    },
    {
      id: "cultural",
      title: "Cultural Tour",
      description:
        "Immerse yourself in rich traditions and historical experiences.",
      image:
        "https://demo.qzency.com/html/tripfy/preview/assets/image/card-img/lusuary-tour.png",
      link: "/tours/cultural",
    },
  ];
}

const TourCategoryCard = ({ category }) => {
  return (
    <motion.div className="relative h-80 rounded-lg overflow-hidden group shadow-md">
      {/* Background Image */}
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
        <Image
          src={category.image}
          alt={category.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Gradient Overlay - Darkens on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-1000"></div>

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        {/* Title - always visible */}
        <h3 className="text-2xl font-bold mb-1 transform transition duration-300 group-hover:translate-y-0">
          {category.title}
        </h3>

        {/* Description - completely hidden until hover */}
        <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100 group-hover:mb-4">
          <p className="text-sm text-gray-100">{category.description}</p>
        </div>

        {/* Button - completely hidden until hover */}
        <div className="opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <Link href={category.link}>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex items-center">
              See the Deals
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

/**
 * Navigation Arrow Button Component
 */
const NavigationButton = ({ direction, onClick }) => {
  const isLeft = direction === "left";

  return (
    <button
      className={`absolute ${
        isLeft ? "left-2" : "right-2"
      } top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-lg z-10`}
      onClick={onClick}
      aria-label={isLeft ? "Previous slide" : "Next slide"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={isLeft ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
        />
      </svg>
    </button>
  );
};

/**
 * Carousel Indicators Component
 */
const CarouselIndicators = ({ count, currentIndex, onClick }) => {
  return (
    <div className="flex  justify-center mt-6 gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onClick(i)}
          className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
            i === currentIndex ? "w-8 bg-green-500" : "w-2 bg-gray-300"
          }`}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );
};

const TourCategoriesCarouselClient = ({ categories }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [visibleSlides, setVisibleSlides] = useState(4);
  const timeoutRef = useRef(null);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 640) {
          setVisibleSlides(1);
        } else if (window.innerWidth < 768) {
          setVisibleSlides(2);
        } else if (window.innerWidth < 1024) {
          setVisibleSlides(3);
        } else {
          setVisibleSlides(4);
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set up autoplay
  useEffect(() => {
    if (autoplay) {
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === categories.length - visibleSlides ? 0 : prevIndex + 1
        );
      }, 5000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, autoplay, categories.length, visibleSlides]);

  // Navigation handlers
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === categories.length - visibleSlides ? 0 : prevIndex + 1
    );
    resetAutoplayTimer();
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - visibleSlides : prevIndex - 1
    );
    resetAutoplayTimer();
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    resetAutoplayTimer();
  };

  const resetAutoplayTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  return (
    <section className="relative py-12 container mx-auto sm:px-6 md:px-0">
      {/* Header Section */}
      <div className="grid mb-8 px-2">
        <div>
          <div className="inline-block border border-green-500 rounded-full px-6 py-1 text-green-500 text-sm font-medium">
            Tour Categories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
            Featured Tour Categories
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Discover breathtaking locations and unforgettable experiences with
            our hand-picked featured destinations.
          </p>
        </div>
        <Link href="/tours">
          <span className="hidden md:flex items-center text-gray-800 hover:text-green-500 transition-colors mt-4 md:mt-0 font-medium">
            View All Categories
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </Link>
      </div>

      {/* Carousel Container */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <motion.div
          className="flex transition-transform duration-500 ease-out gap-5"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
          }}
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className="w-full flex-shrink-0"
              style={{ width: `${100 / visibleSlides}%` }}
            >
              <TourCategoryCard category={category} />
            </div>
          ))}
        </motion.div>

        {/* Navigation Buttons */}
        <NavigationButton direction="left" onClick={prevSlide} />
        <NavigationButton direction="right" onClick={nextSlide} />
      </div>

      {/* Carousel Indicators */}
      <CarouselIndicators
        count={categories.length - visibleSlides + 1}
        currentIndex={currentIndex}
        onClick={goToSlide}
      />
    </section>
  );
};

/**
 * Tour Categories Carousel - Server Component Wrapper
 */
export default async function TourCategoriesCarousel() {
  const categories = await getTourCategories();

  return (
    <>
      {/* Pre-render the title and description for SEO */}
      <div className="sr-only">
        <h2>Featured Tour Categories</h2>
        <p>
          Discover breathtaking locations and unforgettable experiences with our
          hand-picked featured destinations.
        </p>
        {categories.map((category) => (
          <div key={category.id}>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </div>
        ))}
      </div>

      {/* Client component with interactivity */}
      <TourCategoriesCarouselClient categories={categories} />
    </>
  );
}

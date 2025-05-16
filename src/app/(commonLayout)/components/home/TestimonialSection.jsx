"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Shawn Mandez",
    role: "Tourist",
    image:
      "https://demo.qzency.com/html/tripfy/preview/assets/image/team-img/testimonail-man-3.png",
    quote:
      "Our trip with this travel agency was unforgettable! The process was seamless, with every detail perfectly organized. The accommodations were amazing, and we had an incredible time. Can't wait for our next adventure!",
    rating: 5,
  },
  {
    id: 2,
    name: "Emma Wilson",
    role: "Adventure Traveler",
    image:
      "https://demo.qzency.com/html/tripfy/preview/assets/image/team-img/testimonail-man.png",
    quote:
      "The personalized itinerary exceeded all expectations. From hidden gems to popular destinations, everything was carefully planned. I've never had such a stress-free travel experience!",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Family Vacationer",
    image:
      "https://demo.qzency.com/html/tripfy/preview/assets/image/team-img/testimonail-man-3.png",
    quote:
      "Traveling with young children can be challenging, but this agency made it so easy. Their attention to family-friendly accommodations and activities made our vacation truly special.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  // Auto slide timer in milliseconds (5 seconds)
  const autoSlideInterval = 5000;

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // Setup auto-sliding
  useEffect(() => {
    startAutoSlide();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Handle pausing/resuming when isPaused changes
  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    } else {
      startAutoSlide();
    }
  }, [isPaused]);

  const startAutoSlide = () => {
    // Clear any existing interval first
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Set new interval
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);
  };

  // Responsive quotation marks positioning
  const [quotesSize, setQuotesSize] = useState({ left: "6rem", right: "6rem" });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setQuotesSize({ left: "3rem", right: "3rem" });
      } else {
        setQuotesSize({ left: "6rem", right: "6rem" });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    }),
  };

  // Render stars based on rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`w-6 h-6 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  // Slide indicator component
  const SlideIndicators = () => {
    return (
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-green-600 w-6" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div
      className="w-full bg-[#fdf6f1] py-12 px-4 md:px-8 lg:px-16 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Background design elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full opacity-10">
          {/* Background circles/patterns could be added here */}
        </div>
      </div>

      {/* Section Header */}
      <div className="text-center mb-12 relative z-10">
        <div className="inline-block relative">
          <span className="text-green-600 text-lg md:text-xl italic border border-green-600 rounded-full px-6 py-1">
            Testimonials
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-6 text-[#2C2C2C]">
          What Our Happy Customers Say
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Our customers love the seamless travel experiences we provide. From
          expert advice to personalized itineraries.
        </p>
      </div>

      {/* Testimonial Slider */}
      <div
        className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left Image */}
        <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-3xl">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://demo.qzency.com/html/tripfy/preview/assets/image/card-img/tesimonial-girl-image.png')`,
              clipPath: "polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)",
            }}
          ></div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center relative">
          {/* Quote marks */}
          <div
            className="absolute top-0 left-0 text-6xl text-gray-200 opacity-70"
            style={{ left: quotesSize.left }}
          >
            &#8220;
          </div>
          <div
            className="absolute bottom-0 right-0 text-6xl text-gray-200 opacity-70"
            style={{ right: quotesSize.right }}
          >
            &#8221;
          </div>

          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="flex flex-col h-full justify-center px-8 py-6"
            >
              {/* Rating stars */}
              <div className="flex mb-4">
                {renderStars(testimonials[currentIndex].rating)}
              </div>

              {/* Testimonial text */}
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                {testimonials[currentIndex].quote}
              </p>

              {/* Person info */}
              <div className="flex items-center mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-green-600">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons and Indicators */}
          <div className="flex flex-col mt-8">
            <div className="flex justify-between">
              <button
                onClick={() => {
                  prevSlide();
                  // Reset auto-slide timer when manually changing slides
                  if (!isPaused) {
                    startAutoSlide();
                  }
                }}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() => {
                  nextSlide();
                  // Reset auto-slide timer when manually changing slides
                  if (!isPaused) {
                    startAutoSlide();
                  }
                }}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Next testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
            </div>

            {/* Slide indicators */}
            <SlideIndicators />
          </div>
        </div>
      </div>

      {/* Auto-slide status indicator (optional) */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setIsPaused(!isPaused)}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm transition-colors ${
            isPaused
              ? "bg-gray-100 text-gray-600 hover:bg-gray-200"
              : "bg-green-50 text-green-600 hover:bg-green-100"
          }`}
        >
          {isPaused ? (
            <>
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Resume</span>
            </>
          ) : (
            <>
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Pause</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSection;

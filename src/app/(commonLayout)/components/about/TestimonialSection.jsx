"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Alex Murphy",
      position: "Photographer",
      image:
        "https://demo.qzency.com/html/tripfy/preview/assets/image/team-img/testimonial-image-three-1.png",
      testimonial:
        "Thanks to this travel agency, our vacation was stress-free and unforgettable. The booking process was seamless, and the hotel recommendations were perfect. We'll definitely be booking our next trip with them!",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Marketing Executive",
      image:
        "data:image/jpeg;base64,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",
      testimonial:
        "Tourpeak exceeded all our expectations! Their attention to detail and personalized service made our family trip to Europe truly special. The itinerary was perfectly balanced with both popular attractions and hidden gems.",
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      position: "Software Engineer",
      image:
        "data:image/jpeg;base64,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",
      testimonial:
        "As a frequent traveler, I've worked with many agencies, but Tourpeak stands out for their exceptional customer service. They were responsive to all my questions and flexible when I needed to make last-minute changes.",
    },
    {
      id: 4,
      name: "Emily Chen",
      position: "Teacher",
      image:
        "data:image/jpeg;base64,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",
      testimonial:
        "Our honeymoon planned by Tourpeak was absolutely magical! Every detail was taken care of, allowing us to simply enjoy our time together. The surprise upgrades they arranged were the perfect touch.",
    },
  ];

  // Stats that appear at the bottom of the testimonials section
  const stats = [
    { value: "250+", label: "Top Destinations" },
    { value: "2.5M+", label: "Happy Travelers" },
    { value: "98%", label: "Positive Reviews" },
    { value: "12k", label: "Complete Tours" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    if (mounted) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [mounted, currentSlide]);

  // Indicators for the current slide
  const renderIndicators = () => {
    return (
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-green-500 w-6" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="w-full bg-gradient-to-r from-gray-50 to-gray-100 py-12 md:py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-16">
          <h3 className="text-green-500 text-xl md:text-2xl font-medium italic mb-2 md:mb-3 underline decoration-4 decoration-green-500 underline-offset-8 inline-block">
            Testimonials
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
            Our Tourists View On Tourpeak
          </h2>
        </div>

        {/* Testimonial carousel */}
        <div className="relative px-4 md:px-12">
          {/* Navigation buttons - hidden on small screens */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-100 z-10 hidden sm:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-100 z-10 hidden sm:flex"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Testimonial content */}
          <div className="relative min-h-[250px] sm:min-h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute w-full transition-all duration-500 ${
                  index === currentSlide
                    ? "opacity-100 z-10 translate-x-0"
                    : index < currentSlide
                    ? "opacity-0 z-0 -translate-x-full"
                    : "opacity-0 z-0 translate-x-full"
                }`}
              >
                <div className="flex flex-col items-center">
                  {/* Profile picture */}
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-green-500 mb-4 md:mb-6 relative z-10">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Testimonial text */}
                  <div className="bg-white rounded-lg shadow-md p-6 md:p-8 text-center max-w-3xl">
                    <p className="text-gray-700 text-base md:text-lg mb-4 md:mb-6">
                      {testimonial.testimonial}
                    </p>

                    <h3 className="text-lg md:text-xl font-bold text-green-600">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm md:text-base text-gray-500">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile swipe indicators */}
          {renderIndicators()}
        </div>

        {/* Stats section */}
        <div className="mt-48 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 p-3 bg-white bg-opacity-50 rounded-lg"
            >
              <div className="p-2 bg-white rounded-full shadow-md">
                {index === 0 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 md:h-6 md:w-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
                {index === 1 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 md:h-6 md:w-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
                {index === 2 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 md:h-6 md:w-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                )}
                {index === 3 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 md:h-6 md:w-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                    />
                  </svg>
                )}
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xl md:text-2xl font-bold text-gray-900">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

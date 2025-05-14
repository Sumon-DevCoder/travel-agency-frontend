"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Oliver Wolfe",
    location: "United Kingdom",
    date: "15th December, 2018",
    rating: 5,
    image: "/api/placeholder/400/400",
    text: "Memorable holidays planned an amazing trip for us to Italy. The trip had a mix of all activities that we were interested in. The hotels were nice and situated very close to the station. This made travelling in the city very easy. The tours planned were also very good with very nice guides. We would definitely recommend a trip with them.",
    destination: "Italy",
    socials: {
      linkedin: true,
      instagram: false,
      twitter: true,
    },
    highlightColor: "blue",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    location: "United States",
    date: "3rd March, 2019",
    rating: 5,
    image: "/api/placeholder/400/400",
    text: "Our family vacation to Greece exceeded all expectations! The itinerary was perfectly balanced with historical sites, beach time, and authentic local experiences. Every detail was taken care of, from airport transfers to restaurant recommendations. The accommodations were spectacular with amazing views. Highly recommend!",
    destination: "Greece",
    socials: {
      linkedin: true,
      instagram: true,
      twitter: false,
    },
    highlightColor: "purple",
  },
  {
    id: 3,
    name: "Marco Rodriguez",
    location: "Spain",
    date: "22nd June, 2019",
    rating: 4,
    image: "/api/placeholder/400/400",
    text: "Great experience traveling to Japan! The cultural immersion was fantastic, and the guides were knowledgeable. Our tour coordinator was responsive and helpful throughout the planning process. Would book again for our next adventure.",
    destination: "Japan",
    socials: {
      linkedin: false,
      instagram: true,
      twitter: true,
    },
    highlightColor: "red",
  },
  {
    id: 4,
    name: "Priya Patel",
    location: "India",
    date: "10th January, 2020",
    rating: 5,
    image: "/api/placeholder/400/400",
    text: "Our European tour was meticulously planned with attention to every detail. The boutique hotels selected were charming and perfectly located. The private tours gave us insights we would have missed otherwise. Thank you for making our anniversary trip so special!",
    destination: "Europe",
    socials: {
      linkedin: true,
      instagram: true,
      twitter: true,
    },
    highlightColor: "green",
  },
  {
    id: 5,
    name: "David Chen",
    location: "Canada",
    date: "5th September, 2019",
    rating: 5,
    image: "/api/placeholder/400/400",
    text: "The African safari exceeded our wildest dreams! From the moment we landed until departure, every detail was perfectly arranged. The guides were exceptional, the accommodations luxurious yet authentic, and the wildlife viewing opportunities were incredible. A truly once-in-a-lifetime experience.",
    destination: "Africa",
    socials: {
      linkedin: true,
      instagram: false,
      twitter: false,
    },
    highlightColor: "amber",
  },
  {
    id: 6,
    name: "Emma Williams",
    location: "Australia",
    date: "18th April, 2020",
    rating: 5,
    image: "/api/placeholder/400/400",
    text: "Our South American adventure was perfectly tailored to our interests. The mix of cultural experiences, natural wonders, and culinary delights was ideal. The local guides provided insights we would never have discovered on our own. Already planning our next trip!",
    destination: "South America",
    socials: {
      linkedin: false,
      instagram: true,
      twitter: false,
    },
    highlightColor: "pink",
  },
  {
    id: 7,
    name: "Jamal Khan",
    location: "United Arab Emirates",
    date: "7th February, 2019",
    rating: 4,
    image: "/api/placeholder/400/400",
    text: "The Scandinavian tour was a perfect winter getaway. The northern lights experience was magical, and the winter activities were well-organized. All accommodations were cozy and comfortable. The attention to detail made this trip exceptional.",
    destination: "Scandinavia",
    socials: {
      linkedin: true,
      instagram: true,
      twitter: true,
    },
    highlightColor: "indigo",
  },
  {
    id: 8,
    name: "Sophie Dubois",
    location: "France",
    date: "12th August, 2019",
    rating: 5,
    image: "/api/placeholder/400/400",
    text: "Our Southeast Asia journey was brilliantly organized. The perfect balance of temples, beaches, and city experiences. The local guides were incredibly knowledgeable and personable. Every transfer was smooth, and the suggested activities matched our interests perfectly.",
    destination: "Southeast Asia",
    socials: {
      linkedin: true,
      instagram: false,
      twitter: true,
    },
    highlightColor: "teal",
  },
];

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0]);
  const [autoRotate, setAutoRotate] = useState(true);
  const [orbitRotation, setOrbitRotation] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      const currentIndex = testimonials.findIndex(
        (t) => t.id === activeTestimonial.id
      );
      const nextIndex = (currentIndex + 1) % testimonials.length;
      setActiveTestimonial(testimonials[nextIndex]);
      setOrbitRotation((prev) => prev + 360 / testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeTestimonial, autoRotate]);

  // Function to calculate position for orbit images
  const getOrbitStyles = (index, total) => {
    const angle = (index / total) * 2 * Math.PI;
    const radius = 230; // Adjust radius as needed
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    return {
      transform: `translate(${x}px, ${y}px)`,
    };
  };

  // Handle testimonial selection
  const handleTestimonialSelect = (testimonial) => {
    setAutoRotate(false); // Stop auto-rotation when user clicks
    setActiveTestimonial(testimonial);
  };

  // Get background gradient based on highlight color
  const getGradientBg = (color) => {
    const colorMap = {
      blue: "from-blue-100 to-blue-50",
      purple: "from-purple-100 to-purple-50",
      red: "from-red-100 to-red-50",
      green: "from-green-100 to-green-50",
      amber: "from-amber-100 to-amber-50",
      pink: "from-pink-100 to-pink-50",
      indigo: "from-indigo-100 to-indigo-50",
      teal: "from-teal-100 to-teal-50",
    };
    return colorMap[color] || "from-blue-100 to-blue-50";
  };

  // Get highlight color class
  const getHighlightColor = (color) => {
    const colorMap = {
      blue: "bg-blue-500",
      purple: "bg-purple-500",
      red: "bg-red-500",
      green: "bg-green-500",
      amber: "bg-amber-500",
      pink: "bg-pink-500",
      indigo: "bg-indigo-500",
      teal: "bg-teal-500",
    };
    return colorMap[color] || "bg-blue-500";
  };

  // Get border color class
  const getBorderColor = (color) => {
    const colorMap = {
      blue: "border-blue-500",
      purple: "border-purple-500",
      red: "border-red-500",
      green: "border-green-500",
      amber: "border-amber-500",
      pink: "border-pink-500",
      indigo: "border-indigo-500",
      teal: "border-teal-500",
    };
    return colorMap[color] || "border-blue-500";
  };

  // Generate star rating
  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${
            index < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ));
  };

  return (
    <div
      className={`bg-gradient-to-b ${getGradientBg(
        activeTestimonial.highlightColor
      )} py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-500`}
    >
      <div className="text-center mb-12">
        <h2
          className={`text-base font-semibold tracking-wide uppercase ${getHighlightColor(
            activeTestimonial.highlightColor
          ).replace("bg-", "text-")}`}
        >
          TESTIMONIALS
        </h2>
        <h1 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          What Our Customers Say
        </h1>
        <p className="max-w-xl mt-5 mx-auto text-xl text-gray-600">
          We have many happy customers that have booked holidays with us. Some
          impressions from our customers! Please read some of the lovely things
          our customers say about us.
        </p>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Controls and auto-rotate switch */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-md ${
              autoRotate
                ? getHighlightColor(activeTestimonial.highlightColor) +
                  " text-white"
                : "bg-white text-gray-700"
            } transition-colors duration-300`}
          >
            <svg
              className={`w-5 h-5 ${autoRotate ? "animate-spin" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            {autoRotate ? "Auto-Rotate On" : "Auto-Rotate Off"}
          </button>
        </div>

        {/* Testimonial display area */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative h-96 w-96">
            {/* Orbit images */}
            <div className="absolute inset-0 rounded-full border border-dashed border-gray-300 opacity-30"></div>
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-in-out"
                style={getOrbitStyles(index, testimonials.length)}
              >
                <button
                  onClick={() => handleTestimonialSelect(testimonial)}
                  className={`w-16 h-16 rounded-full overflow-hidden border-4 transition-all duration-500 shadow-md hover:shadow-xl ${
                    activeTestimonial.id === testimonial.id
                      ? `${getBorderColor(
                          testimonial.highlightColor
                        )} scale-125 z-20`
                      : "border-white hover:border-gray-300"
                  }`}
                  onMouseEnter={() => {
                    if (activeTestimonial.id !== testimonial.id) {
                      // Optional: add hover effect
                    }
                  }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </button>
                {/* Name tooltip on hover */}
                {activeTestimonial.id !== testimonial.id && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-white px-2 py-1 rounded text-xs font-medium shadow-sm">
                    {testimonial.name}
                  </div>
                )}
              </div>
            ))}

            {/* Center testimonial */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div
                className={`w-40 h-40 rounded-full overflow-hidden border-4 ${getBorderColor(
                  activeTestimonial.highlightColor
                )} shadow-xl bg-white transition-all duration-500`}
              >
                <img
                  src={activeTestimonial.image}
                  alt={activeTestimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Social icons */}
              <div className="absolute -right-2 top-0 flex flex-col gap-2">
                {activeTestimonial.socials.linkedin && (
                  <div
                    className={`${getHighlightColor(
                      activeTestimonial.highlightColor
                    )} rounded-full p-2 shadow-md transition-transform duration-300 hover:scale-110 cursor-pointer`}
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                )}
                {activeTestimonial.socials.instagram && (
                  <div
                    className={`${getHighlightColor(
                      activeTestimonial.highlightColor
                    )} rounded-full p-2 shadow-md transition-transform duration-300 hover:scale-110 cursor-pointer`}
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                )}
                {activeTestimonial.socials.twitter && (
                  <div
                    className={`${getHighlightColor(
                      activeTestimonial.highlightColor
                    )} rounded-full p-2 shadow-md transition-transform duration-300 hover:scale-110 cursor-pointer`}
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Destination tag */}
              <div className="absolute -left-2 bottom-5">
                <div
                  className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold text-white ${getHighlightColor(
                    activeTestimonial.highlightColor
                  )} shadow-md`}
                >
                  <svg
                    className="w-3 h-3"
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
                  {activeTestimonial.destination}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial content */}
          <div className="mt-32 text-center max-w-2xl mx-auto">
            <div className="relative">
              <svg
                className="absolute -top-10 -left-4 w-16 h-16 text-gray-200 transform -rotate-12"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition-transform duration-500 hover:scale-105">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {activeTestimonial.name}
                </h3>
                <p className="text-gray-600 mb-2">
                  {activeTestimonial.location}, {activeTestimonial.date}
                </p>

                <div className="flex justify-center mt-2 mb-4">
                  {renderStars(activeTestimonial.rating)}
                </div>

                <p className="text-gray-700 italic text-lg leading-relaxed">
                  "{activeTestimonial.text}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-between absolute top-1/2 w-full px-4 -mx-12 transform -translate-y-1/2 pointer-events-none">
          <button
            className={`p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all pointer-events-auto ${getHighlightColor(
              activeTestimonial.highlightColor
            ).replace("bg-", "text-")}`}
            onClick={() => {
              const currentIndex = testimonials.findIndex(
                (t) => t.id === activeTestimonial.id
              );
              const prevIndex =
                (currentIndex - 1 + testimonials.length) % testimonials.length;
              setActiveTestimonial(testimonials[prevIndex]);
              setAutoRotate(false);
            }}
          >
            <svg
              className="w-6 h-6"
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
            className={`p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all pointer-events-auto ${getHighlightColor(
              activeTestimonial.highlightColor
            ).replace("bg-", "text-")}`}
            onClick={() => {
              const currentIndex = testimonials.findIndex(
                (t) => t.id === activeTestimonial.id
              );
              const nextIndex = (currentIndex + 1) % testimonials.length;
              setActiveTestimonial(testimonials[nextIndex]);
              setAutoRotate(false);
            }}
          >
            <svg
              className="w-6 h-6"
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
      </div>

      {/* Bottom pagination dots */}
      <div className="flex justify-center mt-12 gap-2">
        {testimonials.map((testimonial) => (
          <button
            key={testimonial.id}
            onClick={() => {
              setActiveTestimonial(testimonial);
              setAutoRotate(false);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeTestimonial.id === testimonial.id
                ? getHighlightColor(activeTestimonial.highlightColor) +
                  " scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`View testimonial from ${testimonial.name}`}
          />
        ))}
      </div>
    </div>
  );
}

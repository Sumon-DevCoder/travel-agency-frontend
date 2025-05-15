"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "24/7 Support",
      description:
        "Tailor-made itineraries to suit your preferences and needs.",
      bgColor: "bg-blue-50",
      iconColor: "bg-blue-500",
      position: "left-top",
      icon: "support",
    },
    {
      id: 2,
      title: "Tailored Itineraries",
      description:
        "Tailor-made itineraries to suit your preferences and needs.",
      bgColor: "bg-green-50",
      iconColor: "bg-green-500",
      position: "right-top",
      icon: "map",
    },
    {
      id: 3,
      title: "Trusted Service",
      description:
        "Tailor-made itineraries to suit your preferences and needs.",
      bgColor: "bg-green-100",
      iconColor: "bg-green-500",
      position: "left-middle",
      icon: "shield",
    },
    {
      id: 4,
      title: "Destination Experts",
      description:
        "Tailor-made itineraries to suit your preferences and needs.",
      bgColor: "bg-orange-50",
      iconColor: "bg-orange-500",
      position: "right-middle",
      icon: "globe",
    },
    {
      id: 5,
      title: "Easy Booking",
      description:
        "Tailor-made itineraries to suit your preferences and needs.",
      bgColor: "bg-orange-100",
      iconColor: "bg-orange-500",
      position: "left-bottom",
      icon: "calendar",
    },
    {
      id: 6,
      title: "Exclusive Offers",
      description:
        "Tailor-made itineraries to suit your preferences and needs.",
      bgColor: "bg-pink-100",
      iconColor: "bg-pink-500",
      position: "right-bottom",
      icon: "gift",
    },
  ];

  // Animation state for balloons
  const [balloon1Position, setBalloon1Position] = useState(0);
  const [balloon2Position, setBalloon2Position] = useState(0);
  const [balloon3Position, setBalloon3Position] = useState(0);

  // Feature card animation states
  const [visibleFeatures, setVisibleFeatures] = useState([]);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    // Show header with initial animation
    setIsHeaderVisible(true);

    // Animate balloons with smoother movement
    const balloon1Interval = setInterval(() => {
      setBalloon1Position((prev) => {
        const newPos = prev + 0.5;
        return newPos >= 40 ? 0 : newPos;
      });
    }, 80);

    const balloon2Interval = setInterval(() => {
      setBalloon2Position((prev) => {
        const newPos = prev + 0.4;
        return newPos >= 30 ? 0 : newPos;
      });
    }, 90);

    const balloon3Interval = setInterval(() => {
      setBalloon3Position((prev) => {
        const newPos = prev + 0.3;
        return newPos >= 35 ? 0 : newPos;
      });
    }, 100);

    // Staggered appearance of feature cards
    const featureTimeout = setTimeout(() => {
      const timer = setInterval(() => {
        setVisibleFeatures((prev) => {
          if (prev.length >= features.length) {
            clearInterval(timer);
            return prev;
          }
          return [...prev, prev.length + 1];
        });
      }, 150);

      return () => clearInterval(timer);
    }, 400);

    return () => {
      clearInterval(balloon1Interval);
      clearInterval(balloon2Interval);
      clearInterval(balloon3Interval);
      clearTimeout(featureTimeout);
    };
  }, []);

  const getPositionClasses = (position) => {
    switch (position) {
      case "left-top":
        return "col-span-1 md:col-span-2 md:col-start-1 md:col-end-3 md:row-start-1";
      case "right-top":
        return "col-span-1 md:col-span-2 md:col-start-5 md:col-end-7 md:row-start-1";
      case "left-middle":
        return "col-span-1 md:col-span-2 md:col-start-1 md:col-end-3 md:row-start-2";
      case "right-middle":
        return "col-span-1 md:col-span-2 md:col-start-5 md:col-end-7 md:row-start-2";
      case "left-bottom":
        return "col-span-1 md:col-span-2 md:col-start-1 md:col-end-3 md:row-start-3";
      case "right-bottom":
        return "col-span-1 md:col-span-2 md:col-start-5 md:col-end-7 md:row-start-3";
      default:
        return "";
    }
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case "support":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        );
      case "map":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
            />
          </svg>
        );
      case "shield":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        );
      case "globe":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case "calendar":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        );
      case "gift":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-gray-50 py-12 md:py-16">
      {/* Background with curved lines */}
      <div className="absolute inset-0 opacity-15">
        <div className="h-full w-full bg-[url('/images/curve-lines.svg')] bg-no-repeat bg-cover"></div>
      </div>

      {/* Animated Balloons */}
      <div
        className="absolute top-10 left-10 z-10"
        style={{ transform: `translateY(${balloon1Position}px)` }}
      >
        <div className="relative h-32 w-32 md:h-48 md:w-48">
          <Image
            src="/images/about/b1.png"
            alt="Hot Air Balloon"
            width={200}
            height={200}
            className="drop-shadow-lg"
          />
        </div>
      </div>

      <div
        className="absolute right-10 bottom-32 z-10"
        style={{ transform: `translateY(-${balloon2Position}px)` }}
      >
        <div className="relative h-24 w-24 md:h-32 md:w-32">
          <Image
            src="/images/about/b2.png"
            alt="Hot Air Balloon"
            width={150}
            height={150}
            className="drop-shadow-lg"
          />
        </div>
      </div>

      <div
        className="absolute right-32 bottom-48 z-10"
        style={{ transform: `translateY(-${balloon3Position}px)` }}
      >
        <div className="relative h-16 w-16 md:h-24 md:w-24">
          <Image
            src="/images/about/b2.png"
            alt="Hot Air Balloon"
            width={100}
            height={100}
            className="drop-shadow-lg"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-20">
        {/* Header Section */}
        <div className="mb-10 md:mb-16 text-center">
          <div className="inline-block mb-4">
            <div className="bg-green-500 text-white px-6 py-2 rounded-lg font-bold text-lg">
              Why Choose Us
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Trusted Travel Partner
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Leading The Way In Small Group Adventures For Over 20 Years.
            Discover How We're Redefining The Future Of Travel.
          </p>
        </div>

        {/* Feature Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {/* Central traveler image */}
          <div className="hidden md:block md:col-start-3 md:col-end-5 md:row-span-3 md:self-center md:justify-self-center">
            <div className="relative h-96 w-64">
              <Image
                src="/images/about/t.png"
                alt="Traveler with Suitcase"
                width={300}
                height={500}
                className="object-contain drop-shadow-xl"
              />
            </div>
          </div>

          {/* Mobile traveler image */}
          <div className="flex justify-center md:hidden mb-8">
            <div className="relative h-80 w-56">
              <Image
                src="/images/about/t.png"
                alt="Traveler with Suitcase"
                width={250}
                height={400}
                className="object-contain drop-shadow-xl"
              />
            </div>
          </div>

          {/* Feature cards */}
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`
                ${feature.bgColor} 
                ${getPositionClasses(feature.position)} 
                rounded-xl p-4 flex items-start gap-4
                shadow-md border border-white/50
                transform transition-all duration-500
                ${
                  visibleFeatures.includes(feature.id)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }
              `}
              style={{
                transitionDelay: `${(feature.id - 1) * 100}ms`,
              }}
            >
              <div
                className={`${feature.iconColor} rounded-full p-3 flex-shrink-0`}
              >
                {getIcon(feature.icon)}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

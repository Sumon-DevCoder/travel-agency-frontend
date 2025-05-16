"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function WhyChooseTripfy() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Background animation elements
  const backgroundElements = [
    {
      id: 1,
      size: "w-16 h-16",
      color: "bg-green-100",
      initialX: "-5%",
      initialY: "20%",
      duration: 20,
    },
    {
      id: 2,
      size: "w-24 h-24",
      color: "bg-blue-50",
      initialX: "85%",
      initialY: "15%",
      duration: 25,
    },
    {
      id: 3,
      size: "w-12 h-12",
      color: "bg-amber-50",
      initialX: "80%",
      initialY: "75%",
      duration: 18,
    },
    {
      id: 4,
      size: "w-20 h-20",
      color: "bg-purple-50",
      initialX: "10%",
      initialY: "85%",
      duration: 22,
    },
  ];

  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-green-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      title: "Tailored Travel",
      description:
        "We craft personalized itineraries for a unique, unforgettable trip.",
      bgColor: "bg-orange-50",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-blue-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
      title: "Expert Support",
      description:
        "We craft personalized itineraries for a unique, unforgettable trip.",
      bgColor: "bg-blue-50",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-purple-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      ),
      title: "Seamless Planning",
      description:
        "We craft personalized itineraries for a unique, unforgettable trip.",
      bgColor: "bg-purple-50",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-amber-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
        </svg>
      ),
      title: "Best Support 24/7",
      description:
        "We craft personalized itineraries for a unique, unforgettable trip.",
      bgColor: "bg-amber-50",
    },
  ];

  const planeAnimation = {
    hidden: { x: -100, y: 50, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.3,
      },
    },
  };

  const coupleAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
  };

  const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  const cardAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="w-full bg-white py-16 px-4 md:px-8 lg:px-12 overflow-hidden relative">
      {/* Background animation elements */}
      {backgroundElements.map((element) => (
        <motion.div
          key={element.id}
          className={`${element.size} ${element.color} rounded-full opacity-30 absolute -z-10`}
          initial={{ x: element.initialX, y: element.initialY }}
          animate={{
            x: [
              element.initialX,
              `calc(${element.initialX} + 5%)`,
              element.initialX,
            ],
            y: [
              element.initialY,
              `calc(${element.initialY} - 5%)`,
              element.initialY,
            ],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        className="w-32 h-32 bg-orange-50 rounded-full absolute opacity-20 -z-10"
        style={{ top: "40%", left: "30%" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left side with images */}
          <div className="w-full lg:w-1/2 relative flex justify-center min-h-[320px]">
            {/* Decorative floating elements */}
            <motion.div
              className="absolute w-8 h-8 bg-orange-100 rounded-full opacity-70"
              style={{ left: "15%", top: "25%" }}
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute w-6 h-6 bg-blue-100 rounded-full opacity-70"
              style={{ right: "20%", bottom: "30%" }}
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute top-0 left-0 md:left-10 w-32 h-32 md:w-40 md:h-40"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={planeAnimation}
            ></motion.div>
            <motion.div
              className="relative z-10"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={coupleAnimation}
            >
              <div className="rounded-lg overflow-hidden bg-orange-50 p-4 shadow-lg relative">
                {/* Small animated elements around the couple image */}
                <motion.div
                  className="absolute w-5 h-5 bg-green-200 rounded-full top-6 right-8 opacity-70"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 0.9, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                />
                <motion.div
                  className="absolute w-4 h-4 bg-amber-200 rounded-full bottom-10 left-6 opacity-70"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 0.9, 0.7],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "mirror",
                    delay: 1,
                  }}
                />

                <img
                  src="https://demo.qzency.com/html/tripfy/preview/assets/image/card-img/why-choose-image.png"
                  alt="Couple traveling"
                  className="w-full h-auto max-w-md mx-auto"
                />
              </div>
            </motion.div>
          </div>

          {/* Right side with text content */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="flex flex-col">
              <motion.div
                className="mb-6"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={textAnimation}
              >
                <div className="inline-block px-4 py-1 rounded-full bg-green-50 border border-green-100">
                  <span className="text-green-500 font-medium text-sm">
                    Why Choose Us
                  </span>
                </div>
              </motion.div>

              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={textAnimation}
              >
                Why Travel With Tripfy?
              </motion.h2>

              <motion.p
                className="text-gray-600 mb-8"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={textAnimation}
              >
                With over 10 years of experience, we've redefined the adventure
                travel experience. How? By offering unforgettable journeys that
                change the way you explore the world. See how we're crafting the
                future of travel.
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className={`p-6 rounded-lg ${feature.bgColor} flex flex-col items-center md:items-start text-center md:text-left relative overflow-hidden`}
                    custom={index}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={cardAnimation}
                    whileHover={{
                      scale: 1.03,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {/* Animated background elements in feature cards */}
                    <motion.div
                      className="absolute w-12 h-12 rounded-full bg-white opacity-20 -z-10"
                      style={{ top: "-10%", right: "-5%" }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.1, 0.2, 0.1],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: index * 0.3,
                      }}
                    />
                    <motion.div
                      className="absolute w-8 h-8 rounded-full bg-white opacity-20 -z-10"
                      style={{ bottom: "-5%", left: "10%" }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.2, 0.1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: index * 0.2 + 1,
                      }}
                    />

                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8 flex items-center hidden md:block"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={textAnimation}
              >
                <div className="mr-4">
                  <span className="font-bold text-xl">Amazing!</span>
                </div>
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-3 h-3 rounded-full bg-green-500 mx-0.5"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                  <div className="ml-3 text-sm">
                    <span className="font-medium">
                      4.8 Rating out of 5.0 based on{" "}
                    </span>
                    <a href="#" className="text-blue-600 underline">
                      25000 Reviews
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

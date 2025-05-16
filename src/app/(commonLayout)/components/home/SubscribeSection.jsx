"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const TravelSubscribeComponent = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Add the necessary styles for aspect ratio handling
    const style = document.createElement("style");
    style.innerHTML = `
      .aspect-w-16 {
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
        overflow: hidden;
        max-width: 100%;
      }
      .aspect-w-16 iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
      }
    `;
    document.head.appendChild(style);

    // Close modal when pressing ESC key
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        const modal = document.getElementById("youtubeModal");
        if (modal && !modal.classList.contains("hidden")) {
          modal.classList.add("hidden");
          resetVideo();
        }
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const openVideoModal = () => {
    const modal = document.getElementById("youtubeModal");
    if (modal) {
      modal.classList.remove("hidden");
    }
  };

  const closeVideoModal = () => {
    const modal = document.getElementById("youtubeModal");
    if (modal) {
      modal.classList.add("hidden");
      resetVideo();
    }
  };

  const resetVideo = () => {
    const iframe = document.querySelector("#youtubeVideo iframe");
    if (iframe) {
      // Reset iframe by reloading its source
      const src = iframe.src;
      iframe.src = "";
      setTimeout(() => {
        iframe.src = src;
      }, 100);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");

      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <div className="w-full container mx-auto overflow-hidden rounded-2xl my-10">
      <div className="flex flex-col-reverse md:flex-row">
        {/* Left section with sign-up form */}
        <motion.div
          className="relative w-full md:w-1/2 p-8 md:p-20 bg-blue-50 flex flex-col justify-center "
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Top left palm leaf */}
          <div className="absolute top-0 left-0 w-32 h-32">
            <Image
              src="https://demo.qzency.com/html/tripfy/preview/assets/image/banner-img/newsleteter-img-1.png"
              alt="Palm leaf decoration"
              width={128}
              height={128}
              className="object-contain"
            />
          </div>

          <div className="relative z-10 max-w-md">
            <motion.h1
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Sign Up To Reveal Secret Deals And See Prices Drop!
            </motion.h1>

            <motion.p
              className="text-gray-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Get exclusive access to unbeatable offers as soon as you join!
            </motion.p>

            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <input
                type="email"
                placeholder="Your Email"
                className="flex-grow px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <motion.button
                type="submit"
                className="px-8 py-3 bg-orange-400 text-white font-medium rounded-full hover:bg-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-600 disabled:opacity-70"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </motion.button>
            </motion.form>

            {isSubmitted && (
              <motion.div
                className="mt-4 text-green-600 font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                Thank you for subscribing! Check your email for special offers.
              </motion.div>
            )}
          </div>

          {/* Bottom left palm leaf */}
          <div className="absolute top-0 right-0 w-32 h-32">
            <Image
              src="https://demo.qzency.com/html/tripfy/preview/assets/image/banner-img/newsleteter-img-2.png"
              alt="Palm leaf decoration"
              width={128}
              height={128}
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Right section with beach image */}
        <motion.div
          className="relative w-full md:w-1/2 h-64 md:h-auto"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <motion.div
              className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                document
                  .getElementById("youtubeModal")
                  .classList.remove("hidden");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.div>
          </div>

          {/* YouTube video modal */}
          <div
            id="youtubeModal"
            className="fixed inset-0 bg-black bg-opacity-75 z-50 hidden flex items-center justify-center p-4"
          >
            <div className="relative bg-white rounded-lg overflow-hidden max-w-4xl w-full">
              <button
                className="absolute top-4 right-4 text-gray-800 hover:text-gray-600 z-10 bg-white rounded-full p-1"
                onClick={() => {
                  document
                    .getElementById("youtubeModal")
                    .classList.add("hidden");
                  const iframe = document.querySelector("#youtubeVideo iframe");
                  if (iframe) {
                    const iframeSrc = iframe.src;
                    iframe.src = iframeSrc;
                  }
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div id="youtubeVideo" className="aspect-w-16 aspect-h-9">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/5s8fs_j2xlY?si=XRK4ZzNzl6yihPjI"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Beach image */}
          <div className="absolute inset-0">
            <Image
              src="https://demo.qzency.com/html/tripfy/preview/assets/image/banner-img/newsleteter-img-3.png"
              alt="Woman in white dress on tropical beach boardwalk"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TravelSubscribeComponent;

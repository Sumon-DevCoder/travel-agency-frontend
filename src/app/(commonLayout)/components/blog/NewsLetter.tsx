"use client";

import Image from "next/image";
import type React from "react";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setMessage("Thank you for subscribing to our newsletter!");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="dark:border border-gray-600 bg-green-50 dark:bg-transparent shadow-md rounded-lg p-8 my-12">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 md:mr-8">
          <Image
            src="/placeholder.svg"
            alt="Newsletter subscription"
            className="w-32 h-32 object-contain"
            height={200}
            width={200}
          />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2">
            Sign Up For Exclusive Deals And See Price Drops!
          </h3>
          <p className="text-gray-600 mb-4">
            Be the first to know about new destinations and special promotions.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2"
          >
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
          </form>

          {message && <p className="mt-2 text-green-600">{message}</p>}
        </div>
      </div>
    </div>
  );
}

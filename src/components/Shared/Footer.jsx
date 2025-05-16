"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const Footer = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <footer className="bg-[#1A1A1A] text-white pt-10 pr-10 pl-10 pb-2 ">
      <div>
        <div className="container mx-auto border-b border-t border-gray-700 px-4 py-4 grid grid-cols-1 md:grid-cols-4 gap-x-6">
          <div className="flex items-center mb-4 md:mb-0 group border-r border-gray-700 pr-6">
            <div className="bg-orange-500 p-4 rounded-full mr-4 group-hover:bg-orange-600 transition-all duration-300">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-gray-400 text-sm">Call Us On</h4>
              <p className="font-normal group-hover:text-orange-500 transition-all duration-300">
                +990-737 621 432
              </p>
              <p className="font-normal group-hover:text-orange-500 transition-all duration-300">
                +990-737 621 500
              </p>
            </div>
          </div>

          <div className="flex items-center mb-4 md:mb-0 group border-r border-gray-700 pr-6">
            <div className="bg-green-500 p-4 rounded-full mr-4 group-hover:bg-green-600 transition-all duration-300">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-gray-400 text-sm">Send Mail</h4>
              <p className="font-normal group-hover:text-green-500 transition-all duration-300">
                info@example.com
              </p>
              <p className="font-normal group-hover:text-green-500 transition-all duration-300">
                hello@example.com
              </p>
            </div>
          </div>

          <div className="flex items-center mb-4 md:mb-0 group border-r border-gray-700 pr-6">
            <div className="bg-teal-500 p-4 rounded-full mr-4 group-hover:bg-teal-600 transition-all duration-300">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-gray-400 text-sm">Opening hour</h4>
              <p className="font-normal group-hover:text-teal-500 transition-all duration-300">
                Mon - Fri
              </p>
              <p className="font-normal group-hover:text-teal-500 transition-all duration-300">
                09:00AM - 6:00PM
              </p>
            </div>
          </div>

          <div className="flex items-center group">
            <div className="bg-blue-500 p-4 rounded-full mr-4 group-hover:bg-blue-600 transition-all duration-300">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-gray-400 text-sm">Address</h4>
              <p className="font-normal group-hover:text-blue-500 transition-all duration-300">
                House 177, Avenue 01, Mirpur
              </p>
              <p className="font-normal group-hover:text-blue-500 transition-all duration-300">
                DOHS, Dhaka Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 3h5m0 0v5m0-5l-6 6M8 21H3m0 0v-5m0 5l6-6"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-medium">Tourpeak</h2>
            </div>
            <h3 className="text-sm text-gray-400">Tour * Travel * Adventure</h3>
            <p className="text-gray-400">
              Your all-in-one travel companion, from planning and booking to
              exploring and cherishing every moment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                "About us",
                "Destinations",
                "Tour Package",
                "Tour Guide",
                "Article",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-all duration-300 relative group"
                  >
                    <span className="relative z-10">{item}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destination */}
          <div>
            <h3 className="text-xl semi-medium mb-6">Destination</h3>
            <ul className="space-y-3">
              {[
                "Las Vegas",
                "New York City",
                "Washington DC",
                "Barcelona",
                "Carribean Islands",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-all duration-300 relative group"
                  >
                    <span className="relative z-10">{item}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Location Map */}
          <div className="md:col-span-2">
            <div className="rounded-lg overflow-hidden">
              <div className="w-full h-56 rounded-lg overflow-hidden border-2 border-gray-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.5885655226607!2d90.41448317353958!3d23.83322528559498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c591cda717b5%3A0x426583e057ac1514!2sSUMON%20TOUR%20AND%20TRAVELS!5e0!3m2!1sen!2sbd!4v1747204346789!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SUMON TOUR AND TRAVELS location"
                  className="filter brightness-90 hover:brightness-100 transition-all duration-300"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              ©Copyright 2025 Tourpeak | Design By{" "}
              <a
                href="#"
                className="text-white hover:text-green-500 transition-all duration-300"
              >
                Qzency
              </a>
            </p>
          </div>

          <div className="flex items-center gap-4 justify-center">
            <h3 className="text-gray-400 text-center md:text-right">
              Payment Partnenrs
            </h3>
            <div className="flex space-x-2">
              {["Skrill", "VISA", "PayPal", "Bitcoin", "Apple Pay"].map(
                (payment, index) => (
                  <div
                    key={index}
                    className="h-8 w-12 bg-white rounded flex items-center justify-center text-xs semi-medium text-gray-800 hover:bg-gray-200 transition-all duration-300"
                  >
                    {payment === "Skrill" && (
                      <div className="bg-purple-600 text-white text-xs w-full h-full rounded flex items-center justify-center">
                        Skrill
                      </div>
                    )}
                    {payment === "VISA" && (
                      <div className="bg-blue-600 text-white text-xs w-full h-full rounded flex items-center justify-center">
                        VISA
                      </div>
                    )}
                    {payment === "PayPal" && (
                      <div className="bg-blue-500 text-white text-xs w-full h-full rounded flex items-center justify-center">
                        PayPal
                      </div>
                    )}
                    {payment === "Bitcoin" && (
                      <div className="bg-amber-500 text-white text-xs w-full h-full rounded flex items-center justify-center">
                        BTC
                      </div>
                    )}
                    {payment === "Apple Pay" && (
                      <div className="bg-gray-800 text-white text-xs w-full h-full rounded flex items-center justify-center">
                        Pay
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

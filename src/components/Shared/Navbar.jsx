"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, User, Menu, X } from "lucide-react";

const Navbar = () => {
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [hoveredSubmenu, setHoveredSubmenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const dropdownTimeoutRef = useRef(null);
  const submenuTimeoutRef = useRef(null);

  // Delay hiding dropdowns to make navigation smoother
  const handleDropdownMouseEnter = (dropdown) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setHoveredDropdown(dropdown);
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setHoveredDropdown(null);
      setHoveredSubmenu(null);
    }, 300);
  };

  // Submenu hover handlers
  const handleSubmenuMouseEnter = (submenu) => {
    if (submenuTimeoutRef.current) {
      clearTimeout(submenuTimeoutRef.current);
    }
    setHoveredSubmenu(submenu);
  };

  const handleSubmenuMouseLeave = () => {
    submenuTimeoutRef.current = setTimeout(() => {
      setHoveredSubmenu(null);
    }, 300);
  };

  // Mobile menu handlers
  const toggleMobileDropdown = (dropdown) => {
    setMobileDropdown(mobileDropdown === dropdown ? null : dropdown);
    setMobileSubmenu(null);
  };

  const toggleMobileSubmenu = (submenu) => {
    setMobileSubmenu(mobileSubmenu === submenu ? null : submenu);
  };

  // Clean up timeouts
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
      if (submenuTimeoutRef.current) clearTimeout(submenuTimeoutRef.current);
    };
  }, []);

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  const navLinks = [
    {
      name: "Destination",
      href: "/destination",
      hasDropdown: true,
      dropdownItems: [
        { name: "Australia", href: "/destination/australia" },
        { name: "Bangladesh", href: "/destination/bangladesh" },
        { name: "Bhutan", href: "/destination/bhutan" },
        { name: "Cambodia", href: "/destination/cambodia" },
        { name: "China", href: "/destination/china" },
        { name: "Egypt", href: "/destination/egypt" },
        { name: "India", href: "/destination/india" },
        { name: "Indonesia", href: "/destination/indonesia" },
        { name: "Japan", href: "/destination/japan" },
        { name: "Jordan", href: "/destination/jordan" },
        { name: "Kenya", href: "/destination/kenya" },
        { name: "South Korea", href: "/destination/south-korea" },
        { name: "Malaysia", href: "/destination/malaysia" },
        { name: "Maldives", href: "/destination/maldives" },
        { name: "Morocco", href: "/destination/morocco" },
        { name: "Nepal", href: "/destination/nepal" },
        { name: "New Zealand", href: "/destination/new-zealand" },
        { name: "Philippines", href: "/destination/philippines" },
        { name: "Saudi Arabia", href: "/destination/saudi-arabia" },
        { name: "Singapore", href: "/destination/singapore" },
        { name: "Sri Lanka", href: "/destination/sri-lanka" },
        { name: "Thailand", href: "/destination/thailand" },
        { name: "Turkey", href: "/destination/turkey" },
        { name: "United Arab Emirates", href: "/destination/uae" },
        { name: "United Kingdom", href: "/destination/uk" },
        { name: "United States of America", href: "/destination/usa" },
        { name: "Vietnam", href: "/destination/vietnam" },
        { name: "Europe", href: "/destination/europe" },
      ],
    },
    {
      name: "About",
      href: "/about",
      hasDropdown: false,
    },
    {
      name: "Blog",
      href: "/pages/blog",
      hasDropdown: true,
      dropdownItems: [
        { name: "Bangladesh", href: "/pages/blog/bangladesh" },
        { name: "Japan", href: "/pages/blog/japan" },
        { name: "Malaysia", href: "/pages/blog/malaysia" },
        { name: "Saudi Arabia", href: "/pages/blog/saudi-arabia" },
        { name: "Singapore", href: "/pages/blog/singapore" },
        { name: "Thailand", href: "/pages/blog/thailand" },
      ],
    },
    {
      name: "Air Tickets",
      href: "/pages/air-tickets",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Thai Airways",
          href: "/pages/air-tickets/thai-airways",
          isBold: true,
        },
        {
          name: "Bangladesh Airlines",
          href: "/pages/air-tickets/bangladesh-airlines",
          isBold: true,
        },
        {
          name: "US-Bangla Airlines",
          href: "/pages/air-tickets/us-bangla",
          isBold: true,
        },
        {
          name: "NOVO AIR",
          href: "/pages/air-tickets/novo-air",
          isBold: true,
        },
      ],
    },
    {
      name: "Visa Service",
      href: "/pages/visa-service",
      hasDropdown: true,
      dropdownItems: [
        { name: "Australia", href: "/pages/visa-service/australia" },
        { name: "Canada", href: "/pages/visa-service/canada" },
        { name: "China", href: "/pages/visa-service/china" },
        { name: "Egypt", href: "/pages/visa-service/egypt" },
        { name: "France", href: "/pages/visa-service/france" },
        { name: "Germany", href: "/pages/visa-service/germany" },
        { name: "India", href: "/pages/visa-service/india" },
        { name: "Italy", href: "/pages/visa-service/italy" },
        { name: "Malaysia", href: "/pages/visa-service/malaysia" },
        { name: "Singapore", href: "/pages/visa-service/singapore" },
        { name: "Sweden", href: "/pages/visa-service/sweden" },
        { name: "Thailand", href: "/pages/visa-service/thailand" },
        { name: "Turkey", href: "/pages/visa-service/turkey" },
        { name: "United Arab Emirates", href: "/pages/visa-service/uae" },
        { name: "United Kingdom", href: "/pages/visa-service/uk" },
        {
          name: "United States of America",
          href: "/pages/visa-service/usa",
        },
      ],
    },
    { name: "Special Offer", href: "/pages/special-offer" },
    {
      name: "Contact",
      href: "/contact",
      hasDropdown: false,
    },
  ];

  const getDropdownClasses = (linkName) => {
    // Base classes
    let baseClasses =
      "rounded-lg shadow-xl bg-white ring-1 ring-gray-200 transition-all duration-200 transform origin-top overflow-hidden";

    // Width classes based on the dropdown type
    if (linkName === "Destination") return `${baseClasses} w-[450px]`;
    if (linkName === "Visa Service") return `${baseClasses} w-[450px]`;
    if (linkName === "Destination") return `${baseClasses} w-[450px]`;
    if (linkName === "Pages") return `${baseClasses} w-80`;
    return `${baseClasses} w-56`;
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto sm:px-6">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <div className="h-8 w-8 bg-green-600 rounded-md flex items-center justify-center mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.5 13a3.5 3.5 0 01-3.5-3.5V4a1 1 0 011-1h9a1 1 0 011 1v5.5a3.5 3.5 0 01-3.5 3.5h-4zm11-3.5a3.5 3.5 0 10-7 0 3.5 3.5 0 007 0z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">Tripfy</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-gray-500 hover:text-green-600 focus:outline-none transition-colors duration-200"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => handleDropdownMouseEnter(link.name)}
                onMouseLeave={handleDropdownMouseLeave}
              >
                {link.hasDropdown ? (
                  <div
                    className={`relative text-gray-700 hover:text-green-600 group px-3 py-2 rounded-md text-sm md:text-md font-medium inline-flex items-center overflow-hidden cursor-pointer ${
                      hoveredDropdown === link.name
                        ? "text-green-600 bg-green-50"
                        : ""
                    }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        hoveredDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                    <span className="absolute left-0 bottom-0 h-full w-0 bg-green-100 transition-all duration-300 ease-in-out group-hover:w-full -z-0"></span>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="relative text-gray-700 hover:text-green-600 group px-3 py-2 rounded-md text-sm md:text-md font-medium inline-flex items-center overflow-hidden"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute left-0 bottom-0 h-full w-0 bg-green-100 transition-all duration-300 ease-in-out group-hover:w-full -z-0"></span>
                  </Link>
                )}

                {/* Dropdown for navigation items with children */}
                {link.hasDropdown && (
                  <div
                    className={`absolute left-0 mt-2 ${getDropdownClasses(
                      link.name
                    )} ${
                      hoveredDropdown === link.name
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                    style={{
                      boxShadow:
                        hoveredDropdown === link.name
                          ? "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                          : "",
                    }}
                  >
                    <div className="relative">
                      {/* Decorative top border with gradient */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500"></div>

                      {/* Scrollable dropdown content with max height */}
                      <div
                        className={`py-3 px-2 max-h-80 overflow-y-auto custom-scrollbar ${
                          link.name === "Destination" ||
                          link.dropdownItems?.length > 10
                            ? "grid grid-cols-2 gap-1"
                            : "grid grid-cols-1 gap-1"
                        }`}
                      >
                        {link.dropdownItems?.map((item, idx) => (
                          <div
                            key={idx}
                            className="relative"
                            onMouseEnter={() =>
                              handleSubmenuMouseEnter(
                                `${link.name}-${item.name}`
                              )
                            }
                            onMouseLeave={handleSubmenuMouseLeave}
                          >
                            {item.hasSubmenu ? (
                              <>
                                <div
                                  className={`flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 cursor-pointer rounded-md transition-colors border border-gray-200 hover:border-green-400 ${
                                    hoveredSubmenu ===
                                    `${link.name}-${item.name}`
                                      ? "bg-green-50 text-green-600 border-green-400"
                                      : ""
                                  }`}
                                >
                                  <span>{item.name}</span>
                                  <ChevronDown
                                    className={`h-4 w-4 transform transition-transform duration-200 ${
                                      hoveredSubmenu ===
                                      `${link.name}-${item.name}`
                                        ? "rotate-180"
                                        : "-rotate-90"
                                    }`}
                                  />
                                </div>
                                <div
                                  className={`absolute left-full top-0 w-80 rounded-lg shadow-xl bg-white ring-1 ring-gray-200 transition-all duration-200 transform origin-top-left ${
                                    hoveredSubmenu ===
                                    `${link.name}-${item.name}`
                                      ? "opacity-100 scale-100"
                                      : "opacity-0 scale-95 pointer-events-none"
                                  }`}
                                  style={{
                                    boxShadow:
                                      hoveredSubmenu ===
                                      `${link.name}-${item.name}`
                                        ? "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                                        : "",
                                  }}
                                >
                                  <div className="relative">
                                    {/* Decorative left border */}
                                    <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-green-400 to-blue-500"></div>

                                    {/* Scrollable submenu with max height */}
                                    <div className="py-3 px-2 max-h-96 overflow-y-auto custom-scrollbar grid grid-cols-2 gap-1">
                                      {item.submenuItems?.map(
                                        (subItem, subIdx) => (
                                          <Link
                                            key={subIdx}
                                            href={subItem.href}
                                            className={`block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors border border-gray-200 hover:border-green-400 mb-1 ${
                                              subItem.isBold ? "font-bold" : ""
                                            }`}
                                          >
                                            {subItem.name}
                                          </Link>
                                        )
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </>
                            ) : (
                              <Link
                                href={item.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors border border-gray-200 hover:border-green-400"
                              >
                                {item.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* User Icon and Book Trip Button */}
          <div className="hidden lg:flex items-center">
            <div className="flex mr-4">
              <button className="p-2 rounded-full text-gray-500 hover:text-green-600 focus:outline-none transition-colors duration-200">
                <User className="h-6 w-6" />
              </button>
            </div>

            {/* Book A Trip Button */}
            <div>
              <Link
                href="/book"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-green-600 px-6 py-2 text-white font-medium shadow-md transition duration-300 ease-out hover:shadow-lg"
              >
                <span className="absolute inset-0 bg-green-700 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"></span>
                <span className="relative">Book A Trip</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4 space-y-1 border-t border-gray-200">
          {navLinks.map((link) => (
            <div key={link.name} className="py-1">
              {link.hasDropdown ? (
                <>
                  <button
                    onClick={() => toggleMobileDropdown(link.name)}
                    className="w-full flex items-center justify-between py-2 px-3 text-base font-medium text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md"
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-200 ${
                        mobileDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      mobileDropdown === link.name
                        ? "max-h-96 overflow-y-auto custom-scrollbar"
                        : "max-h-0"
                    }`}
                  >
                    <div className="pl-4 pr-2 py-2 border-l-2 border-green-400 ml-4 mt-1 space-y-1">
                      {link.dropdownItems?.map((item, idx) => (
                        <div key={idx}>
                          {item.hasSubmenu ? (
                            <>
                              <button
                                onClick={() =>
                                  toggleMobileSubmenu(
                                    `${link.name}-${item.name}`
                                  )
                                }
                                className="w-full flex items-center justify-between py-2 px-3 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md border border-gray-200 hover:border-green-400 mb-2"
                              >
                                <span>{item.name}</span>
                                <ChevronDown
                                  className={`h-4 w-4 transition-transform duration-200 ${
                                    mobileSubmenu ===
                                    `${link.name}-${item.name}`
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                />
                              </button>
                              <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                  mobileSubmenu === `${link.name}-${item.name}`
                                    ? "max-h-96 overflow-y-auto custom-scrollbar"
                                    : "max-h-0"
                                }`}
                              >
                                <div className="pl-4 pr-2 py-2 border-l-2 border-blue-400 ml-4 mt-1 grid grid-cols-1 sm:grid-cols-2 gap-1">
                                  {item.submenuItems?.map((subItem, subIdx) => (
                                    <Link
                                      key={subIdx}
                                      href={subItem.href}
                                      className={`block py-2 px-3 text-sm ${
                                        subItem.isBold ? "font-bold" : ""
                                      } text-gray-600 hover:bg-green-50 hover:text-green-600 rounded-md border border-gray-200 hover:border-blue-400 mb-2`}
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </>
                          ) : (
                            <Link
                              href={item.href}
                              className="block py-2 px-3 text-sm text-gray-600 hover:bg-green-50 hover:text-green-600 rounded-md border border-gray-200 hover:border-green-400 mb-2"
                            >
                              {item.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className="block py-2 px-3 text-base font-medium text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}

          {/* Mobile buttons */}
          <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
            <button className="p-2 rounded-full text-gray-500 hover:text-green-600 focus:outline-none transition-colors duration-200">
              <User className="h-6 w-6" />
            </button>

            <Link
              href="/book"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-green-600 px-6 py-2 text-white font-medium shadow-md transition duration-300 ease-out hover:shadow-lg"
            >
              <span className="absolute inset-0 bg-green-700 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"></span>
              <span className="relative">Book A Trip</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Add global CSS for custom scrollbar */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c5e3c5;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #4ade80;
        }

        /* Box border hover effects */
        .border {
          transition: border-color 0.2s ease-in-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

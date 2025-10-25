"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Projects",
      url: "/projects",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand Name */}
        <Link
          href="/"
          className="text-white text-2xl font-bold hover:text-blue-400 transition-colors duration-300"
        >
          MyPortfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.url}
              // Conditional styling for active link (Pages Router)
              className={`text-white hover:text-blue-400 transition-colors duration-300 ${
                pathname === link.url
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : ""
              }`}
              // Conditional styling for active link (App Router)
              // className={`text-white hover:text-blue-400 transition-colors duration-300 ${
              //   pathname === link.url ? "text-blue-400 border-b-2 border-blue-400" : ""
              // }`}
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none focus:text-blue-400"
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? (
              // Close icon (X)
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation (shown when isMobileMenuOpen is true) */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-gray-700 mt-4 rounded-md`}
      >
        <div className="flex flex-col space-y-3 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.url}
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              // Conditional styling for active link (Pages Router)
              className={`text-white hover:text-blue-300 transition-colors duration-300 text-lg ${
                pathname === link.url
                  ? "text-blue-300 font-semibold"
                  : ""
              }`}
              // Conditional styling for active link (App Router)
              // className={`text-white hover:text-blue-300 transition-colors duration-300 text-lg ${
              //   pathname === link.url ? "text-blue-300 font-semibold" : ""
              // }`}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

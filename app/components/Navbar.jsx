"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Projects", url: "/projects" },
    { title: "Contact", url: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 shadow-lg border-b border-cyan-600/30 h-16">
      <div className="container mx-auto flex justify-between items-center py-4 lg:py-5 px-4">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.url}
              className={`transition-all duration-300 ${
                pathname === link.url
                  ? "text-cyan-400 border-b-2 border-cyan-400"
                  : "text-gray-300 hover:text-cyan-400 hover:border-b-2 hover:border-cyan-400"
              }`}
            >
              {link.title}
            </Link>
          ))}
          <button
            className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-50 font-medium 
          py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          >
            Download Resume
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none focus:text-cyan-400"
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? (
              <IoCloseSharp className="w-6 h-6" />
            ) : (
              <GiHamburgerMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-gray-800 mt-3 rounded-md shadow-md`}
      >
        <div className="flex flex-col space-y-3 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.url}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`transition-all duration-300 text-lg ${
                pathname === link.url
                  ? "text-cyan-400 font-semibold"
                  : "text-gray-300 hover:text-cyan-300"
              }`}
            >
              {link.title}
            </Link>
          ))}
          <button
            className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-50 font-medium 
          py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          >
            Download Resume
          </button>
        </div>
      </div>
    </nav>
  );
}

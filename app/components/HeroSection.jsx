"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoEyeOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HeroSection() {
  // Hero section content
  const name = "I'm Kanak";
  const title = "Full-Stack Web Developer";
  const tagline = "I build fast, accessible & maintainable web applications.";
  const imageAlt = "Portrait of the developer";
  const email = "kanakroy835@gmail.com";
  const whatsapp = "+880 1704-210-835";
  const githubLink = "https://github.com/Captain-Kanak";
  const linkedinLink = "https://linkedin.com/in/captain-kanak";
  const twitterLink = "https://twitter.com/captain_kanak00";
  const facebookLink = "https://facebook.com/captainkanak";
  const resumePdfPath = "/resume.pdf";

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden py-16"
      aria-labelledby="hero-heading"
    >
      {/* Background Image */}
      <Image
        src={"/programming-bg2.jpg"}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
        priority
      />
      {/* Overlay to improve text readability */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>{" "}
      {/* Increased opacity slightly for contrast */}
      {/* Decorative blurred shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -left-24 top-6 w-60 h-60 rounded-full bg-linear-to-r from-indigo-700/30 to-teal-500/20 
        blur-2xl"
        ></div>
        <div
          className="absolute right-10 bottom-10 w-40 h-40 rounded-full bg-linear-to-r from-pink-600/20 to-indigo-700/10 
        blur-xl"
        ></div>
      </div>
      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 w-full">
        {" "}
        {/* Max width and padding for content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {" "}
          {/* Increased gap */}
          {/* Left: text content and CTAs */}
          <div className="order-2 lg:order-1 lg:col-span-7 text-center lg:text-left">
            {/* Passionate Web Developer tag with animation */}
            <motion.p
              className="inline-block rounded-full px-4 py-2 text-sm font-medium text-white shadow-sm"
              style={{
                background:
                  "linear-gradient(270deg, #4f46e5, #14b8a6, #4f46e5)",
                backgroundSize: "300% 300%",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Passionate Web Developer
            </motion.p>

            {/* Headline and Title */}
            <h1
              id="hero-heading"
              className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight"
            >
              {name}
              <span
                className="block text-transparent bg-clip-text bg-linear-to-r from-indigo-300 via-white to-teal-200 
              text-3xl sm:text-4xl font-bold"
              >
                {title}
              </span>
            </h1>

            {/* Tagline */}
            <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0">
              {tagline}
            </p>

            {/* Call-to-Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start sm:items-center gap-4">
              {/* Resume buttons */}
              <a
                href={resumePdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-cyan-600 px-5 py-3 text-base font-semibold 
                text-white shadow-lg hover:scale-[1.02] transform transition cursor-pointer gap-2"
              >
                <IoEyeOutline size={20} /> View Resume
              </a>
              <a
                href={resumePdfPath}
                download="Kanak_Resume.pdf"
                aria-label="Download resume"
                className="inline-flex items-center justify-center rounded-md bg-transparent border-2 border-white px-5 py-3 
                text-base font-semibold text-white shadow-lg hover:scale-[1.02] transform transition cursor-pointer gap-2"
              >
                <FiDownload size={20} /> Download Resume
              </a>

              {/* Projects button */}
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-md border border-gray-700 px-4 py-3 text-base 
                font-medium text-gray-200 hover:bg-gray-800/60 transition gap-2"
                aria-label="See projects"
              >
                <IoEyeOutline size={20} /> Projects
              </Link>
            </div>

            {/* Connect With Me section */}
            <div className="mt-10 lg:mt-16">
              {" "}
              {/* Increased top margin for spacing */}
              <h3 className="text-lg font-semibold text-gray-300">
                Connect With Me
              </h3>
              {/* Contact Details */}
              <ul className="mt-3 space-y-2 text-gray-300">
                <li>
                  <span className="font-medium">📧 Email:</span>{" "}
                  <a
                    href={`mailto:${email}`}
                    className="text-cyan-400 hover:underline"
                  >
                    {email}
                  </a>
                </li>
                <li>
                  <span className="font-medium">💬 WhatsApp:</span>{" "}
                  <a
                    href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline"
                  >
                    {whatsapp}
                  </a>
                </li>
              </ul>
              {/* Social Links */}
              <div className="mt-4 flex items-center justify-center lg:justify-start gap-4">
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition"
                  aria-label="GitHub"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href={linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href={twitterLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition"
                  aria-label="Twitter"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href={facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition"
                  aria-label="Facebook"
                >
                  <FaFacebook size={24} />
                </a>
              </div>
            </div>
          </div>
          {/* Right: Your Hero Image with animated border */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-full overflow-hidden shadow-2xl bg-linear-to-tr 
              from-gray-800/50 to-gray-900/60 p-2"
              animate={{
                borderColor: [
                  "#3b82f6",
                  "#9333ea",
                  "#06b6d4",
                  "#f472b6",
                  "#3b82f6",
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ borderWidth: "4px", borderStyle: "solid" }}
            >
              <Image
                src={"/hero.png"}
                width={500}
                height={500}
                alt={imageAlt}
                className="w-full h-auto object-cover rounded-full block"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

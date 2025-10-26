"use client";

import React from "react";
import Lottie from "lottie-react";
import Link from "next/link";
import DeveloperLottie from "@/app/assets/lotties/developer.json";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 lg:py-24 relative bg-gray-950 text-white overflow-hidden"
    >
      {/* Decorative background blur */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-16 left-1/4 w-80 h-80 rounded-full bg-cyan-600/10 blur-3xl"></div>{" "}
        {/* Adjusted color and position */}
        <div className="absolute -bottom-16 right-1/4 w-72 h-72 rounded-full bg-indigo-600/10 blur-3xl"></div>{" "}
        {/* Adjusted color and position */}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
            About <span className="text-cyan-400">Me</span>{" "}
            {/* Matched color with CTAs */}
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I am a passionate Full-Stack Developer dedicated to building
            efficient, scalable, and user-centric web applications that solve
            real-world problems.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Professional Narrative */}
          <div className="space-y-6">
            {" "}
            {/* Increased space-y for better readability */}
            <p className="text-gray-300 leading-relaxed text-lg">
              My journey into programming began in{" "}
              <span className="text-cyan-400 font-semibold">2020</span>, driven
              by a profound curiosity to understand how software brings ideas to
              life. What started as late nights of self-study and
              experimentation has evolved into a robust skill set in both
              front-end and back-end development.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              I specialize in crafting elegant solutions, from intuitive user
              interfaces with modern JavaScript frameworks to robust server-side
              logic and database management. I thrive on overcoming technical
              challenges and continuously refining my craft to deliver
              high-quality, maintainable code.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Beyond the code, I believe in continuous learning and the power of
              strategic thinking. My hobbies like chess and cricket not only
              offer a mental reset but also hone my problem-solving skills,
              patience, and team collaboration—qualities I integrate into every
              project.
            </p>
          </div>

          {/* Right: Lottie Animation */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="w-full max-w-md">
              {" "}
              {/* Constrain Lottie size */}
              <Lottie animationData={DeveloperLottie} loop={true} />{" "}
              {/* Added loop for continuous animation */}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-block bg-cyan-600 text-white px-8 py-4 rounded-full shadow-lg hover:scale-[1.03] transform 
            transition duration-300 text-lg font-semibold"
          >
            Let’s Connect and Build Together
          </Link>
        </div>
      </div>
    </section>
  );
}

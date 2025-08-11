import React from "react";
import codingLottie from "../../assets/lotties/coding.json";
import Lottie from "lottie-react";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-8 lg:py-16 relative bg-gradient-to-b from-gray-900 to-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10 lg:mb-2">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            About <span className="text-indigo-400">Me</span>
          </h2>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            I’m a passionate full-stack developer who loves building
            high-performance, scalable, and user-friendly applications.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-10 items-center">
          {/* Left */}
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              My programming journey began in{" "}
              <span className="text-indigo-400 font-medium">2020</span>. I still
              remember the excitement and curiosity I felt when I wrote my very
              first lines of code. Back then, I didn’t have much knowledge or
              experience — just a laptop, an internet connection, and a strong
              desire to learn.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The path was far from easy. I spent countless late nights
              studying, debugging, and building small projects to test my
              skills. I explored different technologies, broke things, fixed
              them, and learned something new every day. My dedication and hard
              work slowly turned my passion into a professional skill set.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Today, I’m proud to say that my persistence has paid off. I’ve
              worked on a variety of projects, from simple websites to complex
              full-stack applications, and I’m constantly seeking ways to
              improve. Programming is no longer just a skill for me — it’s a
              craft that I refine with every line of code I write.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I’m not coding, I enjoy playing chess and cricket. These
              hobbies keep my mind sharp and teach me patience, strategy, and
              teamwork — qualities I bring back to my work as a developer.
              Whether it’s a challenging game of chess or a friendly cricket
              match, I love staying active and engaged outside of programming.
            </p>
          </div>

          {/* Right: Lottie animation loads only when in view */}
          <div className="flex justify-center lg:justify-end">
            <Lottie animationData={codingLottie} />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <a
            href="#contact"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md shadow-lg hover:scale-[1.02] transform transition"
          >
            Let’s Work Together
          </a>
        </div>
      </div>

      {/* Decorative background blur */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-indigo-600/20 blur-2xl"></div>
      </div>
    </section>
  );
};

export default AboutMe;

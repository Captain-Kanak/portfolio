import React from "react";
import imageSrc from "../../assets/hero/hero.png";
import { Link } from "react-router";
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const Hero = () => {
  const name = "I'm Kanak";
  const title = "Full-Stack Web Developer";
  const tagline = "I build fast, accessible & maintainable web applications.";
  const resumeUrl = "#";
  const imageAlt = "Portrait of the developer";

  // Map skills
  const skills = [
    {
      name: "React",
      icon: <SiReact className="text-teal-400 w-5 h-5 mr-1" />,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-green-500 w-5 h-5 mr-1" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-600 w-5 h-5 mr-1" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-400 w-5 h-5 mr-1" />,
    },
  ];

  return (
    <section
      className="py-8 lg:py-16 relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: text */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            <p className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-gradient-to-r from-indigo-600 to-teal-500 text-white shadow-sm">
              Passionate Web Developer
            </p>

            <h1
              id="hero-heading"
              className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight"
            >
              {name}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-teal-200 text-3xl sm:text-4xl font-bold">
                {title}
              </span>
            </h1>

            <p className="mt-6 lg:text-lg text-gray-300 max-w-2xl">{tagline}</p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
              <a
                href={resumeUrl}
                className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-base font-semibold text-white shadow-lg hover:scale-[1.02] transform transition cursor-pointer"
                aria-label="Download resume"
              >
                Download Resume
              </a>

              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-md border border-gray-700 px-4 py-3 text-base font-medium text-gray-200 hover:bg-gray-800/60 transition"
                aria-label="See projects"
              >
                View Projects
              </Link>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-gray-300">
                Core skills
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {skills.map(({ name, icon }, i) => (
                  <li
                    key={i}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 text-sm text-gray-200 font-medium shadow-sm"
                  >
                    {icon}
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: hero image */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-lg rounded-full overflow-hidden ring-1 ring-white/6 shadow-2xl bg-gradient-to-tr from-gray-800/50 to-gray-900/60 p-2 border-4 border-blue-500">
              <img
                src={imageSrc}
                width="500"
                height="500"
                alt={imageAlt}
                className="w-full object-cover rounded-full block"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative blurred shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-6 w-60 h-60 rounded-full bg-gradient-to-r from-indigo-700/30 to-teal-500/20 blur-2xl"></div>
        <div className="absolute right-10 bottom-10 w-40 h-40 rounded-full bg-gradient-to-r from-pink-600/20 to-indigo-700/10 blur-xl"></div>
      </div>
    </section>
  );
};

export default Hero;

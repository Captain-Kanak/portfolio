import React from "react";
import imageSrc from "../../assets/hero/hero.png";
import { Link } from "react-router";

const Hero = () => {
  const name = "Kanak Ray";
  const title = "Full-Stack Web Developer";
  const tagline = "I build fast, accessible & maintainable web applications.";
  const skills = ["React", "Node.js", "TypeScript", "Tailwind CSS"];
  const resumeUrl = "#";
  const imageAlt = "Portrait of the developer";

  return (
    <section
      className="mt-8 lg:mt-16 relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: text */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            <p className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-gradient-to-r from-indigo-600 to-teal-500 text-white shadow-sm">
              Hi, I’m a web developer
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
                className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-base font-semibold text-white shadow-lg hover:scale-[1.02] transform transition"
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
                {skills.map((s, i) => (
                  <li
                    key={i}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800/60 text-sm text-gray-200 font-medium"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex items-center gap-4">
              {/* Social icons (replace links as needed) */}
              <a
                href="#"
                aria-label="GitHub"
                className="p-2 rounded-md hover:bg-gray-800/60 transition"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M12 .5C5.73.5.75 5.48.75 11.76c0 4.96 3.22 9.16 7.69 10.64.56.1.77-.24.77-.54 0-.27-.01-1-.02-1.97-3.13.68-3.8-1.51-3.8-1.51-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1.0 1.73 2.63 1.23 3.27.94.1-.73.39-1.23.71-1.51-2.5-.28-5.12-1.25-5.12-5.56 0-1.23.44-2.24 1.15-3.03-.12-.28-.5-1.41.11-2.94 0 0 .94-.3 3.08 1.16A10.7 10.7 0 0112 6.8c.95.004 1.9.13 2.79.38 2.13-1.47 3.07-1.16 3.07-1.16.62 1.53.24 2.66.12 2.94.72.79 1.15 1.8 1.15 3.03 0 4.32-2.63 5.27-5.14 5.55.4.35.76 1.03.76 2.08 0 1.5-.01 2.71-.01 3.08 0 .3.2.65.78.54C19.04 21 22.25 16.72 22.25 11.76 22.25 5.48 17.27.5 11 .5z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="p-2 rounded-md hover:bg-gray-800/60 transition"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48s.88 1.99 1.98 1.99A1.99 1.99 0 006 5.48C6 4.38 5.12 3.5 4.02 3.5h-.04zM3.5 8.75h3v11.75h-3V8.75zM9.5 8.75h2.86v1.6h.04c.4-.76 1.38-1.56 2.85-1.56 3.04 0 3.6 2 3.6 4.6v6.9h-3v-6.1c0-1.45-.03-3.32-2.03-3.32-2.03 0-2.34 1.59-2.34 3.2v6.22h-3V8.75z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: hero image */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-lg rounded-full overflow-hidden ring-1 ring-white/6 shadow-2xl bg-gradient-to-tr from-gray-800/50 to-gray-900/60 p-2 border-4 border-blue-500">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full object-cover rounded-full block"
                // Replace the image with your own high-res portrait
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative blurred shapes for depth (dark-mode friendly) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-6 w-72 h-72 rounded-full bg-gradient-to-r from-indigo-700/30 to-teal-500/20 blur-3xl"></div>
        <div className="absolute right-10 bottom-10 w-56 h-56 rounded-full bg-gradient-to-r from-pink-600/20 to-indigo-700/10 blur-2xl"></div>
      </div>
    </section>
  );
};

export default Hero;

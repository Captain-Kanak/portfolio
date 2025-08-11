import React from "react";
import imageSrc from "../../assets/hero/hero.png";
import { Link } from "react-router";
import { IoEyeOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Hero = () => {
  const name = "I'm Kanak";
  const title = "Full-Stack Web Developer";
  const tagline = "I build fast, accessible & maintainable web applications.";
  const imageAlt = "Portrait of the developer";

  return (
    <section
      className="py-8 lg:py-16 relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: text */}
          <div className="order-2 lg:order-1 lg:col-span-7">
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
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-base font-semibold text-white shadow-lg hover:scale-[1.02] transform transition cursor-pointer gap-2"
              >
                <IoEyeOutline size={20} /> Resume
              </a>
              <a
                href="/resume.pdf"
                download="Kanak_Resume.pdf"
                aria-label="Download resume"
                className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-base font-semibold text-white shadow-lg hover:scale-[1.02] transform transition cursor-pointer gap-2"
              >
                <FiDownload size={20} /> Resume
              </a>

              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-md border border-gray-700 px-4 py-3 text-base font-medium text-gray-200 hover:bg-gray-800/60 transition gap-2"
                aria-label="See projects"
              >
                <IoEyeOutline size={20} /> Projects
              </Link>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-300">
                Connect With Me
              </h3>

              {/* Contact Details */}
              <ul className="mt-3 space-y-2 text-gray-300">
                <li>
                  <span className="font-medium">📧 Email:</span>{" "}
                  <a
                    href="mailto:kanakroy835@gmail.com"
                    className="text-indigo-400 hover:underline"
                  >
                    kanakroy835@gmail.com
                  </a>
                </li>
                <li>
                  <span className="font-medium">💬 WhatsApp:</span>{" "}
                  <a
                    href="https://wa.me/8801704210835"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:underline"
                  >
                    +880 1704-210-835
                  </a>
                </li>
              </ul>

              {/* Social Links */}
              <div className="mt-4 flex items-center gap-4">
                <a
                  href="https://github.com/Captain-Kanak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-indigo-400 transition"
                  aria-label="GitHub"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/captain-kanak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-indigo-400 transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://twitter.com/captain_kanak00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-indigo-400 transition"
                  aria-label="Twitter"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://facebook.com/captainkanak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-indigo-400 transition"
                  aria-label="Facebook"
                >
                  <FaFacebook size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: hero image */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              className="w-full max-w-lg rounded-full overflow-hidden ring-1 ring-white/6 shadow-2xl bg-gradient-to-tr from-gray-800/50 to-gray-900/60 p-2 border-5"
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
            >
              <img
                src={imageSrc}
                width="500"
                height="500"
                alt={imageAlt}
                className="w-full object-cover rounded-full block"
              />
            </motion.div>
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

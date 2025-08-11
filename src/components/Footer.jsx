import React from "react";
import { Link } from "react-router";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-8 lg:py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-16 mb-8">
          {/* About */}
          <div className="max-w-md">
            <span>
              <Logo />
            </span>
            <p className="text-sm leading-relaxed">
              I’m a passionate full-stack developer focused on creating
              high-performance, scalable, and user-friendly web applications.
              Started coding in 2020, and never stopped learning since.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Social Links
            </h3>
            <div className="flex space-x-4">
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

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 text-center text-sm">
          © {new Date().getFullYear()} LazyProgrammer. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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
            <h3 className="text-white text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Captain-Kanak"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
              >
                <FaLinkedin className="text-2xl" />
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

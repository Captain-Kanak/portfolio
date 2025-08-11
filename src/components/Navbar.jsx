import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router";
import { IoEyeOutline } from "react-icons/io5";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative text-lg font-medium tracking-wide px-3 py-2 transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:transition-all after:duration-300 ${
              isActive
                ? "text-primary after:w-full after:bg-primary"
                : "text-gray-300 hover:text-primary after:w-0 hover:after:w-full after:bg-primary"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `relative text-lg font-medium tracking-wide px-3 py-2 transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:transition-all after:duration-300 ${
              isActive
                ? "text-primary after:w-full after:bg-primary"
                : "text-gray-300 hover:text-primary after:w-0 hover:after:w-full after:bg-primary"
            }`
          }
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `relative text-lg font-medium tracking-wide px-3 py-2 transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:transition-all after:duration-300 ${
              isActive
                ? "text-primary after:w-full after:bg-primary"
                : "text-gray-300 hover:text-primary after:w-0 hover:after:w-full after:bg-primary"
            }`
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-700">
      <div className="navbar max-w-7xl mx-auto">
        {/* Left */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-gray-300 lg:hidden hover:bg-gray-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 rounded-xl bg-gray-900/90 backdrop-blur-md p-2 shadow-lg border border-gray-700"
            >
              {links}
            </ul>
          </div>
          <span className="flex items-center gap-2">
            <Logo />
          </span>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2">{links}</ul>
        </div>

        {/* Right */}
        <div className="navbar-end">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 lg:px-5 py-2 lg:py-3 text-base font-semibold text-white shadow-lg hover:scale-[1.02] transform transition cursor-pointer gap-1"
          >
            <IoEyeOutline size={20} /> View Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

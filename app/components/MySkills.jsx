"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiMysql,
} from "react-icons/si";

const skills = [
  {
    icon: <SiHtml5 className="w-12 h-12 text-orange-600" />,
    title: "HTML5",
    desc: "Structuring Web Content",
  },
  {
    icon: <SiCss3 className="w-12 h-12 text-blue-600" />,
    title: "CSS3",
    desc: "Styling & Responsive Design",
  },
  {
    icon: <SiJavascript className="w-12 h-12 text-yellow-400" />,
    title: "JavaScript",
    desc: "Dynamic Web Interactions",
  },
  {
    icon: <SiTypescript className="w-12 h-12 text-blue-600" />,
    title: "TypeScript",
    desc: "Robust Typed JavaScript",
  },
  {
    icon: <SiReact className="w-12 h-12 text-sky-400" />,
    title: "React.js",
    desc: "Building User Interfaces",
  },
  {
    icon: <SiTailwindcss className="w-12 h-12 text-cyan-400" />,
    title: "Tailwind CSS",
    desc: "Rapid UI Development",
  },
  {
    icon: <SiNodedotjs className="w-12 h-12 text-green-600" />,
    title: "Node.js",
    desc: "Scalable Server-Side Apps",
  },
  {
    icon: <SiExpress className="w-12 h-12 text-gray-400" />,
    title: "Express.js",
    desc: "Backend RESTful APIs",
  },
  {
    icon: <SiMongodb className="w-12 h-12 text-green-500" />,
    title: "MongoDB",
    desc: "Flexible NoSQL Database",
  },
  {
    icon: <SiMongoose className="w-12 h-12 text-red-700" />,
    title: "Mongoose",
    desc: "MongoDB Object Modeling",
  },
  {
    icon: <SiMysql className="w-12 h-12 text-blue-500" />,
    title: "MySQL",
    desc: "Relational Database Management",
  },
];

export default function MySkills() {
  return (
    <section
      id="skills"
      className="py-16 lg:py-24 bg-gray-950 text-white relative overflow-hidden"
    >
      {/* Decorative background blur */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/4 w-72 h-72 rounded-full bg-indigo-600/10 blur-3xl"></div>
        <div className="absolute -bottom-20 right-1/4 w-80 h-80 rounded-full bg-cyan-600/10 blur-3xl"></div>
      </div>

      <div>
        {" "}
        {/* Added max-w and px */}
        {/* Section Description */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h3 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
            My <span className="text-cyan-400">Tech</span> Stack
          </h3>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A comprehensive list of the technologies, tools, and frameworks I
            leverage to build robust, scalable, and intuitive full-stack web
            applications.
          </p>
        </div>
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {skills.map(({ icon, title, desc }) => (
            <motion.div
              data-aos="zoom-in"
              key={title}
              className="relative rounded-xl p-0.5 overflow-hidden"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                background:
                  "linear-gradient(270deg, #ff3cac, #784ba0, #2b86c5, #ff3cac)",
                backgroundSize: "300% 300%",
              }}
            >
              <div
                className="flex items-center gap-4 p-3 bg-gray-800/90 rounded-xl shadow-lg 
                   transition-transform duration-300 transform hover:scale-105 
                   hover:shadow-indigo-600/50 cursor-pointer"
                style={{
                  borderRadius: "inherit",
                }}
              >
                <div className="bg-gray-700 p-3 rounded-lg shrink-0 flex items-center justify-center">
                  {icon}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">{title}</h4>
                  <p className="text-gray-300 text-sm">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

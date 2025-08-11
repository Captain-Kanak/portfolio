import React from "react";
// eslint-disable-next-line no-unused-vars
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
} from "react-icons/si";

const skills = [
  {
    icon: <SiHtml5 className="w-12 h-12 text-orange-600" />,
    title: "HTML",
    desc: "Markup Language for Web Structure",
  },
  {
    icon: <SiCss3 className="w-12 h-12 text-blue-600" />,
    title: "CSS",
    desc: "Styling & Layout",
  },
  {
    icon: <SiTailwindcss className="w-12 h-12 text-cyan-400" />,
    title: "Tailwind CSS",
    desc: "Utility-first Styling",
  },
  {
    icon: <SiJavascript className="w-12 h-12 text-yellow-400" />,
    title: "JavaScript",
    desc: "Dynamic Functionality",
  },
  {
    icon: <SiNodedotjs className="w-12 h-12 text-green-600" />,
    title: "Node.js",
    desc: "Server-side Runtime",
  },
  {
    icon: <SiReact className="w-12 h-12 text-sky-400" />,
    title: "React.js",
    desc: "Frontend Library",
  },
  {
    icon: <SiTypescript className="w-12 h-12 text-blue-600" />,
    title: "TypeScript",
    desc: "Typed JavaScript for Safer Code",
  },
  {
    icon: <SiExpress className="w-12 h-12 text-gray-400" />,
    title: "Express.js",
    desc: "Backend Framework",
  },
  {
    icon: <SiMongodb className="w-12 h-12 text-green-500" />,
    title: "MongoDB",
    desc: "NoSQL Database",
  },
];

const MySkills = () => {
  return (
    <section
      id="skills"
      className="py-16 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Description */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            <span className="text-indigo-400">Tech</span> Stack
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            Here are the technologies, tools, and frameworks I work with to
            build fast, responsive, and modern web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {skills.map(({ icon, title, desc }) => (
            <motion.div
              key={title}
              className="relative rounded-xl p-[2px] overflow-hidden"
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
                className="flex items-center gap-4 p-3 bg-gray-800/90 rounded-xl shadow-lg cursor-default 
                   transition-transform duration-300 transform hover:scale-105 
                   hover:shadow-indigo-600/50"
                style={{
                  borderRadius: "inherit",
                }}
              >
                <div className="bg-gray-700 p-3 rounded-lg flex-shrink-0 flex items-center justify-center">
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
};

export default MySkills;

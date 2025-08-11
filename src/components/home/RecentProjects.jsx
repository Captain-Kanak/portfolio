import React from "react";
import { Link } from "react-router";
import medicalCamp from "../../assets/projects/medical-camp.png";
import foundLostItems from "../../assets/projects/found-lost-items.png";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../Spinner";

const RecentProjects = () => {
  const axiosPublic = useAxiosPublic();

  const { data: projectsData, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await axiosPublic.get("/projects");
      return res.data;
    },
  });

  console.log(projectsData);

  const projects = [
    {
      id: 1,
      title: "Lost & Found Web App",
      desc: "A platform for posting and recovering lost items with MongoDB and React.",
      img: foundLostItems,
    },
    {
      id: 2,
      title: "Medical Camp Management",
      desc: "A system for organizing and registering for medical camps.",
      img: medicalCamp,
    },
    {
      id: 3,
      title: "Parcel Delivery System",
      desc: "A delivery management system with Stripe payments and Firebase Auth.",
      img: "/path/to/project3.jpg",
    },
  ];

  if (isLoading) <Spinner />;

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 mt-1">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Recent <span className="text-indigo-400">Projects</span>
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are a few of my latest works. Each project reflects my skills
            in building modern, responsive, and functional web applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-indigo-600/50 transform hover:scale-105 transition duration-300"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h4 className="text-white text-xl font-semibold mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
                <Link
                  to={"/"}
                  className="inline-block px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-colors"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link
            to="/projects"
            className="px-6 py-3 text-lg font-medium text-white bg-primary rounded-lg hover:bg-primary/80 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;

import React from "react";
import { Link } from "react-router";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../Spinner";
import ProjectCard from "../ProjectCard";

const RecentProjects = () => {
  const axiosPublic = useAxiosPublic();

  const { data: projectsData = [], isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await axiosPublic.get("/projects");
      return res.data;
    },
  });

  const projects = projectsData.slice(0, 3);

  if (isLoading) {
    <Spinner />;
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 mt-1">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Recent <span className="text-indigo-400">Projects</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are a few of my latest works. Each project reflects my skills
            in building modern, responsive, and functional web applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link
            to="/projects"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md shadow-lg hover:scale-[1.02] transform transition"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;

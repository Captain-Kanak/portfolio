import React from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/Spinner";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: projects = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await axiosPublic.get("/projects");
      return res.data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <section className="py-20 text-center text-red-400">
        <p>⚠️ Failed to load projects. Please try again later.</p>
      </section>
    );
  }

  return (
    <section className="py-8 lg:py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            All <span className="text-indigo-400">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here’s a collection of my work — each project demonstrates a mix of
            design, development, and problem-solving skills.
          </p>
        </div>

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center">
            No projects available right now.
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;

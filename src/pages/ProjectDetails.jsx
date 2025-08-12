import React from "react";
import { useParams } from "react-router";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/Spinner";
import {
  ExternalLink,
  Layers,
  FileText,
  Target,
  Lightbulb,
} from "lucide-react";
import { LuGithub } from "react-icons/lu";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const axiosPublic = useAxiosPublic();

  const { data: project = {}, isLoading } = useQuery({
    queryKey: ["project", projectId],
    queryFn: async () => {
      const res = await axiosPublic.get(`/projects/${projectId}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-xl lg:text-3xl font-bold text-white mb-6 text-center">
        {project.name}
      </h1>

      {/* Project Image with gradient border */}
      <div className="mb-8 p-[3px] rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500">
        <img
          src={project.image}
          alt={project.name}
          className="rounded-lg shadow-lg w-full max-h-[450px] object-cover"
        />
      </div>

      {/* Technology Stack */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
          <Layers className="text-purple-400" size={22} /> Technology Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.technologyStack?.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-sm bg-indigo-800 text-indigo-200 rounded-full shadow"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
          <FileText className="text-green-400" size={22} /> Description
        </h2>
        <p className="text-gray-300 leading-relaxed">{project.description}</p>
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-4 mb-8">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
        >
          <ExternalLink size={18} /> Live Project
        </a>
        <a
          href={project.githubClient}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-800 transition"
        >
          <LuGithub size={18} />
          GitHub (Client)
        </a>
      </div>

      {/* Challenges */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
          <Target className="text-red-400" size={22} /> Challenges Faced
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          {project.challenges?.map((challenge, idx) => (
            <li key={idx}>{challenge}</li>
          ))}
        </ul>
      </div>

      {/* Future Plans */}
      <div>
        <h2 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
          <Lightbulb className="text-yellow-400" size={22} /> Future Plans
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          {project.futurePlans?.map((plan, idx) => (
            <li key={idx}>{plan}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetails;

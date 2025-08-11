import React from "react";
import { Link } from "react-router";

const ProjectCard = ({ project }) => {
  const { photo, title, desc, previewURL } = project;

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-indigo-600/50 transform hover:scale-105 transition duration-300">
      <img src={photo} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h4 className="text-white text-xl font-semibold mb-2">{title}</h4>
        <p className="text-gray-400 text-sm mb-4">{desc}</p>
        <Link
          to={previewURL}
          className="inline-block px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-colors"
        >
          View Project
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;

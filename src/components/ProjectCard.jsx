import React from "react";
import { Link } from "react-router";

const ProjectCard = ({ project }) => {
  const { _id, image, name, description } = project;

  return (
    <div data-aos="zoom-in-up">
      <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-indigo-600/50 transform hover:scale-105 transition duration-300">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="p-5">
          <h4 className="text-white text-xl font-semibold mb-2">{name}</h4>
          <p className="text-gray-400 text-sm mb-4">{description}</p>
          <Link
            to={`/projectDetails/${_id}`}
            className="inline-block px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-colors"
          >
            Project Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

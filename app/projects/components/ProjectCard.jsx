import React from "react";
import Link from "next/link";
import Image from "next/image"; // For optimized images in Next.js

export default function ProjectCard({ project }) {
  // Destructure project properties for easier access
  const {
    _id,
    name,
    tagline,
    thumbnail,
    techStack,
    liveLink,
    githubRepoLink,
    tags,
  } = project;

  return (
    <div
      className="bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden border 
      border-gray-700 flex flex-col"
    >
      {/* Project Thumbnail/Image */}
      <div className="relative h-48 w-full shrink-0">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={`${name} thumbnail`}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-700 text-gray-400 text-center">
            No Image Available
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col grow">
        {/*
          Content Wrapper with a MINIMUM HEIGHT
          This div will house all the dynamic content above the buttons.
          We give it a fixed height (or min/max) and allow its content to scroll if it exceeds.
        */}
        <div className="grow flex flex-col justify-between overflow-hidden">
          {/* Top content that might vary */}
          <div>
            {/* Project Name - Consistent Height using text-overflow or line-clamp */}
            <h3 className="text-2xl font-bold text-white mb-2 leading-tight h-16 overflow-hidden">
              {" "}
              {/* Fixed height for name */}
              <Link
                href={`/projects/${_id}`}
                className="hover:text-blue-400 transition-colors duration-200 block truncate" // 'truncate' helps if name is too long
              >
                {name}
              </Link>
            </h3>
            {/* Project Tagline - Consistent Height */}
            <div className="min-h-10 mb-3">
              {" "}
              {/* Set a min-height for the tagline container */}
              {tagline && (
                <p className="text-gray-400 text-sm line-clamp-2">
                  {" "}
                  {/* line-clamp-2 ensures max 2 lines */}
                  {tagline}
                </p>
              )}
            </div>

            {/* Tech Stack - Consistent Height */}
            <div className="mb-4 min-h-[70px]">
              {" "}
              {/* Set a min-height for the tech stack container */}
              <h4 className="text-lg font-semibold text-gray-300 mb-2">
                Tech Stack:
              </h4>
              {techStack && techStack.length > 0 ? (
                <div className="flex flex-wrap gap-2 max-h-12 overflow-hidden">
                  {" "}
                  {/* max-h to prevent too many lines */}
                  {techStack.slice(0, 5).map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-600 text-white text-xs font-medium px-2.5 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {techStack.length > 5 && (
                    <span className="text-gray-500 text-xs mt-1">
                      +{techStack.length - 5} more
                    </span>
                  )}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">No tech stack listed.</p>
              )}
            </div>

            {/* Tags - Consistent Height */}
            <div className="mb-4 min-h-[50px]">
              {" "}
              {/* Set a min-height for the tags container */}
              <h4 className="text-lg font-semibold text-gray-300 mb-2">
                Tags:
              </h4>
              {tags && tags.length > 0 ? (
                <div className="flex flex-wrap gap-2 max-h-8 overflow-hidden">
                  {" "}
                  {/* max-h to prevent too many lines */}
                  {tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-600 text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {tags.length > 3 && (
                    <span className="text-gray-500 text-xs mt-1">
                      +{tags.length - 3} more
                    </span>
                  )}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">No tags listed.</p>
              )}
            </div>
          </div>
        </div>{" "}
        {/* End of flex-grow content wrapper */}
        {/* Action Links - Always at the bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-auto pt-4 border-t border-gray-700">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors 
              duration-200 text-center text-sm font-medium"
            >
              View Live
            </a>
          )}
          {githubRepoLink && (
            <a
              href={githubRepoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-colors 
              duration-200 text-center text-sm font-medium"
            >
              GitHub Repo
            </a>
          )}
          <Link
            href={`/projects/${_id}`}
            className="w-full sm:w-auto px-4 py-2 border border-gray-600 text-gray-200 rounded-md hover:bg-gray-700 hover:text-white 
            transition-colors duration-200 text-center text-sm font-medium"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

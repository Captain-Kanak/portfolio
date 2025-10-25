import React from "react";
import Link from "next/link";
import Image from "next/image"; // For optimized images in Next.js
import getProjectById from "@/actions/projects/getProjectById";
import { FaGithub, FaLink } from "react-icons/fa"; // For icons

export default async function ProjectDetailsPage({ params }) {
  const { id } = await params; // Destructure id from params
  const projectData = await getProjectById(id);
  const project = projectData.project;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-lg text-gray-400 mb-8">
            The project you are looking for does not exist or has been removed.
          </p>
          <Link
            href="/projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  // Destructure project properties for easier access
  const {
    name,
    tagline,
    images,
    purpose,
    description,
    features,
    challenges,
    techStack,
    liveLink,
    githubRepoLink,
    tags,
  } = project;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 mb-8"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          Back to Projects
        </Link>

        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-white mb-4">{name}</h1>
          <p className="text-xl text-gray-400 mb-6">{tagline}</p>
          <div className="flex justify-center gap-4">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-lg font-medium"
              >
                <FaLink className="mr-2" /> View Live
              </a>
            )}
            {githubRepoLink && (
              <a
                href={githubRepoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-lg transition-colors duration-200 text-lg font-medium"
              >
                <FaGithub className="mr-2" /> GitHub Repo
              </a>
            )}
          </div>
        </section>

        {/* Project Images */}
        {images && images.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Screenshots
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {images.map((imgSrc, index) => (
                <div
                  key={index}
                  className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg border border-gray-700"
                >
                  <Image
                    src={imgSrc}
                    alt={`${name} screenshot ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-2">
            {/* Purpose */}
            {purpose && (
              <section className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-4">Purpose</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {purpose}
                </p>
              </section>
            )}

            {/* Description */}
            {description && (
              <section className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Description
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {description}
                </p>
              </section>
            )}

            {/* Features */}
            {features && features.length > 0 && (
              <section className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Key Features
                </h2>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-300">
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Challenges */}
            {challenges && challenges.length > 0 && (
              <section className="mb-10">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Challenges & Solutions
                </h2>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-300">
                  {challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
                <p className="text-md text-gray-400 mt-4">
                  *This section is an excellent place to elaborate on how you
                  addressed each challenge, showcasing your problem-solving
                  skills!
                </p>
              </section>
            )}
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-1">
            {/* Tech Stack */}
            {techStack && techStack.length > 0 && (
              <section className="mb-10 bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-3">
                  {techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-purple-600 text-white text-sm font-medium px-3 py-1 rounded-full shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Tags */}
            {tags && tags.length > 0 && (
              <section className="mb-10 bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-4">Tags</h2>
                <div className="flex flex-wrap gap-3">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-600 text-gray-200 text-sm font-medium px-3 py-1 rounded-full shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Add more sidebar elements here if needed, e.g., 'My Role', 'Lessons Learned' */}
          </div>
        </div>
      </div>
    </div>
  );
}

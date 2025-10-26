import getProjects from "@/actions/projects/getProjects";
import ProjectCard from "@/app/projects/components/ProjectCard";

export default async function LatestProjects() {
  // Fetch projects data
  let projects = [];
  try {
    const projectsData = await getProjects();
    if (
      projectsData &&
      projectsData.success &&
      Array.isArray(projectsData.projects)
    ) {
      projects = projectsData.projects;
    } else {
      console.error(
        "Failed to fetch projects or projects data is not an array:",
        projectsData
      );
    }
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  return (
    <section className="py-16 lg:py-24 bg-gray-950 text-white">
      {/* Section Heading */}
      <div className="text-center mb-14">
        <h2
          className="text-4xl lg:text-5xl font-extrabold mb-4"
          data-aos="fade-up"
        >
          Latest <span className="text-cyan-400">Projects</span>
        </h2>
        <p
          className="text-gray-400 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Explore some of the most recent projects that showcase modern web
          technologies, design precision, and performance-driven development.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 lg:px-8">
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">
            No projects found.
          </p>
        )}
      </div>
    </section>
  );
}

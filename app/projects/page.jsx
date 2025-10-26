import getProjects from "@/actions/projects/getProjects";
import ProjectCard from "./components/ProjectCard"; // Make sure the path is correct

export default async function ProjectsPage() {
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
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      {" "}
      {/* Changed bg-gray-50 to bg-black */}
      <div className="max-w-7xl mx-auto">
        {/* Page Title & Subtitle */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl mb-4">
            {" "}
            {/* Changed text-gray-900 to text-white */}
            My Creative Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {" "}
            {/* Changed text-gray-600 to text-gray-300 */}
            Explore a collection of my work, ranging from full-stack
            applications to dynamic web interfaces. Each project highlights my
            skills, the technologies I love, and the challenges I have overcome.
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
          <div className="text-center py-10">
            <h2 className="text-2xl font-semibold text-gray-300">
              {" "}
              {/* Changed text-gray-700 to text-gray-300 */}
              No projects found.
            </h2>
            <p className="text-gray-400 mt-2">
              {" "}
              {/* Changed text-gray-500 to text-gray-400 */}
              Check back soon for new additions!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

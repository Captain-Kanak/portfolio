export default async function getProjects() {
  try {
    const projects = await fetch(
      `${process.env.NEXT_SERVER_ADDRESS}/api/projects`
    );

    return projects.json();
  } catch (error) {
    console.log("Failed to Get Projects", error);
    return [];
  }
}

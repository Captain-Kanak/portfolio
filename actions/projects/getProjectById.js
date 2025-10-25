"use server";

export default async function getProjectById(id) {
  try {
    const response = await fetch(
      `${process.env.NEXT_SERVER_ADDRESS}/api/projects/${id}`
    );

    if (!response.ok) {
      return [];
    }

    const projectData = await response.json();

    return projectData;
  } catch (error) {
    console.log("Failed to Get Projects", error);
    return [];
  }
}

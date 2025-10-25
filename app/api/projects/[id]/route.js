import connectMongooseDb from "@/lib/mongoose";
import Project from "@/models/project";
import { NextResponse } from "next/server";

// This GET function will handle requests for a single project by ID
// Example: GET /api/projects/65c8a4d4e0b0e5a8f4c2c7b1
export async function GET(request, { params }) {
  try {
    const { id } = await params;

    // 2. Connect to MongoDB
    await connectMongooseDb();

    // 3. Find the project by its ID
    const project = await Project.findById(id);

    // 4. Check if the project was found
    if (!project) {
      return NextResponse.json(
        { success: false, message: "Project not found." },
        { status: 404 }
      );
    }

    // 5. Return the found project
    return NextResponse.json(
      { success: true, project: project.toObject() },
      { status: 200 }
    );
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Failed to Fetch Single Project:", error);

    // Handle Mongoose related errors if necessary (e.g., malformed ID might fall here too if not caught by isValid)
    // For production, you might want a more generic user-friendly message
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error. Failed to fetch project.",
      },
      { status: 500 }
    );
  }
}

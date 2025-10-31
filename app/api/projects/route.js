import connectMongooseDb from "@/lib/mongoose";
import Project from "@/models/project";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Parse the request body
    const projectData = await req.json();

    // Connect to MongoDB
    await connectMongooseDb();

    // Create new project - Mongoose will automatically apply all schema validations
    const newProject = await Project.create(projectData);

    // Return the created project
    return NextResponse.json(
      {
        success: true,
        message: "Project created successfully!",
        project: newProject.toObject(),
      },
      { status: 201 }
    );
  } catch (error) {
    // Log the error
    console.log("Failed to Create Project", error);
    return NextResponse.json(
      { success: false, message: "Failed to Create Project" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Connect to MongoDB
    await connectMongooseDb();

    // Find all projects and return them as JSON response with status code 200 (OK)
    // lean() to convert Mongoose documents to plain JavaScript objects
    const projects = await Project.find().lean();

    // Return the projects
    return NextResponse.json({ success: true, projects }, { status: 200 });
  } catch (error) {
    // Log the error
    console.log("Failed to Fetch Projects", error);
    return NextResponse.json(
      { success: false, message: "Failed to Fetch Projects" },
      { status: 500 }
    );
  }
}

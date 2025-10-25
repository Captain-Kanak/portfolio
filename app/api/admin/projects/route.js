import connectMongooseDb from "@/lib/mongoose";
import Project from "@/models/project";
import { NextResponse } from "next/server";

// Create New Project
export async function POST(req) {
  try {
    // 1. Parse the request body
    const projectData = await req.json();

    // 2. Connect to MongoDB
    await connectMongooseDb();

    // 3. Create new project - Mongoose will automatically apply all schema validations
    const newProject = await Project.create(projectData);

    // 4. Return the created project
    return NextResponse.json(
      {
        success: true,
        message: "Project created successfully!",
        project: newProject.toObject(),
      },
      { status: 201 }
    );
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Failed to Create Project:", error);

    // Handle Mongoose Validation Errors
    if (error instanceof mongoose.Error.ValidationError) {
      let errorMessages = {};
      for (let field in error.errors) {
        errorMessages[field] = error.errors[field].message;
      }
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please check your input.",
          errors: errorMessages,
        },
        { status: 400 } // Use 400 for Bad Request due to validation failure
      );
    }

    // Handle other potential errors (e.g., database connection issues, server errors)
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error. Failed to create project.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Connect to MongoDB
    await connectMongooseDb();

    // Fetch all projects
    const projects = await Project.find();

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

import connectMongooseDb from "@/lib/mongoose";
import Project from "@/models/project";
import { NextResponse } from "next/server";

// This GET function will handle requests for a single project by ID
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
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error. Failed to fetch project.",
      },
      { status: 500 }
    );
  }
}

export async function PATCH(request, { params }) {
  try {
    const { id } = await params;
    const updatedData = await request.json();

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

    // 5. Update the project
    const updatedProject = await Project.findByIdAndUpdate(
      id,
      { $set: updatedData },
      { new: true }
    );

    // 6. Return the updated project
    return NextResponse.json(
      { success: true, project: updatedProject.toObject() },
      { status: 200 }
    );
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Failed to Update Project:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error. Failed to update project.",
      },
      { status: 500 }
    );
  }
}

// This DELETE function will handle requests to delete a single project by ID
export async function DELETE(request, { params }) {
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

    // 5. Delete the project
    await Project.findByIdAndDelete(id);

    // 6. Return a success message
    return NextResponse.json(
      { success: true, message: "Project deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Failed to Delete Project:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error. Failed to delete project.",
      },
      { status: 500 }
    );
  }
}

import connectMongooseDb from "@/lib/mongoose";
import Project from "@/models/project";
import { NextResponse } from "next/server";

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

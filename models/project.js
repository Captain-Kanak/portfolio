import mongoose from "mongoose";

// Custom URL validator function
const urlValidator = function (v) {
  // A more robust regex for URL validation, including common protocols and valid characters
  return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(v);
};

// Define the project schema
const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Project name is required."],
      minlength: [3, "Project name must be at least 3 characters long."],
      maxlength: [100, "Project name cannot exceed 100 characters."],
    },
    tagline: {
      type: String,
      trim: true,
      required: [true, "Tagline is required."],
      maxlength: [200, "Tagline cannot exceed 200 characters."],
    },
    thumbnail: {
      type: String,
      trim: true,
      required: [true, "Thumbnail image URL is required."],
      validate: {
        validator: urlValidator,
        message: (props) =>
          `${props.value} is not a valid URL for the thumbnail!`,
      },
    },
    images: [
      {
        type: String,
        trim: true,
        validate: {
          validator: urlValidator,
          message: (props) => `${props.value} is not a valid URL for an image!`,
        },
      },
    ],
    purpose: {
      type: String,
      trim: true,
      required: [true, "Project purpose is required."],
      minlength: [20, "Purpose must be at least 20 characters long."], // Re-added minlength
    },
    description: {
      type: String,
      trim: true,
      required: [true, "Project description is required."],
      minlength: [50, "Description must be at least 50 characters long."], // Re-added minlength
    },
    features: [
      {
        type: String,
        trim: true,
        required: [true, "Project feature description is required."],
        minlength: [5, "Feature description too short."],
        maxlength: [150, "Feature description too long."],
      },
    ],
    challenges: [
      {
        type: String,
        trim: true,
        required: [true, "Project challenge description is required."],
        minlength: [10, "Challenge description too short."],
        maxlength: [200, "Challenge description too long."],
      },
    ],
    techStack: [
      {
        type: String,
        trim: true,
        required: [true, "Tech stack item is required."],
      },
    ],
    liveLink: {
      type: String,
      trim: true,
      required: [true, "Live link is required."],
      validate: {
        validator: urlValidator,
        message: (props) =>
          `${props.value} is not a valid URL for the live link!`,
      },
    },
    githubRepoLink: {
      type: String,
      trim: true,
      required: [true, "GitHub repo link is required."],
      validate: {
        validator: urlValidator,
        message: (props) =>
          `${props.value} is not a valid URL for the GitHub repo link!`,
      },
    },
    tags: [
      {
        type: String,
        trim: true,
        maxlength: [30, "Tag cannot exceed 30 characters."],
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Pre-validate hook to ensure array fields are not empty if they are provided
projectSchema.pre("validate", function (next) {
  // If the field exists but is an empty array, invalidate it
  if (this.features && this.features.length === 0) {
    this.invalidate(
      "features",
      "At least one project feature is required.",
      "required"
    );
  }
  if (this.challenges && this.challenges.length === 0) {
    this.invalidate(
      "challenges",
      "At least one project challenge is required.",
      "required"
    );
  }
  if (this.techStack && this.techStack.length === 0) {
    this.invalidate(
      "techStack",
      "At least one tech stack item is required.",
      "required"
    );
  }
  next();
});

// Delete the project model if it already exists
if (mongoose.models.Project) {
  mongoose.deleteModel("Project");
}

// Create the project model
const Project = mongoose.model("Project", projectSchema);

// Export the project model
export default Project;

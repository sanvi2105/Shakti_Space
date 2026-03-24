import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    jobTitle: String,
    name: String,
    phone: String,
    email: String,
    address: String,
    experience: String,
    skills: String,
    availability: String,
    whyHire: String,

    // 🔥 IMPORTANT (for your dashboard)
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Application = mongoose.model("Application", applicationSchema);

export default Application;
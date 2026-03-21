import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
    },

    jobTitle: {
        type : String,
        required : true,
    },

    name: String,
    phone: String,
    email: String,
    email: String,
    address: String,
    experience: String,
    skills: String,
    availability: String,
    whyHire: String,

    status: {
        type: String,
        enum: ["applied", "reviewing", "accepted", "rejected"],
        default: "applied",
    },
}, {timestamps: true});

export default mongoose.model("Application", applicationSchema);
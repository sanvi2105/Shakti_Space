import mongoose from "mongoose";

const userSchema = new mongoose.Schema({ //creating a schema/blueprint for the doc in a collection
    username : {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role:  {
        type: String,
        required: true,
        enum: ["organisation", "user"], //restricts values
    },
}, {
    timestamps: true, //gives createdAt, updatedAt
});

const User = mongoose.model("User", userSchema); //.model -> class. constructot func that lets you create 
                                                 // and interact with documents, "User" is model name
export default User;
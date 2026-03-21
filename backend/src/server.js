import { setServers } from "node:dns/promises";
setServers(["1.1.1.1", "8.8.8.8"]);

import express from "express"; //to import express
import dotenv from "dotenv"; 
import cors from "cors";
import dbConnect from "./lib/db.js"; //import db connection
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import progressRoutes from "./routes/progressRoutes.js"; //  ADD THIS LINE
import storyRoutes from "./routes/storyRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js"; 

dotenv.config(); //read .env file

const app = express(); // create my server app using express

//Middleware
app.use(cors({origin : "http://localhost:5173", credentials: true})); 
app.use(express.json()); //data(POST/PUT body) sent to server in JSON format, understand it
dbConnect();

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api", storyRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/applications", applicationRoutes);

//Starting the server
const PORT = process.env.PORT || 8002;
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});

// import { setServers } from "node:dns/promises";
// setServers(["1.1.1.1", "8.8.8.8"]);

// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import dbConnect from "./lib/db.js";
// import authRoutes from "./routes/authRoutes.js";
// import userRoutes from "./routes/userRoutes.js";
// import progressRoutes from "./routes/progressRoutes.js"; 

// dotenv.config();

// const app = express();

// app.use(cors({ origin: "http://localhost:5173", credentials: true }));
// app.use(express.json());

// dbConnect();

// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/progress", progressRoutes); 

// const PORT = process.env.PORT || 8001;
// app.listen(PORT, () => {
//   console.log(`Server is running at ${PORT}`);
// });
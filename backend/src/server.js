import { setServers } from "node:dns/promises";
setServers(["1.1.1.1", "8.8.8.8"]);

import express from "express"; //to import express
import dotenv from "dotenv";
import cors from "cors";

import dbConnect from "./lib/db.js"; //import db connection
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import progressRoutes from "./routes/progressRoutes.js";
import storyRoutes from "./routes/storyRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import path from "path";

dotenv.config(); //read .env file

const app = express(); // create my server app using express

//  CORS FIX (handles multiple ports like 5173, 5175, etc.)
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5175",
  "http://localhost:5176"
];

  app.use(cors({
  origin: true,       // allow same origin
  credentials: true
  }));
 /*
app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like Postman)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS not allowed"));
    }
  },
  credentials: true
}));
*/

//Middleware
app.use(express.json()); //data(POST/PUT body) sent to server in JSON format, understand it

// DB Connection
dbConnect();

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/stories", storyRoutes);
app.use("/api/applications", applicationRoutes);

// Test Route (optional but useful)
app.get("/api/test", (req, res) => {
  res.send("API is running...");
});

//Starting the server

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "../../frontend/dist")));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
});

const PORT = process.env.PORT || 8002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// import { setServers } from "node:dns/promises";
// setServers(["1.1.1.1", "8.8.8.8"]);

// import express from "express"; //to import express
// import dotenv from "dotenv"; 
// import cors from "cors";
// import dbConnect from "./lib/db.js"; //import db connection
// import authRoutes from "./routes/authRoutes.js";
// import userRoutes from "./routes/userRoutes.js";
// import progressRoutes from "./routes/progressRoutes.js"; //  ADD THIS LINE
// import storyRoutes from "./routes/storyRoutes.js";
// import applicationRoutes from "./routes/applicationRoutes.js"; 

// dotenv.config(); //read .env file

// const app = express(); // create my server app using express

// //Middleware
// app.use(cors({origin : "http://localhost:5173", credentials: true})); 
// app.use(express.json()); //data(POST/PUT body) sent to server in JSON format, understand it
// dbConnect();

// //Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/progress", progressRoutes);
// app.use("/api", storyRoutes);
// app.use("/api/progress", progressRoutes);
// app.use("/api/applications", applicationRoutes);

// //Starting the server
// const PORT = process.env.PORT || 8002;
// app.listen(PORT, () => {
//     console.log(`Server is running at ${PORT}`);
// });

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
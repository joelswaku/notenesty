
// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import path from "path";
// import { fileURLToPath } from "url";

// import connectDB from "./lib/db.js";
// import authRoutes from "./routes/auth.routes.js";
// import noteRoutes from "./routes/notesRoutes.js";

// // Load .env variables
// dotenv.config();

// // Fix __dirname in ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Setup Express
// const app = express();
// const PORT = process.env.PORT || 5001;

// // Middleware
// app.use(cors({
//   origin: "http://localhost:5173",
//   credentials: true,
// }));
// app.use(express.json());
// app.use(cookieParser());

// // API Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/notes", noteRoutes);

// // 🔥 THIS IS THE FIX: serve frontend from frontend/dist
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/dist")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
//   });
// }

// // Connect to DB and run server
// connectDB().then(() => {
//   app.listen(PORT, () => {
//     console.log(`✅ Server running on http://localhost:${PORT}`);
//   });
// });
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

import connectDB from "./lib/db.js";
import authRoutes from "./routes/auth.routes.js";
import noteRoutes from "./routes/notesRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve(); // This __dirname resolves to the project root in this setup

// Middleware
app.use(cors({
 origin: "http://localhost:5173", // This will be ignored in production as frontend is served statically
 credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);

if (process.env.NODE_ENV === "production") {
 // Correctly specify the path to your frontend build directory
 app.use(express.static(path.join(__dirname, "/frontend", "dist"))); // Corrected path

 app.get("*", (req, res) => {
// Correctly specify the path to your frontend's index.html
 res.sendFile(path.join(__dirname, "frontend", "dist", "index.html")); // Corrected path
});
}


// DB & Server
connectDB().then(() => {
 app.listen(PORT, () => {
 console.log(`✅ Server running on http://localhost:${PORT}`);
});
})
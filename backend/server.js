// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import path from "path";
// import { fileURLToPath } from "url";

// import connectDB from "./lib/db.js";
// import authRoutes from "./routes/auth.routes.js";
// import noteRoutes from "./routes/notesRoutes.js";

// dotenv.config();
// dotenv.config();

// console.log("NODE_ENV:", process.env.NODE_ENV);


// const app = express();
// const PORT = process.env.PORT || 5001;

// // ✅ Fix __dirname in ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Middleware
// app.use(cors({
//   origin: "http://localhost:5173", // Your Vite dev server
//   credentials: true,
// }));
// app.use(express.json());
// app.use(cookieParser());

// // API Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/notes", noteRoutes);

// // Production serving
// if (process.env.NODE_ENV === "production") {
//   const frontendPath = path.join(__dirname, "../frontend/dist");
//   app.use(express.static(frontendPath));
  
//   app.get("/*path", (req, res) => {
//     res.sendFile(path.join(frontendPath, "index.html"));
//   });
// }
// // Catch-all 404 for unmatched routes (e.g. wrong API endpoints)
// app.use((req, res) => {
//   res.status(404).json({
//     message: `The URL ${req.originalUrl} doesn't exist`
//   });
// });

// // DB & Server
// connectDB().then(() => {
//   app.listen(PORT, () => {
//     console.log(`✅ Server running on http://localhost:${PORT}`);
//   });
// });

/////


/////////////////////
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


const __dirname = path.resolve();
// Middleware
app.use(cors({
  origin: "http://localhost:5173", // Vite dev server
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);



if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("/*app", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}


// DB & Server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
});

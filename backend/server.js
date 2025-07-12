import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./lib/db.js";
import authRoutes from "./routes/auth.routes.js";
import noteRoutes from "./routes/notesRoutes.js";

// Load environment variables
dotenv.config();

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create Express app
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);

// Production: Serve frontend
if (process.env.NODE_ENV === "production") {
  // Serve static files from the *dist* folder at project root
  app.use(express.static(path.join(__dirname, "..", "dist")));

  // For all other routes, serve index.html
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
  });
}

// Connect to DB and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
});

// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import path from "path";



// import connectDB from "./lib/db.js";
// import authRoutes from "./routes/auth.routes.js";
// import noteRoutes from "./routes/notesRoutes.js";

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5001;
// const __dirname = path.resolve();

// // Middleware
// //app.use(cors());
// app.use(cors({
//   origin: "http://localhost:5173", // your frontend origin
//   credentials: true,              // important!
// }));
// app.use(express.json());

// app.use(cookieParser());




// // Routes


// app.use("/api/auth", authRoutes);
// app.use("/api/notes", noteRoutes);


// if (process.env.NODE_ENV === "production") {
//   //app.use(express.static(path.join(__dirname, "../frontend/dist")));
//   app.use(express.static(path.join(__dirname, "../dist")));


//   app.get("*", (req, res) => {
//     //res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
//     res.sendFile(path.join(__dirname, "../dist", "index.html"));

//   });
// }


// // DB & Server
// connectDB().then(() => {
//   app.listen(PORT, () => {
//     console.log(`✅ Server running on http://localhost:${PORT}`);
//   });
// })



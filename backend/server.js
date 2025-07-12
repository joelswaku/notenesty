import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // Assuming you have this for DB connection
import authRoutes from './routes/auth.router.js'; // Your auth routes
import noteRoutes from './routes/notes.router.js'; // Your notes routes
import path from 'path'; // Import the path module
import { fileURLToPath } from 'url'; // For ES Modules __dirname equivalent

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5001;

// Get __dirname equivalent for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to parse JSON bodies
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes); // Ensure your API routes are correctly prefixed
app.use('/api/notes', noteRoutes); // Example: requests to /api/notes will use notes.router.js


// -------------------------------------------------------------
// Serve Frontend for all other GET requests (IMPORTANT FIX HERE)
// -------------------------------------------------------------

// Check if running in production to serve static assets
if (process.env.NODE_ENV === 'production') {
  // Serve static files from the 'frontend/dist' directory
  app.use(express.static(path.join(__dirname, '../frontend/dist')));

  // For any other GET request, serve the main index.html file
  // This allows your React app's client-side routing to take over
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '../frontend', 'dist', 'index.html'))
  );
} else {
  // In development, you might just have a simple message or rely on
  // the frontend dev server to handle the root
  app.get('/', (req, res) => {
    res.send('API is running...'); // Or redirect to frontend dev server if separate
  });
}

// Start the server
app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
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



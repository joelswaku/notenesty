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
//app.use(cors());
app.use(cors({
  origin: "http://localhost:5173", // your frontend origin
  credentials: true,              // important!
}));
app.use(express.json());

app.use(cookieParser());




// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}


// DB & Server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
})



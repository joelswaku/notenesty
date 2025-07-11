import express from "express";
import {
  createNote,
  getAllNotes,
  getSingleNote,
  updateNote,
  deleteNote,
  searchNotes,
} from "../controllers/notes.controller.js";
import { protect } from "../middleware/protect.js";
import { limiter } from "../middleware/rateLimiter.js";


const router = express.Router();

router.use(protect); // protect all routes below


router.post("/", limiter, createNote);
router.get("/", limiter, getAllNotes);
router.get("/:id", getSingleNote);
router.put("/:id", updateNote);
router.delete("/:id" , deleteNote)

router.get("/search", searchNotes);
router.get("/:id", getSingleNote);


export default router;

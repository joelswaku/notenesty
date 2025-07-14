import express from "express";
import {
  createNote,
  getAllNotes,
  getSingleNote,
  updateNote,
  deleteNote,
} from "../controllers/notes.controller.js";
import { protect } from "../middleware/protect.js";

const router = express.Router();

router.use(protect); // protect all routes below

router.post("/", createNote);
router.get("/", getAllNotes);
router.get("/:id", getSingleNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);


export default router;
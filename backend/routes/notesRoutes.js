// import express from "express";
// import {
//   createNote,
//   getAllNotes,
//   getSingleNote,
//   updateNote,
//   deleteNote,
//   searchNotes,
// } from "../controllers/notes.controller.js";
// import { protect } from "../middleware/protect.js";
// //import { limiter } from "../middleware/rateLimiter.js";


// const router = express.Router();

// router.use(protect); // protect all routes below


// router.post("/", createNote);
// router.get("/",  getAllNotes);
// router.get("/:id", getSingleNote);
// router.put("/:id", updateNote);
// router.delete("/:id" , deleteNote)

// router.get("/search", searchNotes);



// export default router;
import express from "express";
import {
  createNote,
  getAllNotes,
  getSingleNote,
  updateNote,
  deleteNote,
  //searchNotes,
} from "../controllers/notes.controller.js";
import { protect } from "../middleware/protect.js";
//import { limiter } from "../middleware/rateLimiter.js";


const router = express.Router();

router.use(protect); // protect all routes below


router.post("/", createNote);
router.get("/",  getAllNotes);
router.get("/:id", getSingleNote);
router.put("/:id", updateNote);
router.delete("/:id" , deleteNote)

// If you want a search route, uncomment and ensure its path doesn't conflict
// e.g., router.get("/search", searchNotes);

// Remove this duplicate line:
// router.get("/:id", getSingleNote); // THIS IS THE PROBLEM!


export default router;
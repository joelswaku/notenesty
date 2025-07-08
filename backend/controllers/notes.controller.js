import Note from "../models/note.model.js";


// Get all notes for the authenticated user
export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user._id }).sort({ createdAt: -1 });// sort notes by createdAt in descending order
    res.status(200).json(notes);
    console.log('Authenticated user:', req.user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single note by ID (only if owned by the user)
export const getSingleNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    if (note.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new note for the authenticated user
// Create a new note for the authenticated user
export const createNote = async (req, res) => {
  try {
    // Extract note data from request body
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required" });
    }

    const note = await Note.create({
      title,
      content,
      user: req.user._id, // associate note with user
    });

    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};



// Update a note if it belongs to the authenticated user
export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    if (note.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    note.title = title;
    note.content = content;
   
    await note.save();
    

    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a note if it belongs to the authenticated user
export async function deleteNote(req, res) {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) return res.status(404).json({ message: "Note not found" });

    if (note.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    await Note.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Note deleted successfully!" });
  } catch (error) {
    console.error("Error in deleteNote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
// GET /api/notes/search?keyword=...&from=...&to=...
export const searchNotes = async (req, res) => {
  try {
    const { keyword = "", from, to } = req.query;

    const filter = {
      user: req.user._id,
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { content: { $regex: keyword, $options: "i" } }
      ]
    };

    if (from || to) {
      filter.createdAt = {};
      if (from) filter.createdAt.$gte = new Date(from);
      if (to) filter.createdAt.$lte = new Date(to);
    }

    const notes = await Note.find(filter).sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Search failed", error: error.message });
  }
};

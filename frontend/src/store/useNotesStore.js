import { create } from 'zustand';
import axios from '../lib/axios';
import { useRateLimitStore } from './useRateLimitStore';

export const useNotesStore = create((set) => ({
  notes: [],
  loading: false,
  error: null,

  fetchNotes: async () => {
    const { setNotesRateLimited } = useRateLimitStore.getState();
    set({ loading: true, error: null });

    try {
      const res = await axios.get('/notes');
      set({ notes: res.data, loading: false });
    } catch (err) {
      if (err.response?.status === 429) {
        setNotesRateLimited(true);
      }
      set({
        error: err.response?.status || err.message,
        loading: false,
      });
    }
  },

addNote: async ({ title, content }) => {
  const { setNotesRateLimited } = useRateLimitStore.getState();

  try {
    const res = await axios.post('/notes', { title, content });
    set((state) => ({
      notes: [...state.notes, res.data],
    }));
  } catch (err) {
    if (err.response?.status === 429) {
      setNotesRateLimited(true);
    }
    console.error(err);
    throw err;
  }
},


  // Update a note
updateNote: async (id, updatedData) => {
  const { setNotesRateLimited } = useRateLimitStore.getState();
  try {
    const res = await axios.put(`/notes/${id}`, updatedData);
    set((state) => ({
      notes: state.notes.map((note) =>
        note._id === id ? res.data : note
      ),
    }));
  } catch (err) {
    if (err.response?.status === 429) {
      setNotesRateLimited(true);
    }
    console.error(err);
  }
},


deleteNote: async (id) => {
  const { setNotesRateLimited } = useRateLimitStore.getState();
  try {
    await axios.delete(`/notes/${id}`);
    set((state) => ({
      notes: state.notes.filter((note) => note._id !== id),
    }));
  } catch (err) {
    if (err.response?.status === 429) {
      setNotesRateLimited(true);
    }
    console.error(err);
  }
},

  
}));

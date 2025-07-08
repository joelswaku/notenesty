import { create } from 'zustand';

export const useRateLimitStore = create((set) => ({
  notesRateLimited: false,
  setNotesRateLimited: (value) => {
    set({ notesRateLimited: value });

    if (value === true) {
      setTimeout(() => set({ notesRateLimited: false }), 10000); // Reset after 10s
    }
  },
}));

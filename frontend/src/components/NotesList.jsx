import React, { useEffect } from 'react';
import { useNotesStore } from '../store/useNotesStore';
import RateLimitedUI from './RateLimitedUI';
import { useRateLimitStore } from '../store/useRateLimitStore';
import NoteCard from './NoteCard';
import { useSearchStore } from '../store/useSearchStore';
import NotesNotFound from './NotesNotFound';

function NotesList() {
  const { searchTerm } = useSearchStore();
  const { notes, fetchNotes, error, loading } = useNotesStore();
  const { notesRateLimited } = useRateLimitStore();

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  // Defensive normalization
  const safeSearch = searchTerm?.toLowerCase() || '';

  const filteredNotes = notes.filter((note) =>
    (note.title?.toLowerCase() || '').includes(safeSearch) ||
    (note.content?.toLowerCase() || '').includes(safeSearch)
  );

  if (loading) return <p>Loading notes...</p>;

  if (error === 429 || error?.includes?.('429') || notesRateLimited) {
    return (
  <div className="flex justify-center items-center min-h-screen">
    <p className="text-red-500">You’ve hit the rate limit. Please try again later.</p>
  </div>
);
  }


    
  return filteredNotes.length > 0 ? (
  <div className="max-w-6xl mx-auto px-4 py-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {filteredNotes.map((note) => (
      <NoteCard key={note._id} note={note} />
    ))}
  </div>
) : (
  <div className="flex flex-col items-center justify-center w-full min-h-[60vh] px-4">
    <NotesNotFound />
  </div>
);
}

export default NotesList;

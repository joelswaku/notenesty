// components/SearchResults.jsx
import React from 'react';
import { useSearchStore } from '../store/searchStore';
import NoteCard from './NoteCard';

function SearchResults() {
  const { results, error } = useSearchStore();

  if (error) return <p className="text-red-500">{error}</p>;
  if (!results.length) return <p className="text-gray-500">No results found.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {results.map((note) => (
        <NoteCard key={note._id} note={note} />
      ))}
    </div>
  );
}

export default SearchResults;

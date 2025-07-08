import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useNotesStore } from '../store/useNotesStore';

function NoteDetail() {
  const { id } = useParams();
  const { notes, loading, error } = useNotesStore();

  if (loading) return <p className="text-center py-8">Loading...</p>;
  if (error) return <p className="text-center py-8 text-red-500">Error: {error}</p>;

  const note = notes.find((note) => note._id === id);

  if (!note) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-700 to-indigo-900 text-white px-4">
        <h2 className="text-3xl font-bold mb-4">Note Not Found</h2>
        <p className="mb-6 text-center max-w-md">
          The note you’re looking for doesn’t exist or has been deleted.
        </p>
        <Link
          to="/notes"
          className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          Back to Notes
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow mt-8">
      <h1 className="text-3xl font-bold mb-4">{note.title}</h1>
      <p className="text-gray-700 mb-6 whitespace-pre-line">{note.content}</p>
      <Link
        to={`/note/${note._id}/edit`}
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Edit
      </Link>
    </div>
  );
}

export default NoteDetail;

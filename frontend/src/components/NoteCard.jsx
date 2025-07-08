import React from 'react';
import { Link } from 'react-router-dom';

function NoteCard({ note }) {
  if (!note) return null;

  return (
    <Link
      to={`/note/${note._id}`}
      className="group relative block rounded-xl border border-gray-200 shadow hover:shadow-lg transition duration-300 bg-white overflow-hidden"
    >
      <div className="p-5 flex flex-col h-full">
        <h3 className="text-lg font-bold text-blue-800 group-hover:text-blue-600 transition-colors line-clamp-1">
          {note.title || 'Untitled Note'}
        </h3>
        
        <p className="mt-2 text-gray-700 text-sm line-clamp-3">
          {note.content || 'No content available.'}
        </p>
        
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100 text-xs text-gray-500">
          <span>{new Date(note.createdAt).toLocaleDateString()}</span>
          <span className="inline-block bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full text-[10px]">
            NoteHub
          </span>
        </div>
      </div>

      <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 group-hover:from-blue-600 group-hover:to-indigo-700 transition-all duration-300" />
    </Link>
  );
}

export default NoteCard;

import React from "react";
import { FileWarning } from "lucide-react"; // optional icon (run: npm i lucide-react)

function NotesNotFound() {
  return (
    <div className="w-full min-h-[60vh] flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl p-8 shadow-lg transition-all duration-300">
      
      {/* Icon */}
      <FileWarning size={48} className="text-blue-700 mb-4" />

      {/* Heading */}
      <h2 className="text-3xl font-bold text-blue-800 mb-2">No Notes Found</h2>

      {/* Subtext */}
      <p className="text-gray-800 text-lg mb-4 max-w-md">
        We couldn't find any notes. Try adjusting your search or create a new one to get started!
      </p>

      {/* Optional Button */}
      <button className="mt-2 px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-sm font-semibold shadow transition-transform hover:scale-105">
        Create New Note
      </button>
    </div>
  );
}

export default NotesNotFound;

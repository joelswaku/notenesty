import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center animate-fade-in">
        <div className="flex justify-center mb-4">
          <AlertTriangle size={48} className="text-yellow-500" />
        </div>
        <h1 className="text-6xl font-extrabold text-blue-800 mb-2">404</h1>
        <p className="text-lg text-gray-700 mb-6">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-transform hover:scale-105 shadow"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;

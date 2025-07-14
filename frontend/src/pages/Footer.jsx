import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="mt-12 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6 text-gray-700 dark:text-gray-300 ">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Notesty. All rights reserved.
          <Link to='/' className='hover:text-sky-600 dark:hover:text-sky-400'>notenesty</Link>
        </div>
        <div className="flex gap-4 text-sm">
          <Link to="/about" className="hover:text-sky-600 dark:hover:text-sky-400">About</Link>
          <Link to="/contact" className="hover:text-sky-600 dark:hover:text-sky-400">Contact</Link>
          <Link to="/privacy" className="hover:text-sky-600 dark:hover:text-sky-400">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-sky-600 dark:hover:text-sky-400">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useUserStore } from '../store/userStore';
import { PlusIcon, MenuIcon, XIcon } from 'lucide-react';

import { useSearchStore } from '../store/useSearchStore';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useUserStore();
  const { searchTerm, setSearchTerm } = useSearchStore();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-3">
        {/* Left section: Theme toggle + logo */}
        <div className="flex items-center gap-4 w-full md:w-auto">
   
          <h1
            className="text-2xl font-bold text-blue-700 cursor-pointer"
            onClick={() => navigate('/')}
          >
            Notenesty
          </h1>

          <button
            className="md:hidden text-blue-700 ml-auto"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Search bar */}
        <div className="w-full md:flex-1 flex justify-center md:justify-center">
          <input
            type="text"
            placeholder="Search notes..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Navigation/User Actions */}
        <nav
          className={`w-full md:w-auto ${menuOpen ? 'block' : 'hidden md:block'}`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
            <li>
              <NavLink
                to="/create"
                className="flex items-center text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                <PlusIcon className="mr-2" size={18} />
                Create Note
              </NavLink>
            </li>

            {user ? (
              <>
                <li>
                  <NavLink to="/profile" className="block">
                    <img
                      src={`https://ui-avatars.com/api/?name=${user.name}&background=ffffff&color=3b82f6&rounded=true&size=64`}
                      alt={`${user.name}'s avatar`}
                      className="w-12 h-12 rounded-full shadow hover:scale-105 transition-transform"
                    />
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={() => {
                      logout();
                      navigate('/login');
                    }}
                    className="text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <span className="text-white bg-blue-500 px-4 py-2 rounded-md">
                  We’re excited to see you here!
                </span>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;

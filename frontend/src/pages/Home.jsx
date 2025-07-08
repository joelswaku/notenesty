import React from 'react';
import { useUserStore } from '../store/userStore';
import { useRateLimitStore } from '../store/useRateLimitStore';
import { Link } from 'react-router-dom';
import RateLimitedUI from '../components/RateLimitedUI';

function Home() {
  const { user } = useUserStore();
  const { authRateLimited } = useRateLimitStore();

  if (authRateLimited) {
    return <RateLimitedUI />;
  }

  return (
    <div className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white min-h-screen flex flex-col md:flex-row items-center justify-center p-8 space-y-8 md:space-y-0 md:space-x-12  position-relative">
     
     
     

      {/* Left: Animated Book Image */}
      <div className="flex-shrink-0 flex items-center justify-center">
        <div className="bg-white/20 rounded-full p-6 shadow-lg">
          <img
            src="/public/book.jpg"
            alt="Book"
            className="w-32 h-32 md:w-40 md:h-40 animate-pulse hover:animate-spin transition duration-700 ease-in-out"
          />
        </div>
      </div>

      {/* Right: Hero Content */}
      <div className="max-w-xl text-center space-y-6">
      <div className='position-relative'>
         <Link to="/todo" className='bg-white text-blue-700 font-semibold px-6 py-3 rounded-l-2xl shadow hover:bg-gray-300 transition absolute right-30  top-30'>to to-list</Link>
      </div>
        <div className="bg-blue-600 rounded-full w-20 h-20 mx-auto flex items-center justify-center shadow-lg">
            
          <span className="text-2xl font-bold">📝</span>
        </div>

        {user ? (
          <>
            <h2 className="text-3xl font-bold">Welcome back, {user.name}!</h2>
            <p className="text-lg">Access your saved notes and keep productivity flowing.</p>
            <Link
              to="/notes"
              className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
            >
              View Your Notes
            </Link>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold">Start Smart Note-Taking</h1>
            <p className="text-lg font-medium">
              Get unlimited notes <span className="text-blue-300">on us</span> — fast, secure, and always accessible.
            </p>
            <p className="text-sm text-blue-200">No distractions. Just productivity.</p>

            <div className="space-x-4 mt-4">
              <Link
                to="/login"
                className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/signup"
                className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-600 transition-all duration-200 transform hover:scale-105"
              >
                Sign Up
              </Link>
            </div>

            <p className="text-xs mt-6 text-blue-300">
              Free access ends 10/30/25. Requires account signup to unlock full features.
            </p>
             <div className='fex justify-start space-x-9 p-7'><Link to="/features" className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">explore more features</Link> 
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;

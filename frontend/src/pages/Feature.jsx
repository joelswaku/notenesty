import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, ListTodo } from 'lucide-react'

function Feature() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">

      {/* Section 1 */}
      <div className="relative h-screen w-full flex justify-center items-center bg-gradient-to-br from-sky-600 via-cyan-500 to-blue-400">
        <div className="absolute inset-0 bg-url('/adel.jpg') bg-cover bg-center"></div>

        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Unlock Your Imagination</h2>
          <p className="mb-6 max-w-xl mx-auto">Explore amazing stories and wisdom inside every book.</p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 px-6 py-3 bg-sky-700 hover:bg-sky-800 rounded-lg text-lg font-semibold shadow-xl transition-transform hover:scale-105"
          >
            <BookOpen size={24} />
            <span>Read More Books</span>
          </Link>
        </div>
      </div>

      {/* Section 2 */}
      <div className="relative h-screen w-full flex justify-center items-center bg-gradient-to-br from-sky-600 via-cyan-400 to-emerald-400   bg-[url('/adel1.jpg')] bg-cover bg-center">
        <div className="absolute inset-0  bg-[url('/adel1.jpg')] bg-cover bg-center w-3xl h-14">
        hwll
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Organize Your Day</h2>
          <p className="mb-6 max-w-xl mx-auto">Stay productive with your daily to-do list.</p>
          <Link
            to="/todo"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg text-lg font-semibold shadow-xl transition-transform hover:scale-105"
          >
            <ListTodo size={24} />
            <span>Go to To-Do List</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Feature

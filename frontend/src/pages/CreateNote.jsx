import { useState } from 'react';
import { useNotesStore } from '../store/useNotesStore';
import { ArrowLeftIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

function CreateNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addNote, error, loading } = useNotesStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    await addNote({ title, content });
    setTitle('');
    setContent('');
    navigate('/notes');  // ✅ Go back to notes after creating
  };

  const handleClear = () => {
    setTitle('');
    setContent('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-2xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <Link to="/notes" className="flex items-center text-blue-600 hover:text-blue-800 transition">
            <ArrowLeftIcon className="w-5 h-5 mr-1" />
            Back to Notes
          </Link>
          <button
            onClick={handleClear}
            className="text-red-500 hover:text-red-700 transition underline"
          >
            Clear Form
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 border border-blue-200">
          <h2 className="text-2xl font-bold mb-6 text-blue-700">Create New Note</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                placeholder="Note Title"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300 outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
              <textarea
                placeholder="Write your note here..."
                className="w-full border border-gray-300 rounded-md px-3 py-2 h-32 focus:ring focus:ring-blue-300 outline-none resize-y"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={handleClear}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
              >
                Clear
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-50"
                disabled={loading}
              >
                {loading ? 'Creating...' : 'Create Note'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateNote;

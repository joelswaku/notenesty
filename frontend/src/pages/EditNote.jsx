import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useNotesStore } from '../store/useNotesStore';
import { ArrowLeftIcon, Trash2Icon } from 'lucide-react';
import toast from 'react-hot-toast';

function EditNote() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { notes, updateNote, deleteNote, fetchNotes, loading, error } = useNotesStore();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (notes.length === 0) {
      fetchNotes();
    }
  }, [fetchNotes, notes]);

  useEffect(() => {
    const note = notes.find((n) => n._id === id);
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, [notes, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim().length < 3) {
      toast.error('Title must be at least 3 characters.');
      return;
    }
    if (content.trim().length < 5) {
      toast.error('Content must be at least 5 characters.');
      return;
    }
    await updateNote(id, { title, content });
    toast.success('Note updated successfully!');
    navigate('/notes');
  };

  const handleDelete = async () => {
    const confirmed = window.confirm('Are you sure you want to delete this note?');
    if (confirmed) {
      await deleteNote(id);
      toast.success('Note deleted.');
      navigate('/notes');
    }
  };

  if (loading) return <p className="text-center py-8">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-purple-700">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <Link
              to="/notes"
              className="flex items-center gap-2 text-blue-600 hover:underline"
            >
              <ArrowLeftIcon size={20} /> Back to Notes
            </Link>
            <button
              onClick={handleDelete}
              className="flex items-center gap-1 text-red-600 hover:text-red-800"
            >
              <Trash2Icon size={20} /> Delete
            </button>
          </div>
          <h2 className="text-2xl font-bold mb-4">Edit Note</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Content</label>
              <textarea
                className="w-full border border-gray-300 rounded px-3 py-2 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                {loading ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditNote;

import React, { useState, lazy, Suspense } from 'react';
import { useUserStore } from '../store/userStore';
import { useNotesStore } from '../store/useNotesStore';
import {
  PencilIcon,
  MailIcon,
  CalendarIcon,
  FileTextIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

const EditProfile = lazy(() => import('../components/EditProfile.jsx'));

function Profile() {
  const { user } = useUserStore();
  const { notes } = useNotesStore();

  const [isEditing, setIsEditing] = useState(false);

  const openEdit = () => setIsEditing(true);
  const closeEdit = () => setIsEditing(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-sky-200 dark:from-gray-950 dark:to-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white/60 dark:bg-gray-900/60 backdrop-blur-md shadow-2xl rounded-3xl p-10 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-800">

        {/* Header */}
        <div className="flex items-center justify-between mb-10 border-b pb-4 border-gray-300 dark:border-gray-700">
          <div>
            <h1 className="text-4xl font-extrabold text-sky-800 dark:text-sky-300">
              Hello, {user.name} 👋
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
              Welcome to your personalized dashboard
            </p>
          </div>
          <button
            onClick={openEdit}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white dark:border-sky-400 dark:text-sky-400 dark:hover:bg-sky-400 dark:hover:text-gray-900 transition"
          >
            <PencilIcon size={18} />
            Edit Profile
          </button>
        </div>

        {/* Avatar & Details */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <img
            src={`https://ui-avatars.com/api/?name=${user.name}&background=0ea5e9&color=fff&rounded=true&size=128`}
            alt="Profile"
            className="w-36 h-36 rounded-full shadow-xl ring-4 ring-sky-300 dark:ring-sky-700"
          />

          <div className="flex-1 space-y-6">
            <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-5 shadow hover:shadow-lg transition">
              <div className="flex items-center gap-3 text-sky-700 dark:text-sky-300">
                <MailIcon size={22} />
                <h2 className="font-bold text-lg">Email</h2>
              </div>
              <p className="mt-1 text-gray-700 dark:text-gray-300 break-words">{user.email}</p>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-5 shadow hover:shadow-lg transition">
              <div className="flex items-center gap-3 text-sky-700 dark:text-sky-300">
                <CalendarIcon size={22} />
                <h2 className="font-bold text-lg">Member Since</h2>
              </div>
              <p className="mt-1 text-gray-700 dark:text-gray-300">
                {new Date(user.createdAt).toLocaleDateString()}
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-5 shadow hover:shadow-lg transition">
              <div className="flex items-center gap-3 text-sky-700 dark:text-sky-300">
                <FileTextIcon size={22} />
                <h2 className="font-bold text-lg">Your Notes</h2>
              </div>
              <div className="mt-1 flex items-center justify-between text-gray-700 dark:text-gray-300">
                <span>{notes.length} saved notes</span>
                <Link
                  to="/notes"
                  className="inline-flex items-center gap-2 bg-sky-600 text-white px-3 py-1.5 rounded-full text-sm hover:bg-sky-700 dark:bg-sky-400 dark:text-gray-900 dark:hover:bg-sky-300 transition"
                >
                  View Notes
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Log */}
        <div className="bg-sky-50/80 dark:bg-gray-800/80 rounded-2xl p-6 border border-sky-100 dark:border-gray-700 shadow">
          <h3 className="text-2xl font-semibold text-sky-800 dark:text-sky-300 mb-4">
            Recent Activity
          </h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300 list-disc pl-5">
            <li>✅ You created a new note: “Meeting Notes”</li>
            <li>📝 You updated a note: “Project Plan”</li>
            <li>📌 You pinned “Important Ideas”</li>
            <li>🗑️ You deleted a note: “Old Draft”</li>
          </ul>
        </div>
      </div>

      {/* Dynamic Edit Profile Modal */}
      {isEditing && (
        <Suspense fallback={
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white z-50">
            Loading editor...
          </div>
        }>
          <EditProfile user={user} onClose={closeEdit} />
        </Suspense>
      )}
    </div>
  );
}

export default Profile;

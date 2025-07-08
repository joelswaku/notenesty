import React from 'react';

export default function EditProfile({ user, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-4">Edit Profile</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Name</label>
            <input
              type="text"
              defaultValue={user.name}
              className="w-full border px-3 py-2 rounded dark:bg-gray-800 dark:text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input
              type="email"
              defaultValue={user.email}
              className="w-full border px-3 py-2 rounded dark:bg-gray-800 dark:text-white"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

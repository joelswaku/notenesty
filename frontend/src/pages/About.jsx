import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100 dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white/70 dark:bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800">
        <h1 className="text-4xl font-bold text-sky-800 dark:text-sky-300 mb-6 text-center">About Notesty</h1>
        
        <p className="mb-6 text-lg">
          Notenesty is a simple, elegant notes app designed to help you capture your ideas, organize your thoughts, and access your notes anywhere. Whether you're managing daily tasks, writing plans, or brainstorming, Notenesty keeps your notes safe and accessible.
        </p>

        <p className="mb-6">
          Our mission is to make note-taking effortless and secure. We believe your data belongs to you. That's why we prioritize privacy, security, and user-friendly design in everything we build.
        </p>

        <p>
          Thank you for choosing Notenesty. We're excited to help you stay organized, creative, and productive!
        </p>
      </div>
    </div>
  );
}

export default About;

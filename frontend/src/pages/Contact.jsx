import React, { useState } from 'react';
import { useUserStore } from '../store/userStore';
import { toast } from 'react-hot-toast';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const { contactForm } = useUserStore();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Check client side
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    const success = await contactForm(name, email, message);
    if (success) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100 dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white/70 dark:bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800">
        <h1 className="text-4xl font-bold text-sky-800 dark:text-sky-300 mb-6 text-center">Contact Us</h1>

        {submitted ? (
          <div className="text-center text-lg text-green-600 dark:text-green-400">
            ✅ Thank you! We'll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-700 rounded px-3 py-2 bg-white dark:bg-gray-800 dark:text-white"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-700 rounded px-3 py-2 bg-white dark:bg-gray-800 dark:text-white"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Message</label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full border border-gray-300 dark:border-gray-700 rounded px-3 py-2 bg-white dark:bg-gray-800 dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded transition dark:bg-sky-400 dark:text-gray-900 dark:hover:bg-sky-300"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;

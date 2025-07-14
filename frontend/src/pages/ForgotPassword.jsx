import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { useUserStore } from '../store/userStore';
import { useNavigate } from 'react-router-dom';

export default function ForgetPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const forgetPassword = useUserStore((state) => state.forgetPassword);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitting(true);

  const success = await forgetPassword(email);

  console.log("forgetPassword returned:", success);

  setSubmitting(false);

  if (success) {
    navigate(`/verify-reset-code?email=${encodeURIComponent(email)}`);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <div className="flex flex-col items-center mb-6">
          <Mail className="w-12 h-12 text-blue-500" />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-2">Forgot Password</h2>
          <p className="text-gray-500 dark:text-gray-400 text-center mt-1">
            Enter your email to receive a reset code.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value.toLocaleLowerCase())}
            
          />
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition"
          >
            {submitting ? 'Sending...' : 'Send Reset Code'}
          </button>
        </form>
      </div>
    </div>
  );
}
////////////////l;gfsigjdgpegedg///////////-//-//-/-/-/-/-/-/-/-//-/-/-/-/

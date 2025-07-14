
///////////////////////////////////

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUserStore } from '../store/userStore';

function Signup() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();
  const { signup, loading } = useUserStore();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(formData); // Make sure signup completes before redirecting
     
      
    navigate('/login');
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded shadow-md transition-all duration-300 ease-in-out hover:scale-105">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email.toLocaleLowerCase()}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>
        <p className="text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
        <p>
          By signing up, you agree to our{" "} 
          <Link to="/terms" className="text-blue-400 hover:underline">terms</Link> and <Link to="/privacy" className="text-blue-400 hover:underline">privacy policy</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;

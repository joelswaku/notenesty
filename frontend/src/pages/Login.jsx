import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUserStore } from '../store/userStore';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { login, loading } = useUserStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(formData.email, formData.password);
    if (success) {
      navigate('/'); // only navigate on successful login
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded shadow-md transition-all duration-300 ease-in-out hover:scale-105">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Log In</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
          className={`w-full bg-blue-600 text-white py-2 rounded-md transition ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Log In'}
        </button>

        <p className="text-sm text-gray-400 text-center">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Sign up
          </Link>
        </p>
        <p className="text-sm text-gray-400 text-center">
          <Link to="/forgot-password" className="text-blue-400 hover:underline">
            Forgot Password?
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;

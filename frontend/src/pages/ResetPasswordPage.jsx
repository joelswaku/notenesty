import React, { useState, useEffect } from 'react';
import { Lock } from 'lucide-react';
import { useUserStore } from '../store/userStore';
import { useNavigate, useParams } from 'react-router-dom';

function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const { code } = useParams();
  const navigate = useNavigate();

  const resetPassword = useUserStore((state) => state.resetPassword);

  // ✅ Redirect to /forgot-password if no code param
  useEffect(() => {
    if (!code) {
      navigate('/forgot-password');
    }
  }, [code, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const success = await resetPassword(code, password);

    setSubmitting(false);

    if (success) {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <div className="flex flex-col items-center mb-6">
          <Lock className="w-12 h-12 text-green-500" />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-2">
            Reset Your Password
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-center mt-1">
            Enter your new password below.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-green-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition"
          >
            {submitting ? 'Resetting...' : 'Reset Password'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPasswordPage;

///-/-/-/-/-/-/-/-/-/-/-/-/-/-/--/-/-//-/-/-/-/-/-/-
// import React, { useState } from 'react';
// import { Lock } from 'lucide-react';
// import { useUserStore } from '../store/userStore';
// import { useNavigate, useParams } from 'react-router-dom';

// function ResetPasswordPage() {
//   const [password, setPassword] = useState('');
//   const [submitting, setSubmitting] = useState(false);

//   const { code } = useParams();
//   const navigate = useNavigate();

//   const resetPassword = useUserStore((state) => state.resetPassword);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);

//     const success = await resetPassword(code, password);

//     setSubmitting(false);

//     if (success) {
//       navigate('/login');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
//       <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
//         <div className="flex flex-col items-center mb-6">
//           <Lock className="w-12 h-12 text-green-500" />
//           <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-2">
//             Reset Your Password
//           </h2>
//           <p className="text-gray-500 dark:text-gray-400 text-center mt-1">
//             Enter your new password below.
//           </p>
//         </div>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="password"
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-green-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//             placeholder="New password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             minLength={6}
//           />
//           <button
//             type="submit"
//             disabled={submitting}
//             className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition"
//           >
//             {submitting ? 'Resetting...' : 'Reset Password'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ResetPasswordPage;

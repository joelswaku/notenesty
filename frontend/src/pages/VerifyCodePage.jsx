// import React, { useState, useEffect } from 'react';
// import { ShieldCheck } from 'lucide-react';
// import { useUserStore } from '../store/userStore';
// import { useNavigate, useLocation } from 'react-router-dom';

// function VerifyCodePage() {
//   const [email, setEmail] = useState('');
//   const [code, setCode] = useState('');
//   const [submitting, setSubmitting] = useState(false);

//   const navigate = useNavigate();
//   const location = useLocation();

//   const verifyResetCode = useUserStore((state) => state.verifyResetCode);

//   const emailParam = new URLSearchParams(location.search).get('email');

//   useEffect(() => {
//     if (!emailParam) {
//       navigate('/forgot-password');
//     } else {
//       setEmail(emailParam);
//     }
//   }, [emailParam, navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);

//     const success = await verifyResetCode(email, code);

//     setSubmitting(false);

//     if (success) {
//       navigate(`/reset-password/${encodeURIComponent(code)}`);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
//       <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
//         <div className="flex flex-col items-center mb-6">
//           <ShieldCheck className="w-12 h-12 text-green-500" />
//           <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-2">Verify Reset Code</h2>
//           <p className="text-gray-500 dark:text-gray-400 text-center mt-1">
//             Enter the email and the code sent to you.
//           </p>
//         </div>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="email"
//             required
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-green-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//             placeholder="you@example.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="text"
//             required
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-green-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//             placeholder="Enter your code"
//             value={code}
//             onChange={(e) => setCode(e.target.value)}
//           />
//           <button
//             type="submit"
//             disabled={submitting}
//             className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition"
//           >
//             {submitting ? 'Verifying...' : 'Verify Code'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default VerifyCodePage;

///////=/=/=/=/=/=/=/==//==/=/=/=/=/=/=/==

///////-/-/-/-/-/-//--/-/-/-/-//-//-/-
import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { useUserStore } from '../store/userStore';
import { useNavigate } from 'react-router-dom';

function VerifyCodePage() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');


  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();
  const verifyResetCode = useUserStore((state) => state.verifyResetCode);


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const success = await verifyResetCode(email, code);

    setSubmitting(false);

    if (success) {
      // Navigate to reset-password page with code as token
      navigate(`/reset-password/${encodeURIComponent(code)}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <div className="flex flex-col items-center mb-6">
          <ShieldCheck className="w-12 h-12 text-green-500" />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-2">Verify Reset Code</h2>
          <p className="text-gray-500 dark:text-gray-400 text-center mt-1">
            Enter the code sent to your email.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-green-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-green-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Enter your code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition"
          >
            {submitting ? 'Verifying...' : 'Verify Code'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default VerifyCodePage;

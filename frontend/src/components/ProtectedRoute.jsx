// // components/ProtectedRoute.js
// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useUserStore } from '../store/userStore';

// const ProtectedRoute = ({ children }) => {
//   const { user } = useUserStore();

//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;
///////
// components/ProtectedRoute.js
// import React, { useEffect } from 'react';
// import { Navigate } from 'react-router-dom';
// import { useUserStore } from '../store/userStore';

// const ProtectedRoute = ({ children }) => {
//   const { user, loading, checkAuth } = useUserStore();

//   useEffect(() => {
//     // Run checkAuth on mount (silent = true to suppress toast)
//     checkAuth(true);
//   }, [checkAuth]);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen text-xl">
//         Checking authentication...
//       </div>
//     );
//   }

//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;
////////
// components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserStore } from '../store/userStore';

const ProtectedRoute = ({ children }) => {
  const { user, checkingAuth } = useUserStore();

  if (checkingAuth) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold text-blue-700">Checking your session...</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

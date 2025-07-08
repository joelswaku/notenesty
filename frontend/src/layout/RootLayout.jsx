import React, { useEffect, useRef } from 'react';
import { Outlet , useLocation} from 'react-router-dom';
import NavBar from '../components/NavBar';

import { useUserStore } from '../store/userStore';
import Footer from '../pages/Footer';

function RootLayout() {
   const { checkAuth, loading } = useUserStore();
  // const hasCheckedAuth = useRef(false); // 👈 track initial run

  // useEffect(() => {
  //   if (!hasCheckedAuth.current) {
  //     checkAuth(true); // silent check
  //     hasCheckedAuth.current = true; // ✅ mark as done
  //   }
  // }, [checkAuth]);
  /////////
   const hasCheckedAuth = useRef(false);
  

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


useEffect(() => {
  if (!hasCheckedAuth.current) {
    checkAuth(true);
    hasCheckedAuth.current = true;
  }
}, [checkAuth]);



  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-700 to-indigo-900 text-white">
        <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mb-4 shadow-lg">
          <span className="text-2xl font-bold text-blue-700">📝</span>
        </div>
        <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-white mb-4"></div>
        <p className="text-lg font-medium tracking-wide">Checking your session...</p>
      </div>
    );
  }

  return (
    <div>
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;

import React, { useEffect, useState } from 'react';

function ThemeSwap() {
  const [isDark, setIsDark] = useState(false);

  // Sync the initial theme based on localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    setIsDark(savedTheme === 'synthwave');
  }, []);

  const handleToggle = (e) => {
    const newTheme = e.target.checked ? 'synthwave' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setIsDark(e.target.checked);
  };

  return (
    <label className="swap swap-rotate cursor-pointer">
      {/* Hidden checkbox controls theme */}
      <input
        type="checkbox"
        onChange={handleToggle}
        checked={isDark}
      />

      {/* Sun Icon (Light Mode) */}
      <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M5.64 17.657l-1.414-1.414 1.06-1.06 1.414 1.414-1.06 1.06zm12.02-12.02l-1.414 1.414-1.06-1.06 1.414-1.414 1.06 1.06zM12 4V2h0v2h0zm0 18v-2h0v2h0zm8-10h2v0h-2v0zm-18 0h2v0H2v0zm15.364 6.364l1.414-1.414 1.06 1.06-1.414 1.414-1.06-1.06zM6.343 6.343L4.93 4.93l1.06-1.06 1.414 1.414-1.06 1.06zM12 6a6 6 0 100 12 6 6 0 000-12z" />
      </svg>

      {/* Moon Icon (Dark Mode / Synthwave) */}
      <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M21.752 15.002A9.718 9.718 0 0112 22C6.477 22 2 17.523 2 12c0-4.303 2.74-7.933 6.597-9.212a1 1 0 011.27.972c0 5.522 4.478 10 10 10a1 1 0 01.972 1.27 9.685 9.685 0 01-.087.942z" />
      </svg>
    </label>
  );
}

export default ThemeSwap;

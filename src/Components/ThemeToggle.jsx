
// import { useState, useEffect } from 'react';

// export default function ThemeToggle() {
//   const [theme, setTheme] = useState('light');

//   useEffect(() => {
//     // Get saved theme or respect system preference
//     const savedTheme = localStorage.getItem('theme');
//     const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//     const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

//     setTheme(initialTheme);
//     document.documentElement.setAttribute('data-theme', initialTheme);
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//     localStorage.setItem('theme', newTheme);
//     document.documentElement.setAttribute('data-theme', newTheme);
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="p-2 rounded-full text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 transition-all"
//       aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
//     >
//       {theme === 'light' ? (
//         // 🌙 Moon
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//           <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
//         </svg>
//       ) : (
//         // ☀️ Sun
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//           <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
//         </svg>
//       )}
//     </button>
//   );
// }
// src/components/ThemeToggle.jsx
// export default function ThemeToggle() {
//   const toggleTheme = () => {
//     const html = document.documentElement;
//     const current = html.getAttribute('data-theme') || 'light';
//     const next = current === 'light' ? 'dark' : 'light';
//     html.setAttribute('data-theme', next);
//     localStorage.setItem('theme', next);
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="btn btn-ghost btn-circle"
//       aria-label="Toggle theme"
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="20"
//         height="20"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d={
//             document.documentElement.getAttribute('data-theme') === 'dark'
//               ? 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
//               : 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
//           }
//         />
//       </svg>
//     </button>
//   );
// }
// components/ThemeToggle.jsx
'use client'; // 👈 required for client-side hooks in App Router

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Prevent hydration error
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 transition"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        // ☀️ Sun
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
      ) : (
        // 🌙 Moon
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  );
}
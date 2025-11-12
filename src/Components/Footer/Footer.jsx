// import React from 'react';

// const Footer = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Footer; 
// export default function Footer() {
//   return (
//     <footer className="bg-gray-800 text-gray-300 py-6 mt-auto">
//       <div className="container mx-auto px-4 text-center">
//         <p className="mb-2">
//           &copy; {new Date().getFullYear()} <span className="text-white font-semibold">FreelanceHub</span>. All rights reserved.
//         </p>
//         <p className="text-sm opacity-75">
//           Connecting talent with opportunity — one job at a time.
//         </p>
//       </div>
//     </footer>
//   );
// }

import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-600 to-gray-800 text-gray-300 pt-12 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Column 1: Brand & Tagline */}
          <div>
            <h3 className="text-white text-xl font-bold mb-3 flex items-center">
              <span className="bg-blue-600 w-2 h-6 mr-2 rounded"></span>
              Freelance<span className="text-blue-300">Hub</span>
            </h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Connecting talent with opportunity — one job at a time.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/allJobs" className="hover:text-white transition">All Jobs</Link></li>
              <li><Link to="/addJobs" className="hover:text-white transition">Post a Job</Link></li>
              <li><Link to="/my-accepted-tasks" className="hover:text-white transition">My Tasks</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#!" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#!" className="hover:text-white transition">Community</a></li>
              <li><a href="#!" className="hover:text-white transition">Blog</a></li>
              <li><a href="#!" className="hover:text-white transition">API Docs</a></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/terms" className="hover:text-white transition">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><a href="#!" className="hover:text-white transition">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-75 text-center md:text-left">
            &copy; {new Date().getFullYear()} <span className="text-white font-medium">FreelanceHub</span>. All rights reserved.
          </p>
          
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
  {/* X (Twitter) */}
 <a 
  href="https://x.com/freelancehub" 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-white hover:scale-110 transition-transform"
  aria-label="Follow us on X"
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
</a>

  {/* Facebook */}
  <a 
    href="https://facebook.com/freelancehub" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition"
    aria-label="Follow us on Facebook"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.92c-1.504 0-1.796.721-1.796 1.771v2.311h3.584l-.465 3.63H16.56v9.294h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0z"/>
    </svg>
  </a>

  {/* Instagram */}
  <a 
    href="https://instagram.com/freelancehub" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition"
    aria-label="Follow us on Instagram"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.28-.073 1.688-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.28-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  </a>
</div>
        </div>

        {/* Trust Signal */}
        <div className="mt-6 text-center text-xs text-gray-500">
          Secure • Verified Profiles • Escrow Payments
        </div>
      </div>
    </footer>
  );
}
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
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 pt-12 pb-8">
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
          
          {/* Social Icons (X only — per requirement #10) */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="https://x.com/freelancehub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="Follow us on X"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.205 2.484a8.75 8.75 0 0 1-2.61.718 4.37 4.37 0 0 0 1.927-2.427 8.755 8.755 0 0 1-2.783 1.068 4.375 4.375 0 0 0-7.46 3.984 12.4 12.4 0 0 1-9.018-4.59 4.37 4.37 0 0 0 1.36 5.825 4.365 4.365 0 0 1-1.98-.547v.055a4.375 4.375 0 0 0 3.5 4.28 4.37 4.37 0 0 1-1.978.075 4.37 4.37 0 0 0 4.086 3.033 8.76 8.76 0 0 1-5.426 1.873 9.22 9.22 0 0 1-1.046-.062 12.37 12.37 0 0 0 6.706 1.963 12.4 12.4 0 0 0 12.453-12.452v-.562a8.8 8.8 0 0 0 2.163-2.244z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Trust Signal (Optional but professional) */}
        <div className="mt-6 text-center text-xs text-gray-500">
          Secure • Verified Profiles • Escrow Payments
        </div>
      </div>
    </footer>
  );
}
// import React from 'react';

// const Footer = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Footer; 
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} <span className="text-white font-semibold">FreelanceHub</span>. All rights reserved.
        </p>
        <p className="text-sm opacity-75">
          Connecting talent with opportunity — one job at a time.
        </p>
      </div>
    </footer>
  );
}
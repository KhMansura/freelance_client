// import React from "react";
// import { Link } from "react-router";

// const NotFound = () => {
//   return (
//     <div className="min-h-[60vh] flex items-center justify-center">
//       <div className="text-center">
//         <h1 className="text-6xl font-bold mb-4">404</h1>
//         <p className="mb-6">Page not found.</p>
//         <Link to="/" className="btn btn-primary">Go Home</Link>
//       </div>
//     </div>
//   );
// };

// export default NotFound;
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 text-center">
      <div className="text-6xl font-bold text-blue-600 mb-4">404</div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Page Not Found</h1>
      <p className="text-gray-600 mb-6 max-w-md">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-blue-400 text-black rounded-lg "
      >
        ← Back to Home
      </Link>
    </div>
  );
}
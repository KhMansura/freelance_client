// import React, { use } from "react";
// import { Link, NavLink } from "react-router";
// import { AuthContext } from "../../context/AuthContext";

// const Navbar = () => {
//   const { user, signOutUser } = use(AuthContext);

//   const handleSignOut = () => {
//     signOutUser().then().catch();
//   };

//   const links = (
//     <>
//       <li>
//         <NavLink to="/">Home</NavLink>
//       </li>
//       <li>
//         <NavLink to="/allJobs">All Jobs</NavLink>
//       </li>
//       <li>
//         <NavLink to="/register">Register</NavLink>
//       </li>
//       {user && (
//         <>
//           <li>
//             <NavLink to="/register">My Jobs</NavLink>
//           </li>
//           <li>
//             <NavLink to="/register">My </NavLink>
//           </li>
//         </>
//       )}
//     </>
//   );
//   return (
//     <div className="navbar bg-base-100 shadow-sm">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               {" "}
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />{" "}
//             </svg>
//           </div>
//           <ul
//             tabIndex="-1"
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//           >
//             {links}
//           </ul>
//         </div>
//         <a className="btn btn-ghost text-xl">daisyUI</a>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">{links}</ul>
//       </div>
//       <div className="navbar-end">
//         {user ? (
//           <a onClick={handleSignOut} className="btn btn-primary">
//             Sign Out
//           </a>
//         ) : (
//           <Link to="/login">Login</Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import { Link, NavLink, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
// import { useAuth } from "../hooks/useAuth"; // ← You already have this hook
import logo from '../../assets/logo.png';
export default function Navbar() {
  const { user, loading, signOutUser } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOutUser();
      navigate("/login");
    } catch (err) {
      console.error("Sign out error:", err);
    }
  };

  if (loading) {
    return (
      <nav className="navbar bg-white shadow-sm px-4 py-3">
        <div className="flex items-center space-x-4">
          <div className="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-6 w-16 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="navbar bg-white shadow-sm px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}

        {/* <Link to="/" 
        className="text-xl font-bold text-blue-600">
          Freelance<span className="text-gray-700">Hub</span>
        </Link> */}
        <Link to="/" className="flex items-center space-x-2">
      <img 
        src={logo} 
        alt="FreelanceHub Logo" 
        className="h-8 w-auto rounded-xl" 
      />
      <span className="text-xl font-bold text-blue-600">
        Freelance<span className="text-gray-600">Hub</span>
      </span>
    </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md transition-colors ${
                isActive
                  ? "text-blue-600 font-medium"
                  : "text-gray-600 hover:text-gray-900"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/allJobs"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md transition-colors ${
                isActive
                  ? "text-blue-600 font-medium"
                  : "text-gray-600 hover:text-gray-900"
              }`
            }
          >
            All Jobs
          </NavLink>

          {user ? (
            <>
              <NavLink
                to="/addJobs"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? "text-blue-600 font-medium"
                      : "text-gray-600 hover:text-gray-900"
                  }`
                }
              >
                Add a Job
              </NavLink>
              <NavLink
                to="/my-accepted-tasks"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? "text-blue-600 font-medium"
                      : "text-gray-600 hover:text-gray-900"
                  }`
                }
              >
                My Accepted Tasks
              </NavLink>

              {/* Avatar Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-2 focus:outline-none">
                  <img
                    src={
                      user.photoURL ||
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        user.displayName || user.email.split('@')[0]
                      )}&background=0D8ABC&color=fff`
                    }
                    alt="Profile"
                    className="w-8 h-8 rounded-full border"
                  />
                  <span className="hidden md:inline text-gray-700 font-medium">
                    {user.displayName || user.email.split("@")[0]}
                  </span>
                </button>

                {/* Dropdown */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block z-10 border">
                  <div className="px-4 py-2 text-sm text-gray-700 border-b">
                    {user.displayName}
                    <br />
                    <span className="text-xs text-gray-500">{user.email}</span>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-3 py-2 text-gray-600 hover:text-gray-900 font-medium"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

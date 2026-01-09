import React from "react";
import { Link, NavLink, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "winter");
  const { user, loading, signOutUser } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleTheme = (e) => {
    const newTheme = e.target.checked ? "night" : "winter";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleSignOut = async () => {
    try {
      await signOutUser();
      navigate("/login");
    } catch (err) {
      console.error("Sign out error:", err);
    }
  };

  // Skeleton Loader
  if (loading) {
    return (
      <nav className="sticky top-0 z-50 w-full bg-base-100/80 backdrop-blur-md border-b px-4 py-3">
        <div className="container mx-auto flex justify-between items-center">
          <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
          <div className="hidden md:flex space-x-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-6 w-16 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
        </div>
      </nav>
    );
  }

  const navLinkStyles = ({ isActive }) =>
    `px-3 py-2 rounded-md transition-all duration-300 font-semibold tracking-wide ${
      isActive
        ? "text-white bg-blue-900/50 shadow-inner"
        : "text-blue-50 hover:text-white hover:bg-white/20"
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-cyan-900 via-blue-700 to-cyan-800 shadow-xl px-4 py-2 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="bg-white p-1 rounded-lg transition-transform group-hover:scale-105 shadow-md">
            <img src={logo} alt="FreelanceHub" className="h-8 w-auto object-contain" />
          </div>
          {/* <span className="text-xl font-bold text-white tracking-tighter uppercase">
            Freelance<span className="text-cyan-300">Hub</span>
          </span> */}
          <h3 className="text-white text-2xl font-bold flex items-center">
              Freelance<span className="text-primary">Hub</span>
            </h3>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <NavLink to="/" className={navLinkStyles}>Home</NavLink>
          <NavLink to="/allJobs" className={navLinkStyles}>All Jobs</NavLink>
          <NavLink to="/aboutUs" className={navLinkStyles}>About Us</NavLink>
          <NavLink to="/contact" className={navLinkStyles}>Contact</NavLink>
          <NavLink to="/blog" className={navLinkStyles}>Blog</NavLink>

          {user ? (
            <>
              {/* Logged In Routes */}
              <NavLink to="dashboard/add-job" className={navLinkStyles}>Add Job</NavLink>
              <NavLink to="dashboard/my-jobs" className={navLinkStyles}>My Posts</NavLink>
              <NavLink to="dashboard/my-accepted-tasks" className={navLinkStyles}>My Tasks</NavLink>

              <div className="h-6 w-[1px] bg-white/20 mx-2"></div>

              {/* Advanced Menu (Dropdown) */}
              <div className="dropdown dropdown-end group">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar border-2 border-cyan-400/50 hover:border-white transition-all shadow-lg">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL || "https://i.ibb.co/mR79Y6B/user.png"} alt="User Profile" />
                  </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-[1] p-3 shadow-2xl menu menu-sm dropdown-content bg-base-100 rounded-xl w-60 border border-base-200 text-base-content">
                  <li className="px-4 py-3 bg-blue-50 rounded-lg mb-2">
                    <span className="font-bold text-blue-800 truncate">{user.displayName || "User"}</span>
                    <span className="text-[10px] text-gray-500 truncate">{user.email}</span>
                  </li>
                  <li><Link to="/dashboard" className="py-2 hover:bg-blue-50 font-medium">User Dashboard</Link></li>
                  <li><Link to="/dashboard/profile" className="py-2 hover:bg-blue-50 font-medium">View Profile</Link></li>
                  <div className="divider my-1"></div>
                  <li>
                    <button onClick={handleSignOut} className="bg-red-50 text-red-600 font-bold hover:bg-red-100 py-2">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <div className="flex items-center space-x-4 ml-4">
              <Link to="/login" className="text-white hover:text-cyan-200 font-bold transition-colors">LOGIN</Link>
              <Link to="/register" className="btn btn-sm bg-white text-blue-800 border-none hover:bg-cyan-100 px-6 font-bold">
                REGISTER
              </Link>
            </div>
          )}

          {/* Theme Toggle */}
          <div className="ml-4 flex items-center">
            <input type="checkbox" className="toggle toggle-info toggle-sm border-white" checked={theme === "night"} onChange={handleTheme} />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-blue-900/95 backdrop-blur-xl border-t border-white/10 py-6 px-4 z-50 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} className={navLinkStyles}>Home</NavLink>
            <NavLink to="/allJobs" onClick={() => setIsMobileMenuOpen(false)} className={navLinkStyles}>All Jobs</NavLink>
            <NavLink to="/aboutUs" onClick={() => setIsMobileMenuOpen(false)} className={navLinkStyles}>About Us</NavLink>
            <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={navLinkStyles}>Contact</NavLink>
            <NavLink to="/blog" onClick={() => setIsMobileMenuOpen(false)} className={navLinkStyles}>Blog</NavLink>
            {user && (
              <>
                <NavLink to="/addJobs" onClick={() => setIsMobileMenuOpen(false)} className={navLinkStyles}>Add Job</NavLink>
                <NavLink to="/myPostedJobs" onClick={() => setIsMobileMenuOpen(false)} className={navLinkStyles}>My Posts</NavLink>
                <button onClick={handleSignOut} className="btn btn-error btn-outline btn-sm w-full mt-4">Logout</button>
              </>
            )}
            {!user && <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="btn btn-primary btn-sm w-full">Login</Link>}
          </div>
        </div>
      )}
    </nav>
  );
}
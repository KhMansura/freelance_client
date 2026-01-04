// import { NavLink, Outlet, useNavigate } from "react-router";
// import { FaHome, FaPlusCircle, FaBriefcase, FaUser, FaSignOutAlt, FaChartPie } from "react-icons/fa";
// import useAuth from "../hooks/useAuth";

// const DashboardLayout = () => {
//   const { user, logOut } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logOut();
//     navigate("/");
//   };

//   const menuItems = [
//     { name: "Dashboard Home", path: "/dashboard/home", icon: <FaChartPie /> },
//     { name: "Add a Job", path: "/dashboard/add-job", icon: <FaPlusCircle /> },
//     { name: "My Posted Jobs", path: "/dashboard/my-jobs", icon: <FaBriefcase /> },
//     { name: "My Profile", path: "/dashboard/profile", icon: <FaUser /> },
//   ];

//   return (
//     <div className="flex h-screen bg-base-200">
//       {/* Sidebar */}
//       <aside className="w-64 bg-base-100 shadow-xl hidden lg:flex flex-col border-r border-base-300">
//         <div className="p-6">
//           <h2 className="text-2xl font-black text-primary tracking-tighter">FreelanceHub</h2>
//         </div>
        
//         <nav className="flex-1 px-4 space-y-2">
//           {menuItems.map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               className={({ isActive }) =>
//                 `flex items-center gap-3 px-4 py-3 rounded-2xl font-bold transition-all ${
//                   isActive ? "bg-primary text-primary-content shadow-lg shadow-primary/30" : "hover:bg-base-200 opacity-70"
//                 }`
//               }
//             >
//               {item.icon} {item.name}
//             </NavLink>
//           ))}
//         </nav>

//         <div className="p-4 border-t border-base-200">
//           <button onClick={handleLogout} className="btn btn-ghost text-error w-full justify-start gap-3 rounded-2xl">
//             <FaSignOutAlt /> Logout
//           </button>
//         </div>
//       </aside>

//       {/* Main Content Area */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Dashboard Navbar */}
//         <header className="h-16 bg-base-100 border-b border-base-300 flex items-center justify-between px-8">
//           <div className="font-bold opacity-50">Dashboard / Overview</div>
//           <div className="flex items-center gap-4">
//              <span className="text-sm font-bold hidden md:block">{user?.displayName}</span>
//              <div className="avatar">
//                 <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
//                   <img src={user?.photoURL} alt="profile" />
//                 </div>
//              </div>
//           </div>
//         </header>

//         {/* Dynamic Content */}
//         <main className="flex-1 overflow-y-auto p-8">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;
// import { NavLink, Outlet, useNavigate } from "react-router";
// import { FaHome, FaPlusCircle, FaBriefcase, FaUser, FaSignOutAlt, FaChartPie, FaClipboardCheck } from "react-icons/fa";
// import useAuth from "../hooks/useAuth";
// import { toast } from "react-toastify";

// const DashboardLayout = () => {
//   const { user, logOut } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logOut()
//       .then(() => {
//         toast.success("See you soon, " + (user?.displayName || "Developer") + "!");
//         navigate("/");
//       })
//       .catch((error) => {
//         console.error("Logout Error:", error);
//         toast.error("Failed to log out");
//       });
//   };

//   const menuItems = [
//     { name: "Dashboard Home", path: "/dashboard/home", icon: <FaChartPie /> },
//     { name: "Add a Job", path: "/dashboard/add-job", icon: <FaPlusCircle /> },
//     { name: "My Posted Jobs", path: "/dashboard/my-jobs", icon: <FaBriefcase /> },
//     { name: "My Accepted Tasks", path: "/dashboard/my-accepted-tasks", icon: <FaClipboardCheck /> },
//     { name: "My Profile", path: "/dashboard/profile", icon: <FaUser /> },
//   ];

//   return (
//     <div className="flex h-screen bg-base-200">
//       {/* Sidebar */}
//       <aside className="w-64 bg-base-100 shadow-xl hidden lg:flex flex-col border-r border-base-300">
//         <div className="p-6">
//           <NavLink to="/" className="text-2xl font-black text-primary tracking-tighter">
//             FreelanceHub
//           </NavLink>
//         </div>
        
//         <nav className="flex-1 px-4 space-y-2">
//           {menuItems.map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               className={({ isActive }) =>
//                 `flex items-center gap-3 px-4 py-3 rounded-2xl font-bold transition-all ${
//                   isActive ? "bg-primary text-white shadow-lg shadow-primary/30" : "hover:bg-base-200 opacity-70"
//                 }`
//               }
//             >
//               {item.icon} {item.name}
//             </NavLink>
//           ))}
//         </nav>

//         {/* --- FUNCTIONAL LOGOUT BUTTON --- */}
//         <div className="p-4 border-t border-base-200">
//           <button 
//             onClick={handleLogout} 
//             className="btn btn-ghost text-error w-full justify-start gap-3 rounded-2xl hover:bg-error/10 font-bold"
//           >
//             <FaSignOutAlt /> Logout
//           </button>
//         </div>
//       </aside>

//       {/* Main Content Area */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Dashboard Navbar */}
//         <header className="h-16 bg-base-100 border-b border-base-300 flex items-center justify-between px-8">
//           <div className="flex items-center gap-2">
//              <NavLink to="/" className="btn btn-ghost btn-sm rounded-xl gap-2">
//                 <FaHome /> <span className="hidden sm:inline">Back to Home</span>
//              </NavLink>
//           </div>
//           <div className="flex items-center gap-4">
//              <span className="text-sm font-bold hidden md:block">{user?.displayName}</span>
//              <div className="avatar">
//                 <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
//                   <img src={user?.photoURL || "https://via.placeholder.com/150"} alt="profile" />
//                 </div>
//              </div>
//           </div>
//         </header>

//         {/* Dynamic Content Rendering */}
//         <main className="flex-1 overflow-y-auto p-8">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

import { NavLink, Outlet, useNavigate } from "react-router";
import { FaHome, FaPlusCircle, FaBriefcase, FaUser, FaSignOutAlt, FaChartPie, FaClipboardCheck } from "react-icons/fa";
import useAuth from "../hooks/useAuth"; // Accessing your global Auth state
import { toast } from "react-toastify";

const DashboardLayout = () => {
  const { user, signOutUser } = useAuth(); 
  const navigate = useNavigate();

  // THE LOGOUT FUNCTION
  const handleLogout = () => {
    signOutUser()
      .then(() => {
        toast.success("See you soon, " + (user?.displayName || "Developer") + "!");
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout error:", error);
        toast.error("Logout failed. Try again.");
      });
  };

  const menuItems = [
    { name: "Dashboard Home", path: "/dashboard/home", icon: <FaChartPie /> },
    { name: "Add a Job", path: "/dashboard/add-job", icon: <FaPlusCircle /> },
    { name: "My Posted Jobs", path: "/dashboard/my-jobs", icon: <FaBriefcase /> },
    { name: "My Accepted Tasks", path: "/dashboard/my-accepted-tasks", icon: <FaClipboardCheck /> },
    { name: "My Profile", path: "/dashboard/profile", icon: <FaUser /> },
  ];

  return (
    <div className="flex h-screen bg-base-200">
      {/* Sidebar */}
      <aside className="w-64 bg-base-100 shadow-xl hidden lg:flex flex-col border-r border-base-300">
        <div className="p-6">
          <NavLink to="/" className="text-2xl font-black text-primary tracking-tighter">
            FreelanceHub
          </NavLink>
        </div>
        
        <nav className="flex-1 px-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-2xl font-bold transition-all ${
                  isActive ? "bg-primary text-white shadow-lg" : "hover:bg-base-200 opacity-70"
                }`
              }
            >
              {item.icon} {item.name}
            </NavLink>
          ))}
        </nav>

        {/* LOGOUT BUTTON - MATCHING AVATAR DROPDOWN LOGIC */}
        <div className="p-4 border-t border-base-200">
          <button 
            onClick={handleLogout} 
            className="btn btn-ghost text-error w-full justify-start gap-3 rounded-2xl hover:bg-error/10 font-bold"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="h-16 bg-base-100 border-b border-base-300 flex items-center justify-between px-8">
          <div className="font-bold opacity-50">Dashboard</div>
          
          <div className="flex items-center gap-4">
             <span className="text-sm font-bold hidden md:block">{user?.displayName}</span>
             
             {/* The Avatar Dropdown you mentioned */}
             <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="avatar cursor-pointer">
                  <div className="w-10 rounded-full ring ring-primary ring-offset-2">
                    <img src={user?.photoURL || "https://via.placeholder.com/150"} alt="User Profile" />
                  </div>
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 border mt-4">
                  <li><NavLink to="/dashboard/profile">Profile</NavLink></li>
                  <li><button onClick={handleLogout} className="text-error">Logout</button></li>
                </ul>
             </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
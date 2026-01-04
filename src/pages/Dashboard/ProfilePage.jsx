// import React, { useState } from "react";
// import useAuth from "../../hooks/useAuth";
// import { toast } from "react-toastify";
// import { FaUserEdit, FaCamera, FaEnvelope, FaIdBadge } from "react-icons/fa";

// const ProfilePage = () => {
//   const { user, updateUserProfile } = useAuth();
//   const [isEditing, setIsEditing] = useState(false);
//   const [loading, setLoading] = useState(false);

//   // State for form inputs
//   const [displayName, setDisplayName] = useState(user?.displayName || "");
//   const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await updateUserProfile({ displayName, photoURL });
//       toast.success("Profile updated successfully!");
//       setIsEditing(false);
//     } catch (error) {
//       toast.error("Failed to update profile");
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto space-y-8">
//       {/* Profile Header Card */}
//       <div className="bg-base-100 rounded-[2.5rem] shadow-sm border border-base-300 overflow-hidden">
//         <div className="h-32 bg-gradient-to-r from-primary to-secondary opacity-80"></div>
//         <div className="px-8 pb-8">
//           <div className="relative -top-12 flex flex-col md:flex-row items-end gap-6">
//             <div className="avatar">
//               <div className="w-32 h-32 rounded-[2rem] ring ring-base-100 ring-offset-4 shadow-xl">
//                 <img src={user?.photoURL || "https://via.placeholder.com/150"} alt="Profile" />
//               </div>
//             </div>
//             <div className="flex-1 pb-2">
//               <h2 className="text-3xl font-black">{user?.displayName}</h2>
//               <p className="text-gray-500 font-medium">MERN Stack Developer</p>
//             </div>
//             <button 
//               onClick={() => setIsEditing(!isEditing)}
//               className={`btn ${isEditing ? 'btn-ghost' : 'btn-primary'} rounded-2xl gap-2 shadow-lg shadow-primary/20`}
//             >
//               <FaUserEdit /> {isEditing ? "Cancel" : "Edit Profile"}
//             </button>
//           </div>

//           {!isEditing ? (
//             /* READ-ONLY VIEW */
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
//               <div className="flex items-center gap-4 p-4 bg-base-200 rounded-2xl">
//                 <FaIdBadge className="text-primary text-xl" />
//                 <div>
//                   <p className="text-xs font-bold opacity-50 uppercase">Full Name</p>
//                   <p className="font-bold">{user?.displayName || "Not set"}</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-4 p-4 bg-base-200 rounded-2xl">
//                 <FaEnvelope className="text-secondary text-xl" />
//                 <div>
//                   <p className="text-xs font-bold opacity-50 uppercase">Email Address</p>
//                   <p className="font-bold">{user?.email}</p>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             /* EDITABLE FORM */
//             <form onSubmit={handleUpdate} className="space-y-6 mt-4 animate-fadeIn">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="form-control">
//                   <label className="label-text font-bold mb-2 opacity-70">Display Name</label>
//                   <input 
//                     type="text" 
//                     value={displayName}
//                     onChange={(e) => setDisplayName(e.target.value)}
//                     className="input input-bordered w-full rounded-2xl" 
//                     required 
//                   />
//                 </div>
//                 <div className="form-control">
//                   <label className="label-text font-bold mb-2 opacity-70">Photo URL</label>
//                   <div className="relative">
//                     <FaCamera className="absolute left-4 top-4 opacity-30" />
//                     <input 
//                       type="url" 
//                       value={photoURL}
//                       onChange={(e) => setPhotoURL(e.target.value)}
//                       className="input input-bordered w-full pl-12 rounded-2xl" 
//                       required 
//                     />
//                   </div>
//                 </div>
//               </div>
//               <button 
//                 type="submit" 
//                 disabled={loading}
//                 className={`btn btn-primary w-full rounded-2xl h-14 font-black uppercase tracking-widest ${loading ? 'loading' : ''}`}
//               >
//                 {loading ? "Saving..." : "Save Changes"}
//               </button>
//             </form>
//           )}
//         </div>
//       </div>

//       {/* Stats/Info Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-base-100 p-6 rounded-3xl border border-base-300 text-center">
//           <p className="text-3xl font-black text-primary">2026</p>
//           <p className="text-xs font-bold opacity-50 uppercase">Joined Year</p>
//         </div>
//         <div className="bg-base-100 p-6 rounded-3xl border border-base-300 text-center">
//           <p className="text-3xl font-black text-secondary">Active</p>
//           <p className="text-xs font-bold opacity-50 uppercase">Account Status</p>
//         </div>
//         <div className="bg-base-100 p-6 rounded-3xl border border-base-300 text-center">
//           <p className="text-3xl font-black text-accent">User</p>
//           <p className="text-xs font-bold opacity-50 uppercase">Role Type</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { FaUserEdit, FaCamera, FaEnvelope, FaIdBadge, FaCheckCircle } from "react-icons/fa";

const ProfilePage = () => {
  const { user, updateUserProfile } = useAuth();
  
  // State for toggling edit mode
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  // State for form inputs (initialized with current user data)
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  useEffect(() => {
  if (user) {
    setName(user.displayName || "");
    setPhoto(user.photoURL || "");
  }
}, [user]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Calling the function from your AuthContext
      await updateUserProfile({
        displayName: name,
        photoURL: photo,
      });
      
      toast.success("Profile updated successfully! 🎉");
      setIsEditing(false); 
    
    } catch (error) {
      console.error("Update error:", error);
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="bg-base-100 rounded-[2.5rem] shadow-xl border border-base-300 overflow-hidden">
        {/* Banner Decor */}
        <div className="h-32 bg-gradient-to-r from-primary to-blue-600"></div>

        <div className="px-8 pb-10">
          <div className="relative -top-12 flex flex-col md:flex-row items-end gap-6">
            {/* Profile Picture */}
            {/* <div className="avatar">
              <div className="w-32 h-32 rounded-[2rem] ring ring-base-100 ring-offset-4 shadow-2xl bg-base-300">
                <img src={user?.photoURL || "https://via.placeholder.com/150"} alt="User" />
              </div>
            </div> */}
            {/* Profile Picture Section */}
<div className="avatar">
  <div className="w-32 h-32 rounded-[2rem] ring ring-base-100 ring-offset-4 shadow-2xl bg-base-300">
    <img 
      src={user?.photoURL || "https://i.ibb.co/5GzXkwq/user.png"} 
      alt="User" 
      onError={(e) => { 
        e.target.onerror = null; 
        e.target.src = "https://i.ibb.co/5GzXkwq/user.png"; 
      }} 
    />
  </div>
</div>

            {/* User Title Info */}
            <div className="flex-1 pb-2">
              <h2 className="text-3xl font-black">{user?.displayName || "Freelancer"}</h2>
              <p className="text-primary font-bold flex items-center gap-2">
                <FaCheckCircle /> Verified MERN Developer
              </p>
            </div>

            {/* Toggle Edit Button */}
            <button 
              onClick={() => setIsEditing(!isEditing)}
              className={`btn rounded-2xl px-6 ${isEditing ? 'btn-ghost text-error' : 'btn-primary shadow-lg shadow-primary/20'}`}
            >
              <FaUserEdit /> {isEditing ? "Cancel" : "Edit Profile"}
            </button>
          </div>

          {/* Conditional Rendering: Form vs Data View */}
          {!isEditing ? (
            /* --- READ-ONLY VIEW --- */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 animate-fadeIn">
              <div className="p-6 bg-base-200 rounded-3xl space-y-1">
                <p className="text-xs font-bold opacity-40 uppercase tracking-widest">Display Name</p>
                <p className="text-lg font-bold flex items-center gap-3"><FaIdBadge className="text-primary"/> {user?.displayName}</p>
              </div>
              <div className="p-6 bg-base-200 rounded-3xl space-y-1">
                <p className="text-xs font-bold opacity-40 uppercase tracking-widest">Email Address</p>
                <p className="text-lg font-bold flex items-center gap-3"><FaEnvelope className="text-primary"/> {user?.email}</p>
              </div>
            </div>
          ) : (
            /* --- EDITABLE FORM VIEW --- */
            <form onSubmit={handleUpdate} className="mt-6 space-y-6 bg-base-200 p-8 rounded-3xl border border-dashed border-primary/30 animate-slideDown">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label-text font-bold mb-2 ml-1">Update Name</label>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input input-bordered w-full rounded-2xl font-medium" 
                    required 
                  />
                </div>
                <div className="form-control">
                  <label className="label-text font-bold mb-2 ml-1">Update Photo URL</label>
                  <div className="relative">
                    <FaCamera className="absolute left-4 top-4 opacity-30" />
                    <input 
                      type="url" 
                      value={photo}
                      onChange={(e) => setPhoto(e.target.value)}
                      className="input input-bordered w-full pl-12 rounded-2xl font-medium" 
                      required 
                    />
                  </div>
                </div>
              </div>
              
              <button 
                type="submit" 
                disabled={loading}
                className={`btn btn-primary w-full rounded-2xl h-14 font-black uppercase tracking-widest text-lg ${loading ? 'loading' : ''}`}
              >
                {loading ? "Updating..." : "Save Profile Changes"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
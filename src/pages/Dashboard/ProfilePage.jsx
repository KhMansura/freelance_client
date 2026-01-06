
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { FaUserEdit, FaCamera, FaEnvelope, FaIdBadge, FaCheckCircle } from "react-icons/fa";

const ProfilePage = () => {
  const { user, updateUserProfile } = useAuth();
  
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  // local states for the form
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  // Sync local state when user object changes
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
      // 1. Update Firebase Profile
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
    <div className="max-w-7xl mx-auto mt-10 px-4">
      <div className="bg-base-100 rounded-[2.5rem] shadow-xl border border-base-300 overflow-hidden">
        
        {/* Banner Decor */}
        <div className="h-48 bg-gradient-to-r from-primary to-blue-600"></div>

        <div className="px-8 pb-10">
          <div className="relative -top-16 flex flex-col md:flex-row items-end gap-6">
            
            {/* Profile Picture Section */}
            <div className="avatar">
              <div className="w-40 h-40 rounded-[2rem] ring ring-base-100 ring-offset-4 shadow-2xl bg-base-300">
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

            {/* User Info Header: Readable Profile Info */}
            <div className="flex-1 pb-4">
              <h2 className="text-4xl font-black">{user?.displayName || "Freelancer"}</h2>
              <p className="text-primary font-bold flex items-center gap-2 mt-1">
                <FaCheckCircle /> Verified MERN Developer
              </p>
            </div>

            {/* Toggle Edit Button */}
            <div className="pb-4">
                <button 
                onClick={() => setIsEditing(!isEditing)}
                className={`btn rounded-2xl px-8 h-12 ${isEditing ? 'btn-ghost text-error border-error' : 'btn-primary shadow-lg shadow-primary/20'}`}
                >
                <FaUserEdit /> {isEditing ? "Cancel" : "Edit Profile"}
                </button>
            </div>
          </div>

          {/* Conditional Rendering */}
          {!isEditing ? (
            /* --- READABLE VIEW --- */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 animate-fadeIn">
              <div className="p-8 bg-base-200 rounded-3xl border border-base-300">
                <p className="text-xs font-bold opacity-50 uppercase tracking-widest mb-2">Full Name</p>
                <p className="text-xl font-bold flex items-center gap-3">
                    <FaIdBadge className="text-primary"/> {user?.displayName || "Not set"}
                </p>
              </div>
              <div className="p-8 bg-base-200 rounded-3xl border border-base-300">
                <p className="text-xs font-bold opacity-50 uppercase tracking-widest mb-2">Email Address</p>
                <p className="text-xl font-bold flex items-center gap-3">
                    <FaEnvelope className="text-primary"/> {user?.email}
                </p>
              </div>
            </div>
          ) : (
            /* --- EDITABLE FORM VIEW --- */
            <form onSubmit={handleUpdate} className="mt-6 space-y-6 bg-base-50 p-8 rounded-3xl border-2 border-dashed border-primary/20 animate-slideDown">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label-text font-bold mb-2 ml-1 text-primary">Update Full Name</label>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input input-bordered w-full rounded-2xl font-medium focus:input-primary" 
                    required 
                  />
                </div>
                <div className="form-control">
                  <label className="label-text font-bold mb-2 ml-1 text-primary">Update Photo URL</label>
                  <div className="relative">
                    <FaCamera className="absolute left-4 top-4 opacity-30" />
                    <input 
                      type="url" 
                      value={photo}
                      onChange={(e) => setPhoto(e.target.value)}
                      className="input input-bordered w-full pl-12 rounded-2xl font-medium focus:input-primary" 
                      required 
                    />
                  </div>
                </div>
              </div>
              
              <button 
                type="submit" 
                disabled={loading}
                className={`btn btn-primary w-full rounded-2xl h-14 font-black uppercase tracking-widest text-lg shadow-xl ${loading ? 'loading' : ''}`}
              >
                {loading ? "Saving..." : "Save Profile Changes"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
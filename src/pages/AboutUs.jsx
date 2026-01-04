import React from "react";
import { FaCode, FaRocket, FaUsers, FaCheckCircle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router";

const AboutUs = () => {
  const { user } = useAuth(); // Check if user is logged in
  const navigate = useNavigate();

  const handleJoinClick = () => {
    if (user) {
      // If already a member, take them to see jobs
      navigate("/allJobs");
    } else {
      // If new, take them to register
      navigate("/register");
    }
  };
    return (
    <div className="bg-base-200 min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-base-content mb-4 tracking-tight">
            Connecting Talent with <span className="text-primary">Opportunity</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            FreelanceHub is a modern marketplace designed to bridge the gap between skilled professionals and businesses looking for excellence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-base-100 p-8 rounded-[2rem] shadow-sm border border-base-300 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaRocket className="text-primary text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-3">Fast & Reliable</h3>
            <p className="text-sm opacity-70">Post jobs or find projects in seconds with our optimized real-time platform.</p>
          </div>

          <div className="bg-base-100 p-8 rounded-[2rem] shadow-sm border border-base-300 text-center">
            <div className="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaCode className="text-secondary text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-3">Modern Stack</h3>
            <p className="text-sm opacity-70">Built with the latest MERN stack technologies for a seamless user experience.</p>
          </div>

          <div className="bg-base-100 p-8 rounded-[2rem] shadow-sm border border-base-300 text-center">
            <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaUsers className="text-accent text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-3">Community First</h3>
            <p className="text-sm opacity-70">A secure environment where freelancers and clients can grow together.</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
              alt="Team working" 
              className="rounded-[3rem] shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-[2rem] shadow-xl hidden md:block">
               <p className="text-primary-content font-black text-3xl">500+</p>
               <p className="text-primary-content/80 text-sm">Active Projects</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-black">Our Mission</h2>
            <p className="text-lg opacity-80 leading-relaxed">
              We believe that the future of work is decentralized. Our platform empowers 
              Khandaker Mansura and thousands of other developers to find work that 
              matches their passion and expertise.
            </p>
            
            <ul className="space-y-4">
              {[
                "Verified professional network",
                "Secure payment protection",
                "Real-time search and filtering",
                "24/7 Priority support"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 font-bold opacity-70">
                  <FaCheckCircle className="text-success" /> {text}
                </li>
              ))}
            </ul>

            {/* <div className="pt-4">
               <button className="btn btn-primary btn-lg rounded-2xl px-10">Join Our Community</button>
            </div> */}
            {/* Updated Button Section */}
        <div className="pt-4 text-center lg:text-left">
           <button 
             onClick={handleJoinClick}
             className="btn btn-primary btn-lg rounded-2xl px-10 shadow-lg shadow-primary/30 hover:scale-105 transition-transform"
           >
             {user ? "Explore Projects" : "Join Our Community"}
           </button>
           {!user && (
             <p className="text-xs opacity-50 mt-3 ml-2">
               Registration takes less than 30 seconds.
             </p>
           )}
        </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
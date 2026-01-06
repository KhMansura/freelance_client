
import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import { FaGoogle, FaEnvelope, FaLock, FaUser } from "react-icons/fa";

const Login = () => {
  const { signInUser, signInWithGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //  Demo User Credential 
  const handleDemoLogin = () => {
    setEmail("user@example.com"); 
    setPassword("User@123");      
    toast.info("Demo credentials auto-filled!");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInUser(email, password);
      
      toast.success("Welcome! Login Successful"); 
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message || "Invalid email or password");
    }
  };

  const handleGoogle = async () => {
    try {
      await signInWithGoogle();
      toast.success("Signed in with Google");
      navigate(from, { replace: true });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center py-12 px-4 pt-28">
      <div className="max-w-md w-full bg-base-100 p-10 rounded-[2.5rem] shadow-xl border border-base-300">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-base-content tracking-tight">Login</h2>
          <p className="text-sm opacity-60 mt-2 font-medium">Access your account to continue</p>
        </div>

        {/* Demo User Button */}
        <div className="mb-8">
          <button 
            type="button" 
            onClick={handleDemoLogin}
            className="btn btn-primary btn-outline btn-sm w-full gap-2 rounded-xl normal-case font-bold border-2"
          >
            <FaUser className="text-xs" /> Use Demo User Credentials
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <div className="form-control">
            <label className="label-text font-bold mb-2 ml-1 opacity-70">Email Address</label>
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-4 opacity-30" />
              <input 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                type="email" 
                placeholder="user@example.com"
                className="input input-bordered w-full pl-12 rounded-2xl focus:border-primary" 
                required 
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="form-control">
            <label className="label-text font-bold mb-2 ml-1 opacity-70">Password</label>
            <div className="relative">
              <FaLock className="absolute left-4 top-4 opacity-30" />
              <input 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                type="password" 
                placeholder="••••••••"
                className="input input-bordered w-full pl-12 rounded-2xl focus:border-primary" 
                required 
              />
            </div>
          </div>

          {/* Login Actions */}
          <div className="pt-2">
            <button className="btn btn-primary w-full rounded-2xl h-14 text-lg shadow-lg shadow-primary/20 font-bold uppercase tracking-wider">
              Login
            </button>
          </div>

          <p className="text-center text-sm font-medium">
            New here? <Link to="/register" className="text-primary font-bold hover:underline">Create Account</Link>
          </p>

          <div className="divider opacity-50 text-[10px] font-bold uppercase tracking-widest">Or Continue With</div>

          {/* Social Login */}
          <button 
            type="button" 
            onClick={handleGoogle} 
            className="btn btn-outline w-full rounded-2xl gap-3 border-base-300 hover:bg-base-200 transition-all font-bold"
          >
            <FaGoogle className="text-error" /> Google Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

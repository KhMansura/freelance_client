// import React, { useState } from "react";
// import { useNavigate, Link, useLocation } from "react-router";
// import useAuth from "../hooks/useAuth";
// import { toast } from "react-toastify";

// const Login = () => {
//   const { signInUser, signInWithGoogle } = useAuth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || "/";

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await signInUser(email, password);
//       toast.success("Login successful");
//       navigate(from, { replace: true });
//     } catch (err) {
//       // error handled in provider too
//     }
//   };

//   const handleGoogle = async () => {
//     try {
//       await signInWithGoogle();
//       navigate(from, { replace: true });
//     } catch (err) {
//       // provider shows toast
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-12">
//       <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
//         <h2 className="text-2xl font-bold mb-4">Login</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <label className="block">
//             <span className="text-sm">Email</span>
//             <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="input input-bordered w-full" required />
//           </label>

//           <label className="block">
//             <span className="text-sm">Password</span>
//             <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="input input-bordered w-full" required />
//           </label>

//           <div className="flex justify-between items-center">
//             <button className="btn btn-primary">Login</button>
//             <Link to="/register" className="text-sm link">Register</Link>
//           </div>

//           <div className="divider">OR</div>

//           <button type="button" onClick={handleGoogle} className="btn btn-outline w-full">
//             Login with Google
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

const Login = () => {
  const { signInUser, signInWithGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInUser(email, password);
      toast.success("Login successful");
      navigate(from, { replace: true });
    } catch (err) {
      // error handled in provider too
    }
  };

  const handleGoogle = async () => {
    try {
      await signInWithGoogle();
      navigate(from, { replace: true });
    } catch (err) {
      // provider shows toast
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-sm">Email</span>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="input input-bordered w-full" required />
          </label>

          <label className="block">
            <span className="text-sm">Password</span>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="input input-bordered w-full" required />
          </label>

          <div className="flex justify-between items-center">
            <button className="btn btn-primary">Login</button>
            <Link to="/register" className="text-sm link">Register</Link>
          </div>

          <div className="divider">OR</div>

          <button type="button" onClick={handleGoogle} className="btn btn-outline w-full">
            Login with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

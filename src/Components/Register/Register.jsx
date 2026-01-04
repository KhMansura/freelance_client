

// import { useState, useContext } from "react";
// import { Link, useNavigate } from "react-router";
// import { AuthContext } from "../../context/AuthContext"; 
// import { toast } from "react-toastify";

// const Register = () => {
//   const { createUser, signInWithGoogle, updateUserProfile } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [photoURL, setPhotoURL] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const validatePassword = (pwd) => {
//     return pwd.length >= 6 && /[A-Z]/.test(pwd) && /[a-z]/.test(pwd);
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     if (!validatePassword(password)) {
//       toast.error("Password must be ≥6 chars, with 1 uppercase & 1 lowercase letter.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const result = await createUser(email, password);
//       await updateUserProfile({
//         displayName: name,
//         photoURL: photoURL || "",
//       });

//       toast.success(`🎉 Welcome ${name || result.user.email}!`);
//       navigate("/");
//     } catch (error) {
//       console.error("Registration error:", error);
//       toast.error(error.message || "Failed to register user.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     try {
//       await signInWithGoogle();
//       toast.success("✅ Signed in with Google!");
//       navigate("/");
//     } catch (error) {
//       console.error("Google Sign-In error:", error);
//       toast.error("Google sign-in failed.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
//       <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
//         <div className="card-body">
//           <h1 className="text-3xl font-bold text-center mb-2">Register</h1>
//           <p className="text-gray-500 text-center mb-6">
//             Create your FreelanceHub account
//           </p>

//           <form onSubmit={handleRegister} className="space-y-4">
//             <div>
//               <label className="label">
//                 <span className="label-text">Full Name</span>
//               </label>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="input input-bordered w-full"
//                 placeholder="John Doe"
//                 required
//               />
//             </div>

//             <div>
//               <label className="label">
//                 <span className="label-text">Photo URL (optional)</span>
//               </label>
//               <input
//                 type="url"
//                 value={photoURL}
//                 onChange={(e) => setPhotoURL(e.target.value)}
//                 className="input input-bordered w-full"
//                 placeholder="https://example.com/photo.jpg"
//               />
//             </div>

//             <div>
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="input input-bordered w-full"
//                 placeholder="you@example.com"
//                 required
//               />
//             </div>

//             <div>
//               <label className="label">
//                 <span className="label-text">Password</span>
//               </label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="input input-bordered w-full"
//                 placeholder="••••••"
//                 required
//               />
//               <p className="text-xs text-gray-500 mt-1">
//                 ≥6 chars, 1 uppercase, 1 lowercase
//               </p>
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className={`btn btn-primary w-full ${loading ? "loading" : ""}`}
//             >
//               {loading ? "Creating..." : "Register"}
//             </button>
//           </form>

//           <div className="divider">OR</div>

//           <button
//             onClick={handleGoogleSignIn}
//             disabled={loading}
//             className="btn w-full bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 transition"
//           >
//             <svg
//               width="18"
//               height="18"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 512 512"
//               className="mr-2"
//             >
//               <g>
//                 <path d="m0 0H512V512H0" fill="#fff"></path>
//                 <path
//                   fill="#34a853"
//                   d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
//                 ></path>
//                 <path
//                   fill="#4285f4"
//                   d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
//                 ></path>
//                 <path
//                   fill="#fbbc02"
//                   d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
//                 ></path>
//                 <path
//                   fill="#ea4335"
//                   d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
//                 ></path>
//               </g>
//             </svg>
//             Continue with Google
//           </button>

//           <p className="text-center mt-4">
//             Already have an account?{" "}
//             <Link to="/login" className="link link-primary">
//               Login
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext"; 
import { toast } from "react-toastify";
import { FaGoogle, FaEnvelope, FaLock, FaUser, FaLink } from "react-icons/fa";

const Register = () => {
  const { createUser, signInWithGoogle, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const validatePassword = (pwd) => {
    return pwd.length >= 6 && /[A-Z]/.test(pwd) && /[a-z]/.test(pwd);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      toast.error("Password must be ≥6 chars, with 1 uppercase & 1 lowercase letter.");
      return;
    }

    setLoading(true);
    try {
      await createUser(email, password);
      await updateUserProfile({
        displayName: name,
        photoURL: photoURL || "",
      });

      toast.success("Welcome! Your account has been created.");
      navigate("/");
    } catch (error) {
      toast.error(error.message || "Failed to register user.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      toast.success("Signed in with Google!");
      navigate("/");
    } catch (error) {
      toast.error("Google sign-in failed.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200 p-4 pt-28 pb-12">
      <div className="card bg-base-100 w-full max-w-md shadow-xl rounded-[2.5rem] border border-base-300">
        <div className="card-body p-10">
          <h1 className="text-3xl font-black text-center mb-2">Join Us</h1>
          <p className="text-gray-500 text-center mb-8 font-medium">
            Create your account to start freelancing
          </p>

          <form onSubmit={handleRegister} className="space-y-4">
            {/* Full Name */}
            <div className="form-control">
              <label className="label-text font-bold mb-2 ml-1 opacity-70">Full Name</label>
              <div className="relative">
                <FaUser className="absolute left-4 top-4 opacity-30" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input input-bordered w-full pl-12 rounded-2xl"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            {/* Photo URL */}
            <div className="form-control">
              <label className="label-text font-bold mb-2 ml-1 opacity-70">Photo URL (optional)</label>
              <div className="relative">
                <FaLink className="absolute left-4 top-4 opacity-30" />
                <input
                  type="url"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="input input-bordered w-full pl-12 rounded-2xl"
                  placeholder="https://example.com/photo.jpg"
                />
              </div>
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label-text font-bold mb-2 ml-1 opacity-70">Email Address</label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-4 opacity-30" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered w-full pl-12 rounded-2xl"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label-text font-bold mb-2 ml-1 opacity-70">Password</label>
              <div className="relative">
                <FaLock className="absolute left-4 top-4 opacity-30" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input input-bordered w-full pl-12 rounded-2xl"
                  placeholder="••••••"
                  required
                />
              </div>
              <p className="text-[10px] text-gray-400 mt-2 ml-1 font-bold uppercase tracking-wider">
                Must be ≥6 chars, 1 uppercase, 1 lowercase
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`btn btn-primary w-full rounded-2xl h-14 mt-4 font-bold uppercase tracking-widest ${loading ? "loading" : ""}`}
            >
              {loading ? "Creating..." : "Register"}
            </button>
          </form>

          <div className="divider opacity-50 text-[10px] font-bold uppercase tracking-widest">Or Continue With</div>

          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="btn btn-outline w-full rounded-2xl gap-3 border-base-300 hover:bg-base-200 transition-all font-bold"
          >
            <FaGoogle className="text-error" /> Google Account
          </button>

          <p className="text-center mt-6 font-medium text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-bold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;




 
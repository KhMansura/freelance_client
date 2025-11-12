// import React, { use } from 'react';
// import { AuthContext } from '../../context/AuthContext';

// const Register = () => {
//     const {signInWithGoogle} = use(AuthContext);

//     const handleGoogleSignIn = () =>{
//         signInWithGoogle()
//         .then(result =>{
//             console.log(result);
//         })
//         .catch(error =>{
//             console.log(error)
//         })

//     }
//     return (
       
    
//     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//         <h1 className="text-5xl font-bold">Register!</h1>
//       <div className="card-body">
//         <fieldset className="fieldset">
//           <label className="label">Email</label>
//           <input type="email" className="input" placeholder="Email" />
//           <label className="label">Password</label>
//           <input type="password" className="input" placeholder="Password" />
//           <div><a className="link link-hover">Forgot password?</a></div>
//           <button className="btn btn-neutral mt-4">Register</button>
//         </fieldset>
//         {/* Google */}
// <button onClick={handleGoogleSignIn}
// className="btn bg-white text-black border-[#e5e5e5]">
//   <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
//   Login with Google
// </button>
//       </div>
//     </div>
//     );
// };

// export default Register;

// import { useState, useContext } from 'react';
// import { useNavigate, Link } from 'react-router';
// import { AuthContext } from '../../context/AuthContext';
// import { toast } from 'react-toastify';
// import { updateProfile } from 'firebase/auth';
// import { auth } from '../../firebase/firebase.init';


// const Register = () => {
//   const { createUser, signInWithGoogle, updateUserProfile } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [photoURL, setPhotoURL] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   // ✅ Password validation rules
//   const validatePassword = (pwd) => {
//     const minLength = pwd.length >= 6;
//     const hasUppercase = /[A-Z]/.test(pwd);
//     const hasLowercase = /[a-z]/.test(pwd);
//     return minLength && hasUppercase && hasLowercase;
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setError('');

//     // ✅ Validate password
//     if (!validatePassword(password)) {
//       toast.error(
//         'Password must be ≥6 chars, with 1 uppercase & 1 lowercase letter.'
//       );
//       return;
//     }

//     setLoading(true);

//     try {
//       // ✅ Create user
//       const userCredential = await createUser(email, password);
//       const user = userCredential.user;

//       // ✅ Update profile (displayName + photoURL)
//       await updateUserProfile(auth.currentUser,{
//         displayName: name,
//         photoURL: photoURL || '',
//       });

//       toast.success('🎉 Account created! Welcome to FreelanceHub.');
//       navigate('/'); // ✅ Redirect to home
//     } catch (err) {
//       console.error('Registration error:', err);
//       let message = 'Failed to create account.';
//       if (err.code === 'auth/email-already-in-use') {
//         message = 'This email is already registered.';
//       } else if (err.code === 'auth/invalid-email') {
//         message = 'Invalid email address.';
//       } else if (err.code === 'auth/weak-password') {
//         message = 'Password is too weak.';
//       }
//       toast.error(message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     setLoading(true);
//     try {
//       await signInWithGoogle();
//       toast.success('✅ Signed in with Google!');
//       navigate('/'); // ✅ Redirect on success
//     } catch (err) {
//       console.error('Google Sign-In error:', err);
//       toast.error('Google sign-in failed. Please try again.');
//     } finally {
//       setLoading(false);
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

//           {/* ✅ Email/Password Form */}
//           <form onSubmit={handleRegister} className="space-y-4">
//             <div>
//               <label className="label">
//                 <span className="label-text">Name</span>
//               </label>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="input input-bordered w-full"
//                 placeholder="e.g. Rashid Khan"
//                 required
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

//             <div>
//               <label className="label">
//                 <span className="label-text">Photo URL (optional)</span>
//               </label>
//               <input
//                 type="url"
//                 value={photoURL}
//                 onChange={(e) => setPhotoURL(e.target.value)}
//                 className="input input-bordered w-full"
//                 placeholder="https://example.com/avatar.jpg"
//               />
//             </div>

//             {error && <p className="text-red-500 text-sm">{error}</p>}

//             <button
//               type="submit"
//               disabled={loading}
//               className={`btn btn-primary w-full ${loading ? 'loading' : ''}`}
//             >
//               {loading ? 'Creating...' : 'Register'}
//             </button>
//           </form>

//           {/* Divider */}
//           <div className="divider">OR</div>

//           {/* ✅ Google Sign-In */}
//           <button
//             onClick={handleGoogleSignIn}
//             disabled={loading}
//             className="btn w-full bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 transition"
//           >
//             <svg
//               aria-label="Google logo"
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

//           {/* ✅ Login Link */}
//           <p className="text-center mt-4">
//             Already have an account?{' '}
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

// import { useState, useContext } from "react";
// import { useNavigate, Link } from "react-router";
// import { AuthContext } from "../../context/AuthContext"; 
// import { toast } from "react-toastify";

// const Register = () => {
//   const { createUser, signInWithGoogle, updateUserProfile } =
//     useContext(AuthContext);
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [photoURL, setPhotoURL] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const validatePassword = (pwd) => {
//     return pwd.length >= 6 && /[A-Z]/.test(pwd) && /[a-z]/.test(pwd);
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setError("");
//     if (!validatePassword(password)) {
//       toast.error(
//         "Password must be ≥6 chars, with 1 uppercase & 1 lowercase letter."
//       );
//       return;
//     }

//     setLoading(true);
//     try {
//       const userCredential = await createUser(email, password);
//       await updateUserProfile({
//         displayName: name,
//         photoURL: photoURL || "",
//       });

//       toast.success("🎉 Account created successfully!");
//       navigate("/");
//     } catch (err) {
//       console.error("Registration error:", err);
//       setError(err.message || "Failed to create account.");
//       toast.error(err.message || "Failed to create account.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     try {
//       await signInWithGoogle();
//       toast.success("✅ Signed in with Google!");
//       navigate("/");
//     } catch (err) {
//       console.error("Google Sign-In error:", err);
//       toast.error("Google sign-in failed. Please try again.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
//       {/* same UI code as before */}
//              <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
//          <div className="card-body">
//           <h1 className="text-3xl font-bold text-center mb-2">Register</h1>
//            <p className="text-gray-500 text-center mb-6">
//              Create your FreelanceHub account
//            </p>

//            {/* ✅ Email/Password Form */}
//            <form onSubmit={handleRegister} className="space-y-4">
//              <div>
//                <label className="label">
//                  <span className="label-text">Name</span>
//                </label>
//                <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="input input-bordered w-full"
//                 placeholder="e.g. Rashid Khan"
//                 required
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

//             <div>
//               <label className="label">
//                 <span className="label-text">Photo URL (optional)</span>
//               </label>
//               <input
//                 type="url"
//                 value={photoURL}
//                 onChange={(e) => setPhotoURL(e.target.value)}
//                 className="input input-bordered w-full"
//                 placeholder="https://example.com/avatar.jpg"
//               />
//             </div>

//             {error && <p className="text-red-500 text-sm">{error}</p>}

//             <button
//               type="submit"
//               disabled={loading}
//               className={`btn btn-primary w-full ${loading ? 'loading' : ''}`}
//             >
//               {loading ? 'Creating...' : 'Register'}
//             </button>
//           </form>

//           {/* Divider */}
//           <div className="divider">OR</div>

//           {/* ✅ Google Sign-In */}
//           <button
//             onClick={handleGoogleSignIn}
//             disabled={loading}
//             className="btn w-full bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 transition"
//           >
//             <svg
//               aria-label="Google logo"
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

//           {/* ✅ Login Link */}
//           <p className="text-center mt-4">
//             Already have an account?{' '}
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

// import { useState, useContext } from "react";
// import { useNavigate, Link } from "react-router"; // ✅ ensure you import from react-router-dom
// import { AuthContext } from "../../context/AuthContext"; // ✅ adjust path if needed
// import { toast } from "react-toastify";

// const Register = () => {
//   const { createUser, signInWithGoogle, updateUserProfile } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [photoURL, setPhotoURL] = useState("");
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
//       const userCredential = await createUser(email, password);
//       await updateUserProfile({
//         displayName: name,
//         photoURL: photoURL || "",
//       });

//       toast.success("🎉 Account created successfully!");
//       navigate("/");
//     } catch (err) {
//       console.error("Registration error:", err);
//       toast.error(err.message || "Failed to create account.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     try {
//       await signInWithGoogle();
//       toast.success("✅ Signed in with Google!");
//       navigate("/");
//     } catch (err) {
//       console.error("Google Sign-In error:", err);
//       toast.error("Google sign-in failed. Please try again.");
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
//                 <span className="label-text">Name</span>
//               </label>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="input input-bordered w-full"
//                 placeholder="e.g. Rashid Khan"
//                 required
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

//             <div>
//               <label className="label">
//                 <span className="label-text">Photo URL (optional)</span>
//               </label>
//               <input
//                 type="url"
//                 value={photoURL}
//                 onChange={(e) => setPhotoURL(e.target.value)}
//                 className="input input-bordered w-full"
//                 placeholder="https://example.com/avatar.jpg"
//               />
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
//               aria-label="Google logo"
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
      const result = await createUser(email, password);
      await updateUserProfile({
        displayName: name,
        photoURL: photoURL || "",
      });

      toast.success(`🎉 Welcome ${name || result.user.email}!`);
      navigate("/");
    } catch (error) {
      console.error("Registration error:", error);
      toast.error(error.message || "Failed to register user.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      toast.success("✅ Signed in with Google!");
      navigate("/");
    } catch (error) {
      console.error("Google Sign-In error:", error);
      toast.error("Google sign-in failed.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center mb-2">Register</h1>
          <p className="text-gray-500 text-center mb-6">
            Create your FreelanceHub account
          </p>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered w-full"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Photo URL (optional)</span>
              </label>
              <input
                type="url"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="input input-bordered w-full"
                placeholder="https://example.com/photo.jpg"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full"
                placeholder="••••••"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                ≥6 chars, 1 uppercase, 1 lowercase
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`btn btn-primary w-full ${loading ? "loading" : ""}`}
            >
              {loading ? "Creating..." : "Register"}
            </button>
          </form>

          <div className="divider">OR</div>

          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="btn w-full bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 transition"
          >
            <svg
              width="18"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="mr-2"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Continue with Google
          </button>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="link link-primary">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;




 
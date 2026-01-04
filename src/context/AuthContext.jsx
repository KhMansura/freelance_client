import { createContext } from "react";
// // useEffect(() => {
// //   const unsubscribe = onAuthStateChanged(auth, (user) => {
// //     setCurrentUser(user);
// //     setLoading(false);
// //   });
// //   return () => unsubscribe();
// // }, []);
// // import { updateProfile } from 'firebase/auth';

// // const updateUserProfile = (profile) => {
// //   return updateProfile(auth.currentUser, profile);
// // };
export const AuthContext = createContext(null);

// import { createContext, useEffect, useState } from "react";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithPopup,
//   onAuthStateChanged,
//   signOut,
//   updateProfile,
// } from "firebase/auth";
// import app from "../firebase/firebase.init"; // ✅ adjust your path if different

// export const AuthContext = createContext(null);
// const auth = getAuth(app);

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // ✅ Create User
//   const createUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   // ✅ Sign in with email/password
//   const loginUser = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   // ✅ Sign in with Google
//   const googleProvider = new GoogleAuthProvider();
//   const signInWithGoogle = () => {
//     setLoading(true);
//     return signInWithPopup(auth, googleProvider);
//   };

//   // ✅ Update user profile
//   const updateUserProfile = (profile) => {
//     if (!auth.currentUser) return Promise.reject("No user logged in");
//     return updateProfile(auth.currentUser, profile);
//   };

//   // ✅ Logout
//   const logOut = () => {
//     setLoading(true);
//     return signOut(auth);
//   };

//   // ✅ Monitor Auth State
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   const authInfo = {
//     user,
//     loading,
//     createUser,
//     loginUser,
//     signInWithGoogle,
//     logOut,
//     updateUserProfile,
//   };

//   return (
//     <AuthContext.Provider value={authInfo}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;

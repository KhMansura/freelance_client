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
// import app from "../firebase/firebase.init"; // ✅ adjust path if needed

// export const AuthContext = createContext(null);

// const auth = getAuth(app);

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // ✅ Create new user with email/password
//   const createUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   // ✅ Sign in existing user
//   const loginUser = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   // ✅ Google Sign-In
//   const googleProvider = new GoogleAuthProvider();
//   const signInWithGoogle = () => {
//     setLoading(true);
//     return signInWithPopup(auth, googleProvider);
//   };

//   // ✅ Update user profile (name, photo, etc.)
//   const updateUserProfile = async (profile) => {
//     if (!auth.currentUser) throw new Error("No user logged in");
//     await updateProfile(auth.currentUser, profile);
//     setUser({ ...auth.currentUser }); // refresh user info
//   };

//   // ✅ Logout
//   const logOut = () => {
//     setLoading(true);
//     return signOut(auth);
//   };

//   // ✅ Listen to auth state
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
//     updateUserProfile,
//     logOut,
//   };

//   return (
//     <AuthContext.Provider value={authInfo}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;

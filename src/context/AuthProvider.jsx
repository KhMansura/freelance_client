// import React, { useEffect, useState } from 'react';
// import { AuthContext } from './AuthContext';
// import { createUserWithEmailAndPassword,
//     GoogleAuthProvider,
//     onAuthStateChanged,
//     signInWithEmailAndPassword,
//     signInWithPopup,
//     signOut } from 'firebase/auth';
// import { auth } from '../firebase/firebase.init';

// const googleProvider = new GoogleAuthProvider();

// const AuthProvider = ({children}) => {
//     const [user, setUser] =useState(null);
//     const [loading, setLoading] = useState(true);

//     const createUser = (email, password)=>{
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password)
//     }
//     const signInUser =(email,password)=>{
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email,password)
//     }
//     const signInWithGoogle =() =>{
//         setLoading(true);
//         return signInWithPopup(auth,googleProvider);
//     }
//     const signOutUser = () =>{
//         setLoading(true);
//         return signOut(auth);
//     }

//     useEffect(()=>{
//         const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
//             setUser(currentUser)
//             setLoading(false);

//         })
//         return() =>{
//             unsubscribe()
//         }
//     },[])
//     const authInfo ={
//         createUser,
//         signInUser,
//         signInWithGoogle,
//         signOutUser,
//         user,
//         loading

//     }
//     return (
//         <AuthContext value={authInfo}>
//             {children}
//        </AuthContext>
//     );
// };

// export default AuthProvider;

// src/context/AuthProvider.jsx
import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { toast } from "react-toastify";

const googleProvider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .catch((err) => {
        toast.error(`Registration failed: ${err.message}`);
        throw err;
      })
      .finally(() => setLoading(false));
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .catch((err) => {
        toast.error(`Login failed: ${err.message}`);
        throw err;
      })
      .finally(() => setLoading(false));
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        toast.success("Signed in with Google!");
        return result;
      })
      .catch((err) => {
        toast.error(`Google login failed: ${err.message}`);
        throw err;
      })
      .finally(() => setLoading(false));
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth)
      .then(() => toast.success("Logged out successfully!"))
      .catch((err) => {
        toast.error(`Logout failed: ${err.message}`);
        throw err;
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signInWithGoogle,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}
    </AuthContext.Provider>
  );
}

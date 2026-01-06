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
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { toast } from "react-toastify";

const googleProvider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const updateUserProfile = async (profile) => {
  if (!auth.currentUser) throw new Error("No user is signed in.");
  
  try {
    setLoading(true);
    // 1. Update the actual Firebase Auth record
    await updateProfile(auth.currentUser, profile);
    
    // 2. Force Firebase to reload the internal user data
    await auth.currentUser.reload();
    
    // 3. CRITICAL: Update state with a NEW object reference
    
    setUser({ ...auth.currentUser,
      displayName: profile.displayName || auth.currentUser.displayName,
  photoURL: profile.photoURL || auth.currentUser.photoURL
     }); 

    return true;
  } catch (err) {
    toast.error(`Profile update failed: ${err.message}`);
    throw err;
  } finally {
    setLoading(false);
  }
};

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
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
}

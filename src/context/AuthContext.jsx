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

import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase";
export const authContext = createContext();

const auth = getAuth(app);
const Context = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading ] = useState(true);
  const emailSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const emailSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return (signOut(auth)
      .then((data) => { setUser(null)})
      .catch((err) => console.log(err)));
  };

  // check user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false)
      }
    });
    return () => unSubscribe;
  }, [loading]);

  // update Profile 
  const updateName = (name) => {
    return (
      updateProfile(auth.currentUser, {
        displayName: name,
      })
        .then(() => { })
      .catch(err=>console.log(err))
    )
  }

  const contextValue = { user, emailSignIn, emailSignUp, logOut, updateName , loading};
  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
};

export default Context;

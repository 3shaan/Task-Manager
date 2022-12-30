import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase";
export const authContext = createContext();

const auth = getAuth(app);
const Context = ({ children }) => {
  const [user, setUser] = useState(null);

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
      }
    });
    return () => unSubscribe;
  }, []);

  const contextValue = { user, emailSignIn, emailSignUp, logOut };
  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
};

export default Context;

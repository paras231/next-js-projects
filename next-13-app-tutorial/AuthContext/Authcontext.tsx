import { useState, useEffect, createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";

const initialState = {
  currentUser: null,
};

type providerProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }: providerProps) => {
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user);
    });
    return () => {
      unSub();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

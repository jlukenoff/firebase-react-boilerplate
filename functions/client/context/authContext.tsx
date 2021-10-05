import { Auth, getAuth } from "@firebase/auth";
import React, { useState, useEffect, Ref, Dispatch } from "react";
import { AuthUI } from "../lib/firebase";

export interface IAuthContext {
  auth: Auth | null;
  isSignedIn?: boolean;
}

const AuthContext = React.createContext<IAuthContext>({ auth: null });

export const AuthContextProvider: React.FC = ({ children }) => {
  const auth = getAuth();
  const [isSignedIn, setIsSignedIn] = useState(
    auth !== null && !!auth.currentUser
  );

  useEffect(() => {
    const unsubscribeAuthStateListener = auth.onAuthStateChanged((user) => {
      setIsSignedIn(!!user);
    });

    return () => unsubscribeAuthStateListener();
  }, [auth]);

  return (
    <AuthContext.Provider
      value={{
        auth,
        isSignedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

import { FirebaseApp, FirebaseOptions } from "firebase/app";
import { Auth } from "firebase/auth";
import { ReactNode, useState } from "react";
import { FirebaseContext, FirebaseContextProps } from "./FirebaseContext";

interface FirebaseContextProviderProps {
  firebaseConfig: FirebaseOptions;
  children: ReactNode;
}

export function FirebaseContextProvider({
  children,
  firebaseConfig,
}: FirebaseContextProviderProps) {
  const [app, setApp] = useState<FirebaseApp | null>(null);
  const [auth, setAuth] = useState<Auth | null>(null);

  const context: FirebaseContextProps = {
    app,
    setApp,
    auth,
    setAuth,
    firebaseConfig,
  };

  return (
    <FirebaseContext.Provider value={context}>
      {children}
    </FirebaseContext.Provider>
  );
}

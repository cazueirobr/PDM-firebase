import { FirebaseApp, FirebaseOptions } from "firebase/app";
import { Auth } from "firebase/auth";
import { createContext } from "react";

export interface FirebaseContextProps {
  app: FirebaseApp | null;
  setApp: (app: FirebaseApp | null) => void;
  auth: Auth | null;
  setAuth: (auth: Auth | null) => void;
  firebaseConfig: FirebaseOptions | null;
}

export const FirebaseContext = createContext<FirebaseContextProps | undefined>(
  undefined
);

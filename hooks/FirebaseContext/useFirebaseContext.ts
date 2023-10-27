import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import * as firebaseAuth from "firebase/auth";
import { useContext, useEffect } from "react";
import { FirebaseContext, FirebaseContextProps } from "./FirebaseContext";

// ts-fix for firebase v10.x
const getReactNativePersistence = (firebaseAuth as any)
  .getReactNativePersistence;

export function useFirebaseContext() {
  const context = useContext<FirebaseContextProps | undefined>(FirebaseContext);

  if (context === undefined) {
    throw new Error("useTrack must be used inside FirebaseContextProvider!");
  }

  useEffect(() => {
    const app = initializeApp(context.firebaseConfig!);
    context.setApp(app);

    const auth = firebaseAuth.initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
    context.setAuth(auth);
  }, []);

  return {
    app: context.app,
    auth: context.auth,
  };
}

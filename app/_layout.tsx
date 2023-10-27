import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import firebaseConfig from "../config/firebaseConfig";
import { FirebaseContextProvider } from '../hooks/FirebaseContext/FirebaseContextProvider';

export default function _layout() {
  return (
    <FirebaseContextProvider firebaseConfig={firebaseConfig}>
        <Stack></Stack>
    </FirebaseContextProvider>
    
  )
}
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import firebaseConfig from "./config/firebaseConfig";
import Login from './components/Login';
import { FirebaseContextProvider } from './hooks/FirebaseContext/FirebaseContextProvider';


export default function App() {



  return (
    <FirebaseContextProvider firebaseConfig={firebaseConfig}>
    <View style={styles.container}>
      <Login></Login>
    </View>
    </FirebaseContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

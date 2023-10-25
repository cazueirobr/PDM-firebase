import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import firebaseConfig from "./config/firebaseConfig";
import useFirebase from "./hooks/useFirebase";
import useAuth from './hooks/useAuth';
import Login from './components/Login';


export default function App() {
  const firebaseApp = useFirebase(firebaseConfig);
  if (firebaseApp == null) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Login></Login>
    </View>
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

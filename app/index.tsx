import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import useAuth from '../hooks/useAuth';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Try } from 'expo-router/build/views/Try';



export default function Login() {
  const { loading, user, login, logout } = useAuth();
  const [usuario, setUsuario] = useState('fulano.exemplo@hotmail.com');
  const [senha, setSenha] = useState('teste123');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await login(usuario, senha);
      router.push("/home");
    } catch (error) {
      Alert.alert("Deu erro :/");
    }
    

  }
  return (
    <View style={styles.container}>
      <TextInput placeholder='Usuario' value={usuario} onChangeText={setUsuario}></TextInput>
      <TextInput placeholder='Senha' value={senha} onChangeText={setSenha}></TextInput>
      <Button title='Enviar' onPress={handleLogin}></Button>
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
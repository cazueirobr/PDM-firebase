import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import useAuth from '../hooks/useAuth';
import { useState } from 'react';



export default function Login() {
  const { loading, user, login, logout } = useAuth();
  const [usuario, setUsuario] = useState('fulano.exemplo@hotmail.com');
  const [senha, setSenha] = useState('teste123');

  const handleLogin = async () => {
    await login(usuario, senha);
    console.log('Deu certo!')
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
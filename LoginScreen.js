import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import api from './api';

export default function LoginScreen({ navigation }) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function login() {
    try {
      const response = await api.get('/usuarios');

      const usuario = response.data.find(
        (u) => u.email === email && u.senha === senha
      );

      if (usuario) {
        navigation.navigate('Contatos');
      } else {
        alert('Email ou senha inválidos!');
      }

    } catch (error) {
      console.log(error);
      alert('Erro ao conectar com o servidor');
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={setEmail}
        value={email}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
        onChangeText={setSenha}
        value={senha}
      />

      <TouchableOpacity 
        style={styles.button}
        onPress={login}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text>Cadastrar-se</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', padding:20 },
  title: { fontSize:24, marginBottom:20, textAlign:'center' },
  input: { backgroundColor:'#eee', padding:10, marginBottom:10 },
  button: { backgroundColor:'#2F6FDB', padding:12 },
  buttonText: { color:'#fff', textAlign:'center' }
});
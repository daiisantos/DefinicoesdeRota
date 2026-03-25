import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import api from './api';

export default function CadastroScreen({ navigation }) {

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function salvar() {
    await api.post('/usuarios', {
      nome, cpf, email, senha
    });

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text>Cadastro</Text>

      <TextInput placeholder="Nome" style={styles.input} onChangeText={setNome}/>
      <TextInput placeholder="CPF" style={styles.input} onChangeText={setCpf}/>
      <TextInput placeholder="Email" style={styles.input} onChangeText={setEmail}/>
      <TextInput placeholder="Senha" style={styles.input} onChangeText={setSenha}/>

      <TouchableOpacity style={styles.button} onPress={salvar}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, justifyContent:'center', padding:20 },
  input:{ backgroundColor:'#eee', marginBottom:10, padding:10 },
  button:{ backgroundColor:'#2F6FDB', padding:10 },
  buttonText:{ color:'#fff', textAlign:'center' }
});
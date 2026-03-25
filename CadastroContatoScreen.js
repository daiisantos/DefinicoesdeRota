import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import api from './api';

export default function CadastroContatoScreen({ navigation }) {

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');

  async function salvar() {
    await api.post('/contatos', {
      nome, telefone, email
    });

    navigation.goBack();
  }

  return (
    <View style={styles.container}>

      <TextInput placeholder="Nome" style={styles.input} onChangeText={setNome}/>
      <TextInput placeholder="Telefone" style={styles.input} onChangeText={setTelefone}/>
      <TextInput placeholder="Email" style={styles.input} onChangeText={setEmail}/>

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
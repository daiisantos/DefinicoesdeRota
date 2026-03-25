import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import api from './api';

export default function AlterarScreen({ route, navigation }) {

  const { contato } = route.params;

  const [nome, setNome] = useState(contato.nome);
  const [telefone, setTelefone] = useState(contato.telefone);

  async function atualizar() {
    await api.put(`/contatos/${contato.id}`, {
      nome, telefone
    });
    navigation.goBack();
  }

  async function excluir() {
    await api.delete(`/contatos/${contato.id}`);
    navigation.navigate('Contatos');
  }

  return (
    <View style={styles.container}>

      <TextInput value={nome} onChangeText={setNome} style={styles.input}/>
      <TextInput value={telefone} onChangeText={setTelefone} style={styles.input}/>

      <TouchableOpacity style={styles.button} onPress={atualizar}>
        <Text style={styles.buttonText}>Atualizar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.delete} onPress={excluir}>
        <Text style={styles.buttonText}>Excluir</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, justifyContent:'center', padding:20 },
  input:{ backgroundColor:'#eee', marginBottom:10, padding:10 },
  button:{ backgroundColor:'green', padding:10, marginBottom:10 },
  delete:{ backgroundColor:'red', padding:10 },
  buttonText:{ color:'#fff', textAlign:'center' }
});
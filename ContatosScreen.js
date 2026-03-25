import React, { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import api from './api';

export default function ContatosScreen({ navigation }) {

  const [contatos, setContatos] = useState([]);

  async function carregar() {
  try {
    const response = await api.get('/contatos');
    console.log("Dados:", response.data); 
    setContatos(response.data);
  } catch (error) {
    console.log("Erro ao carregar:", error);
  }
}

useFocusEffect(
  useCallback(() => {
    carregar();
  }, [navigation])
);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contatos</Text>

      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.item}
            onPress={() => navigation.navigate('Alteracao', { contato: item })}
          >
            <Text>{item.nome}</Text>
            <Text>{item.telefone}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CadastroContato')}
      >
        <Text style={styles.buttonText}>Novo</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:20 },
  title:{ fontSize:20 },
  item:{ padding:10, borderBottomWidth:1 },
  button:{ backgroundColor:'#2F6FDB', padding:10, marginTop:10 },
  buttonText:{ color:'#fff', textAlign:'center' }
});
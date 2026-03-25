
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import api from './api';

useEffect(() => {
  carregarContatos();
}, []);

async function carregarContatos() {
  const response = await api.get('/contatos');
  setContatos(response.data);
}
export default function CadastroUsuarioScreen({ navigation, usuarios, setUsuarios }) {

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function cadastrarUsuario() {

    if (!nome || !cpf || !email || !senha) {
      alert("Preencha todos os campos");
      return;
    }

    const novoUsuario = {
      id: Date.now().toString(),
      nome: nome,
      cpf: cpf,
      email: email,
      senha: senha
    };

    setUsuarios([...usuarios, novoUsuario]);

    alert("Usuário cadastrado com sucesso!");

    navigation.navigate('Login');
    
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        <Text style={styles.title}>Cadastro de Usuário</Text>

        <TextInput
          placeholder="Nome"
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          placeholder="CPF"
          style={styles.input}
          keyboardType="numeric"
          value={cpf}
          onChangeText={setCpf}
        />

        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Senha"
          style={styles.input}
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={styles.button} onPress={cadastrarUsuario}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Voltar para Login</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
  async function salvar() {
  await api.post('/contatos', {
    nome,
    telefone,
    email
  });

  navigation.goBack();
}
async function alterar() {
  await api.put(`/contatos/${contato.id}`, {
    nome,
    telefone,
    email
  });

  navigation.goBack();
}
async function excluir() {
  await api.delete(`/contatos/${contato.id}`);
  navigation.goBack();
}
async function cadastrarUsuario() {
  await api.post('/usuarios', {
    nome,
    email,
    senha
  });

  navigation.navigate('Login');
}
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#4CAF50',
    fontSize: 26,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#e0e0e0',
    width: '80%',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 12,
    width: '80%',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  link: {
    color: '#4CAF50',
    marginTop: 10,
  },
});
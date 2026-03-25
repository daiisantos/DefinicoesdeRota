import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './LoginScreen';
import ContatosScreen from './ContatosScreen';
import CadastroScreen from './CadastroScreen';
import CadastroContatoScreen from './CadastroContatoScreen';
import AlterarScreen from './AlterarScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen name="Login" component={LoginScreen} />

        <Stack.Screen name="Contatos" component={ContatosScreen} />

        <Stack.Screen name="Cadastro" component={CadastroScreen} />

        <Stack.Screen name="CadastroContato" component={CadastroContatoScreen} />

        <Stack.Screen name="Alteracao" component={AlterarScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
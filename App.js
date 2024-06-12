import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { registerRootComponent } from 'expo';

// Importe suas telas
import Exercicio from './app/exercicios/calistenia/exercicio';
import Calistenia from './app/exercicios/calistenia/calistenia';
import ExercicioIoga from './app/exercicios/ioga/exercicioIoga';
import Ioga from './app/exercicios/ioga/ioga';
import Meditacao from './app/exercicios/meditacao/meditacao';
import Index from './app/index';
import Perfil from './app/perfil/perfil-usuario';
import TelaInicial from './app/home/tela-inicial';
import Cadastro from './app/login/cadastro';
import Login from './app/login/login';
import Logar from './app/tela_inicial';
import Relatorio from './app/relatorio/relatorio';

const Stack = createStackNavigator();
registerRootComponent(App);

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Index' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Logar" component={Logar} />
        <Stack.Screen name="Exercicio" component={Exercicio}/>
        <Stack.Screen name="Calistenia" component={Calistenia}/>
        <Stack.Screen name="ExercicioIoga" component={ExercicioIoga}/>
        <Stack.Screen name="Ioga" component={Ioga}/>
        <Stack.Screen name="Meditacao" component={Meditacao}/>
        <Stack.Screen name="Index" component={Index}/>
        <Stack.Screen name="Perfil" component={Perfil}/>
        <Stack.Screen name="TelaInicial" component={TelaInicial}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Relatorio" component={Relatorio}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
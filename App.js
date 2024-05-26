import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Exercicios from './app/exercicios/calistenia/calistenia';
import Exercicio from './app/exercicios/calistenia/exercicio';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Exercicios">
        <Stack.Screen name="exercicios" component={Exercicios} />
        <Stack.Screen name="exercicio" component={Exercicio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
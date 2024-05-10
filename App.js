import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationHandler from './src/NavigationHandler/NavigationHandler';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <NavigationHandler/>
    </NavigationContainer>
  );
}

export default App;
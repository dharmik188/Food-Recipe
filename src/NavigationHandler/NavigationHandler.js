import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/RecipeScreen/RecipeListScreen';
import Login from '../Screens/FirstScreen/Login';
import Signup from '../Screens/FirstScreen/Signup';
import Welcome from '../Screens/FirstScreen/Welcome';
import RecipeListScreen from '../Screens/RecipeScreen/RecipeListScreen';
import RecipeDetailsScreen from '../Screens/RecipeScreen/RecipeDetailsScreen';
import RecipeCard from '../components/RecipeCard';

const Stack = createNativeStackNavigator();

const NavigationHandler = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="RecipeListScreen" component={RecipeListScreen} />
        <Stack.Screen name="RecipeCard" component={RecipeCard} />
		    <Stack.Screen name="RecipeDetailsScreen" component={RecipeDetailsScreen} />
      </Stack.Navigator>
  );
}

export default NavigationHandler;
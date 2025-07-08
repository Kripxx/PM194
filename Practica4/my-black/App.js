import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import BookDetailScreen from './src/screens/BookDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Libros" component={HomeScreen} />
        <Stack.Screen name="Detalle" component={BookDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
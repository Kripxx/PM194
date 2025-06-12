/* Zona 1: Importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

const Texto = () => {
  const [children, setChildren] = useState('Hola Mundo Rnative');
  const actualizarTexto = () => {
    setChildren('Hola Mundo Rnative Actualizado');
  }
  return (
    <Text onPress={actualizarTexto}>{children}</Text>
  );
};

const Boton = () => {
  const [children, setChildren] = useState('Hola Mundo Rnative');
  const actualizarTexto = () => {
    setChildren('Hola Mundo Rnative Actualizado');
  }
  return (
    <Button title={children} onPress={actualizarTexto} />
  );
}
/* Zona 2 : Main*/

export default function App() {
  return (
    <View style={styles.container}>
      <Texto>Hola Mundo</Texto>
      <Boton />
      <StatusBar style="auto" />
    </View>
  );
}
/* Estetica del screen */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

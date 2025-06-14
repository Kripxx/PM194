/* Zona 1: Importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

const Texto = ({style}) => {
  const [children, setChildren] = useState('Hola Mundo Rnative');
  const actualizarTexto = () => {
    setChildren('Hola Mundo Rnative Actualizado');
  }
  return (
    <Text style={[styles.text, style]} onPress={actualizarTexto}>{children}</Text>
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
      <Texto style={styles.red}>Hola Mundo</Texto>
      <Texto style={styles.blue}>Hola Mundo</Texto>
      <Texto style={styles.green}>Hola Mundo</Texto>
      <StatusBar style="auto" />
    </View>
  );
}
/* Estetica del screen */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'baseline',
    justifyContent: 'row',
  },
  text:{
    color:'#fff',
    fontSize: 27,
  },
  red:{backgroundColor:'red'},
  blue:{backgroundColor:'blue'},
  green:{backgroundColor:'green'}
});

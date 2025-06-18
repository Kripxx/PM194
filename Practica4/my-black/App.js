/* Zona 1: Importaciones */
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

/* Componente Texto */
const Texto = ({ style }) => {
  const [children, setChildren] = useState('Hola Mundo Rnative');

  const actualizarTexto = () => {
    setChildren('Hola Mundo Rnative Actualizado');
  };

  return (
    <Text style={[styles.text, style]} onPress={actualizarTexto}>
      {children}
    </Text>
  );
};

/* Zona 2: Main */
export default function App() {
  const [name, setName] = useState('');

  const showAlert = () => {
    if (name.trim() === '') {
      window.alert('Por favor, introduce tu nombre antes de continuar.');
    } else {
      window.alert(`¡Hola! Bienvenido/a, ${name}`);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.title}>Introduce tu nombre:</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={name}
        onChangeText={text => setName(text)}
      />
      <Button title="Mostrar alerta" onPress={showAlert} />
    </View>
  );
}

/* Estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    color: '#fff',
    fontSize: 27,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: 'white',
    width: '100%',
  },
  red: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  blue: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  green: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
});
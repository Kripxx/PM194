/* Zona 1: Importaciones */
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

/* Zona 2: Main */
export default function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [comments, setComments] = useState('');
  const [age, setAge] = useState('');

  const showAlert = () => {
    if (name.trim() === '' || password.trim() === '' || age.trim() === '') {
      window.alert('Por favor, completa todos los campos obligatorios.');
    } else {
      window.alert(
        `¡Bienvenido!\nNombre: ${name}\nEdad: ${age}\nComentarios: ${comments || 'Ninguno'}`
      );
    }
  };

  console.log('Nombre:', name);
  console.log('Contraseña:', password);
  console.log('Edad:', age);
  console.log('Comentarios:', comments);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Nombre (normal):</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.title}>Contraseña (oculta):</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Text style={styles.title}>Edad (numérico):</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu edad"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      <Text style={styles.title}>Comentarios (multilínea):</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Escribe tus comentarios"
        value={comments}
        onChangeText={setComments}
        multiline
        numberOfLines={4}
      />

      <Text style={styles.title}>Campo solo lectura:</Text>
      <TextInput
        style={styles.input}
        value="Este campo no se puede editar"
        editable={false}
      />

      <Button title="Mostrar alerta" onPress={showAlert} />
    </ScrollView>
  );
}

/* Zona 3: Estilos */
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 17,
    color: '#333',
    marginBottom: 6,
    alignSelf: 'flex-start',
  },
  input: {
    height: 44,
    borderColor: '#bbb',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    width: '100%',
    fontSize: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});
import React, { useState } from 'react';
import { StyleSheet, Text, ActivityIndicator, Button, View } from 'react-native';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [menssagens, setMensagens] = useState('');

  const simularCarga = () => {
    setLoading(true);
    setMensagens('');
    setTimeout(() => {
      setMensagens('Carga simulada com sucesso!');
      setLoading(false);
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Simulador de Carga</Text>

      {loading ? (
        <>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.text}>Cargando...</Text>
        </>
      ) : (
        <View style={{ alignItems: 'center' }}>
          <Button title="Simular Carga" onPress={simularCarga} />
          {menssagens !== '' && <Text style={styles.exito}>{menssagens}</Text>}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 50,
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center',
  },
  exito: {
    fontSize: 16,
    color: 'green',
    marginTop: 20,
  },
});
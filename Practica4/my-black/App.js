import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

export default function App() {
  const textos = Array.from({ length: 50 }, (_, i) => `Hola desde mi apppppp #${i + 1}`);

  return (
    <ScrollView contentContainerStyle={styles.container} 
    showsVerticalScrollIndicator={false}
    horizontal={true}>
      {textos.map((texto, index) => (
        <Text key={index} style={styles.text}>
          {texto}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 50,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
});
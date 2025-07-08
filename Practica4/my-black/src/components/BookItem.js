import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const colorsLight = {
  background: '#fafafa',
  textPrimary: '#212121',
  shadow: '#00000020',
};

const colorsDark = {
  background: '#1e1e1e',
  textPrimary: '#eee',
  shadow: '#00000090',
};

export default function BookItem({ book, isDark, navigation }) {
  const { title, publisher, description, imageLinks } = book.volumeInfo;
  const themeColors = isDark ? colorsDark : colorsLight;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detalle', { book })}
      activeOpacity={0.8}
    >
      <View
        style={[
          styles.container,
          {
            backgroundColor: themeColors.background,
            shadowColor: themeColors.shadow,
          },
        ]}
      >
        {imageLinks?.thumbnail && (
          <Image
            source={{ uri: imageLinks.thumbnail }}
            style={styles.thumbnail}
          />
        )}
        <View style={styles.info}>
          <Text style={[styles.title, { color: themeColors.textPrimary }]}>
            {title}
          </Text>
          <Text
            style={[
              styles.publisher,
              { color: themeColors.textPrimary, fontStyle: 'italic' },
            ]}
          >
            {publisher || 'Editorial desconocida'}
          </Text>
          <Text
            numberOfLines={3}
            style={{ color: themeColors.textPrimary, marginTop: 4 }}
          >
            {description || 'Sin descripción disponible.'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    borderRadius: 10,
    marginVertical: 6,
    // Sombra ligera para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // Elevación para Android
    elevation: 4,
  },
  thumbnail: {
    width: 60,
    height: 90,
    borderRadius: 6,
    marginRight: 12,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
  },
  publisher: {
    marginTop: 6,
    fontSize: 14,
  },
});
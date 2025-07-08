import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { useColorScheme } from 'react-native';

const colorsLight = {
  background: '#F0F2F5',
  textPrimary: '#212121',
  primary: '#4F46E5',
  buttonText: '#fff',
};

const colorsDark = {
  background: '#121212',
  textPrimary: '#E0E0E0',
  primary: '#818CF8',
  buttonText: '#121212',
};

export default function BookDetailScreen({ route }) {
  const { book } = route.params;
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const {
    title,
    authors,
    publisher,
    description,
    publishedDate,
    imageLinks,
    infoLink,
  } = book.volumeInfo;

  const themeColors = isDark ? colorsDark : colorsLight;

  return (
    <ScrollView style={[styles.container, { backgroundColor: themeColors.background }]}>
      {imageLinks?.thumbnail && (
        <Image source={{ uri: imageLinks.thumbnail }} style={styles.thumbnail} />
      )}
      <Text style={[styles.title, { color: themeColors.textPrimary }]}>{title}</Text>
      {authors && (
        <Text style={[styles.authors, { color: themeColors.textPrimary }]}>
          Autor(es): {authors.join(', ')}
        </Text>
      )}
      {publisher && (
        <Text style={[styles.publisher, { color: themeColors.textPrimary }]}>
          Editorial: {publisher}
        </Text>
      )}
      {publishedDate && (
        <Text style={[styles.publisher, { color: themeColors.textPrimary }]}>
          Publicado: {publishedDate}
        </Text>
      )}
      {description && (
        <Text style={[styles.description, { color: themeColors.textPrimary }]}>
          {description}
        </Text>
      )}

      {infoLink && (
        <TouchableOpacity
          onPress={() => Linking.openURL(infoLink)}
          activeOpacity={0.8}
          style={[styles.button, { backgroundColor: themeColors.primary }]}
        >
          <Text style={[styles.buttonText, { color: themeColors.buttonText }]}>
            Ver en Google Books
          </Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  thumbnail: {
    width: 150,
    height: 220,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
  },
  authors: {
    fontSize: 16,
    marginBottom: 4,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  publisher: {
    fontSize: 14,
    marginBottom: 4,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginTop: 16,
    lineHeight: 24,
    textAlign: 'justify',
  },
  button: {
    marginTop: 30,
    marginHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 6,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
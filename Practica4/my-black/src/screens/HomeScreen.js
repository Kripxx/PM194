import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    SectionList,
    ActivityIndicator,
    TouchableOpacity,
    StyleSheet,
    useColorScheme,
    ScrollView,
} from 'react-native';
import axios from 'axios';
import BookItem from '../components/BookItem';

const CATEGORIES = ['Ficcion', 'Historia', 'Tecnologia', 'Ciencia', 'Arte', 'Salud'];

const colorsLight = {
    background: '#F0F2F5',
    textPrimary: '#212121',
    primary: '#4F46E5',
    secondary: '#E0E7FF',
    error: '#EF4444',
};

const colorsDark = {
    background: '#121212',
    textPrimary: '#E0E0E0',
    primary: '#818CF8',
    secondary: '#1E293B',
    error: '#F87171',
};

export default function HomeScreen({ navigation }) {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('Ficcion');
    const [error, setError] = useState('');

    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';

    useEffect(() => {
        fetchBooks();
    }, [selectedCategory]);

    const fetchBooks = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=subject:${selectedCategory}&maxResults=20`
            );
            const items = response.data.items || [];
            const grouped = groupByAuthor(items);
            setBooks(grouped);
        } catch (err) {
            setError('Error al obtener los libros. Verifica tu conexión.');
        } finally {
            setLoading(false);
        }
    };

    const groupByAuthor = (items) => {
        const groups = {};
        items.forEach((item) => {
            const authors = item.volumeInfo.authors || ['Autor desconocido'];
            authors.forEach((author) => {
                if (!groups[author]) groups[author] = [];
                if (groups[author].length < 3) {
                    groups[author].push(item);
                }
            });
        });

        return Object.keys(groups).map((author) => ({
            title: author,
            data: groups[author],
        }));
    };

    const themeColors = isDark ? colorsDark : colorsLight;

    return (
        <View style={[styles.container, { backgroundColor: themeColors.background }]}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoriesContainer}
            >
                {CATEGORIES.map((cat) => (
                    <TouchableOpacity
                        key={cat}
                        style={[
                            styles.categoryButton,
                            selectedCategory === cat && { backgroundColor: themeColors.primary },
                            { borderColor: themeColors.primary },
                            isDark && stylesDark.categoryButton,
                        ]}
                        onPress={() => setSelectedCategory(cat)}
                    >
                        <Text
                            style={[
                                styles.categoryText,
                                { color: selectedCategory === cat ? colorsLight.buttonText : themeColors.primary },
                                isDark && { color: selectedCategory === cat ? colorsDark.buttonText : themeColors.primary },
                            ]}
                        >
                            {cat}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {loading && <ActivityIndicator size="large" color={themeColors.primary} />}
            {error ? (
                <Text style={[styles.error, { color: themeColors.error }]}>{error}</Text>
            ) : (
                <SectionList
                    sections={books}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <BookItem
                            book={item}
                            isDark={isDark}
                            navigation={navigation}
                        />
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={[styles.header, { backgroundColor: themeColors.secondary, color: themeColors.textPrimary }]}>
                            {title}
                        </Text>
                    )}
                    ListEmptyComponent={
                        !loading && (
                            <Text style={[styles.noResults, { color: themeColors.textPrimary }]}>
                                No hay resultados.
                            </Text>
                        )
                    }
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    categoriesContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        paddingHorizontal: 4,
    },
    categoryButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1.5,
        borderRadius: 24,
        marginRight: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    categoryText: {
        fontWeight: '600',
        fontSize: 16,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 6,
        marginTop: 10,
    },
    error: {
        textAlign: 'center',
        marginTop: 20,
        fontWeight: '600',
        fontSize: 16,
    },
    noResults: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
    },
});

const stylesDark = StyleSheet.create({
    categoryButton: {
        // Opcional: ajustar borde en modo oscuro
    },
});
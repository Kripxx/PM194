import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Detail({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.iconRow}>
                <Ionicons name="person-circle-outline" size={48} color="#B07BFF" />
                <Text style={styles.title}>Detalles del usuario</Text>
                <Text style={styles.text}>Nombre: Juan Pérez</Text>
                <Text style={styles.text}>Email: juan@example.com</Text>
                <Text style={styles.text}>Teléfono: +123456789</Text>
                
                <Pressable 
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.buttonText}>Volver a Perfil</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 20,
    },
    iconRow: {
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 20,
        color: '#B07BFF',
    },
    text: {
        fontSize: 16,
        marginVertical: 5,
    },
    backButton: {
        marginTop: 30,
        backgroundColor: '#B07BFF',
        padding: 15,
        borderRadius: 8,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
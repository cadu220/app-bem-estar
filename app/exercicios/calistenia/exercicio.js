import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Exercicio = ({ navigation, route }) => {
    const { exercises } = route.params;

    return (
        <View style={styles.container}>
            {exercises.map((exercise, index) => (
                <View key={index} style={styles.exercise}>
                    <Text style={styles.title}>{exercise.name}</Text>
                    <Text>{exercise.instructions}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    exercise: {
        marginVertical: 8,
        padding: 16,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Exercicio;

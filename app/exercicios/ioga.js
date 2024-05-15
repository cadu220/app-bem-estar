import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import exerciseData from './ioga.json'; 

export default function Ioga() {
    const [typeGroup, setTypeGroup] = useState(null);
    const [exercises, setExercises] = useState([]);
    
    useEffect(() => {
        if (typeGroup) {
        // Filtrar os exercícios pelo músculo selecionado
        const filteredExercises = exerciseData.filter((exercise) => exercise.type === typeGroup);
        setExercises(filteredExercises);
        }
    }, [typeGroup]);
    
    const handleTypeSelect = (muscle) => {
        setTypeGroup(muscle);
    };
    
    return (
        <View>
            <Text>Selecione um grupo de exercícios:</Text>
            <TouchableOpacity onPress={() => handleTypeSelect('antebraço')} style={styles.title}>
                <Text>antebraço</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTypeSelect('bíceps')} style={styles.title}>
                <Text>bíceps</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTypeSelect('quadríceps')} style={styles.title}>
                <Text>quadríceps</Text>
            </TouchableOpacity>
            <Text>Exercícios:</Text>
            {exercises.map((exercise, index) => (
                <View key={index}>
                    <Image
                        source={{ uri: exercise.image}}
                        style={{ width: 300, height: 200 }}
                    />
                    <Text>{exercise.name}</Text>
                    <Text>{exercise.instructions}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: "100%",
        backgroundColor: "#F8F8F8",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "white",
        textAlign: "center",
        color: "white",
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 30,
        padding: 10,
        marginTop: 50,
        marginBottom: 30,
        borderWidth: 1,
        borderRadius: 40,
        borderColor: "#75D67F",
        backgroundColor: "#75D67F",
    },
    exercise: {
        color: "white",
        textAlign: "center",
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 25,
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderRadius: 40,
        borderColor: "#75D67F",
        backgroundColor: "#75D67F",
    },  
});
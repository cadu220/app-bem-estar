import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import exerciseData from './calistenia.json'; 

export default function Exercicios() {
    const [muscleGroup, setMuscleGroup] = useState(null);
    const [exercises, setExercises] = useState([]);
    
    useEffect(() => {
        if (muscleGroup) {
        // Filtrar os exercícios pelo músculo selecionado
        const filteredExercises = exerciseData.filter((exercise) => exercise.muscle === muscleGroup);
        setExercises(filteredExercises);
        }
    }, [muscleGroup]);
    
    const handleMuscleSelect = (muscle) => {
        setMuscleGroup(muscle);
    };
    
    return (
        <View>
            <Text>Selecione um grupo muscular:</Text>
            <TouchableOpacity onPress={() => handleMuscleSelect('antebraço')}>
                <Text>antebraço</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleMuscleSelect('bíceps')}>
                <Text>bíceps</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleMuscleSelect('quadríceps')}>
                <Text>quadríceps</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleMuscleSelect('dorsal')}>
                <Text>dorsal</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleMuscleSelect('costas')}>
                <Text>costas</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleMuscleSelect('lombar')}>
                <Text>lombar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleMuscleSelect('abdominal')}>
                <Text>abdominal</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleMuscleSelect('ombros')}>
                <Text>ombros</Text>
            </TouchableOpacity>
            <Text>Exercícios:</Text>
            {exercises.map((exercise, index) => (
                <View key={index}>
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
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 25,
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
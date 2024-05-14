import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useState, useEffect } from 'react';
import exerciseData from './calistenia.json'; 

export default function Exercicios() {
    const [muscleGroup, setMuscleGroup] = useState(null);
    const [exercises, setExercises] = useState([]);
    const [ showExercises, setShowExercises ] = useState();

    useEffect(() => {
        if (muscleGroup) {
        // Filtrar os exercícios pelo músculo selecionado
        const filteredExercises = exerciseData.filter((exercise) => exercise.muscle === muscleGroup);
        setExercises(filteredExercises);
        }
    }, [muscleGroup]);
    
    const handleMuscleSelect = (muscle) => {
        setMuscleGroup(muscle);
        setShowExercises(true);
    };
    
    return (
        <View>
            <ScrollView>
            <View style={styles.container}>
            <Text>Selecione um grupo muscular:</Text>
            <TouchableOpacity onPress={() => handleMuscleSelect('antebraço')} style={styles.title}>
                <Text>ANTEBRAÇO</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleMuscleSelect('bíceps')} style={styles.title}>
                <Text>BÍCEPS</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleMuscleSelect('quadríceps')} style={styles.title}>
                <Text>QUADRÍCEPS</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleMuscleSelect('dorsal')} style={styles.title}>
                <Text>DORSAL</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleMuscleSelect('costas')} style={styles.title}>
                <Text>COSTAS</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleMuscleSelect('lombar')} style={styles.title}>
                <Text>LOMBAR</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleMuscleSelect('abdominal')} style={styles.title}>
                <Text>ABDOMINAL</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleMuscleSelect('ombros')} style={styles.title}>
                <Text>OMBROS</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => setShowExercises(false)} style={styles.title}>
                <Text>VOLTAR</Text>
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
        </ScrollView>
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
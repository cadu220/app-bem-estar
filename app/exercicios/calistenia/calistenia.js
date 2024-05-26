import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import exerciseData from './calistenia.json';
import { useNavigation } from '@react-navigation/native';

export default function Exercicios() {
    const [muscleGroup, setMuscleGroup] = useState(null);
    const [exercises, setExercises] = useState([]);
    const [ showExercises, setShowExercises ] = useState(false);
    const navigation = useNavigation();
    
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

    const startExercise = () => {
        navigation.navigate('exercicio');
    };
    
    return (
        <View>
            <ScrollView>
            <View style={styles.container}>
                { !showExercises ? (
                <View>
                    <View style={styles.title}>
                        <Text style={styles.h1}>Selecione um grupo muscular</Text>
                    </View>
                    <TouchableOpacity onPress={() => handleMuscleSelect('antebraço')} style={styles.exercise}>
                        <Text style={styles.title_text}>ANTEBRAÇO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleMuscleSelect('bíceps')} style={styles.exercise}>
                        <Text style={styles.title_text}>BÍCEPS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleMuscleSelect('quadríceps')} style={styles.exercise}>
                        <Text style={styles.title_text}>QUADRÍCEPS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleMuscleSelect('dorsal')} style={styles.exercise}>
                        <Text style={styles.title_text}>DORSAL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleMuscleSelect('costas')} style={styles.exercise}>
                        <Text style={styles.title_text}>COSTAS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleMuscleSelect('lombar')} style={styles.exercise}>
                        <Text style={styles.title_text}>LOMBAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleMuscleSelect('abdominal')} style={styles.exercise}>
                        <Text style={styles.title_text}>ABDOMINAL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleMuscleSelect('ombros')} style={styles.exercise}>
                        <Text style={styles.title_text}>OMBROS</Text>
                    </TouchableOpacity>
                </View>
                ) : (
                <View>
                <TouchableOpacity onPress={() => setShowExercises(false)} style={styles.title}>
                    <Text style={styles.title_text}>VOLTAR</Text>
                </TouchableOpacity>
                {/*<Image source={{ uri: exercise.image}} style={{ width: 300, height: 200 }}/> */
                exercises.map((exercise, index) => (
                    <View key={index} style={styles.exercise}>
                        <Text style={styles.title_text}>{exercise.name}</Text>
                    </View>
                ))}
                    <TouchableOpacity onPress={startExercise} style={styles.title}>
                        <Text style={styles.h1}>Começar</Text>
                    </TouchableOpacity>
                   </View>)}
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
        padding: 10,
        margin: 20,
        borderWidth: 1,
        borderRadius: 40,
        borderColor: "#75D67F",
        backgroundColor: "#75D67F",
    },
    h1: {
        color: "white",
        fontSize: 35,
        textAlign: "center",
    },
    title_text : {
        textAlign: "center",
        fontSize: 30,
    },
    exercise: {
        textAlign: "center",
        fontSize: 25,
        padding: 10,
        margin: 20,
        borderWidth: 1,
        borderRadius: 40,
        borderColor: "#75D67F",
        backgroundColor: "#75D67F",
    },  
});
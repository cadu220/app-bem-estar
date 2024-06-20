import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useState, useEffect } from 'react';
import exerciseData from './ioga.json';
import { useNavigation } from '@react-navigation/native'; 

export default function Ioga() {
    const [typeGroup, setTypeGroup] = useState(null);
    const [exercises, setExercises] = useState([]);
    const [ showExercises, setShowExercises ] = useState(false);
    const navigation = useNavigation();
    
    useEffect(() => {
        if (typeGroup) {
        // Filtrar os exercícios pelo músculo selecionado
        const filteredExercises = exerciseData.filter((exercise) => exercise.type === typeGroup);
        setExercises(filteredExercises);
        }
    }, [typeGroup]);
    
    const handleTypeSelect = (muscle) => {
        setTypeGroup(muscle);
        setShowExercises(true);
    };

    const startExercise = () => {
        console.log(typeGroup);
        navigation.navigate('ExercicioIoga', {exercises: exercises});
    };
    
    return (
        <View>
            <ScrollView>
                { !showExercises ? (
                <View>
                    <View style={styles.title}>
                        <Text style={styles.h1}>Selecione um grupo de exercícios:</Text>
                    </View>
                    <TouchableOpacity onPress={() => handleTypeSelect('Alongamento')} style={styles.exercise}>
                        <Text style={styles.title_text}>Alongamento</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleTypeSelect('Fortalecimento')} style={styles.exercise}>
                        <Text style={styles.title_text}>Fortalecimento</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleTypeSelect('Equilíbrio')} style={styles.exercise}>
                        <Text style={styles.title_text}>Equilíbrio</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleTypeSelect('Flexão')} style={styles.exercise}>
                        <Text style={styles.title_text}>Flexão</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View>
                <TouchableOpacity onPress={() => setShowExercises(false)} style={styles.title}>
                    <Text style={styles.title_text}>VOLTAR</Text>
                </TouchableOpacity>
                {
                exercises.map((exercise, index) => (
                    <View key={index} style={styles.exercise}>
                        <Text style={styles.title_text}>{exercise.name}</Text>
                    </View>
                ))}
                    <TouchableOpacity onPress={startExercise} style={styles.title}>
                        <Text style={styles.h1}>Começar</Text>
                    </TouchableOpacity>
                </View>
            )
        }
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
        marginTop: 60,
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
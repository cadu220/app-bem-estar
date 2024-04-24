import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Exercicios() {

    const muscle = 'biceps'
    const [ exercises, setExercises ] = useState([])

    const getExercises = async () => {
        const config = {
            headers: {
                'X-Api-Key' : 'qh0vKtOGyRDfZSCiraUK+w==YQaTZmyUepvabflF'
            }
        }
        try {
            res = await axios.get(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, config)
            const data = res.data;
            setExercises(data);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getExercises()
    }, []);

    return(
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.title}>Treino de {muscle}</Text>
            {exercises.map((exercise, index) => (
                <View key={index} style={styles.exercise}>
                    <Text>{exercise.name}</Text>
                    <Text>{exercise.type}</Text>
                    <Text>{exercise.difficulty}</Text>
                </View>
            ))}
        </View>
        </ScrollView>
    );
}

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
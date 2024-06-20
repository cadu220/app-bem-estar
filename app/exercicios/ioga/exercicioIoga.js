import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const ExercicioIoga = ({ route, navigation }) => {
  const { exercises } = route.params;
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);

  const currentExercise = exercises[currentExerciseIndex];

  const handleNext = () => {
    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
      setShowDescription(false);
    } else {
      navigation.navigate('ExercicioFinalizado');
    }
  };

  return (
    <ScrollView>
        <View style={styles.container}>
      <Image source={{ uri: currentExercise.image }} style={styles.gif} />
      <Text style={styles.name}>{currentExercise.name}</Text>
      <TouchableOpacity onPress={() => setShowDescription(!showDescription)}>
        <Text style={styles.descriptionButton}>Mostrar Descrição</Text>
      </TouchableOpacity>
      {showDescription && <Text style={styles.instructions}>{currentExercise.instructions}</Text>}
      <TouchableOpacity onPress={handleNext} style={styles.button}>
        <Text style={styles.button_text}>Avançar</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120,
    padding: 20,
    backgroundColor: '#F8F8F8',
  },
  gif: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  reps: {
    fontSize: 20,
    marginBottom: 20,
  },
  descriptionButton: {
    fontSize: 18,
    color: '#75D67F',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  nextButtonText: {
    fontSize: 18,
    color: '#FFF',
  },
  button_text: {
    color: "white",
    fontSize: 35,
    textAlign: "center",
  },
  button: {
    textAlign: "center",
    fontSize: 25,
    padding: 10,
    margin: 20,
    borderWidth: 1,
    borderRadius: 40,
    borderColor: "#75D67F",
    backgroundColor: "#75D67F",
  }
});

export default ExercicioIoga;

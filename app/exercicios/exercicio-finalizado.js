import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ExercicioFinalizado = () => {
    const navigation = useNavigation();

    const handleNext = () => {
        navigation.navigate('TelaInicial');
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.title_text}>Exercício Finalizado</Text>
                </View>
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
  title: {
    width: 250,
    padding: 10,
    margin: 90,
    borderWidth: 1,
    borderRadius: 40,
    borderColor: "#75D67F",
    backgroundColor: "#75D67F",
  },
  title_text : {
    textAlign: "center",
    fontSize: 30,
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
    marginBottom: 200,
    borderWidth: 1,
    borderRadius: 40,
    borderColor: "#75D67F",
    backgroundColor: "#75D67F",
  }
});

export default ExercicioFinalizado;

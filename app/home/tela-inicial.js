import React from 'react';
import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Footer from "../footer/footer";

const imageMeditacao = require('./imgs/meditacao.png');
const imageCalistenia = require('./imgs/calistenia.png');
const imageIoga = require('./imgs/ioga.png');
import { useNavigation } from '@react-navigation/native';

export default function TelaInicial() {
  const navigation = useNavigation();

  const navigatePage = (page) => {
    navigation.navigate(page);
  }
  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" style="dark" />
        <Pressable onPress={() => navigatePage("Meditacao")} style={styles.button} android_ripple={{ color: '#fff' }}>
          <Image source={imageMeditacao} style={styles.buttonBackgroundImage} />
          <Text style={styles.buttonText}>MEDITAÇÃO</Text>
        </Pressable>

        <Pressable onPress={() => navigatePage("Calistenia")} style={styles.button} android_ripple={{ color: '#fff' }}>
          <Image source={imageCalistenia} style={styles.buttonBackgroundImage} />
          <Text style={styles.buttonText}>MUSCULAÇÃO</Text>
        </Pressable>

        <Pressable onPress={() => navigatePage("Ioga")} style={styles.button} android_ripple={{ color: '#fff' }}>
          <Image source={imageIoga} style={styles.buttonBackgroundImage} />
          <Text style={styles.buttonText}>IOGA</Text>
        </Pressable>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Alterado para branco
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
    height: 150,
    borderRadius: 30,
    justifyContent: 'flex-start',
    alignItems: "flex-start",
    marginVertical: 10,
    backgroundColor: 'transparent',
    overflow: 'hidden', 
  },
  buttonText: {
    color: '#FFFFFF', // Alterado para preto
    fontSize: 35,
    left: 20,
    fontWeight: "bold",
  },
  buttonBackgroundImage: {
    ...StyleSheet.absoluteFillObject, 
    width: undefined,
    height: undefined,
  },
});

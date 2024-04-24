import React from 'react';
import { StyleSheet, View, Text, Pressable,Button,  Image } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Footer from "../footer/footer";

const imageMeditacao = require('./imgs/meditacao.png');
const imageCalistenia = require('./imgs/calistenia.png');
const imageIoga = require('./imgs/ioga.png');

export default function TelaInicial() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" style="dark" />
      <Link href="exercicios/meditacao" asChild>
        <Pressable style={styles.button} android_ripple={{ color: '#fff' }}>
          <Image source={imageMeditacao} style={styles.buttonBackgroundImage} />
          <Text style={styles.buttonText}>MEDITAÇÃO</Text>
        </Pressable>
      </Link>

      <Link href="exercicios/calistenia" asChild>
        <Pressable style={styles.button} android_ripple={{ color: '#fff' }}>
          <Image source={imageCalistenia} style={styles.buttonBackgroundImage} />
          <Text style={styles.buttonText}>CALISTENIA</Text>
        </Pressable>
      </Link>

      <Link href="passageiro/ioga" asChild>
        <Pressable style={styles.button} android_ripple={{ color: '#fff' }}>
          <Image source={imageIoga} style={styles.buttonBackgroundImage} />
          <Text style={styles.buttonText}>IOGA</Text>
        </Pressable>
      </Link>
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
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: 'transparent',
    overflow: 'hidden', 
  },
  buttonText: {
    color: '#000000', // Alterado para preto
    fontSize: 18,
  },
  buttonBackgroundImage: {
    ...StyleSheet.absoluteFillObject, 
    width: undefined,
    height: undefined,
  },
});

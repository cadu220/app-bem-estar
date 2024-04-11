import React from 'react';
import { StyleSheet, View, Text, Pressable,Button,  Image } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Footer from "../footer/footer";

const image = require('./imgs/healthy-fitness-concept-fulllength-portrait-beautiful-american-african-lady-grey-fitness.jpg');

export default function TelaInicial() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" style="dark" />
      <Link href="/" asChild>
        <Pressable style={styles.button} android_ripple={{ color: '#fff' }}>
          <Image source={image} style={styles.buttonBackgroundImage} />
          <Text style={styles.buttonText}>Index</Text>
        </Pressable>
      </Link>

      <Link href="perfil/perfil-usuario" asChild>
        <Pressable style={styles.button} android_ripple={{ color: '#fff' }}>
          <Image source={image} style={styles.buttonBackgroundImage} />
          <Text style={styles.buttonText}>Tela Perfil</Text>
        </Pressable>
      </Link>

      <Link href="passageiro/cadastro" asChild>
        <Pressable style={styles.button} android_ripple={{ color: '#fff' }}>
          <Image source={image} style={styles.buttonBackgroundImage} />
          <Text style={styles.buttonText}>Cadastro Passageiro</Text>
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
    ...StyleSheet.absoluteFillObject, // Para preencher todo o espaço do botão
    width: undefined,
    height: undefined,
  },
});

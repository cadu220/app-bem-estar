import { StyleSheet, Pressable, View, Text, Image } from "react-native";
import React from 'react';
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Footer from "../footer/footer";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#151718" style="light" />
      <Text style={styles.title}>Seu Perfil</Text>
      <View>
        <View style={styles.profile_info}>
          <Text style={styles.h3}>Usuário</Text>
          <Image style={styles.profile_picture} source={require('./imgs/profilePicture.png')}/>
          <Text style={{alignSelf:'center', fontSize: 18}}>"Nome do Usuário"</Text>
          <Text style={styles.info_text}>Gênero: "Gênero do usuário"</Text>
          <Text style={styles.info_text}>Idade: "Idade do usuário</Text>
        </View>
        <View style={styles.config}>
          <Text style={styles.h3}>Configurações</Text>
          <View style={styles.line}>
            <Image source={require('./imgs/editButton.png')}/>
            <Text style={styles.info_text}>Idade: "Idade do usuário"</Text>
          </View>
          <View style={styles.line}>
            <Image source={require('./imgs/editButton.png')}/>
            <Text style={styles.info_text}>Nome: "Nome do usuário"</Text>
          </View>
          <View style={styles.line}>
            <Image source={require('./imgs/editButton.png')}/>
            <Text style={styles.info_text}>Apelido: "Apelido do usuário"</Text>
          </View>
          <View style={styles.line}>
            <Image source={require('./imgs/editButton.png')}/>
            <Text style={styles.info_text}>Email: "Email do usuário"</Text>
          </View>
          <View style={styles.line}>
            <Image source={require('./imgs/editButton.png')}/>
            <Text style={styles.info_text}>Estilo Principal: "Yoga"</Text>
          </View>
          <Pressable style={styles.botao_report}>
            <Text style={styles.botao_text}>REPORTAR ERRO</Text>
          </Pressable>
        </View>
      </View>
        <View>
          <Link href='amigos/tela-amigos' asChild>
            <Pressable>
              <Text style={styles.title}>Amigos</Text>
            </Pressable>
          </Link>
        </View>
      <Footer/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center"
  },
  h3: {
    color: '#54B85E',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  info_text: {
    fontSize: 18,
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  botao_report: {
    backgroundColor: "#D9D9D9",
    width: "50%",
    padding: 5,
    margin: 10,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: 'white',
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 25,
    padding: 10,
    borderWidth: 1,
    borderRadius: 40,
    borderColor: '#75D67F',
    backgroundColor: '#75D67F',
  },
  profile_picture: {
    borderWidth: 1,
    borderRadius: 80,
    width: 80,
    height: 80,
  },
  profile_info: {
    border: 1,
    borderColor: 'black',
    height: 200,
    width: 340,
    marginTop: 30,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
  config: {
    height: 300,
    justifyContent: 'space-around',
    border: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderColor: 'black',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
})
import {
  StyleSheet,
  Pressable,
  ScrollView,
  View,
  Text,
  Image,
} from "react-native";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Footer from "../footer/footer";
const image = require("./imgs/healthy-fitness-concept-fulllength-portrait-beautiful-american-african-lady-grey-fitness.jpg");

export default function Perfil() {
  //   const [Nome, setNome] = useState();

  //   useEffect(() => {
  //     Start();
  //   }, []);
  //   const Start = async () => {
  //     let sessao = await GetSessao();
  //     setNome(sessao.nome);
  //   };

  //   const GetSessao = async () => {
  //     try {
  //       const jsonValue = await AsyncStorage.getItem("sessao");

  //       return jsonValue != null ? JSON.parse(jsonValue) : null;
  //     } catch (e) {}
  //   };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <StatusBar backgroundColor="#151718" style="light" />
        <Text style={styles.title}>Seu Perfil</Text>
        <View style={styles.profile_info}>
          <Text style={styles.h3}>Exercícios</Text>
          <Text style={styles.info_text}>Todos exercícios feitos: 150</Text>
          <Text style={styles.info_text}>Exercícios feitos esse mês: 24</Text>
          <Text style={styles.info_text}>Exercícios feitos essa semana: 8</Text>
          <Text style={styles.info_text}>Exercícios feitos hoje: 1</Text>
        </View>
        <View style={styles.profile_img}>
          <Image source={image} style={styles.buttonBackgroundImage} />
        </View>
        <View style={styles.config}>
          <Text style={styles.h3}>Tempo de Atividades</Text>
          <Text style={styles.info_text}>Conta criada em: 25/10/2023</Text>
          <Text style={styles.info_text}>Tempo de conta: 30 dias</Text>
          <Text style={styles.info_text}>Maior ofensiva: 20 dias</Text>
          <Text style={styles.info_text}>Ofensiva atual: 4 dias</Text>
          <Text style={styles.info_text}>Meta de Ofensiva: 30 dias</Text>
          <Text style={styles.info_text}>Dias para meta: 26 dias</Text>
          <Text style={styles.info_text}></Text>
        </View>
        <View style={styles.vazio}></View>
      </ScrollView>
      <Footer />
    </View>
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
  h3: {
    color: "#54B85E",
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
  },
  info_text: {
    fontSize: 18,
    marginTop: 3,
  },
  line: {
    flexDirection: "row",
    alignItems: "center",
  },
  botao_report: {
    backgroundColor: "#D9D9D9",
    width: "50%",
    padding: 5,
    margin: 10,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    textAlign: "center",
    paddingLeft: 40,
    paddingRight: 40,
    marginBottom: 60,
    top: 40,
    fontSize: 25,
    padding: 10,
    borderWidth: 1,
    borderRadius: 40,
    borderColor: "#75D67F",
    backgroundColor: "#75D67F",
    width: 200,
    alignSelf: "center",
  },
  profile_picture: {
    borderWidth: 1,
    borderRadius: 80,
    width: 80,
    height: 80,
  },
  profile_info: {
    border: 1,
    borderColor: "black",
    height: 130,
    width: 340,
    marginTop: 30,
    paddingLeft: 10,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
  },
  config: {
    height: 280,
    justifyContent: "space-between",
    paddingVertical: 1,
    border: 1,
    marginBottom: 2,
    paddingLeft: 10,
    borderColor: "black",
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
  },
  profile_img: {
    border: 1,
    borderColor: "black",
    height: 150,
    width: 340,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
  },
  buttonBackgroundImage: {
    ...StyleSheet.absoluteFillObject, // Para preencher todo o espaço do botão
    width: undefined,
    height: undefined,
    borderRadius: 30,
    height: 150,
  },
  vazio: {
    marginTop: 70,
  },
});

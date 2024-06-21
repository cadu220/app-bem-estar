import {
  StyleSheet,
  Pressable,
  ScrollView,
  ToastAndroid,
  View,
  Text,
  Image,
  ActivityIndicator,
} from "react-native";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Footer from "../footer/footer";
import {
  collection,
  getDocs,
  query,
  where,
  getCountFromServer,
} from "firebase/firestore";
import db from "../firebase";
const image = require("./imgs/pesos.jpg");

export default function Relatorio() {
  const [relatorio, setRelatorio] = useState();
  const [iniciarRelatorio, setIniciarRelatorio] = useState(false);


  useEffect(() => {
    Start();
  }, []);
  const Start = async () => {
    let sessao = await GetSessao();
    pesquisarRelatorio(sessao);
  };

  const GetSessao = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("sessao");

      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {}
  };

  const pesquisarRelatorio = async (sessao) => {
    console.log(sessao);
    let query_validar_email = query(
      collection(db, "relatorio"),
      where("usuario", "==", sessao.email)
    );
    let querySnapshot = await getCountFromServer(query_validar_email);
    if (querySnapshot.data().count >= 1) {
      const q = query(
        collection(db, "relatorio"),
        where("usuario", "==", sessao.email)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        SalvarInfoRelatorio(doc.data(), "relatorio");
      });
    } else {
      console.log("aaa");
      ToastAndroid.showWithGravity(
        `Senha ou Email incorreto!`,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    }
  };

  const SalvarInfoRelatorio = async (data) => {
    const jsonValue = JSON.stringify(data);
    console.log(123);
    console.log(jsonValue);
    setRelatorio(jsonValue);
    setIniciarRelatorio(true)
    return;
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {iniciarRelatorio ? (
          <View>
            <StatusBar backgroundColor="#151718" style="light" />
            <Text style={styles.title}>Seu Perfil</Text>
            <View style={styles.profile_info}>
              <Text style={styles.h3}>Exercícios</Text>
              <Text style={styles.info_text}>
                Todos exercícios feitos:{" "}
                {relatorio.exerciciosfeitos ? relatorio.exerciciosfeitos : 0}
              </Text>
              <Text style={styles.info_text}>
                Exercícios feitos esse mês:{" "}
                {relatorio.exerciciosfeitosmes != null
                  ? relatorio.exerciciosfeitosmes
                  : 0}
              </Text>
              <Text style={styles.info_text}>
                Exercícios feitos essa semana:{" "}
                {relatorio.exerciciosfeitossemana != null
                  ? relatorio.exerciciosfeitossemana
                  : 0}
              </Text>
              <Text style={styles.info_text}>
                Exercícios feitos hoje:{" "}
                {relatorio.exerciciosfeitoshj != null
                  ? relatorio.exerciciosfeitoshj
                  : 0}
              </Text>
            </View>
            <View style={styles.profile_img}>
              <Image source={image} style={styles.buttonBackgroundImage} />
            </View>
            <View style={styles.config}>
              <Text style={styles.h3}>Tempo de Atividades</Text>
              <Text style={styles.info_text}>
                Conta criada em: {relatorio.datacriacao}
              </Text>
              <Text style={styles.info_text}>
                Tempo de conta: {relatorio.tempoconta}
              </Text>
              <Text style={styles.info_text}>
                Maior ofensiva: {relatorio.maiorofensiva}
              </Text>
              <Text style={styles.info_text}>
                Ofensiva atual: {relatorio.ofensivaatual}
              </Text>
              <Text style={styles.info_text}>Meta de Ofensiva: 30 dias</Text>
              <Text style={styles.info_text}>
                Dias para meta: {relatorio.diasmeta}
              </Text>
              <Text style={styles.info_text}></Text>
            </View>
            <View style={styles.vazio}></View>
          </View>
        ) : (
          <ActivityIndicator style={{}} size="large" color="gray" />
        )}
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
    top: 60,
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
    height: 160,
    width: 340,
    marginTop: 30,
    paddingLeft: 10,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    borderColor: "#75D67F",
  },
  config: {
    height: 280,
    justifyContent: "space-between",
    paddingVertical: 1,
    border: 1,
    marginBottom: 2,
    paddingLeft: 10,
    borderColor: "#75D67F",
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
  },
  profile_img: {
    border: 1,
    height: 150,
    width: 340,
    marginTop: 10,
    borderColor: "#75D67F",
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

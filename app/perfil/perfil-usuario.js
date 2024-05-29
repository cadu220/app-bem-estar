import {
  StyleSheet,
  Pressable,
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import db from "../firebase";
import {
  collection,
  getDocs,
  query,
  updateDoc,
  doc,
  where,
  getCountFromServer,
} from "firebase/firestore";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Footer from "../footer/footer";
import DateTimePicker from "@react-native-community/datetimepicker";
export default function Perfil() {
  const [Nome, setNome] = useState();
  const [genero, setGenero] = useState();
  const [idade, setIdade] = useState();
  const [apelido, setApelido] = useState();
  const [estilo, setEstilo] = useState();
  const [email, setEmail] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [novaDataNascimento, setnovaDataNascimento] = useState(new Date());

  const [VisibleDesconectar, setVisibleDesconectar] = useState(false);

  useEffect(() => {
    Start();
  }, []);
  const Start = async () => {
    let sessao = await GetSessao();
    setNome(sessao.nome);
    setGenero(sessao.genero);
    const dataNascimento = new Date(sessao.datanascimento);
    const dataAtual = new Date();

    const diff = dataAtual.getTime() - dataNascimento.getTime();
    const idadeUser = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    console.log(idadeUser);

    setIdade(idadeUser);

    // setIdade(sessao.idade);
    setApelido(sessao.apelido);
    setEmail(sessao.email);
    setEstilo(sessao.estilo);
  };
  const handleImageClick = () => {
    setModalVisible(true);
  };

  const GetSessao = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("sessao");

      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {}
  };

  const Desconectar = async () => {
    await AsyncStorage.removeItem("sessao");
    router.replace(`/`);
  };

  const handleSave = async () => {
    try {
      const q = query(collection(db, "usuario"), where("email", "==", email));
      const querySnapshot = await getDocs(q);

      const usuarioDoc = querySnapshot.docs[0];
      const usuarioId = usuarioDoc.id;

      const usuarioRef = doc(db, "usuario", usuarioId);
      await updateDoc(usuarioRef, {
        idade: novaDataNascimento,
      });

      const sessao = await GetSessao();
      if (sessao) {
        sessao.datanascimento = novaDataNascimento;
        await AsyncStorage.setItem("sessao", JSON.stringify(sessao));
      }
      const dataNascimento = new Date(sessao.datanascimento);
      const dataAtual = new Date();

      const diff = dataAtual.getTime() - dataNascimento.getTime();
      const idadeUser = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      setIdade(idadeUser);

      setModalVisible(false);
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#151718" style="light" />
      <Text style={styles.title}>Seu Perfil</Text>
      <View>
        <View style={styles.profile_info}>
          <Text style={styles.h3}>Usuário</Text>
          <Image
            style={styles.profile_picture}
            source={require("./imgs/profilePicture.png")}
          />
          <Text style={styles.info_text}>Nome do Usuário: {Nome}</Text>
          <Text style={styles.info_text}>Gênero:{genero}</Text>
          <Text style={styles.info_text}>Idade: {idade}</Text>
        </View>
        <View style={styles.config}>
          <Text style={styles.h3}>Configurações</Text>
          <View style={styles.line}>
            <Image
              source={require("./imgs/editButton.png")}
              onTouchEnd={handleImageClick}
            />
            <Text style={styles.info_text}>Idade: {idade}</Text>
          </View>
          <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}
          >
            <View >
              <View >
                <DateTimePicker
                  value={novaDataNascimento}
                  mode="date"
                  display="spinner"
                  onChange={(event, date) => {
                    setnovaDataNascimento(date);
                    handleSave();
                  }}
                />
              </View>
            </View>
          </Modal>
          <View style={styles.line}>
            <Image source={require("./imgs/editButton.png")} />
            <Text style={styles.info_text}>Nome: {Nome}</Text>
          </View>
          <View style={styles.line}>
            <Image source={require("./imgs/editButton.png")} />
            <Text style={styles.info_text}>Apelido: {apelido}</Text>
          </View>
          <View style={styles.line}>
            <Image source={require("./imgs/editButton.png")} />
            <Text style={styles.info_text}>Email: {email}</Text>
          </View>
          <View style={styles.line}>
            <Image source={require("./imgs/editButton.png")} />
            <Text style={styles.info_text}>Estilo Principal: {estilo}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.botao_report}>
              <Text style={styles.botao_text}>REPORTAR ERRO</Text>
            </Pressable>
            <TouchableOpacity
              style={styles.botao_report}
              onPress={() => {
                setVisibleDesconectar(true);
              }}
            >
              <Text style={styles.botao_text}>Desconectar</Text>
            </TouchableOpacity>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={VisibleDesconectar}
            onRequestClose={() => setVisibleDesconectar(!VisibleDesconectar)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.texto_sair}>Certeza que deseja sair?</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={[styles.button, styles.cancelarButton]}
                    onPress={() => setVisibleDesconectar(!VisibleDesconectar)}
                  >
                    <Text style={styles.buttonText}>Cancelar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.button, styles.desconectarButton]}
                    onPress={() => {
                      setVisibleDesconectar(!VisibleDesconectar);
                      Desconectar();
                    }}
                  >
                    <Text style={styles.buttonText}>Desconectar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
      <View>
        <Link href="amigos/tela-amigos" asChild>
          <Pressable>
            <Text style={styles.title}>Amigos</Text>
          </Pressable>
        </Link>
      </View>
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
  },
  line: {
    flexDirection: "row",
    alignItems: "center",
  },
  botao_report: {
    backgroundColor: "#D9D9D9",
    width: "35%",
    padding: 5,
    margin: 10,
    borderRadius: 30,
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
    borderWidth: 1,
    borderRadius: 40,
    borderColor: "#75D67F",
    backgroundColor: "#75D67F",
  },
  profile_picture: {
    borderWidth: 1,
    borderRadius: 80,
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  profile_info: {
    border: 1,
    borderColor: "black",
    height: 220,
    width: 340,
    marginTop: 30,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
  },
  config: {
    height: 300,
    justifyContent: "space-around",
    border: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderColor: "black",
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
  },
  texto_sair: {
    color: "#000",
    padding: 10,
    fontSize: 20,
  },
  modal: {
    flex: 1,
  },
  view_modal: {
    backgroundColor: "#fff",
    width: "55%",
    padding: 10,
    margin: 10,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#000",
    elevation: 4,
  },
  cancelar_desconectar: {
    padding: 8,
    backgroundColor: "#151718",
    margin: 10,
    borderRadius: 20,
  },
  botao_desconectar: {
    padding: 8,
    backgroundColor: "#151718",
    margin: 10,
    borderRadius: 20,
  },
  cancelar_sair: {
    color: "#FFF",
    fontSize: 15,
  },
  texto_botao_desconectar: {
    color: "#FFF",
    fontSize: 15,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center", // Colocando o modal no final da tela
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo escuro para destacar o modal,
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 20,
    width: "85%",
    padding: 20,
  },
  texto_sair: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    padding: 10,
    borderRadius: 5,
    width: "40%", // Definindo a largura dos botões
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
  },
  cancelarButton: {
    backgroundColor: "#fff", // Cor de fundo para o botão Cancelar
    borderColor: "black",
    borderRadius: 12,
    borderWidth: 1,
  },
  desconectarButton: {
    backgroundColor: "red", // Cor de fundo para o botão Desconectar
    borderColor: "black",
    borderRadius: 12,
    borderWidth: 1,
  },
});

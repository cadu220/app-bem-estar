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
  Linking
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
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Footer from "../footer/footer";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";

export default function Perfil() {
  const [Nome, setNome] = useState();
  const [genero, setGenero] = useState();
  const [idade, setIdade] = useState();
  const [apelido, setApelido] = useState();
  const [estilo, setEstilo] = useState();
  const [email, setEmail] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleInfos, setModalVisibleInfos] = useState(false);
  const [novaDataNascimento, setnovaDataNascimento] = useState(new Date());
  const [VisibleDesconectar, setVisibleDesconectar] = useState(false);
  const navigation = useNavigation();

  const navigatePage = (page) => {
    navigation.navigate(page);
  };

  useEffect(() => {
    Start();
  }, []);
  const Start = async () => {
    let sessao = await GetSessao();
    setNome(sessao.nome);
    setGenero(sessao.genero);
    if (new Date(sessao.datanascimento) == NaN) {
      const timestamp = sessao.datanascimento;

      const dataNascimento = new Date(
        timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000
      );
      console.log(dataNascimento);

      const dataAtual = new Date();

      const diff = dataAtual.getTime() - dataNascimento.getTime();
      const idadeUser = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      console.log(idadeUser);
      setIdade(idadeUser);
    } else {
      const dataNascimento = new Date(sessao.datanascimento);
      console.log(sessao.datanascimento);
      const dataAtual = new Date();
      const diff = dataAtual.getTime() - dataNascimento.getTime();
      const idadeUser = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      console.log(idadeUser);
      setIdade(idadeUser);
    }

    // setIdade(sessao.idade);
    setApelido(sessao.apelido);
    setEmail(sessao.email);
    setEstilo(sessao.estilo);
  };
  const handleImageClick = () => {
    setModalVisible(true);
  };

  const modalAlterarInfos = () => {
    setModalVisibleInfos(true);
  };

  const GetSessao = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("sessao");

      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {}
  };

  const Desconectar = async () => {
    await AsyncStorage.removeItem("sessao");
    navigatePage("Index");
  };

  const handleSave = async () => {
    let alterarData = false;
    if (modalVisible) {
      alterarData = true;
    }
    setModalVisible(false);
    setModalVisibleInfos(false);
    try {
      const q = query(collection(db, "usuario"), where("email", "==", email));
      const querySnapshot = await getDocs(q);

      const usuarioDoc = querySnapshot.docs[0];
      const usuarioId = usuarioDoc.id;

      const usuarioRef = doc(db, "usuario", usuarioId);
      if (alterarData) {
        await updateDoc(usuarioRef, {
          datanascimento: novaDataNascimento,
        });
      } else {
        await updateDoc(usuarioRef, {
          nome: Nome,
          email: email,
          apelido: apelido,
          estilo: estilo,
        });
      }

      const sessao = await GetSessao();
      if (sessao) {
        sessao.datanascimento = novaDataNascimento;
        sessao.nome = Nome;
        sessao.email = email;
        sessao.apelido = apelido;
        sessao.estilo = estilo;
        await AsyncStorage.setItem("sessao", JSON.stringify(sessao));
      }
      const dataNascimento = new Date(sessao.datanascimento);
      const dataAtual = new Date();

      const diff = dataAtual.getTime() - dataNascimento.getTime();
      const idadeUser = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      setIdade(idadeUser);
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
    }
  };

  const handleReportarErro = () => {
    let mensagem = "Olá, encontrei um erro no aplicativo que gostaria de reportar.";
    let numeroWhatsApp = "+5548984748537"; 

    let url = `whatsapp://send?phone=${numeroWhatsApp}&text=${mensagem}`;

    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        return Linking.openURL(url);
      } else {
        alert('Não é possível abrir o WhatsApp.');
      }
    }).catch(err => console.error('Um erro ocorreu ao tentar abrir o WhatsApp:', err));
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
            <View>
              <View>
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
            <Image
              source={require("./imgs/editButton.png")}
              onTouchEnd={modalAlterarInfos}
            />
            <Text style={styles.info_text}>Nome: {Nome}</Text>
          </View>
          <View style={styles.line}>
            <Image
              source={require("./imgs/editButton.png")}
              onTouchEnd={modalAlterarInfos}
            />
            <Text style={styles.info_text}>Apelido: {apelido}</Text>
          </View>
          <View style={styles.line}>
            <Image
              source={require("./imgs/editButton.png")}
              onTouchEnd={modalAlterarInfos}
            />
            <Text style={styles.info_text}>Email: {email}</Text>
          </View>
          <View style={styles.line}>
            <Image
              source={require("./imgs/editButton.png")}
              onTouchEnd={modalAlterarInfos}
            />
            <Text style={styles.info_text}>Estilo Principal: {estilo}</Text>
          </View>
          <View style={styles.buttonContainer}>
          <Pressable style={styles.botao_report} onPress={handleReportarErro}>
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
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisibleInfos}
            onRequestClose={() => setModalVisibleInfos(!modalVisibleInfos)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.texto_sair}>Edite suas informações</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    value={Nome}
                    onChangeText={(text) => setNome(text)}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="apelido"
                    value={apelido}
                    onChangeText={(text) => setApelido(text)}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="estilo"
                    value={estilo}
                    onChangeText={(text) => setEstilo(text)}
                  />
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={[styles.button, styles.cancelarButton]}
                    onPress={() => setModalVisibleInfos(!modalVisibleInfos)}
                  >
                    <Text style={styles.buttonText}>Cancelar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.button, styles.salvarButton]}
                    onPress={() => {
                      setModalVisibleInfos(!modalVisibleInfos);
                      handleSave();
                    }}
                  >
                    <Text style={styles.buttonText}>Salvar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
      <View>
        {/* <Pressable onPress={() => navigatePage("Amigos")}>
            <Text style={styles.title}>Amigos</Text>
          </Pressable> */}
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "#75D67F",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 15,
    justifyContent: "center",
    borderRadius: 30,
    width: "80%",
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
  salvarButton: {
    backgroundColor: "#75D67F", // Cor de fundo para o botão Desconectar
    borderColor: "black",
    borderRadius: 12,
    borderWidth: 1,
  },
});

import { useState, useEffect } from "react";
import {
  StyleSheet,
  ToastAndroid,
  View,
  Switch,
  Text,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  Pressable
} from "react-native";
import { Link, router } from "expo-router";
import {
  collection,
  getDocs,
  query,
  where,
  getCountFromServer,
} from "firebase/firestore";
import db from "../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from '@react-navigation/native';


export default function Login() {
  const [Senha, setSenha] = useState();
  const [email, setEmail] = useState();
  const [MostrarSenha, setMostrarSenha] = useState(true);
  const [SenhaHiddenImg, setSenhaHiddenImg] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    Start();
  }, []);

  const navigatePage = (page) => {
    navigation.navigate(page);
  }

  const Start = async () => {
    setSenhaHiddenImg(
      <Image
        style={styles.img}
        resizeMethod="resize"
        source={require("./imgs/hidden.png")}
      />
    );
  };

  const ModSenhaHidden = async () => {
    if (MostrarSenha) {
      setSenhaHiddenImg(
        <Image
          style={styles.img}
          resizeMethod="resize"
          source={require("./imgs/view.png")}
        />
      );
    } else {
      setSenhaHiddenImg(
        <Image
          style={styles.img}
          resizeMethod="resize"
          source={require("./imgs/hidden.png")}
        />
      );
    }
  };
  
  const SalvarInfoLogin = async (data) => {
    if (Senha == data.senha) {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem("sessao", jsonValue);
      navigatePage("TelaInicial");
      return;
    } else {
      ToastAndroid.showWithGravity(
        `Senha ou CPF incorreto!`,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    }
  };

  const FazerLogin = async () => {
    let query_validar_email = query(
      collection(db, "usuario"),
      where("email", "==", email)
    );
    let querySnapshot = await getCountFromServer(query_validar_email);
    if (querySnapshot.data().count >= 1) {
      const q = query(collection(db, "usuario"), where("email", "==", email));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        SalvarInfoLogin(doc.data(), "usuario");
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

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#151718" style="light" />
      <Text style={styles.title}>Login</Text>

      <View style={styles.view_senha}>
        <TextInput
          value={email}
          placeholder="Email"
          style={styles.input}
          placeholderTextColor={"#75D67F"}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.view_senha}>
        <TextInput
          value={Senha}
          placeholder="Senha"
          style={styles.input}
          secureTextEntry={MostrarSenha}
          placeholderTextColor={"#75D67F"}
          onChangeText={(text) => setSenha(text)}
        />
        <TouchableOpacity
          onPress={() => {
            setMostrarSenha(!MostrarSenha);
            ModSenhaHidden();
          }}
        >
          {SenhaHiddenImg}
        </TouchableOpacity>
      </View>
        <Pressable onPress={() => navigatePage("cadastro")} style={styles.botao_link} >
          <Text style={styles.linkText}>Fazer Cadastro</Text>
        </Pressable>
        <Pressable style={styles.botao} onPress={FazerLogin}>
          <Text style={styles.botao_text}>Fazer Login</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 16,
      backgroundColor: "#F8F8F8",
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
        position: "absolute",

        marginBottom:15,
        top: 70,
      },
    input: {
      height: 50,
      borderColor: "#75D67F",
      borderWidth: 1,
      marginBottom: 20,
      paddingLeft: 15,
      borderRadius: 30,
      color: "#75D67F",
      width: "80%",
    },
    botao: {
      backgroundColor: "#75D67F",
      height: 50,
      width: "50%",
      borderRadius: 30,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
    },
    botao_text: {
      color: "#FFF",
      fontSize: 18,
    },
    img: {
        width: 40,
        height: 40,
        marginLeft: 10, 
        marginTop: -18, 
      },
    view_senha: {
      flexDirection: "row",
      alignItems: "center",
      width: "80%",
      marginBottom: 20,
      marginLeft: 75
    },
    view_switch: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    linkText: {
        color: 'blue', 
        textDecorationLine: 'underline',
      },
      botao_link: {
        alignSelf: 'flex-start', 
        marginTop: -30, 
      },
  });
  

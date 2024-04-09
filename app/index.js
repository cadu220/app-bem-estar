import { StyleSheet, Pressable, View, Text } from "react-native";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Footer from "./footer/footer";

export default function Index() {
  

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#151718" style="light" />
      <Link href="login" asChild>
        <Pressable style={styles.botao_link}>
          <Text style={styles.botao_text}>Login</Text>
        </Pressable>
      </Link>

      <Link href="home/tela-inicial" asChild>
        <Pressable style={styles.botao_link}>
          <Text style={styles.botao_text}>Tela home</Text>
        </Pressable>
      </Link>

      <Link href="perfil/perfil-usuario" asChild>
        <Pressable style={styles.botao_link}>
          <Text style={styles.botao_text}>tela perfil</Text>
        </Pressable>
      </Link>

      <Footer/>
    </View>
  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151718",
    justifyContent: "center",
    alignItems: "center"
  },
  botao_link: {
    backgroundColor: "gray",
    width: "70%",
    margin: 10,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  botao_text: {
    color: "#FFF",
    fontSize: 25,
    padding: 10
  }



})
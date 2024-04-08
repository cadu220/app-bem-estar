import { StyleSheet, Pressable, View, Text } from "react-native";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";


export default function Perfil() {
  

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#151718" style="light" />
      <Link href="/" asChild>
        <Pressable style={styles.botao_link}>
          <Text style={styles.botao_text}>Index</Text>
        </Pressable>
      </Link>

      <Link href="home/tela-inicial" asChild>
        <Pressable style={styles.botao_link}>
          <Text style={styles.botao_text}>tela home</Text>
        </Pressable>
      </Link>

      {/* <Link href="/" asChild>
        <Pressable style={styles.botao_link}>
          <Text style={styles.botao_text}>Cadastro Passageiro</Text>
        </Pressable>
      </Link> */}

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
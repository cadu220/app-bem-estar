import { StyleSheet, Pressable, View, Text, Button, Image } from "react-native";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Footer from "../footer/footer";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#151718" style="light" />
      <View>
        <Text style={styles.title}>Seu Perfil</Text>
        <View>
          <Image
            style= {styles.profile_picture}
            source={require('./imgs/profilePicture.png')}
          />
        </View>
      </View>
      <Footer/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  botao_report: {
    backgroundColor: "gray",
    width: "70%",
    margin: 10,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: 'white',
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
  }
})
import { StyleSheet, Pressable, View, Text, Button, Image } from "react-native";
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
          <Text style={{alignSelf:'center'}}>"Nome do Usuário"</Text>
          <Text>Gênero: "Gênero do usuário"</Text>
          <Text>Idade: "Idade do usuário</Text>
        </View>
        <View style={styles.config}>
          <Text style={styles.h3}>Configurações</Text>
          <Text>Idade: "Idade do usuário"</Text>
          <Text>Nome: "Nome do usuário"</Text>
          <Text>Apelido: "Apelido do usuário"</Text>
          <Text>Email: "Email do usuário"</Text>
          <Text>Estilo Principal: "Yoga"</Text>
          <Button style={styles.botao_report} title="REPORTAR ERRO"/>
        </View>
      </View>
        <View>
          <Text style={styles.title}>Amigos</Text>
        </View>
      <Footer/>
    </View>
  )
}
const styles = StyleSheet.create({
  h3: {
    color: '#54B85E',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center'
  },  
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: "#F8F8F8",
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
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
  config: {
    height: 300,
    justifyContent: 'space-around',
    border: 1,
    marginBottom: 30,
    borderColor: 'black',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
})
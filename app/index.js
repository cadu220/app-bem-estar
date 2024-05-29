import { StyleSheet, Pressable, View, Text } from "react-native";
import { Link, router } from "expo-router";
import { useState, useEffect } from 'react';
import { collection, getDocs, query, where, getCountFromServer } from "firebase/firestore";
import { StatusBar } from "expo-status-bar";
import db from './firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Footer from "./footer/footer";
import { useNavigation } from '@react-navigation/native';

export default function Index() {
  const navigation = useNavigation();
  useEffect(() => {
  
    Start()

}, []);

  const navigatePage = (page) => {
    navigation.navigate(page);
  }

  const Start = async() =>{
    let sessao = await GetSessao()
    
    if(sessao==null || sessao==""){
      // router.replace(`/`);
      return
    }

    console.log(sessao)
    if(sessao!=null || sessao != ""){
    let query_validar_email = query(collection(db, "usuario"), where("email", "==", sessao.email));
    let querySnapshot = await getCountFromServer(query_validar_email);
        if (querySnapshot.data().count >= 1) {
            const q = query(collection(db, "usuario"), where("email", "==", sessao.email));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                ValidaLogin(doc.data(),sessao)
            });
        }else{
          router.replace(`/`);
          return
        }
  }}

  const ValidaLogin = async(data,sessao) =>{
    if(data.email == sessao.email && data.senha == sessao.senha){
      router.replace(`/home/tela-inicial`);
    }else{
      router.replace(`/`);
      return
    }
  }

  const GetSessao = async() =>{
    try{
      const jsonValue = await AsyncStorage.getItem('sessao');
      
      return jsonValue != null ? JSON.parse(jsonValue) : null;
      
    }catch(e){

    }

  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#151718" style="light" />

        <Pressable onPress={() => navigatePage("Cadastro")} style={styles.botao_link}>
          <Text style={styles.botao_text}>Fazer Cadastro</Text>
        </Pressable>

        <Pressable onPress={() => navigatePage("Login")} style={styles.botao_link}>
          <Text style={styles.botao_text}>Fazer Login</Text>
        </Pressable>
    </View>
  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center"
  },
  botao_link: {
    backgroundColor: "#F8F8F8",
    width: "70%",
    margin: 10,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  botao_text: {
    color: "#000000",
    fontSize: 25,
    padding: 10
  }
});
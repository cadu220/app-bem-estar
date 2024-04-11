import React, { useState } from 'react';
import {  View, Text, TextInput, Alert, Button, Image, StyleSheet, ScrollView } from 'react-native';
import db from '../firebase';
import { collection, addDoc } from "firebase/firestore";
import { router  } from 'expo-router';



const Cadastro = () => {
  const [cep, setCep] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [curso, setCurso] = useState('');
  const [numero, setNumero] = useState('');
  const [CorretoCEP, setCorretoCEP] = useState();
  const [CorretoSenha, setCorretoSenha] = useState();
  const [confirmacaoSenha, setConfirmacaoSenha] = useState('');
  const [showTextInput, setShowTextInput] = useState(false);



  const handleCadastro = async () => {
   
        const docRef = addDoc(collection(db, "usuario"), {
          nome: nome,
          email: email,
          senha: senha
        })

        Alert.alert('Usuário cadastrado!');
        router.replace('/');

      }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Cadastro</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />


        <TextInput
          style={styles.input}
          placeholder="Senha"
          maxLength={25}
          secureTextEntry
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />

<TextInput
          style={styles.input}
          placeholder="Email"
          maxLength={25}
          secureTextEntry
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        

        <Button title="Cadastrar" onPress={() => handleCadastro()} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginBottom:20,
    marginTop:20,
    backgroundColor: "#F8F8F8",

  },
  title: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
  img_cep: {
    alignSelf: "baseline",
    marginBottom: 16,
  },
  dropdown3BtnStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    paddingHorizontal: 0,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    borderColor: '#444',
  },
});

export default Cadastro;
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase";
import { useNavigation } from "@react-navigation/native";
import { Dropdown } from "react-native-element-dropdown";
import DateTimePicker from "@react-native-community/datetimepicker";

const Cadastro = () => {
  const data = [
    { label: "Masculino", value: "Masculino" },
    { label: "Feminino", value: "Feminino" },
  ];
  const [nome, setNome] = useState("");
  const [apelido, setApelido] = useState("");
  const [senha, setSenha] = useState("");
  const [datanascimento, setDataNascimento] = useState(new Date());
  const [email, setEmail] = useState("");
  const [genero, setGenero] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const navigation = useNavigation();

  const navigatePage = (page) => {
    navigation.navigate(page);
  };

  const showDatePickerHandler = () => {
    setShowDatePicker(true);
  };

  const handleCadastro = async () => {
    const docRef = await addDoc(collection(db, "usuario"), {
      nome: nome,
      email: email,
      senha: senha,
      genero: genero,
      apelido: apelido,
      datanascimento: datanascimento,
    });

    Alert.alert("Usuário cadastrado!");
    navigatePage("Index");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Cadastro</Text>
        <View style={styles.infoContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={nome}
              onChangeText={(text) => setNome(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              maxLength={25}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              maxLength={25}
              secureTextEntry
              value={senha}
              onChangeText={(text) => setSenha(text)}
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
            <Dropdown
              style={styles.input}
              // placeholderStyle={styles.placeholderStyle}
              // selectedTextStyle={styles.selectedTextStyle}
              // inputSearchStyle={styles.inputSearchStyle}
              // iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Selecione um genêro"
              searchPlaceholder="Procurar..."
              value={genero}
              onChange={(item) => {
                setGenero(item.value);
              }}
            />
          </View>

          <View style={styles.inputContainer}>
            <Pressable style={styles.input} onPress={showDatePickerHandler}>
              <Text style={styles.datePickerButtonText}>
                Selecionar Data de Nascimento
              </Text>
              <Text style={styles.selectedDateText}>
                {datanascimento.toLocaleDateString()}
              </Text>
            </Pressable>
            {showDatePicker && (
              <DateTimePicker
                value={datanascimento}
                mode="date"
                display="spinner"
                onClick={(event, date) => {
                  setDataNascimento(date);
                  setShowDatePicker(false);
                }}
              />
            )}
          </View>
          <Pressable style={styles.botao} onPress={handleCadastro}>
            <Text style={styles.botao_text}>Fazer Cadastro</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "#F8F8F8",
  },
  dropdown: {
    margin: 16,
    height: 50,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  infoContainer: {
    backgroundColor: "#FFF",
    borderWidth: 2,
    borderColor: "#75D67F",
    borderRadius: 10,
    padding: 20,
    width: "90%",
    alignItems: "center",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 16,
    textAlign: "center",
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
});

export default Cadastro;

import React from 'react'
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native'
import BotaoAmigo from './botaoAmigo';
import Footer from '../footer/footer';

export default function TelaAmigos() {
    return(
        <View>
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.botao}>Amigos</Text>
            <BotaoAmigo/>
            <BotaoAmigo/>
            <BotaoAmigo/>
            <BotaoAmigo/>
            <BotaoAmigo/>
            <BotaoAmigo/>
            <BotaoAmigo/>
            <BotaoAmigo/>
            <BotaoAmigo/>
            <BotaoAmigo/>
            <BotaoAmigo/>
            <BotaoAmigo/>
            <BotaoAmigo/>
            <BotaoAmigo/>
            <BotaoAmigo/>
            <BotaoAmigo/>
            <BotaoAmigo/>
            <BotaoAmigo/>
            <BotaoAmigo/>
        </View>
        <View style={styles.vazio}></View>
        </ScrollView>
        <Footer/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center"
    },
    botao : {
        color: 'white',
        textAlign: 'center',
        paddingLeft: 40,
        paddingRight: 40,
        marginBottom: 60,
        top: 40,
        fontSize: 25,
        padding: 10,
        borderWidth: 1,
        borderRadius: 40,
        borderColor: '#75D67F',
        backgroundColor: '#75D67F',
    }, 
    vazio :{
        marginTop: 70,
    },
})
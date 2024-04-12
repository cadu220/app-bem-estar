import React from 'react'
import { View, Text, Pressable, StyleSheet, Image } from 'react-native'

export default function BotaoAmigo() {
    return(
        <View>
            <Pressable>
                <View style={styles.botao}>
                    <Image style={styles.profile_picture} source={require('../perfil/imgs/profilePicture.png')}/>
                    <View>
                        <Text>Apelido</Text>
                        <Text>Treinos feitos: "Valor"</Text>
                        <Text>Estilo: "Valor"</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    botao : {
        color: 'white',
        textAlign: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        margin: 10,
        fontSize: 25,
        padding: 10,
        borderWidth: 1,
        borderRadius: 40,
        borderColor: '#75D67F',
        backgroundColor: '#75D67F',
    },
    profile_picture: {
        borderWidth: 1,
        marginRight: 10,
        borderRadius: 80,
        width: 80,
        height: 80,
    },
})
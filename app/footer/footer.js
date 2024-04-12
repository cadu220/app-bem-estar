import React from 'react'
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { Link, router } from "expo-router";

export default function Footer() {

    const styles = StyleSheet.create({
        container: {
            flexGrow: 1,
            width: '100%',
            height: '7%',
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: 'white',
            position: 'absolute',
            bottom: 0,
        }
    })

    return(
        <View style={styles.container}>
            <View>
                <Link href='home/tela-inicial' asChild>
                    <Pressable Image>
                        <Image source={require('./imgs/home.png')}/>
                    </Pressable>
                </Link>
            </View>
            <View>
                <Link href='relatorio/relatorio' asChild>
                    <Pressable Image>
                        <Image source={require('./imgs/relatory.png')}/>
                    </Pressable>
                </Link>
            </View>
            <View>
                <Link href='perfil/perfil-usuario' asChild>
                    <Pressable Image>
                        <Image source={require('./imgs/profile.png')}/>
                    </Pressable>
                </Link>
            </View>
        </View>
    );
}
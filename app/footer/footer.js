import React from 'react'
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { Link, router } from "expo-router";
import { useNavigation } from '@react-navigation/native';

export default function Footer() {
    const navigation = useNavigation();

    const navigatePage = (page) => {
        navigation.navigate(page);
    }

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
                <Pressable Image onPress={() => navigatePage("TelaInicial")}>
                    <Image source={require('./imgs/home.png')}/>
                </Pressable>
            </View>
            <View>
                <Pressable Image onPress={() => navigatePage("Relatorio")}>
                    <Image source={require('./imgs/relatory.png')}/>
                </Pressable>
            </View>
            <View>
                <Pressable Image onPress={() => navigatePage("Perfil")}>
                    <Image source={require('./imgs/profile.png')}/>
                </Pressable>
            </View>
        </View>
    );
}
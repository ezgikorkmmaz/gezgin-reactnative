import React from 'react';
import {View, Text, StyleSheet, Button, TextInput,Image, ImageBackground} from 'react-native';

export default function Header({navigation, title}) {
    return (
        <ImageBackground source={require('../../assets/headerback.png')} style={styles.header}>
            <View style={styles.logo}>
            <Image source={require('../../assets/headerlogo.png')}/>
            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 136,
        alignItems:'center',
        justifyContent:'center'
    },
    logo:{
        width:10,
        height:10,
        alignSelf:'center',
        paddingRight: 75,
        paddingBottom: 70
    }
})
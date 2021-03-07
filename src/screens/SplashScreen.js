import React, {useEffect, useContext} from 'react';
import {View, Text, StyleSheet, Button, TextInput, Image, ImageBackground, TouchableOpacity} from 'react-native';

const SplashScreen = ({navigation}) => {
    const {tryLocalSignin} = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignin();
    }, []);
    return (
        <ImageBackground source={require('../../assets/gezginarkaplan.png')} style={styles.container}>
            <Image source={require('../../assets/gezginlogo.png')}/>
            <View style={styles.park}> 
            <Image source={require('../../assets/splashpark.png')}/>        
            </View>
        </ImageBackground>
    )
};

const styles= StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    park:{
        justifyContent: 'center',
        alignSelf: 'center',
        bottom: 10,
        position:'absolute'
    }
});

export default SplashScreen;
import React from "react";
import {View, Text, StyleSheet, ImageBackground, Image} from "react-native";
import Card from '../shared/Card';

const LoginScreen = () => {
    return(
        <View>
            <Text>Login Screen</Text>
            <Button title="" 
              onPress={()=> navigation.navigate('Login')}/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default LoginScreen;

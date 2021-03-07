import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground} from 'react-native';

export default function MainHeader({navigation}) {
    return (
        <View>
        <ImageBackground source={require('../../assets/headerback.png')} style={styles.header}>
            
            <View style={{flex:1,flexDirection:'row', justifyContent:'space-between', top:30}}>
            <TouchableOpacity style={styles.menu} onPress={()=> navigation.navigate('Menu')}>
              <Image source={require('../../assets/menu.png')}/>
            </TouchableOpacity>

            <Image source={require('../../assets/headerlogo.png')}/>

            <TouchableOpacity style={styles.zil} onPress={()=> navigation.navigate('')}> 
              <Image source={require('../../assets/notification.png')}/> 
            </TouchableOpacity>
            </View>
        </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    header:{
        height: 136,
        alignSelf:'stretch',
    },
    logo:{
        height:68,
        marginTop:33,
        alignSelf:'center',
        justifyContent:'center'
    },
    menu:{
        height:19,
        paddingHorizontal:20,
        top:46
    },
    zil:{
        height:25,
        paddingHorizontal:20,
        top:43
    }
});

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground} from 'react-native';

export default function Header({navigation}) {
    return (
        <View>
        <ImageBackground source={require('../../assets/headerback.png')} style={styles.header}>
            <View style={{flex:1,flexDirection:'row', justifyContent:'space-between', top:30}}>
            <TouchableOpacity style={styles.menu} onPress={()=> navigation.navigate('Main')}>
              <Image source={require('../../assets/vector.png')}/>
            </TouchableOpacity>
            <Image source={require('../../assets/headerlogo.png')}/>
            <TouchableOpacity style={styles.zil} onPress={()=> navigation.navigate('')}> 
              <Image source={require('../../assets/notification.png')}/> 
            </TouchableOpacity>
            </View>
            
            <TouchableOpacity onPress={()=> navigation.navigate('Edit')}>
            <Text style={styles.edit}>Profili Düzenle</Text>
            </TouchableOpacity>
            
        </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    header:{
        height: 211,
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
    },
    edit:{
        color:'#fff',
        alignSelf:'flex-end',
        justifyContent:'flex-end',
        height:12,
        fontSize:10,
        textDecorationLine:'underline',
        marginBottom:45
    }
})
import React, {useState} from 'react';
import {View, Text, StyleSheet, Buton, ImageBackground, TextInput, TouchableOpacity, Image, Card, FlatList} from 'react-native';

const EditProfile = ({navigation}) => {  //navigation props to return multiple elments

    return(
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
         </ImageBackground>

         <View style={{alignItems:'center',justifyContent:'center',  backgroundColor:'#E5E5E5'}}>
              <FlatList>
                  <Card style={styles.card}>
                      <Image source={require('../../assets/scooter.png')}/>
                  </Card>
              </FlatList>
            </View>

        </View>
        
    )
};

const styles= StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
    input:{
        height:50,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: '#fff',
        shadowColor:'#fff',
        shadowRadius:20,
        padding: 10,
        marginTop:50,
        width: 300,
        backgroundColor: '#fff'
    },
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
    card:{
        height:125,
        backgroundColor:'#fff'
    }
});

export default EditProfile;
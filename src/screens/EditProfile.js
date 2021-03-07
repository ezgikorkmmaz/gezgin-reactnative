import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, ImageBackground, TextInput, TouchableOpacity, Image} from 'react-native';

const EditProfile = ({navigation}) => {  //navigation props to return multiple elments
    const [tcno, setTcno] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();

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

         <View style={{alignItems:'center',justifyContent:'center', backgroundColor:'#E5E5E5'}}>
           <TextInput 
            placeholder='Tc No'
            value={tcno} onChangeText={setTcno}
            style={styles.input}/>   
            <TextInput 
            placeholder='Ad Soyad'
            value={name} onChangeText={setName}
            style={styles.input}/>     
            <TextInput 
            placeholder='E-mail'
            value={email} onChangeText={setEmail}
            style={styles.input}/>   
                   
            <TouchableOpacity onPress={()=> navigation.navigate('Menu')}>
             <View style={styles.kaydetbuton}>
                 <Text style={styles.kaydet}>Kaydet</Text>
             </View>
            </TouchableOpacity>  
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
    kaydetbuton:{
        marginTop:50,
        marginHorizontal:10,
        height:50,
        backgroundColor: '#fff',
        borderRadius: 100,
        alignItems:'center',
        justifyContent: 'center',
    },
    kaydet:{
        color: '#000',
        textAlign: 'center',
        lineHeight: 28,
        fontSize: 19,
        marginHorizontal:30
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
    }
});

export default EditProfile;
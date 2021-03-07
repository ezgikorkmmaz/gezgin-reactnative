import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput, ImageBackground, FlatList, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-paper';
import Header from '../shared/Header';

const AuthScreen = ({navigation}) => {  //navigation props to return multiple elments
    const lengthInput=4;
    const [inputVal, setInputVal] = useState('');

    return(
        <View style={{flex:1}}>
           <Header/>
           <Text style={styles.text}>Telefon Doğrulama</Text>
           <Text style={styles.text2}>Telefonunuza gelen doğrulama kodunu giriniz.</Text>
           
           
             <Card style={styles.card}>
                <View style={{flex:1,flexDirection:'row', justifyContent:'space-evenly'}}>
               <TextInput
               style={styles.input}
               value={inputVal} onChangeText={setInputVal}
               maxLength={lengthInput}
               returnKeyType='done'
               keyboardType='numeric'
               fontSize='25'
               textAlign='center'
               />
               <TextInput
               style={styles.input}
               value={inputVal} onChangeText={setInputVal}
               maxLength={lengthInput}
               returnKeyType='done'
               keyboardType='numeric'
               fontSize='25'
               textAlign='center'
               />
               <TextInput
               style={styles.input}
               value={inputVal} onChangeText={setInputVal}
               maxLength={lengthInput}
               returnKeyType='done'
               keyboardType='numeric'
               fontSize='25'
               textAlign='center'
               />
               <TextInput
               style={styles.input}
               value={inputVal} onChangeText={setInputVal}
               maxLength={lengthInput}
               returnKeyType='done'
               keyboardType='numeric'
               fontSize='25'
               textAlign='center'
               />
               </View>
             </Card>
         

           <TouchableOpacity onPress={()=> navigation.navigate('Signup')}>
            <View style={styles.nextback}>
           <Text style={styles.next}>Sonraki</Text>
           </View>
           </TouchableOpacity> 
           <TouchableOpacity onPress={()=> navigation.navigate('Auth')}>
             <Text style={styles.tekrar}>Tekrar Kod gönder</Text>
             </TouchableOpacity>  
        </View>
    )
};

const styles= StyleSheet.create({
    container:{
        height: 136,
        justifyContent:'space-evenly',
        flexDirection:'row'
    },
    text:{
        height:38,
        textAlign:'center',
        lineHeight:24,
        fontSize:18,
        fontWeight: 'bold',
        marginTop: 20
    },
    text2:{
        height:38,
        fontSize: 16,
        textAlign:'center',
        justifyContent:'center',
        lineHeight:24,
    },
    card:{
        backgroundColor:'#EFC18C',
        width: 325,
        height: 74,
        alignSelf: 'center',
        alignItems:'center'
    },
    nextback:{
        width: 135,
        marginTop:50,
        marginHorizontal:10,
        height: 50,
        backgroundColor: '#fff',
        alignItems:'center',
        alignSelf:'center',
        justifyContent: 'center',
        borderRadius: 100,
        shadowColor:'#000',
        shadowOpacity:10,
        borderColor:'#000'
    },
    next:{
        color: '#000',
        textAlign: 'center',
        fontWeight:'bold',
        lineHeight: 28,
        fontSize: 19,
        marginHorizontal:20
    },
    tekrar:{
        color:'#000',
        textAlign:'center',
        alignSelf:'center',
        justifyContent:'center',
        fontSize:14,
        marginTop:10
    },
    input:{
        backgroundColor:'#fff',
        width:44,
        height:44,
        margin:15,
        fontSize:16,
        alignSelf:'center',
        flexDirection:'row'
    },
});

export default AuthScreen;
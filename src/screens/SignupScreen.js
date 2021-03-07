import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Button, ImageBackground, TextInput, TouchableOpacity} from 'react-native';

const SignupScreen = ({navigation}) => {  //navigation props to return multiple elments
    const [tcno, setTcno] = useState();
    const [name, setName] = useState();
    const [lName, setlName] = useState();
    const [email, setEmail] = useState();

    const ref_input2 = useRef();
    const ref_input3 = useRef();
    const ref_input4 = useRef();

    return(
        <ImageBackground source={require('../../assets/gezginarkaplan.png')} style={styles.container}>
           <Text style={{fontSize: 48, color: '#fff'}}>Hoşgeldin!</Text>
           <Text style={{fontSize: 16, color: '#fff', marginBottom: 10, marginTop: 10}}>Devam edebilmek için kayıt olun.</Text>
           <TextInput 
            placeholder='Tc No*'
            returnKeyType='next'
            onSubmitEditing={() => ref_input2.current.focus()}
            value={tcno} onChangeText={setTcno}
            style={styles.input}/>   
            <TextInput 
            placeholder='Ad*'
            returnKeyType='next'
            onSubmitEditing={() => ref_input3.current.focus()}
            ref={ref_input2}
            value={name} onChangeText={setName}
            style={styles.input}/>   
            <TextInput 
            placeholder='Soyad*'
            returnKeyType='next'
            onSubmitEditing={() => ref_input4.current.focus()}
            ref={ref_input3}
            value={lName} onChangeText={setlName}
            style={styles.input}/>   
            <TextInput 
            placeholder='E-mail*'
            returnKeyType='done'
            ref={ref_input4}
            value={email} onChangeText={setEmail}
            style={styles.input}/>   
                   
            <TouchableOpacity onPress={()=> navigation.navigate('Main')}>
             <View style={styles.kayitbuton}>
                 <Text style={styles.kayit}>Kayıt Ol</Text>
             </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('Auth')}>
             <Text style={styles.sozlesme}>Kullanici Sozlesmesi</Text>
             </TouchableOpacity>          
        </ImageBackground>
    )
};

const styles= StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
    input:{
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#fff',
        padding: 10,
        margin: 10,
        width: 300,
        backgroundColor: '#fff'
    },
    sozlesme:{
        color: '#fff',
        textDecorationLine:'underline'
    },
    kayitbuton:{
        marginTop:50,
        marginHorizontal:10,
        height:50,
        backgroundColor: '#fff',
        borderRadius: 100,
        alignItems:'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    kayit:{
        color: '#89BB7B',
        textAlign: 'center',
        lineHeight: 28,
        fontSize: 19,
        marginHorizontal:50
    }
});

export default SignupScreen;
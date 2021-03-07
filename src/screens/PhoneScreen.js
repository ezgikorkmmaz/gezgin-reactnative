import React, { useState } from 'react';
import {View, Text, StyleSheet, Button, TextInput, Image, ImageBackground, TouchableOpacity} from 'react-native';

const PhoneScreen = ({navigation}) => {
  const [number, setNumber] = useState('');

  return(
    <ImageBackground source={require('../../assets/gezginarkaplan.png')} style={styles.container}>
      <Image source={require('../../assets/gezginlogo.png')}/>
      <TextInput 
      placeholder='Telefon Numarası'
      value={number} onChangeText={setNumber}
      returnKeyType='done'
      style={styles.input}
      />
      <TouchableOpacity onPress={()=> navigation.navigate('Auth')}>
        <Text style={styles.sozlesme}>Kullanici Sozlesmesi</Text>
      </TouchableOpacity>
      
      <View style={styles.solalt}> 
      <Image source={require('../../assets/solalt.png')}/>        
      </View>
      
      <TouchableOpacity style={styles.next} onPress={()=> navigation.navigate('Auth')}>
        <Image source={require('../../assets/next.png')} 
        />
      </TouchableOpacity>

    </ImageBackground>
  )
};


const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  buton:{
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    right: 0,
    bottom: 0,
    position: 'absolute',
  },
  solalt:{
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    left: 0,
    bottom: 0,
    position: 'absolute'
  },
  next:{
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    right: 0,
    bottom: 0,
    position: 'absolute'    
  },
  sozlesme:{
    color: '#fff',
    textDecorationLine:'underline'
  }
});

export default PhoneScreen;

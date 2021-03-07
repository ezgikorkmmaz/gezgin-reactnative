import '../components/_locationApi';
import React, {useEffect, useState, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Platform, Dimensions, SafeAreaView} from 'react-native';
import TrackingMap from '../components/TrackingMap';
import MainHeader from '../shared/MainHeader';
import MapView, { Marker, AnimatedRegion, watchPositionAsync, Accuracy } from 'react-native-maps';
import {Context as LocationContext} from '../context/LocationContext';

const TrackScreen = ({navigation}) => {
    const {addLocation} = useContext(LocationContext);

    const startWatching = async () => {
        try{
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            },
            location => {
                addLocation(location);
             }
            );
        }catch(e) {

        }
    }

    return (
        <View>
            <View>
        <ImageBackground source={require('../../assets/headerback.png')} style={styles.header}>   
            <View style={{flex:1,flexDirection:'row', justifyContent:'space-between', top:30}}>
            <TouchableOpacity style={styles.menu} onPress={()=> navigation.navigate('Menu')}>
              <Image source={require('../../assets/menu.png')}/>
            </TouchableOpacity>
            <Image source={require('../../assets/headerlogo.png')}/>

            <TouchableOpacity style={styles.zil} onPress={()=> navigation.navigate('Camera')}> 
              <Image source={require('../../assets/notification.png')}/> 
            </TouchableOpacity>
            </View>

        </ImageBackground>
        </View>

            <TrackingMap />

        </View>
    )
};

const styles= StyleSheet.create({
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
    },
});

export default TrackScreen;
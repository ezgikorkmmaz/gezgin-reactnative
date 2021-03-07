import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity,Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const Map = ({navigation}) => {
    const [region, setRegion] = useState({
        latitude:37.852588746832495,
        longitude:27.844117388649103,
        latitudeDelta:0.01,
        longitudeDelta:0.01
    });

    return (
    <MapView
    style={styles.map}
    region={region}
    onRegionChangeComplete={region => setRegion(region)}
    >

    <View style={styles.marker}>
    <Marker coordinate={{latitude:37.852143,longitude:27.844224}}>
        <Image source={require("../../assets/scootermarker.png")}/> 
    </Marker>
    <Marker coordinate={{latitude:37.851573,longitude:27.840777}}>
        <Image source={require("../../assets/scootermarker.png")}/> 
    </Marker>
    </View>
    
    <View style={styles.butons}>
    <TouchableOpacity style={styles.soru} onPress={()=> navigation.navigate('Track')}>
        <Image source={require('../../assets/unlemelips.png')}/>
    </TouchableOpacity>

    <TouchableOpacity style={styles.gezbuton} onPress={()=> navigation.navigate('Track')}>
        <Image source={require('../../assets/gezbuton.png')}/>
    </TouchableOpacity>

    <TouchableOpacity style={styles.soru} onPress={()=> navigation.navigate('Track')}>
        <Image source={require('../../assets/soruelips.png')}/>
    </TouchableOpacity>
    </View>
    
    </MapView> 
    )
};
 
const styles= StyleSheet.create({
    map:{
        height:600,
        alignItems:'stretch'
    },
    butons:{
        flexDirection:'row', 
        alignItems:'center',
        justifyContent:'space-evenly', 
        top:400
    },
    gezbuton:{
        height: 56,
    },
    marker:{
        height:72,
    },
    soru:{
        height:37,
    }
});

export default Map;

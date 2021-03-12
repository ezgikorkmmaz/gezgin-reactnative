import React, {useEffect, useState, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Platform, Dimensions, SafeAreaView} from 'react-native';
import MapView, { Marker, AnimatedRegion, watchPositionAsync, Accuracy } from 'react-native-maps';
import {Context as LocationContext} from '../context/LocationContext';

/*const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;*/

const TrackingMap = ({navigation}) => {
    return (
    <MapView
    style={styles.map}
    initialRegion={{
        latitude:37.852588746832495,
        longitude:27.844117388649103,
        latitudeDelta:0.01,
        longitudeDelta:0.01
    }}
    >

    <View style={styles.marker}>
    <Marker coordinate={{latitude:37.852143,longitude:27.844224}}>
        <Image source={require("../../assets/scootermarker.png")}/> 
    </Marker>
    <Marker coordinate={{latitude:37.851573,longitude:27.840777}}>
        <Image source={require("../../assets/scootermarker.png")}/> 
    </Marker>
    </View>

    </MapView> 
    )
};
 
const styles= StyleSheet.create({
    map:{
        height:600
    },
    marker:{
        height:72,
    }
});

export default TrackingMap;

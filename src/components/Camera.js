import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';
import ImagePicker from 'react-native-image-picker';

const Camera = async () => {
    const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if(granted){
        let data = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowEditing: false,
        })
    }else{}
}
 
const styles= StyleSheet.create({});

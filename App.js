import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PhoneScreen from './src/screens/PhoneScreen';
import SignupScreen from './src/screens/SignupScreen';
import MenuScreen from './src/screens/MenuScreen';
import AuthScreen from './src/screens/AuthScreen';
import MainmapScreen from './src/screens/MainmapScreen';
import SplashScreen from './src/screens/SplashScreen';
import Header from './src/shared/Header';
import {Provider as AuthProvider} from './src/context/AuthContext';
import EditProfile from './src/screens/EditProfile';
import CameraScreen from './src/screens/CameraScreen';
import TrackScreen from './src/screens/TrackScreen';
import Map from './src/components/Map';
import {Provider as LocationProvider} from './src/context/LocationContext';
import HistoryScreen from './src/screens/HistoryScreen';

const navigator = createStackNavigator({ //switch navigator v5 olmadıgı içim implement edilebilir sonra
    //got one flow when entered it's gon show the stack navigator
    Phone: {screen: PhoneScreen,
      navigationOptions: {
        headerShown:false
      }},
    Signup: {screen :SignupScreen,
    navigationOptions: {
      headerShown:false
    }},
    Auth:{
      screen: AuthScreen,
      navigationOptions:{
        headerShown:false
      }},
    Splash: {screen: SplashScreen,
      navigationOptions:{
        headerShown:false
      }},
    //menu bileşenleri buradan stack ile bağlanabilir
    Main: {screen: MainmapScreen,
      navigationOptions:{
        headerShown:false
      }},
    Camera: {
      screen: CameraScreen,
      navigationOptions:{
        headerShown:false
      }},
      Track:{
        screen: TrackScreen,
        navigationOptions:{
          headerShown:false
      }},
    Menu: {screen: MenuScreen,
      navigationOptions:{
        headerShown:false
      }},
    Edit: {screen:EditProfile,
      navigationOptions:{
        headerShown:false
      }},
    History: {screen:HistoryScreen,
      navigationOptions:{
        headerShown:false
      }},
});

const App = createAppContainer(navigator);

export default () => {
  return(
    <LocationProvider>
    <AuthProvider>
       <App
       ref={navigator=>{
         setNavigator(navigator);
       }}
       />
    </AuthProvider>
    </LocationProvider>
  )
};
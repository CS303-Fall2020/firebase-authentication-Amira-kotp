import { createAppContainer , createSwitchNavigator} from 'react-navigation'

import {createStackNavigator} from "@react-navigation/stack"
import LoadingScrren from './screens/LoadingScreen'
import LoagingScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/RegisterScreen'

import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBj7DFmV05gStPDfUQMA0_OTANhvcpvkAc",
  authDomain: "socialapp-fd0d6.firebaseapp.com",
  databaseURL: "https://socialapp-fd0d6.firebaseio.com",
  projectId: "socialapp-fd0d6",
  storageBucket: "socialapp-fd0d6.appspot.com",
  messagingSenderId: "94900465887",
  appId: "1:94900465887:web:96e3d87d5257c52fe3f96a",
  measurementId: "G-KJRSS9E5B2"
};

firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator ({
  Home: HomeScreen
});
const AuthStack = createStackNavigator ({
  Login : LoadingScreen ,
  Register : RegisterScreen
});
export default createAppContainer(
   createSwitchNavigator (
     {
       Loading : LoadingScreen,
       App : AppStack ,
       Auth: AuthStack
     },
     {
        initialRouteName : "Loading"
     }
   )
);

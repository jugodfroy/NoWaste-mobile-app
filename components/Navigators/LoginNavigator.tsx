
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import ProfileInfo from '../ProfileTab/ProfileInfo'
import EditProfile from '../ProfileTab/EditProfile'
import AppInfo  from '../ProfileTab/AppInfo'

import Login from '../LogIn/Login'
import Welcome from '../LogIn/Welcome'
import SignUp from '../LogIn/SignUp'
import MainNavigator from '../Navigators/MainNavigator'


const Stack = createStackNavigator();

function LoginNavigator() {
  return (
    <NavigationContainer independent={true}>    
      <Stack.Navigator initialRouteName="Welcome" headerMode='none'  >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="MainNavigator" component={MainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default LoginNavigator

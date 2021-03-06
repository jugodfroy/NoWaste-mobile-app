import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, AntDesign, Feather } from '@expo/vector-icons';
import Login from './components/Login'
import Welcome from './components/Welcome'
import Sign_up from './components/Sign_up'
import Profile from './components/Profile'

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName="Login"
    activeColor='#E67E22' //couleur de l'icon de la vue active
    inactiveColor="#ecf0f1"
    barStyle={{ backgroundColor: '#2980B9'}} //bleu 
    >
      <Tab.Screen
        name="Feed"
        component={Login}
        options={{
          tabBarLabel: 'Liste',
          tabBarIcon: ({ color }) => (
            <Feather name="list" color={color} size={26} /> //couleur de l'icone quand elle est pas active
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Sign_up}
        options={{
          tabBarLabel: 'Carte',
          tabBarIcon: ({ color }) => (
            <Feather name="map-pin" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile} 
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

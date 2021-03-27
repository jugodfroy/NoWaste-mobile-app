import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons , Feather } from '@expo/vector-icons';

import ProfileScreen from '../Navigators/ProfileStackNavigator'
import Map from '../MapTab/Map'
import DishesNavigator from '../Navigators/DishesNavigators'


const Tab = createMaterialBottomTabNavigator();



function MainNavigator() {
    return (
      <Tab.Navigator
      initialRouteName="Liste"
      activeColor='#E67E22' //couleur de l'icon de la vue active
      inactiveColor="#ecf0f1"
      barStyle={{ backgroundColor: '#2980B9'}} //bleu 
      >
        <Tab.Screen
          name="Liste"
          component={DishesNavigator}
          options={{
            tabBarLabel: 'Liste',
            tabBarIcon: ({ color }) => (
              <Feather name="list" color={color} size={26} /> //couleur de l'icone quand elle est pas active
            ),
          }}
        />
        <Tab.Screen
          name="Carte"
          component={Map}
          options={{
            tabBarLabel: 'Carte',
            tabBarIcon: ({ color }) => (
              <Feather name="map-pin" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen} 
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

  export default MainNavigator
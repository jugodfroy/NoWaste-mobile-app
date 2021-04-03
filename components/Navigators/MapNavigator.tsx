
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DishDetails from '../DishesTab/DishDetails'

import Map from '../MapTab/Map'


const Stack = createStackNavigator();

function MapNavigator() {
  return (
    <NavigationContainer independent={true}>    
      <Stack.Navigator initialRouteName="Map" headerMode='none'  >
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="DishDetails" component={DishDetails} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MapNavigator

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListDishes from '../DishesTab/ListDishes';
import DishDetails from '../DishesTab/DishDetails'
import AddDish from '../DishesTab/AddDish'

const Stack = createStackNavigator();

function DishesNavigators() {
  return (
    <NavigationContainer independent={true}>    
      <Stack.Navigator initialRouteName="ListDishes" headerMode='none'  >
        <Stack.Screen name="ListDishes" component={ListDishes} />
        <Stack.Screen name="DishDetails" component={DishDetails} />
        <Stack.Screen name="AddDish" component={AddDish} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default DishesNavigators
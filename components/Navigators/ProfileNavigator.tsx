
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text,  } from 'react-native';

import ProfileInfo from '../ProfileTab/ProfileInfo'
import EditProfile from '../ProfileTab/EditProfile'
import AppInfo  from '../ProfileTab/AppInfo'
import StackHeader from '../Common/StackHeader'
import ProfileScreen from '../ProfileTab/ProfileScreen'




const Stack = createStackNavigator();

function ProfileNavigator() {
  return (
    <NavigationContainer independent={true}>    
      <Stack.Navigator initialRouteName="ProfileScreen" headerMode='none'  >
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="ProfileInfo" component={ProfileInfo} />
        <Stack.Screen name="History" component={Todev} />
        <Stack.Screen name="Settings" component={Todev} />
        <Stack.Screen name="AppInfo" component={AppInfo} />
        <Stack.Screen name="Disconnect" component={Todev} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Todev({ navigation, route }) {
    const data=route.params.screenName

    return (
        <View>
            <StackHeader routeInfo = {data}/>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>IN PROGRESS</Text>
            </View>
        </View>
    );
}





export default ProfileNavigator;

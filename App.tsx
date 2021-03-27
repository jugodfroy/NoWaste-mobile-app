import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import MainNavigator  from './components/Navigators/MainNavigator'
import LoginNavigator from './components/Navigators/LoginNavigator'
import { setCustomText } from 'react-native-global-props';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';




const customTextProps = {
  style: { 
    fontFamily: 'Roboto_400Regular'
  }
}

setCustomText(customTextProps);

export default function App() {
  
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading/>;
  }


  return (

    <NavigationContainer>
      <LoginNavigator/>
    </NavigationContainer>

  );
}

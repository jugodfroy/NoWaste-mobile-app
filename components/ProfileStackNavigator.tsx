
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import ProfileInfo from './ProfileInfo'
import EditProfile from './EditProfile'
import AppInfo  from './AppInfo'

function ProfileScreen({ navigation }) {
  return (
    <ScrollView>
            <View>

                <View style={style.main_profile_container}>
                    <View>
                        <Image source={require("./img/pp.jpg")} style={style.pp} />
                    </View>
        
                    <View style={style.name}>
                        <Text style={style.text_name}>Julien</Text>
                        <Text style={[style.text_name, {fontWeight:'bold'}]}>GODFROY</Text>
                    </View>
        
                    <View style={{flexDirection : 'row'}}>
                        <View style={style.stat_bloc}>
                            <Text style={style.stat_figures}>10</Text>
                            <Text style={style.stat_text}>Tokens</Text>
                        </View>
                        <View style={style.stat_bloc_center}>
                            <Text style={style.stat_figures}>4</Text>
                            <Text style={style.stat_text}>Ventes</Text>
                        </View>
                        <View style={style.stat_bloc}>
                            <Text style={style.stat_figures}>5</Text>
                            <Text style={style.stat_text}>Achats</Text>
                        </View>
                    </View>
                </View>
                <View style={style.menu_container}>
                    <TouchableOpacity onPress={() => navigation.navigate('ProfileInfo', { screenName: 'Mes informations' })}>
                        <View style={style.menu_button}>
                            <MaterialCommunityIcons name="account-details-outline" color={"#E67E22"} size={26} />
                            <Text style={style.text_menu}>Mes informations</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('History', { screenName: 'Historique' })}>
                        <View style={style.menu_button}>
                            <MaterialCommunityIcons name="history" color={"#E67E22"} size={26} />
                            <Text style={style.text_menu}>Mon historique</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Settings', { screenName: "Paramètres de l'applicaiton" })}>
                        <View style={style.menu_button}>
                            <Ionicons name="settings-outline" color={"#E67E22"} size={26} />
                            <Text style={style.text_menu}>Paramètres de l'application </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("AppInfo", { screenName: "Informations de l'application" })}>
                        <View style={style.menu_button}>
                            <Ionicons name="information-circle-outline" color={"#E67E22"} size={26} />
                            <Text style={style.text_menu}>Informations sur l'application </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Disconnect', { screenName: 'Se déconnecter' })}>
                        <View style={style.menu_button}>
                            <Feather name="x-octagon" color={"#E67E22"} size={26} />
                            <Text style={style.text_menu_red}>Se déconnecter </Text>
                        </View>
                    </TouchableOpacity>
                    
                </View>
                
            </View>
        </ScrollView>
  );
}




const Stack = createStackNavigator();

function App() {
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
    return (
        <View>
            <View style={style.Header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{}}>
                    <Ionicons name="chevron-back-outline" color={"#E67E22"} size={35} />
                </TouchableOpacity>
                <Text style={style.title}>{route.params.screenName}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>IN PROGRESS</Text>
            </View>
        </View>
    );
}



const style=StyleSheet.create({
  //profile section
  main_profile_container:{
      alignSelf : 'center',
      paddingTop : 40,
  },
  
  pp:{
      height : 170,
      width : 170,
      borderRadius : 50,
      alignSelf : 'center',
  },

  name: {
      paddingTop : 10,
      alignSelf : 'center',
      paddingBottom : 10,

  },

  text_name: {
      alignSelf : 'center',
      fontSize : 22,
  },
  
  stat_bloc:{
      paddingHorizontal : 15,
      marginTop :10,
  },
  
  stat_figures:{
      alignSelf : 'center',
      fontWeight : 'bold',
      fontSize : 25,
      color : '#E67E22'
  },


  stat_bloc_center:{
      paddingHorizontal : 10,
      marginTop :10,
      borderLeftWidth : 1,
      borderRightWidth : 1,

  },

  stat_text:{
      marginHorizontal : 10,
      color : '#2980B9',
      fontWeight : 'bold'
  }, 


  //menu section

  menu_container:{
      paddingHorizontal : 20,
      marginHorizontal : 10,
      paddingVertical : 10,
      backgroundColor : '#fff',
      marginTop : 30,
      borderRadius : 50,
      marginBottom:30,
  },

  menu_button:{
      flexDirection : 'row',
      paddingVertical : 10,
     

  
  },

  text_menu:{
      alignSelf : 'center', 
      paddingLeft : 10,
      fontSize : 15
  },

  text_menu_red:{
      alignSelf : 'center', 
      paddingLeft : 10,
      fontSize : 15,
      color : '#e74c3c'   //beau rouge pour la deconnexion
  },

  //TODEV
  Header: {
    flexDirection: "row",
    paddingTop: 25,
    //flex : 1,
    borderBottomWidth: 2,
    borderColor: '#E67E22',
    paddingBottom: 10

  },

  title: {
    alignSelf: 'center',
    //flex : 1,
    fontSize: 20,
    justifyContent: 'center'
  },
})


export default App;

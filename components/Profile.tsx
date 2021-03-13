import React from 'react'
import { View, Text, Image , StyleSheet, Alert, ScrollView, TouchableOpacity } from 'react-native'
import { TouchableRipple } from 'react-native-paper'    //alternative a touchable opacity
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import ProfileStackNativator from './ProfileStackNavigator'
import { createStackNavigator } from '@react-navigation/stack';


function ProfileMenu({ navigation }) {
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
                    <TouchableOpacity onPress={() => navigation.push('Todev')}>
                        <View style={style.menu_button}>
                            <MaterialCommunityIcons name="account-details-outline" color={"#E67E22"} size={26} />
                            <Text style={style.text_menu}>Mes informations</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Todev')}>
                        <View style={style.menu_button}>
                            <MaterialCommunityIcons name="history" color={"#E67E22"} size={26} />
                            <Text style={style.text_menu}>Mon historique</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Todev')}>
                        <View style={style.menu_button}>
                            <Ionicons name="settings-outline" color={"#E67E22"} size={26} />
                            <Text style={style.text_menu}>Paramètres de l'application </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Todev')}>
                        <View style={style.menu_button}>
                            <Ionicons name="information-circle-outline" color={"#E67E22"} size={26} />
                            <Text style={style.text_menu}>Informations sur l'application </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Todev')}>
                        <View style={style.menu_button}>
                            <Feather name="x-octagon" color={"#E67E22"} size={26} />
                            <Text style={style.text_menu_red}>Se déconnecter </Text>
                        </View>
                    </TouchableOpacity>
                    
                </View>
                
            </View>
        </ScrollView>
    )
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
})

const Stack = createStackNavigator();

function ProfileStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          component={ProfileMenu}
          options={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },
          }}
        />
        <Stack.Screen
          name="Todev"
          component={Todev}
          //options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Todev1"
          component={Todev}
          //options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Todev2"
          component={Todev}
          //options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Todev3"
          component={Todev}
          //options={{ headerStyleInterpolator: forFade }}
        />
        <Stack.Screen
          name="Todev4"
          component={Todev}
          //options={{ headerStyleInterpolator: forFade }}
        />
      </Stack.Navigator>
    );
}
function Todev({ navigation }) {
    return (   
        <Text>WORK IN PROGRESS</Text>
    )}
  


export default ProfileMenu;
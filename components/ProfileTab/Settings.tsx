import * as React from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';

import { Ionicons, } from '@expo/vector-icons';
import StackHeader from '../Common/StackHeader'
import { useState } from 'react';




function Settings({ navigation, route }) {
    const data = route.params.screenName
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    return (
        <View>
            <StackHeader routeInfo={data} />

            <View style={style.menu_container}>
                <View style={style.TextBox}>
                    <Text style={style.Title}>Notification à chaque plat</Text>
                    <Text style={style.SubTitle}>Recevoir une notification à chaque fois qu'un nouveau plat est disponible.</Text>
                </View>
                <Switch style={style.Switch}
                    trackColor={{ false: "#bdc3c7", true: "#bdc3c7" }}  //bg false   and bg true
                    thumbColor={isEnabled ? "#e67e22" : "#ecf0f1"}  //btn  true and btn false
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
                
            </View>
            <View style={style.menu_container}>

                <View style={style.TextBox}>
                    <Text style={style.Title}>Notifications des demandes</Text>
                    <Text style={style.SubTitle}>Recevoir une notification lorsqu'une demande est faite pour votre plat.</Text>
                </View>
                <Switch style={style.Switch}
                    trackColor={{ false: "#bdc3c7", true: "#bdc3c7" }}  //bg false   and bg true
                    thumbColor={isEnabled ? "#e67e22" : "#ecf0f1"}  //btn  true and btn false
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

        </View>




    );
}



const style = StyleSheet.create({


    //menu 

    menu_container: {
        paddingHorizontal: 10,
        marginHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#fff',
        marginTop: 15,
        borderRadius: 30,

        flexDirection : 'row'
    },

    Title:{
       // fontWeight : 'bold',
        fontSize : 20,
    
    },

    SubTitle:{
        color : 'gray',
        fontSize : 14,
        paddingRight : 10,
        marginRight : 20
    },

    Switch:{
        flex :1

    },

    TextBox:{
        flex :4

    },

    

})


export default Settings

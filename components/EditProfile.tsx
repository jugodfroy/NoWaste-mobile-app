import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

import { Ionicons, } from '@expo/vector-icons';


function EditProfile({ navigation, route }) {
    return (
        <View>
            <View style={style.Header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{}}>
                    <Ionicons name="chevron-back-outline" color={"#E67E22"} size={35} />
                </TouchableOpacity>
                <Text style={style.title}>{route.params.screenName}</Text>
            </View>

            <View style={style.container}>
                <TextInput style={style.input} defaultValue={route.params.placeholder} />
            </View>

            <View style={style.bottom}>
                <TouchableOpacity style={style.button} onPress={() => navigation.goBack()}>
                    <Text style={{ color: '#ecf0f1', textAlign: 'center', fontSize: 18 }}>Enregistrer</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}


const style = StyleSheet.create({

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
  
    container: {
        paddingHorizontal: 10,
        marginHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#fff',
        marginTop: 30,
        borderRadius: 50,
        marginBottom: 30,
    },

    input: {
        paddingHorizontal: 20,
        borderRadius: 50,
        height: 40,
        backgroundColor: 'white'
    },

    //btn
    bottom: {
        flex: 1,
        alignItems : 'center',
        width: "100%",
        //backgroundColor : 'black', //pour comprendre les positionnements des views
        marginBottom : 20,
        marginTop : 20,
    },
    
    button:{
        width : 120,
        height : 55,
        justifyContent: 'center',
        backgroundColor : '#2980B9',    //soft orange
        borderWidth : 2,
        borderColor : '#2980B9',
        borderRadius : 50,


    },

})


export default EditProfile


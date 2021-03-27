import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

import { Ionicons, } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import StackHeader from '../Common/StackHeader'

function EditProfile({ navigation, route }) {
    const data=route.params.screenName

    return (
        <View>
            <StackHeader routeInfo = {data}/>
            

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


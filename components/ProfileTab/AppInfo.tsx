import * as React from 'react';
import {  View, Text, TouchableOpacity, StyleSheet,  } from 'react-native';

import { Ionicons, } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import StackHeader from '../Common/StackHeader'

function Appinfo({ navigation, route }) {
    const data=route.params.screenName
    return (
        <ScrollView>
            <View>
                <StackHeader routeInfo = {data}/>

                <View style={style.container}>
                    <Text style={style.text}>
                        Cette application est réalisé dans le cadre de la Junior Académie.{"\n"}{"\n"}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde harum voluptatem nam culpa esse quia quibusdam exercitationem corrupti iure maiores odio, aliquid laborum soluta. Tenetur quisquam fugiat alias est aspernatur.</Text>
                </View>
            </View>
        </ScrollView>
            
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
    
    text:{
        fontSize :20,
        paddingHorizontal : 15,
        paddingVertical : 15,
        textAlign : 'justify',
    }

    

})


export default Appinfo


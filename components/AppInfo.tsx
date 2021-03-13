import * as React from 'react';
import {  View, Text, TouchableOpacity, StyleSheet,  } from 'react-native';

import { Ionicons, } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';


function Appinfo({ navigation, route }) {
    return (
        <ScrollView>
            <View>
                <View style={style.Header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{}}>
                        <Ionicons name="chevron-back-outline" color={"#E67E22"} size={35} />
                    </TouchableOpacity>
                    <Text style={style.title}>{route.params.screenName}</Text>
                </View>

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
    
    text:{
        fontSize :20,
        paddingHorizontal : 15,
        paddingVertical : 15,
        textAlign : 'justify',
    }

    

})


export default Appinfo


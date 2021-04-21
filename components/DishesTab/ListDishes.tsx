import { View, TouchableOpacity, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import { AntDesign, } from '@expo/vector-icons';

import Dish from './Dish'

import React from 'react'


function ListDetails({ navigation, route }) {

    const data = require ('../../database/dishes.json')
    const [state] = React.useState(data);

    return (
        <View style={{ paddingTop: 20 }}>
            <ScrollView>
                <TouchableOpacity style={style.AddDishbtn} onPress={() => navigation.navigate('AddDish', {screenName:'Proposer un plat'})}>
                    <View style={{flexDirection : 'row', alignSelf:'center'}}>

                        <AntDesign name="pluscircleo" color={"#E67E22"} size={26} />
                        <Text style={style.text}>
                            Proposer un plat
                        </Text>
                    </View>
                </TouchableOpacity>
                <View>
                    {state.map( (item) => (
                        
                        <Dish dish={item}/>
                        
                    ))}

                </View>
            </ScrollView>
        </View>

    )
}



const style = StyleSheet.create({

    text: {
        color: '#e67e22', 
        textAlign: 'center', 
        fontSize: 18, 
        alignSelf:'center',
        paddingLeft : 7
    },

    AddDishbtn:{
        marginHorizontal : 10,
        marginVertical : 10,
        height: 55,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        borderWidth: 2,
        borderColor: '#e67e22',
        borderRadius: 50,


    }


})


export default ListDetails


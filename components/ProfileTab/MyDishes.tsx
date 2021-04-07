import * as React from 'react';
import {  View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';


import StackHeader from '../Common/StackHeader'
import Dish from '../DishesTab/Dish';

function MyDishes({ navigation, route }) {
    const data=route.params.screenName
    return (
        <ScrollView>
            <View>
                <StackHeader routeInfo = {data}/>

                <View style={style.container}>
                    <Text style={style.reservation}>1 demande en attente pour le plat suivant :</Text>
                    <Dish/>
                </View>
            </View>
        </ScrollView>
            
    );
}


const style = StyleSheet.create({

    text:{
        fontSize :20,
        paddingHorizontal : 15,
        paddingVertical : 15,
        textAlign : 'justify',
    },

    reservation:{
        fontSize : 19,
        paddingHorizontal : 6,
    },

})


export default MyDishes


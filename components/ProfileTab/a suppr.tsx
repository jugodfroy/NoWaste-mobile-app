import * as React from 'react';
import {  View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';


import StackHeader from '../Common/StackHeader'
import Dish from '../DishesTab/Dish';

function MyDishes({ navigation, route }) {
    
    const data = require ('../../database/dishes.json')
    const [state] = React.useState(data);

    const routedata=route.params.screenName
    return (
        <ScrollView>
            <View>
                <StackHeader routeInfo = {routedata}/>

                <View style={style.container}>
                    <Demand/>
                    <Dish/>
                </View>
                <View style={style.container}>
                    
                    <Dish/>
                </View>
                <View style={style.container}>
                    <Demand/>
                    <Dish/>
                </View>
            </View>
        </ScrollView>
            
    );
}

function Request(){

    
    state.map( (dish) => {
        if(dish.seller == "Julien GODFROY") {
            return(
                <Dish key={dish.dishID} dish={dish}/>
            )

        }               
        
    })

    /*if (1==1){  //si il y a une demande en attente,
        return(

            <Text style={style.reservation}>DEMANDE EN ATTENTE</Text>
        )
    } 
    else{return(null)}*/
}


const style = StyleSheet.create({

    container:{
        backgroundColor : 'white',
        borderRadius : 30,
        marginTop : 20
    },


    text:{
        fontSize :20,
        paddingHorizontal : 15,
        paddingVertical : 15,
        textAlign : 'justify',
    },

    reservation:{
        fontSize : 18,
        paddingHorizontal : 6,
        paddingLeft : 20,
        alignSelf : 'center'
    },



})


export default MyDishes


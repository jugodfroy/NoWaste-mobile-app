import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackgroundComponent } from 'react-native';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';


import StackHeader from '../Common/StackHeader'
import Dish from '../DishesTab/Dish';

function MyDishes({ navigation, route }) {

    const data = require('../../database/dishes.json')
    const [state] = React.useState(data);

    const routedata = route.params.screenName
    return (
        <ScrollView>
            <View>
                <StackHeader routeInfo={routedata} />
                {state.map((item) => (
                    <Request dish={item}/>


                ))}

            </View>
        </ScrollView>

    );
}

function Request(props) {

    if (props.dish.seller == "Julien GODFROY") { //changer julien godfroy avec le nom de l'utilisateur loggée
        if(props.dish.request == true){
        return (
            <View key={props.dish.dishID} style={style.reservation}>
                <Text style={style.reservation}>DEMANDE EN ATTENTE</Text>
                <Dish dish={props.dish} />
            </View>
        )}
        else { 
            return (
                <View key={props.dish.dishID} style={style.reservation} >
                    <Dish dish={props.dish} />
                </View>
            ) 
        }
    }
    else { return (null) }


}

const style = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        borderRadius: 30,
        marginTop: 20
    },


    text: {
        fontSize: 20,
        paddingHorizontal: 15,
        paddingTop: 15,
        textAlign: 'justify',
    },

    reservation: {
        fontSize: 18,
        paddingHorizontal: 6,
        //paddingLeft: 20,
        alignSelf: 'center',
        backgroundColor : 'white',
        borderRadius : 60,
        marginTop : 5
        
    },



})


export default MyDishes


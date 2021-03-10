import Item from './Item'

import React from 'react'
import  {View , Image, Text, StyleSheet, ScrollView  } from 'react-native'


class Liste extends React.Component{
    render(){
        return (
            <View style={{paddingTop : 20}}>
                <ScrollView>
                    <Text style={style.title}>Trouvez votre bonheur en pensant à la planète !</Text> 
                    <View>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        
                    </View>
                </ScrollView>
            </View>

        )
    }
}


const style=StyleSheet.create({

    title:{
        fontSize : 29,
        fontWeight : 'bold',
        paddingVertical : 20,
        paddingHorizontal : 20,
    }


})


export default Liste


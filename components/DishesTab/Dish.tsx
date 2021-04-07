import React from 'react'
import  {View , Image, Text, StyleSheet, TouchableOpacity, Alert  } from 'react-native' 
import { useNavigation  } from '@react-navigation/native';


function Dish({ route }) {
    const navigation = useNavigation(); 

    return (
        <TouchableOpacity onPress={() => navigation.navigate('DishDetails', {screenName:'Plateau de sushis'})}>
            <View style={style.container}>
                <Image style={style.img} source={require('../img/sushi.jpg')} />
                <View style={style.title_box}>
                    <Text style={[style.title, { fontWeight: 'bold' }]}>Plateau de sushis</Text>
                    <Text style={style.price}>1 Token </Text>
                </View>
                <Text style={style.details}>Plateau de 7 sushis et 6 makis au saumon faits maison</Text>
                <Text style={[style.details, { color: '#2980B9' }]}>360m de votre position </Text>
            </View>
        </TouchableOpacity>
    )

}


const style=StyleSheet.create({
    container:{

        //marginTop : 15, //juste dev, à retirer
        borderWidth : 3,
        borderRadius : 30,
        backgroundColor : '#FFF',
        borderColor : '#ecf0f1',    //gris
        //marginHorizontal : 10,
        paddingTop : 10,
        paddingBottom : 10,
        
    },
    
    img:{
        height : 150,
        width : 330,
        alignSelf :'center',
        borderRadius : 30,
    },

    title_box:{
        flexDirection:'row',
        justifyContent : 'space-between',
        paddingHorizontal : 10,

        
        
    },

    title:{
        fontWeight :'bold',
        fontSize:20,
    },

    price:{
        fontSize:20,
        color : "#E67E22",
        fontWeight : 'bold',
    },


    details:{
        marginHorizontal : 8,
    }


})


export default Dish


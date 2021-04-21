import React from 'react'
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native'
import StackHeader from '../Common/StackHeader'



function DishDetails({ navigation, route }) {
    const screenName = route.params.screenName
    const dishData = route.params.dish
    return (
        <View>
            <StackHeader routeInfo={screenName} />
            <ScrollView>
                <View style={style.container}>
                    <Image style={style.img} source={{uri: dishData.picture}} />
                    <View style={style.title_box}>
                        <Text style={[style.title, { fontWeight: 'bold' }]}>{dishData.name}</Text>
                        <Text style={style.price}>1 Token </Text>
                    </View>

                    <View>
                        <Text style={style.details}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Description :{'\n'}</Text>
                            {dishData.description}
                        </Text>


                        <Text style={style.details}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Périme dans :{'\n'}</Text>
                            {dishData.expire}
                        </Text>

                        <Text style={style.details}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Indications :{'\n'}</Text>
                            <Text>Vegan : {dishData.vegan}{'\n'}
                                Végétarien : {dishData.vege}{'\n'}
                                Gluten :{dishData.name} {dishData.gluten}{'\n'}
                                Arachides : {dishData.peanuts}{'\n'}
                                Lait : {dishData.milk}{'\n'}
                                Fruits de mer : {dishData.seafood}
                            </Text>

                        </Text>

                        <Text style={style.details}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Proposé par :{'\n'}</Text>
                            {dishData.seller}
                        </Text>

                        <Text style={style.details}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Adresse :{'\n'}</Text>
                            {dishData.address}, {dishData.city}{'\n'}
                            <Text style={[style.details, { color: '#2980B9' }]}>360m de votre position </Text>
                        </Text>

                        <TouchableOpacity style={style.button} onPress={() =>
                            Alert.alert(
                                "Confirmer la demande du plat ?",
                                "",
                                [
                                    {
                                        text: "Annuler",
                                        onPress: () => navigation.navigate('ListDishes'),
                                        style: "cancel"
                                    },
                                    {
                                        text: "Oui",
                                        onPress: () => Alert.alert(
                                            "Demande envoyée !",
                                            "Le vendeur sera notifié de votre demande et pourra prendre contact avec vous s'il souhaite y donner suite.",
                                            [
                                                {
                                                    text: "OK",
                                                    onPress: () => navigation.navigate('ListDishes'),

                                                },

                                            ]
                                        ),

                                    },


                                ]
                            )
                        }>
                            <Text style={{ color: '#ecf0f1', textAlign: 'center', fontSize: 18 }}>Réserver ce plat</Text>
                        </TouchableOpacity>


                    </View>
                </View>
            </ScrollView>
        </View >


    )
}



const style = StyleSheet.create({


    container: {

        //marginTop : 15, //juste pour le dev, à retirer
        borderWidth: 3,
        borderRadius: 30,
        backgroundColor: '#FFF',
        borderColor: '#ecf0f1',    //gris
        marginHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 100,
    },

    img: {
        height: 150,
        width: 320,
        alignSelf: 'center',
        borderRadius: 30,
    },

    title_box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 20

    },

    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    price: {
        fontSize: 20,
        color: "#E67E22",
        fontWeight: 'bold',
    },


    details: {
        paddingHorizontal: 10,
        paddingTop: 20,
        fontSize: 15
    },

    button: {
        width: 200,
        height: 55,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#2980B9',    //soft orange
        borderWidth: 2,
        borderColor: '#2980B9',
        borderRadius: 50,
        marginTop: 30,

    },

})


export default DishDetails

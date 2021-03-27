import React from 'react'
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import StackHeader from '../Common/StackHeader'



function DishDetails({ navigation, route }) {
    const data = route.params.screenName
    return (
        <View>
            <StackHeader routeInfo={data} />
            <ScrollView>
                <View style={style.container}>
                    <Image style={style.img} source={require('../img/sushi.jpg')} />
                    <View style={style.title_box}>
                        <Text style={[style.title, { fontWeight: 'bold' }]}>Plateau de sushis</Text>
                        <Text style={style.price}>1 Token </Text>
                    </View>

                    <View>
                        <Text style={style.details}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Description :{'\n'}</Text>
                            Plateau de 7 sushis et 6 makis au saumon faits maison
                        </Text>


                        <Text style={style.details}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Cuisiné il y a :{'\n'}</Text>
                            2 jours
                        </Text>

                        <Text style={style.details}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Allergènes :{'\n'}</Text>
                            NC
                        </Text>

                        <Text style={style.details}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Indications :{'\n'}</Text>
                            Non végétarien - Avec Gluten
                        </Text>

                        <Text style={style.details}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Proposé par :{'\n'}</Text>
                            Stéphane Legrand
                        </Text>

                        <Text style={style.details}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Adresse :{'\n'}</Text>
                            100 avenue de la République, Paris 75014{'\n'}
                        <Text style={[style.details, { color: '#2980B9' }]}>360m de votre position </Text>
                        </Text>

                        <TouchableOpacity style={style.button} onPress={() => Alert.alert("TO DEV")}>
                            <Text style={{ color: '#ecf0f1', textAlign: 'center', fontSize: 18 }}>Réserver ce plat</Text>
                        </TouchableOpacity>
                       

                    </View>
                </View>
            </ScrollView>
        </View>


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

    button:{
        width: 200,
        height: 55,
        justifyContent: 'center',
        alignSelf:'center',
        backgroundColor: '#2980B9',    //soft orange
        borderWidth: 2,
        borderColor: '#2980B9',
        borderRadius: 50,
        marginTop : 30,

    },

})


export default DishDetails

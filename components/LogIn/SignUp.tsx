import React from 'react'
import {Text, View, StyleSheet, ScrollView, TouchableOpacity, Alert, TextInput} from 'react-native'
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

function SignUp({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: '#E67E22', justifyContent: 'center', alignContent: 'center' }}>
            <ScrollView>

                <View style={style.bloc1}>
                    <Text style={style.title}>S'enregistrer</Text>
                </View>
                <View style={style.bloc2}>
                    <View style={style.input_boxes}>
                        <Ionicons name="mail-outline" color={"#E67E22"} size={24} />
                        <Text style={{ alignSelf: 'center' }}> Adresse mail</Text>
                    </View>
                    <TextInput style={style.input_id} placeholder='premon.nom@isep.fr' />
                    <View style={style.input_boxes}>
                        <Feather name="phone" color={"#E67E22"} size={24} />
                        <Text style={{ alignSelf: 'center' }}> Numéro de téléphone</Text>
                    </View>
                    <TextInput keyboardType='number-pad' style={style.input_id} placeholder='0666666666' />
                    <View style={style.input_boxes}>
                        <MaterialCommunityIcons name="city-variant-outline" color={"#E67E22"} size={24} />
                        <Text style={{ alignSelf: 'center' }}> Ville</Text>
                    </View>
                    <TextInput style={style.input_id} placeholder='Nom de la ville' />
                    <View style={style.input_boxes}>
                        <Ionicons name="location-outline" color={"#E67E22"} size={24} />
                        <Text style={{ alignSelf: 'center' }}> Adresse postale</Text>
                    </View>
                    <TextInput style={style.input_id} placeholder='Numéro et nom de rue' />
                    <View style={style.input_boxes}>
                        <Ionicons name="lock-closed-outline" color={"#E67E22"} size={24} />
                        <Text style={{ alignSelf: 'center' }}> Mot de passe</Text>
                    </View>
                    <TextInput style={style.input_id} placeholder='Mot de passe' />
                    <View style={style.input_boxes}>
                        <Ionicons name="lock-closed-outline" color={"#E67E22"} size={24} />
                        <Text style={{ alignSelf: 'center' }}> Confirmez votre mot de passe</Text>
                    </View>
                    <TextInput style={style.input_id} placeholder='Confirmez votre mot de passe' secureTextEntry={true} />


                    <View style={style.bottom}>
                        <TouchableOpacity style={style.button_log} onPress={() => navigation.navigate('MainNavigator')}>
                            <Text style={{ color: '#ecf0f1', textAlign: 'center', fontSize: 18 }}>Confimer</Text>
                        </TouchableOpacity>
                        <View style={{ paddingTop: 20 }}>
                            <TouchableOpacity style={style.button_sign} onPress={() => navigation.navigate('Welcome')}>
                                <Text style={{ color: '#2980B9', textAlign: 'center', fontSize: 18 }}>Annuler</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

            </ScrollView>
        </View>
    )

}

const style = StyleSheet.create({  //StyleSheet : optimise les perfs de l'appli en donnant un ID unique à la var
    bloc1: {
        flex :1,
        paddingTop : 20,
        backgroundColor : '#E67E22',    //orange carrot
    },

    bloc2: {
        flex : 3,
        backgroundColor : '#ecf0f1',    //soft white
        borderTopLeftRadius: 50,
        borderTopRightRadius : 50,
        marginTop: 10,
        paddingTop :10,
        paddingHorizontal : 5

    },

    title: {
        fontSize: 50,
        paddingLeft : 10,
        fontWeight: 'bold',
        paddingTop : 80,
        color : "#FFFFFF",  
        textAlignVertical : 'bottom',
    },


    input_boxes:{
        flexDirection : 'row',
        paddingTop : 20,
        paddingHorizontal : 10
    },

    input_id: {
        paddingHorizontal : 20,
        borderRadius : 50,
        marginTop : 5,
        height : 60,
        backgroundColor : 'white',

    },


    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems : 'center',
        paddingTop: 50,
        width: "100%",
        paddingBottom : 35,
        //backgroundColor : 'black', //pour comprendre les positionnements des views

    },
    
    button_log:{
        width : 120,
        height : 55,
        justifyContent: 'center',
        backgroundColor : '#2980B9',    //beau bleu
        borderWidth : 2,
        borderColor : '#2980B9',
        borderRadius : 50,

    },

    button_sign:{
        width : 120,
        height : 55,
        justifyContent: 'center',
        backgroundColor : '#ecf0f1',    
        borderWidth : 2,
        borderColor : '#2980B9',    //beau bleu
        borderRadius : 50,
    }

})

export default SignUp
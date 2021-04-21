import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Alert, TextInput, ScrollView } from 'react-native'
import { Ionicons, } from '@expo/vector-icons';

function Login({ navigation }) {
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: '#E67E22', justifyContent: 'center', alignContent: 'center' }}>

                <View style={style.bloc1}>
                    <Text style={style.title}>Se connecter</Text>
                </View>
                <View style={style.bloc2}>
                    <View style={style.input_boxes}>
                        <Ionicons name="mail-outline" color={"#E67E22"} size={26} />
                        <Text style={{ alignSelf: 'center' }}> Adresse mail</Text>
                    </View>
                    <TextInput style={style.input_id} placeholder='premon.nom@isep.fr' />
                    <View style={style.input_boxes}>
                        <Ionicons name="lock-closed-outline" color={"#E67E22"} size={26} />
                        <Text style={{ alignSelf: 'center' }}> Mot de passe</Text>
                    </View>
                    <TextInput style={style.input_id} placeholder='Mot de passe' secureTextEntry={true} />
                    <TouchableOpacity  onPress={() =>
                        Alert.alert(
                            "Récupération du mot de passe",
                            "Veuillez contacter l'équipe NoWaste à l'adresse mail suivante:\njgodfroy@juniorisep.com",
                        )
                        }>
                        <Text style={style.forget}>
                            Mot de passe oublié ?
                        </Text>
                    </TouchableOpacity>



                    <View style={style.bottom}>
                        <TouchableOpacity style={style.button_log} onPress={() => navigation.navigate('MainNavigator')}>
                            <Text style={{ color: '#ecf0f1', textAlign: 'center', fontSize: 18 }}>Connexion</Text>
                        </TouchableOpacity>
                        <View style={{ paddingTop: 20 }}>
                            <TouchableOpacity style={style.button_sign} onPress={() => navigation.navigate('SignUp')}>
                                <Text style={{ color: '#2980B9', textAlign: 'center', fontSize: 18 }}>Créer un compte</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
        </ScrollView>

    )

}

const style = StyleSheet.create({  //StyleSheet : optimise les perfs de l'appli en donnant un ID unique à la var
    bloc1: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#E67E22',    //orange carrot
    },

    bloc2: {
        flex: 3,
        backgroundColor: '#ecf0f1',    //soft white
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingTop: 30


    },

    title: {
        fontSize: 50,
        paddingLeft: 10,
        fontWeight: 'bold',
        paddingTop: 80,
        color: "#FFF",
        textAlignVertical: 'bottom',
    },

    input_boxes: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingHorizontal: 10
    },

    input_id: {
        paddingHorizontal: 20,
        borderRadius: 50,
        height: 60,
        backgroundColor: 'white'
    },

    forget:{
        textAlign : 'right',
        paddingRight : 15,
        paddingTop:4,
        textDecorationLine: 'underline'
    },


    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 70,
        width: "100%",
        paddingBottom: 60,
        //backgroundColor : 'black', //pour comprendre les positionnements des views

    },

    button_log: {
        width: 120,
        height: 55,
        justifyContent: 'center',
        backgroundColor: '#2980B9',    //soft orange
        borderWidth: 2,
        borderColor: '#2980B9',
        borderRadius: 50,

    },

    button_sign: {
        width: 120,
        height: 55,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        borderWidth: 2,
        borderColor: '#2980B9',
        borderRadius: 50,
    }

})

export default Login
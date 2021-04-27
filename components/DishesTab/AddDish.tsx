import React from 'react'
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, TextInput, } from 'react-native'
import { Feather } from '@expo/vector-icons';
import StackHeader from '../Common/StackHeader'
import RNPickerSelect from 'react-native-picker-select';



function AddDish({ navigation, route }) {
    const data = route.params.screenName
    return (
        <View>
            <StackHeader routeInfo={data} />
            <ScrollView>
                <View style={style.container}>
                    <Feather name='upload' size={26} />

                    <View style={style.element}  >
                        <Text style={style.text}>Nom du plat :</Text>
                        <TextInput style={style.input} />
                    </View>

                    <View style={style.element}  >
                        <Text style={style.text}>Description :</Text>
                        <TextInput style={[style.input, { height: 100 }]} multiline={true} numberOfLines={4} />
                    </View>

                    <View style={style.element}  >
                        <Text style={style.text}>Périme dans :</Text>
                        <RNPickerSelect

                            style={PickerStyle}
                            useNativeAndroidPickerStyle={false}
                            placeholder={{ label: "Périme dans", value: null }}
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: '1 jours', value: '1 jours' },
                                { label: '2 jours', value: '2 jours' },
                                { label: '3 jours', value: '3 jours' },
                                { label: '4 jours', value: '4 jours' },
                                { label: '5 jours', value: '5 jours' },
                                { label: '6 jours', value: '6 jours' },
                                { label: "+ d'1 semaine", value: "+ d'1 semaine" },
                                { label: "+ d'2 semaines", value: "+ d'2 semaines" },
                                { label: "+ d'3 semaines", value: "+ d'3 semaines" },
                                { label: "Jamais", value: "Jamais" },
                            ]}
                        />
                    </View>

                    <View style={style.element}  >
                        <Text style={style.text}>Plat cuisiné ?</Text>
                        <RNPickerSelect

                            style={PickerStyle}
                            useNativeAndroidPickerStyle={false}
                            placeholder={{ label: "Plat cuisiné ?", value: null }}
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: 'Oui', value: true },
                                { label: 'Non', value: false },
                                
                            ]}
                        />
                    </View>

                    <View style={style.element}  >
                        <Text style={style.text}>Principaux allergènes :</Text>
                        <Text style={style.text_details}>Arachides :</Text>
                        <RNPickerSelect
                            style={PickerStyle}
                            useNativeAndroidPickerStyle ={false}
                            placeholder={{ label: "Arachides", value: null }}
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: 'Oui', value: 'Oui' },
                                { label: 'Non', value: 'Non' },
                                { label: 'NC', value: 'NC' },
                            ]}
                        />
                        <Text style={style.text_details}>Lait :</Text>
                        <RNPickerSelect
                            style={PickerStyle}
                            useNativeAndroidPickerStyle ={false}
                            placeholder={{ label: "Lait", value: null }}
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: 'Oui', value: 'Oui' },
                                { label: 'Non', value: 'Non' },
                                { label: 'NC', value: 'NC' },
                            ]}
                        />
                        <Text style={style.text_details}>Fruit de mer :</Text>
                        <RNPickerSelect
                            style={PickerStyle}
                            useNativeAndroidPickerStyle ={false}
                            placeholder={{ label: "Fruits de mer", value: null }}
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: 'Oui', value: 'Oui' },
                                { label: 'Non', value: 'Non' },
                                { label: 'NC', value: 'NC' },
                            ]}
                        />
                    </View>

                    <View style={style.element}  >
                        <Text style={style.text}>Indications :</Text>
                        <Text style={style.text_details}>Vegan</Text>
                        <RNPickerSelect
                            style={PickerStyle}
                            useNativeAndroidPickerStyle ={false}
                            placeholder={{ label: "Vegan", value: null }}
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: 'Oui', value: 'Oui' },
                                { label: 'Non', value: 'Non' },
                                { label: 'NC', value: 'NC' },
                            ]}
                        />
                        <Text style={style.text_details}>Végétarien</Text>
                        <RNPickerSelect
                            style={PickerStyle}
                            useNativeAndroidPickerStyle ={false}
                            placeholder={{ label: "Végetarien", value: null }}
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: 'Oui', value: 'Oui' },
                                { label: 'Non', value: 'Non' },
                                { label: 'NC', value: 'NC' },
                            ]}
                        />
                        <Text style={style.text_details}>Gluten</Text>
                        <RNPickerSelect
                            style={PickerStyle}
                            useNativeAndroidPickerStyle ={false}
                            placeholder={{ label: "Gluten", value: null }}
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: 'Oui', value: 'Oui' },
                                { label: 'Non', value: 'Non' },
                                { label: 'NC', value: 'NC' },
                            ]}
                        />
                    </View>

                    <View style={style.element}  >
                        <Text style={style.text}>Récupérer à l'adresse suivante :</Text>
                        <TextInput style={style.input} value={"100 rue de la Vallée"} />
                        <TextInput style={[style.input, { marginTop: 2 }]} value={"Paris"} />
                    </View>

                    <View style={style.bottom}>
                        <TouchableOpacity style={style.button} onPress={() => navigation.goBack()}>
                            <Text style={{ color: '#ecf0f1', textAlign: 'center', fontSize: 18 }}>Enregistrer</Text>
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
        paddingHorizontal: 10,

    },

    element: {
        paddingTop: 15,

    },

    input: {
        paddingHorizontal: 20,
        borderRadius: 10,
        height: 40,
        paddingVertical: 3,
        backgroundColor: '#ecf0f1',

    },

    text: {
        fontWeight: 'bold',
    },

    text_details: {
        paddingLeft : 10,
        paddingTop : 5,
    },

    //btn
    bottom: {
        flex: 1,
        alignItems: 'center',
        width: "100%",
        //backgroundColor : 'black', //pour comprendre les positionnements des views
        marginBottom: 20,
        marginTop: 20,
    },

    button: {
        width: 120,
        height: 55,
        justifyContent: 'center',
        backgroundColor: '#2980B9',    //soft blue
        borderWidth: 2,
        borderColor: '#2980B9',
        borderRadius: 50,


    },


})



const PickerStyle = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        marginHorizontal:10,
        borderWidth: 1,
        borderColor: '#E67E22',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon.
        
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        marginHorizontal:10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: '#E67E22',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon.
        
    },
});


export default AddDish

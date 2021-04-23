
import * as React from 'react';

import { View, Text, TouchableOpacity, ScrollView, Image , StyleSheet} from 'react-native';
import { Ionicons, MaterialCommunityIcons, Feather, FontAwesome } from '@expo/vector-icons';


function Notification(){   //verifie si une demande est en attente pour pouvoir afficher une icone de notification en attente
    const datadishes = require ('../../database/dishes.json')
    var notification = 0
    datadishes.map((dish) => {
        if (dish.seller == "Julien GODFROY" && dish.request==true){
            notification = 1;
        }
    })
    if (notification == 1){
    return( 
        <FontAwesome style={style.notification} name="dot-circle-o" color={"#E67E22"} size={20}/>
    )}
    else{return(null)}
    
}


function ProfileScreen({ navigation }) {
    const dataprofile = require ('../../database/profile.json')
    const [state] = React.useState(dataprofile);
    return (
        <ScrollView>
            <View>

                <View style={style.main_profile_container}>
                    <View>
                        <Image source={require("../img/pp.jpg")} style={style.pp}/> 
                    </View>

                    <View style={style.name}>
                        <Text style={style.text_name}>{state.name}</Text>
                        <Text style={[style.text_name, { fontWeight: 'bold' }]}>{state.surname}</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={style.stat_bloc}>
                            <Text style={style.stat_figures}>{state.tokens}</Text>
                            <Text style={style.stat_text}>Tokens</Text>
                        </View>
                        <View style={style.stat_bloc_center}>
                            <Text style={style.stat_figures}>{state.sale}</Text>
                            <Text style={style.stat_text}>Ventes</Text>
                        </View>
                        <View style={style.stat_bloc}>
                            <Text style={style.stat_figures}>{state.purchase}</Text>
                            <Text style={style.stat_text}>Achats</Text>
                        </View>
                    </View>
                </View>
                <View style={style.menu_container}>
                    <TouchableOpacity onPress={() => navigation.navigate('ProfileInfo', { screenName: 'Mes informations' })}>
                        <View style={style.menu_button}>
                            <MaterialCommunityIcons name="account-details-outline" color={"#E67E22"} size={26} />
                            <Text style={style.text_menu}>Mes informations</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('MyDishes', { screenName: 'Gérer mes plats' })}>
                        <View style={[style.menu_button, {justifyContent: 'space-between'} ]}>
                            <View style={{flexDirection : 'row'}}>

                            <MaterialCommunityIcons name="food-fork-drink" color={"#E67E22"} size={26} />
                            <Text style={style.text_menu}>Gérer mes plats</Text>
                            </View>
                            <Notification/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Settings', { screenName: "Paramètres de l'application" })}>
                        <View style={style.menu_button}>
                            <Ionicons name="settings-outline" color={"#E67E22"} size={26} />
                            <Text style={style.text_menu}>Paramètres de l'application </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("AppInfo", { screenName: "Informations de l'application" })}>
                        <View style={style.menu_button}>
                            <Ionicons name="information-circle-outline" color={"#E67E22"} size={26} />
                            <Text style={style.text_menu}>Informations sur l'application </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Disconnect', { screenName: 'Se déconnecter' })}>
                        <View style={style.menu_button}>
                            <Feather name="x-octagon" color={"#E67E22"} size={26} />
                            <Text style={style.text_menu_red}>Se déconnecter </Text>
                        </View>
                    </TouchableOpacity>

                </View>

            </View>
        </ScrollView>
    );
}






const style = StyleSheet.create({
    //profile section
    main_profile_container: {
        alignSelf: 'center',
        paddingTop: 40,
    },

    pp: {
        height: 170,
        width: 170,
        borderRadius: 50,
        alignSelf: 'center',
    },

    name: {
        paddingTop: 10,
        alignSelf: 'center',
        paddingBottom: 10,

    },

    text_name: {
        alignSelf: 'center',
        fontSize: 22,
    },

    stat_bloc: {
        paddingHorizontal: 15,
        marginTop: 10,
    },

    stat_figures: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color: '#E67E22'
    },


    stat_bloc_center: {
        paddingHorizontal: 10,
        marginTop: 10,
        borderLeftWidth: 1,
        borderRightWidth: 1,

    },

    stat_text: {
        marginHorizontal: 10,
        color: '#2980B9',
        fontWeight: 'bold',
    },


    //menu section

    menu_container: {
        paddingHorizontal: 20,
        marginHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#fff',
        marginTop: 30,
        borderRadius: 50,
        marginBottom: 30,
    },

    menu_button: {
        flexDirection: 'row',
        paddingVertical: 10,

    },

    text_menu: {
        alignSelf: 'center',
        paddingLeft: 10,
        fontSize: 15
    },

    text_menu_red: {
        alignSelf: 'center',
        paddingLeft: 10,
        fontSize: 15,
        color: '#e74c3c'   //beau rouge pour la deconnexion
    },

    notification:{
        alignSelf: 'center',
        
        
    }


})


export default ProfileScreen
import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { Ionicons, } from '@expo/vector-icons';



function ProfileInfo({ navigation, route }) {
  return (
    <View>
      <View style={style.Header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{}}>
          <Ionicons name="chevron-back-outline" color={"#E67E22"} size={35} />
        </TouchableOpacity>
        <Text style={style.title}>{route.params.screenName}</Text>
      </View>

      <View style={style.menu_container}>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile', { screenName: 'Nom' ,placeholder:'Godfroy'})}>
          <View style={style.menu_button}>
            <Text style={style.text_menu}>Nom :</Text>
            <View style={{flexDirection : 'row'}}>

              <Text style={{ color: 'grey', alignSelf: 'center', textAlign: 'right' }}>Godfroy</Text>
              <Ionicons name="chevron-forward" color={"#E67E22"} size={20} style={style.cheveron} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile', { screenName: 'Prénom' ,placeholder:'Julien' })}>
          <View style={style.menu_button}>
            <Text style={style.text_menu}>Prénom :</Text>
            <View style={{flexDirection : 'row'}}>

              <Text style={{ color: 'grey', alignSelf: 'center', textAlign: 'right' }}>Julien</Text>
              <Ionicons name="chevron-forward" color={"#E67E22"} size={20} style={style.cheveron} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile', { screenName: 'Adresse mail' ,placeholder:'julien.godfroy@isep.fr' })}>
          <View style={style.menu_button}>
            <Text style={style.text_menu}>Adresse mail :</Text>
            <View style={{flexDirection : 'row'}}>

              <Text style={{ color: 'grey', alignSelf: 'center', textAlign: 'right' }}>julien.godfroy@isep.fr</Text>
              <Ionicons name="chevron-forward" color={"#E67E22"} size={20} style={style.cheveron} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile', { screenName: 'Numéro de téléphone' ,placeholder:'0666817985' })}>
          <View style={style.menu_button}>
            <Text style={style.text_menu}>Numéro de téléphone :</Text>
            <View style={{flexDirection : 'row'}}>

              <Text style={{ color: 'grey', alignSelf: 'center', textAlign: 'right' }}>0666817985</Text>
              <Ionicons name="chevron-forward" color={"#E67E22"} size={20} style={style.cheveron} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile', { screenName: 'Ville' ,placeholder:'Paris' })}>
          <View style={style.menu_button}>
            <Text style={style.text_menu}>Ville :</Text>
            <View style={{flexDirection : 'row'}}>

              <Text style={{ color: 'grey', alignSelf: 'center', textAlign: 'right' }}>Paris</Text>
              <Ionicons name="chevron-forward" color={"#E67E22"} size={20} style={style.cheveron} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile', { screenName: 'Adresse postale',placeholder:'64 rue de Vanves' })}>
          <View style={style.menu_button}>
            <Text style={style.text_menu}>Adresse postale :</Text>
            <View style={{flexDirection : 'row'}}>

              <Text style={{ color: 'grey', alignSelf: 'center', textAlign: 'right' }}>64 rue de Vanves</Text>
              <Ionicons name="chevron-forward" color={"#E67E22"} size={20} style={style.cheveron} />
            </View>
          </View>
        </TouchableOpacity>

      </View>

    </View>




  );
}






const style = StyleSheet.create({

  Header: {
    flexDirection: "row",
    paddingTop: 25,
    //flex : 1,
    borderBottomWidth: 2,
    borderColor: '#E67E22',
    paddingBottom: 10

  },

  title: {
    alignSelf: 'center',
    //flex : 1,
    fontSize: 20,
    justifyContent: 'center'
  },


  //menu 

  menu_container: {
    paddingHorizontal: 10,
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
    justifyContent: 'space-between'

  },

  text_menu: {
    alignSelf: 'center',
    paddingLeft: 10,
    fontSize: 15,

  },

  text_menu_red: {
    alignSelf: 'center',
    paddingLeft: 10,
    fontSize: 15,
    color: '#e74c3c'   //beau rouge pour la deconnexion
  },

  cheveron: {
    alignContent: 'center',

  }

})


export default ProfileInfo

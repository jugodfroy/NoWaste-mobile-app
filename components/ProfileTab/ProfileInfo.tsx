import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

import { Ionicons, } from '@expo/vector-icons';
import StackHeader from '../Common/StackHeader'




function ProfileInfo({ navigation, route }) {
  const routedata = route.params.screenName
  const data = require ('../../database/profile.json')
  const [state] = React.useState(data);

  return (
    <View>
      <StackHeader routeInfo={routedata} />

      <View style={style.menu_container}>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile', { screenName: 'Nom', placeholder: state.surname })}>
          <View style={style.menu_button}>
            <Text style={style.text_menu}>Nom :</Text>
            <View style={{ flexDirection: 'row' }}>

              <Text style={{ color: 'grey', alignSelf: 'center', textAlign: 'right' }}>{state.surname}</Text>
              <Ionicons name="chevron-forward" color={"#E67E22"} size={20} style={style.cheveron} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile', { screenName: 'Prénom', placeholder: state.name })}>
          <View style={style.menu_button}>
            <Text style={style.text_menu}>Prénom :</Text>
            <View style={{ flexDirection: 'row' }}>

              <Text style={{ color: 'grey', alignSelf: 'center', textAlign: 'right' }}>{state.name}</Text>
              <Ionicons name="chevron-forward" color={"#E67E22"} size={20} style={style.cheveron} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile', { screenName: 'Adresse mail', placeholder: state.mail })}>
          <View style={style.menu_button}>
            <Text style={style.text_menu}>Adresse mail :</Text>
            <View style={{ flexDirection: 'row' }}>

              <Text style={{ color: 'grey', alignSelf: 'center', textAlign: 'right' }}>{state.mail}</Text>
              <Ionicons name="chevron-forward" color={"#E67E22"} size={20} style={style.cheveron} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile', { screenName: 'Numéro de téléphone', placeholder: state.phone })}>
          <View style={style.menu_button}>
            <Text style={style.text_menu}>Numéro de téléphone :</Text>
            <View style={{ flexDirection: 'row' }}>

              <Text style={{ color: 'grey', alignSelf: 'center', textAlign: 'right' }}>{state.phone}</Text>
              <Ionicons name="chevron-forward" color={"#E67E22"} size={20} style={style.cheveron} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile', { screenName: 'Ville', placeholder: state.city })}>
          <View style={style.menu_button}>
            <Text style={style.text_menu}>Ville :</Text>
            <View style={{ flexDirection: 'row' }}>

              <Text style={{ color: 'grey', alignSelf: 'center', textAlign: 'right' }}>{state.city}</Text>
              <Ionicons name="chevron-forward" color={"#E67E22"} size={20} style={style.cheveron} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile', { screenName: 'Adresse postale', placeholder: state.address })}>
          <View style={style.menu_button}>
            <Text style={style.text_menu}>Adresse postale :</Text>
            <View style={{ flexDirection: 'row' }}>

              <Text style={{ color: 'grey', alignSelf: 'center', textAlign: 'right' }}>{state.address}</Text>
              <Ionicons name="chevron-forward" color={"#E67E22"} size={20} style={style.cheveron} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(Alert.alert('TO DEV'))}>
          <View style={style.menu_button}>
            <Text style={style.text_menu}>Photo de profile :</Text>
            <View style={{ flexDirection: 'row' }}>

              <Text style={{ color: 'grey', alignSelf: 'center', textAlign: 'right' }}>Changer de photo</Text>
              <Ionicons name="chevron-forward" color={"#E67E22"} size={20} style={style.cheveron} />
            </View>
          </View>
        </TouchableOpacity>

      </View>

    </View>




  );
}






const style = StyleSheet.create({


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

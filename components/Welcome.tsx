import React from 'react'
import {Text, View, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native'

class Welcome extends React.Component{
    render(){
        return (
            <View style={{flex :1, backgroundColor: '#E67E22'}}>
                
              <View style={style.bloc1}>
                <Image style= {style.logo} source={require('./img/round_logo.png')}/>
              </View>
              <View style={style.bloc2}>
                <Text style={style.welcome_text}>Bienvenu sur NoWaste !</Text>
                <Text style={style.slogan}>Ensemble, luttons contre le gaspillage alimentaire et la précarité étudiante.</Text>
                <View style={style.bottom}>
                    <TouchableOpacity style={style.button} onPress={() => Alert.alert('Simple Button pressed')}>
                        <Text style={{color : '#ecf0f1', textAlign:'center', fontSize : 18}}>C'est parti !</Text>
                        
                    </TouchableOpacity>
                </View>   

              </View>
            </View>
        )
    }
}

const style = StyleSheet.create({  //StyleSheet : optimise les perfs de l'appli en donnant un ID unique à la var
    bloc1: {
        flex :1,
        paddingTop : 20,
        backgroundColor : '#E67E22',    //orange carrot
        //alignSelf :'center'
    },

    bloc2: {
        flex : 1.3,
        backgroundColor : '#ecf0f1',    //soft white
        borderTopLeftRadius: 50,
        borderTopRightRadius : 50,


    },

    welcome_text: {
        fontSize: 40,
        textAlign :'center',
        fontWeight: 'bold',
        paddingTop : 30,
        color : "#2c3e50"   //black color softer
    },

    logo:{
        width: 240, 
        height: 240, 
        borderRadius:200, 
        alignSelf: 'center',
        marginTop : 20,
    },

    slogan:{
        fontSize : 20,
        fontStyle : 'italic',
        textAlign :'center',
        paddingTop : 20,
        paddingLeft : 10,
        paddingRight : 10,
        color : "#2c3e50"   //black color softer
    },

    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems : 'center',
        marginBottom: 0,
        width: "100%",
        paddingBottom : 60,

    },
    
    button:{
        width : 120,
        height : 55,
        justifyContent: 'center',
        backgroundColor : '#E67E22',    //soft white
        borderWidth : 2,
        borderColor : '#E67E22',
        borderRadius : 50,

    }

})

export default Welcome
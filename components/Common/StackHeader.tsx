import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

import { Ionicons, } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function StackHeader({ routeInfo }) {
    const navigation = useNavigation(); 

    return (
        <View style={style.Header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{}}>
                <Ionicons name="chevron-back-outline" color={"#E67E22"} size={35} />
            </TouchableOpacity>
            <Text style={style.title}>{routeInfo}</Text>
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



})


export default StackHeader


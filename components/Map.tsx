import React from 'react'
import  { View, ScrollView, Animated, StyleSheet} from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { MaterialCommunityIcons, AntDesign, Feather } from '@expo/vector-icons';
import Item from './Item'

class Map extends React.Component{
    render(){
        return (
            <View style={{flex : 1}}>
                <MapView
                style={{flex :1}}
                provider={PROVIDER_GOOGLE}  // a tester sur iphone
                initialRegion={{
                    latitude: 48.8452974,
                    longitude: 2.3280403,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                    
                }}
                >
                    <Marker coordinate = {{latitude: 48.8452974,longitude: 2.3280403}}
                    pinColor = {"#E67E22"} // any color
                    title={"ISEP Paris"}
                    description={"100 mètres de votre position"}/>
                </MapView>
                    <Animated.ScrollView
                        horizontal
                        scrollEventThrottle={1} //sur IOS , gere la fluidité du scroll (+fluide => +gourmand en ressources)

                        showsHorizontalScrollIndicator={false}
                        style={style.scrollView}
                        >
                            <Item/>
                            <Item/>
                            <Item/>
                            <Item/>
                    </Animated.ScrollView>
            </View>
                

        )
    }
}

const style = StyleSheet.create({
    scrollView: {
        position: "absolute",
        bottom: 0,  //equivaut au coordonnée de l'emplacement du component sur l'écran
        left: 0,
        right: 0,
        paddingBottom: 10,


      },
})

export default Map
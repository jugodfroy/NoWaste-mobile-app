import React from 'react'
import {} from 'react-native'
import MapView, { Marker } from 'react-native-maps'

class Map extends React.Component{
    render(){
        return (
            <MapView
            style={{flex :1}}
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

        )
    }
}

export default Map
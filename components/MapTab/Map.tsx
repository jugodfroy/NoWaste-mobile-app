import React, { useEffect } from 'react'
import { View, ScrollView, Animated, StyleSheet, Dimensions, Platform } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { MaterialCommunityIcons, AntDesign, Feather } from '@expo/vector-icons';
import Dish from '../DishesTab/Dish'
import DishDetails from '../DishesTab/DishDetails'

const { width, height } = Dimensions.get("window");
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;
const CARD_WIDTH = width * 0.8;



function Map({ navigation, route }) {



    const data = {
        markers: [
            {
                coordinate: {
                    latitude: 48.84540488738773,
                    longitude: 2.328035420148238,
                },
                title: "PLAT 1",
                description: "100 mètres de votre position",
                image: "../img/sushi.jpg",
            },
            {
                coordinate: {
                    latitude: 48.8434243578322,
                    longitude: 2.3337495979716305,
                },
                title: "PLAT 2",
                description: "100 mètres de votre position",
                image: "../img/sushi.jpg",
            },
            {
                coordinate: {
                    latitude: 48.84838082997849,
                    longitude: 2.331563060658821,
                },
                title: "PLAT 3",
                description: "100 mètres de votre position",
                image: "../img/sushi.jpg",
            },


            
    

        ],
        region: {
            latitude: 48.8452974,
            longitude: 2.3280403,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        },
    };
    const [state, setState] = React.useState(data);
    let mapIndex = 0;
    let mapAnimation = new Animated.Value(0);

    useEffect(() => {
        mapAnimation.addListener(({ value }) => {
            let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
            if (index >= state.markers.length) {
                index = state.markers.length - 1;
            }
            if (index <= 0) {
                index = 0;
            }

            clearTimeout(regionTimeout);

            const regionTimeout = setTimeout(() => {
                if (mapIndex !== index) {
                    mapIndex = index;
                    const { coordinate } = state.markers[index];
                    _map.current.animateToRegion(
                        {
                            ...coordinate,
                            latitudeDelta: state.region.latitudeDelta,
                            longitudeDelta: state.region.longitudeDelta,
                        },
                        350
                    );
                }
            }, 10);
        });
    });

    const interpolations = state.markers.map((marker, index) => {
        const inputRange = [
            (index - 1) * CARD_WIDTH,
            index * CARD_WIDTH,
            ((index + 1) * CARD_WIDTH),
        ];

        const scale = mapAnimation.interpolate({
            inputRange,
            outputRange: [1, 1.6, 1],
            extrapolate: "clamp"
        });

        return { scale };
    });

    const onMarkerPress = (mapEventData) => {
        const markerID = mapEventData._targetInst.return.key;

        let x = (markerID * CARD_WIDTH) + (markerID * 80);//80 en tatonant => valeur a changer si décalage après plusieurs plats
        if (Platform.OS === 'ios') {
            x = x - SPACING_FOR_CARD_INSET;
        }

        _scrollView.current.scrollTo({ x: x, y: 0, animated: true });
    }


    const _map = React.useRef(null);
    const _scrollView = React.useRef(null);

    return (
        <View style={{ flex: 1 }}>
            <MapView
                ref={_map}
                style={{ flex: 1 }}
                provider={PROVIDER_GOOGLE}  // a tester sur iphone
                initialRegion={state.region}
                showsUserLocation={true}
            >
                {
                    state.markers.map((marker, index) => {
                        const scaleStyle = {
                            transform: [
                                {
                                    scale: interpolations[index].scale,
                                },
                            ],
                        };
                        return (
                            <Marker key={index} coordinate={marker.coordinate} onPress={(e) => onMarkerPress(e)}>
                                <Animated.View style={[style.markerWrap]}>
                                    <Animated.Image
                                        source={require('../img/map_marker.png')}
                                        style={[style.marker, scaleStyle]}
                                        resizeMode="cover"
                                    />
                                </Animated.View>
                            </Marker>
                        );
                    })
                }


            </MapView>
            <Animated.ScrollView
                ref={_scrollView}
                horizontal
                scrollEventThrottle={1} //sur IOS , gere la fluidité du scroll (+fluide => +gourmand en ressources)
                showsHorizontalScrollIndicator={false}
                style={style.scrollView}
                snapToInterval={width + 5}
                snapToAlignment='center'
                onScroll={Animated.event(
                    [
                        {
                            nativeEvent: {
                                contentOffset: {
                                    x: mapAnimation,
                                }
                            },
                        },
                    ],
                    { useNativeDriver: true }
                )}

            >
                {
                    state.markers.map((marker, index) => (
                        <Dish key={index} />

                    ))
                }



            </Animated.ScrollView>
        </View >


    )
}


const style = StyleSheet.create({
    scrollView: {
        position: "absolute",
        bottom: 0,  //equivaut aux coordonnées de l'emplacement du component sur l'écran
        left: 0,
        right: 0,
        paddingVertical: 10,


    },

    markerWrap: {
        alignItems: "center",
        justifyContent: "center",
        width:50,
        height:50,
      },
    marker: {
        alignItems: "center",
        justifyContent: "center",
        width: 30,
        height: 30,
    },
  



})

export default Map
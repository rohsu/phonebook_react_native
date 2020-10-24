// import React, { useEffect, useState } from 'react';
// import {
//     View,
//     Button,
//     Text,
//     ActivityIndicator,
//     Alert,
//     StyleSheet
// } from 'react-native';

// import * as Location from 'expo-location';
// import * as Permissions from 'expo-permissions'

// const GetLocation = () => {
//     const [latitude, setLatitude] = useState();
//     const [longitude, setLongitude] = useState();

//     const getLocationHandler = async () => {
//         const {status} = await Permissions.askAsync(Permissions.LOCATION);
//         if(status !== 'granted') {
//             Alert.alert(
//                 "Sem permissão para uso do mecanismo de localização",
//                 "É preciso liberar acesso ao mecanismo de localização",
//                 [{text: 'OK'}] //{text: 'OK', onPress: () => {}}
//             );  
//         }

//         const position = await Location.getCurrentPositionAsync({timeout: 5000});
//         const {latitude, longitude} = position.coords;
//         setLatitude(latitude);
//         setLongitude(longitude);
//     }
//     getLocationHandler();

//     return (
//         <View>
            
//         </View>
//     );
// }

// export default GetLocation;
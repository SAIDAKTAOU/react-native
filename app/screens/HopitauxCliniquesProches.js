import React, {useState} from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import MapView, { PROVIDER_GOOGLE , Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps





export default function HaupitauxCliniquesProche({ navigation }){

    return (
      <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 31.791702,
          longitude: -7.092620,
          latitudeDelta: 10.0,
          longitudeDelta: 10.0,
        }}
      >
      </MapView>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: '100%',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });


import React, {useState, Component} from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import MapView, { PROVIDER_GOOGLE , Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps


export default function ServicesUrgenceProche({ navigation }){

  constructor(props) 
    super(props);
    this.state = {
      latitude: 0,
      longitude:0
    };
  }

    ComponentDidMount() 
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        })
      },
      error => this.setState({ error: error.message}),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 2000}
      );
    

    render() 
    return (
      <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: this.state.latitude,
          longitude: this.state.longitude,
          latitudeDelta: 10.0,
          longitudeDelta: 10.0,
        }}
      >
        <Marker coordinate={this.state} />
      </MapView>
    </View>
    );



const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: '100%',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });


import React from 'react';
import { View,StyleSheet, Text,TouchableOpacity,Image, Button} from 'react-native';

import FlatButton from '../../shared/button';

export default function Favoris({ navigation }){
    return (

        <View style={styles.container}>

<View style={styles.imageDirection}>
                <TouchableOpacity onPress={() => navigation.navigate('Medecins')}>
                <Image style={styles.image} source={require('../../images/medecin.jpg')} /> 
                <Text style={styles.text}>Medecins</Text>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => navigation.navigate('Pharmacies')}>
                <Image style={styles.image} source={require('../../images/pharmacie.jpg')} />
                <Text style={styles.text}>Pharmacies</Text>
                </TouchableOpacity>
               </View>

               <View style={styles.imageDirection}>
                <TouchableOpacity onPress={() => navigation.navigate('Laboratoires')}>
                <Image style={styles.image} source={require('../../images/laboratoire.jpg')} /> 
                <Text style={styles.text}>Laboratoires</Text>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => navigation.navigate('ServiceUrgences')}>
                <Image style={styles.image} source={require('../../images/urgence.jpg')} />
                <Text style={styles.text}>Service d'urgences</Text>
                </TouchableOpacity>
               </View>

               <View style={styles.imageDirection}>
               <TouchableOpacity onPress={() => navigation.navigate('Ambulances')}>
                <Image style={styles.image} source={require('../../images/ambulance.jpg')} /> 
                <Text style={styles.text}>Ambulances</Text>
                </TouchableOpacity> 
               </View>

            {/*
            <View>
            <FlatButton  text="Medecins" onPress={() => navigation.navigate('Medecins')} />
            <FlatButton  text="Pharmacies" onPress={() => navigation.navigate('Pharmacies')} />
            <FlatButton  text="Laboratoires" onPress={() => navigation.navigate('Laboratoires')} />
            <FlatButton  text="Service d'Urgences" onPress={() => navigation.navigate('ServiceUrgences')} />
            <FlatButton  text="Ambulances" onPress={() => navigation.navigate('Ambulances')} />
            </View>
            */}
            

        </View>
    )
}

const styles =StyleSheet.create({
    container:{
      paddingTop:50,
      justifyContent:"space-around",
    },
    image:{
        width:100,
        borderRadius:20,
        height:100,
        width:100,
    }, 
    imageDirection:{
        flexDirection:'row',
        justifyContent:"space-between",
        margin:40,

    }, text:{
        textAlign:'center'
    }
})
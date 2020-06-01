import React from 'react';
import { View,StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

import { globalStyles } from '../../styles/global';
import FlatButton from '../../shared/button';

export default function Profil({ navigation }){
    return (

        <View style={styles.container}>
               <View style={styles.imageDirection}>
                <TouchableOpacity onPress={() => navigation.navigate('AntecedansMedicaux')}>
                <Image style={styles.image} source={require('../../images/image4.jpg')} /> 
                <Text style={styles.text}>Antecedans Medicaux</Text>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => navigation.navigate('AntecedansFamiliaux')}>
                <Image style={styles.image} source={require('../../images/ant.jpeg')} />
                <Text style={styles.text}>Antecedans Familiaux</Text>
                </TouchableOpacity>
               </View>

               <View style={styles.imageDirection}>
                <TouchableOpacity onPress={() => navigation.navigate('HabitudeAlcool')}>
                <Image style={styles.image} source={require('../../images/alco.jpg')} /> 
                <Text style={styles.text}>Habitude Alcool</Text>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => navigation.navigate('Chirurgie')}>
                <Image style={styles.image} source={require('../../images/image5.jpg')} />
                <Text style={styles.text}>Chirurgie</Text>
                </TouchableOpacity>
               </View>


               {/**
            <View>
            <FlatButton  text="Antecedans Medicaux" onPress={() => navigation.navigate('AntecedansMedicaux')} />
            <FlatButton  text="Antecedans Familiaux" onPress={() => navigation.navigate('AntecedansFamiliaux')} />
            <FlatButton  text="Habitude Alcool" onPress={() => navigation.navigate('HabitudeAlcool')} />
            <FlatButton  text="Chirurgie" onPress={() => navigation.navigate('Chirurgie')} />
            </View>
             */}
        </View>
    )
}

const styles =StyleSheet.create({
    container:{
      paddingTop:80,
      justifyContent:"space-around",
    },
    image:{
        width:100,
        borderRadius:30,
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
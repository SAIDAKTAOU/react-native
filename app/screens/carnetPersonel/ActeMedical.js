import React from 'react';
import { View,StyleSheet, Text,TouchableOpacity,Image, Button} from 'react-native';

import FlatButton from '../../shared/button';

export default function ActeMedical({ navigation }){
    return (

        <View style={styles.container}>

<View style={styles.imageDirection}>
                <TouchableOpacity onPress={() => navigation.navigate('Consultation')}>
                <Image style={styles.image} source={require('../../images/consultation.jpg')} /> 
                <Text style={styles.text}>Consultation</Text>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => navigation.navigate('Controle')}>
                <Image style={styles.image} source={require('../../images/controle.png')} />
                <Text style={styles.text}>Controle</Text>
                </TouchableOpacity>
               </View>

               <View style={styles.imageDirection}>
                <TouchableOpacity onPress={() => navigation.navigate('Ordonnance')}>
                <Image style={styles.image} source={require('../../images/ordonnance.png')} /> 
                <Text style={styles.text}>Ordonnance</Text>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => navigation.navigate('Bilan Analyse')}>
                <Image style={styles.image} source={require('../../images/bilan.jpeg')} />
                <Text style={styles.text}>Bilan d'analyse</Text>
                </TouchableOpacity>
               </View>

            {/**
            <View>
            <FlatButton  text="Consultation" onPress={() => navigation.navigate('Consultation')} />
            <FlatButton  text="Controle" onPress={() => navigation.navigate('Controle')} />
            <FlatButton  text="Ordonnance" onPress={() => navigation.navigate('Ordonnance')} />
            <FlatButton  text="Bilan Analyse" onPress={() => navigation.navigate('Bilan Analyse')} />
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
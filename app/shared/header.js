import React from 'react';
import { StyleSheet, Text, View, Image}  from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function Header ({ navigation, title }){
    const openMenu= () =>{
      navigation.openDrawer()
    }

    return (
        <View style={styles.header}>
            {/**icon for the menu */}
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
            <View style={styles.headerTitle}>
             <Text style={styles.headerText}>{ title} </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
     width:'100%',
     height:'100%',
     flexDirection:'row',
     flex:1,
     alignItems:'center',
     justifyContent:'center',
   //backgroundColor:'pink'
    },
    headerText:{
     fontWeight:'bold',
     fontSize:20,
     color:'#333',
     letterSpacing:1,
    },
    icon:{
        position:'absolute',
        left:10,
    },
    headerTitle:{
     flexDirection:'row'
    },
})
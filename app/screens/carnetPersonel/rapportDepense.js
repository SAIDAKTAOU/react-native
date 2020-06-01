import React, {useState} from 'react';
import { View, Text, Button} from 'react-native';

import { globalStyles } from '../../styles/global';

export default function RapportDepense({ navigation }){

    return (
        <View style={globalStyles.container}>
            <Text>Rapport Depense Screen</Text>
            <Button title="go back" onPress={() => navigation.goBack()} />
        </View>
    )
}
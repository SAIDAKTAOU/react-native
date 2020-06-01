import React, {useState} from 'react';
import { View, Text, Button} from 'react-native';

import { globalStyles } from '../../styles/global';

export default function DeclarationMutuelle({ navigation }){

    return (
        <View style={globalStyles.container}>
            <Text>Declaration Mutuelle Screen</Text>
            <Button title="go back" onPress={() => navigation.goBack()} />
        </View>
    )
}
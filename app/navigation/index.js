import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import ProfilDrawer from './profilDrawer';

export default function Index() {
  return (
    <NavigationContainer>
         <ProfilDrawer />
    </NavigationContainer>
  );
}
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ProfilStack from './profilStack';
import FavorisStack from './favorisStack';
import CarnetPersonelStack from './carnetPersonelStack';
import ServicesUrgenceProcheStack from './ServicesUrgenceProcheStack';
import HaupitauxCliniquesProcheStack from './HaupitauxCliniquesProcheStack';
import LaboAnalyseProcheStack from './LaboAnalyseProcheStack';
import Deconnexion from '../screens/Deconnexion';


const Drawer = createDrawerNavigator();

export default function ProfilDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profil Etendu" component={ProfilStack} />
      <Drawer.Screen name="Favoris" component={FavorisStack} />
      <Drawer.Screen name="CarnetPersonel" component={CarnetPersonelStack} />
      <Drawer.Screen name="Services d'urgences les plus Proche" component={ServicesUrgenceProcheStack} />
      <Drawer.Screen name="Haupitaux et Cliniques les plus Proche" component={HaupitauxCliniquesProcheStack} />
      <Drawer.Screen name="Laboratoires d'analyse les plus proche" component={LaboAnalyseProcheStack} />
      <Drawer.Screen name="Deconnexion" component={Deconnexion}  />
    </Drawer.Navigator>
  );
}

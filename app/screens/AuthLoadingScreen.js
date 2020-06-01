import React, { memo } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import firebase from "firebase/app";
import "firebase/auth";
import { theme } from "../core/theme";
import { FIREBASE_CONFIG } from "../core/config";

// Initialize Firebase
firebase.initializeApp(FIREBASE_CONFIG);

export default function AuthLoadingScreen  ({ navigation })  {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // User is logged in
      navigation.navigate("Dashboard");
    } else {
      // User is not logged in
      navigation.navigate("HomeScreen");
    }
  });

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  );
};
const styles = StyleSheet.create({
   
  container:{
    flex: 1,
    padding: 20,
    width: "100%",
    maxWidth: 340,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
   }, 
  })

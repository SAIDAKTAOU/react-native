import 'react-native-gesture-handler';
import React, {useState } from 'react';
import { TouchableOpacity,Text,StyleSheet, View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useKeepAwake } from 'expo-keep-awake';

import Button from './app/shared/Button2';
import TextInput from './app/shared/TextInput';
import {theme} from './app/core/theme';
import {
  emailValidator,
  passwordValidator,
  nameValidator
} from "./app/core/utils";
import { loginUser } from './app/api/auth-app';
import { signInUser } from "./app/api/auth-app";
import Toast from './app/shared/Toast';

import ProfilDrawer from './app/navigation/profilDrawer';
import ForgotPasswordScreen from './app/screens/ForgotPasswordScreen';
import AuthLoadingScreen from './app/screens/AuthLoadingScreen';


function SignInScreen({navigation}) {

  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const _onLoginPressed = async () => {
    if (loading) return;

    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    setLoading(true);

    const response = await loginUser({
      email: email.value,
      password: password.value
    });

    if (response.error) {
      setError(response.error);
    }else{
      
      navigation.navigate('profil');
    }

    setLoading(false);
  };
  return (
    
    <View style={styles.container}>
   
   <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
        autoCapitalize="none"
      />

<View style={styles.forgotPassword}>
        <TouchableOpacity
        >
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <Button loading={loading} mode="contained" onPress={_onLoginPressed}>
        Login
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("signUp")}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>


      <Toast message={error} onDismiss={() => setError("")} />
      
      </View>
  );
}

function SignUpScreen({navigation}) {

  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const _onSignUpPressed = async () => {
    if (loading) return;

    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    setLoading(true);

    const response = await signInUser({
      name: name.value,
      email: email.value,
      password: password.value
    });

    if (response.error) {
      setError(response.error);
    }else{
      navigation.navigate('profil')
    }

    setLoading(false);
  };
  return(
    <View style={styles.container}>

    <TextInput
      label="Name"
      returnKeyType="next"
      value={name.value}
      onChangeText={text => setName({ value: text, error: "" })}
      error={!!name.error}
      errorText={name.error}
    />

    <TextInput
      label="Email"
      returnKeyType="next"
      value={email.value}
      onChangeText={text => setEmail({ value: text, error: "" })}
      error={!!email.error}
      errorText={email.error}
      autoCapitalize="none"
      autoCompleteType="email"
      textContentType="emailAddress"
      keyboardType="email-address"
    />

    <TextInput
      label="Password"
      returnKeyType="done"
      value={password.value}
      onChangeText={text => setPassword({ value: text, error: "" })}
      error={!!password.error}
      errorText={password.error}
      secureTextEntry
      autoCapitalize="none"
    />

    <Button
      loading={loading}
      mode="contained"
      onPress={_onSignUpPressed}
      style={styles.button}
    >
      Sign Up
    </Button>

    <View style={styles.row}>
      <Text style={styles.label}>Already have an account? </Text>
      <TouchableOpacity onPress={() => navigation.navigate("login")}>
        <Text style={styles.link}>Login</Text>
      </TouchableOpacity>
    </View>

    <Toast message={error} onDismiss={() => setError("")} />
  </View>
  )

}

const Stack = createStackNavigator();

export default function App({ navigation }) {

   useKeepAwake();

  return (
      <NavigationContainer>
        <Stack.Navigator   screenOptions={{
             headerShown: false
      }}>
      <Stack.Screen name="signUp"  component={SignUpScreen}  />       
      <Stack.Screen name="login"  component={SignInScreen} options={
          {title: 'Login'},
          {headerLeft: null} }/>
      <Stack.Screen  name="profil" component={ProfilDrawer} />
      <Stack.Screen name="authLoadingScreen" component ={AuthLoadingScreen} />
      </Stack.Navigator>
     </NavigationContainer>
     
  );
}

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
   forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24
  },
  row: {
    flexDirection: "row",
    marginTop: 4
  },
  label: {
    color: theme.colors.secondary
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary
  }
});
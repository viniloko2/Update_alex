import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import Botton from '../components/botton';

import { Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, Linking, } from 'react-native';

//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createStackNavigator } from '@react-navigation/stack';

//const tab = createBottomTabNavigator();
//const stack = createStackNavigator();


/*function dados(loginProps){
  const email = useState()
  const senha = useState()

  console.warn(senha, email)

  return

}*/

export default function RegisterPage() {


  return (

    <View style={styles.container}>
        <TextInput
      placeholder='nome'
      style = {styles.inputLogin}
      keyboardType='name-phone-pad'/>
      <TextInput
      placeholder='telefone'
      style = {styles.inputLogin}
      keyboardType='numeric'/>
      
      <TextInput 
        placeholder='E-mail'
        style={styles.inputLogin}
        keyboardType={'email-address'}
      />

      <TextInput 
        placeholder='senha'
        style={styles.inputLogin}
        keyboardType={'numeric'}
        secureTextEntry={true}
      />
      <Botton textoBotao={"Login"}  />

      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  secundario:{
    color: 'green',
    fontSize: 21,
  },
  botaoPrincipal:{
    backgroundColor: 'blue',
    height: 40,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotao:{
    color: 'white',
    fontWeight: 'bold',
  },
  logo:{
    width: 200,
    height: 200,
    borderRadius: 50,
    margin: 20
  },
  inputLogin:{
    height: 60,
    width: 250,
    fontSize: 20,
    margin: 20,
    textAlign: 'center',
    borderWidth: 0.5,
    borderRadius: 20
  }
});

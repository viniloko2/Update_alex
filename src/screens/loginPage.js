import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import Botton from '../components/botton';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native';
import UserContext from '../context/userContext';
import users from '../data/users';

export default props => {

  [valorEmail, setValorEmail] = useState("");
  [valorSenha, setValorSenha] = useState("");
  const { state } = useContext(UserContext)


  return (


    <View style={styles.container}>



      <Image style={styles.logo} source={require('../assets/Embrapa.png')} />

      <TextInput
        placeholder='email'
        style={styles.inputLogin}
        keyboardType={'email-address'}
        value={valorEmail}
        onChangeText={(valorEmail) => setValorEmail(valorEmail)} />

      <TextInput
        placeholder='Insira uma senha'
        style={styles.inputLogin}
        value={valorSenha}
        onChangeText={(valorSenha) => setValorSenha(valorSenha)}
        secureTextEntry={true}

      />
      <TouchableOpacity onPress={
        () => props.navigation.navigate("addRoom")
      }>
        <Text style={{ color: 'black' }}>
          Não possui um cadastro? Cadastre-se
        </Text>
      </TouchableOpacity>


      <Botton textoBotao={"Login"} funcao={

        () => {
          const userLogado = users.filter(u => u.email === valorEmail)[0]
          if (userLogado) {
            userLogado.senha == valorSenha ? props.navigation.navigate("Home") : console.warn("Usuário e/ou Senha incorreta!")
          } else {
            console.warn("Usuário e/ou Senha incorreta!")
          }
        }


      } />

      <StatusBar style='auto' />
    </View>

  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  botaoPrincipal: {
    backgroundColor: 'blue',
    height: 40,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
  logo: {
    width: 255,
    height: 200,
    borderRadius: 50,
    margin: 20
  },
  inputLogin: {
    height: 60,
    width: 250,
    borderWidth: 0.5,
    fontSize: 20,
    margin: 20,
    textAlign: 'center',
    borderRadius: 20
  }
});

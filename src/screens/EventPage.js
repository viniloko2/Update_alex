import { View,  StyleSheet, TextInput } from "react-native"
import NavBar from "../components/navBar"
import Botton from "../components/botton"




export default props =>(
   
    <View style={{justifyContent: "space-around"}}>
        <View > 
            <NavBar funcao={
                ()=>props.navigation.openDrawer() 
            }/>
        </View>
        <View style={style.container} >
            <TextInput
            placeholder='nome'
            style = {style.inputLogin}
            keyboardType='name-phone-pad'/>
            <TextInput
            placeholder='telefone'
            style = {style.inputLogin}
            keyboardType='numeric'/>
            
            <TextInput 
                placeholder='E-mail'
                style={style.inputLogin}
                keyboardType={'email-address'}
            />

            <TextInput 
                placeholder='senha'
                style={style.inputLogin}
                keyboardType={'numeric'}
                secureTextEntry={true}
            />

            <Botton textoBotao={"cadastrar"} />
        </View>
     </View>  
    
)

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 140

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
    



})
    

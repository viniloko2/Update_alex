import { View,  StyleSheet, TextInput } from "react-native"
import NavBar from "../components/navBar"
import Botton from "../components/botton"




export default props =>(
   
    <View>
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

            <View style={{flexDirection: "row", justifyContent: "space-around" }}>
                <TextInput
                placeholder='capacidade'
                style = {style.inputs}
                keyboardType='numeric'/>
                
                <TextInput 
                    placeholder='bloco'
                    style={style.inputs}
                    keyboardType={'email-address'}
                />
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-around"}}>
                <TextInput 
                    placeholder='andar'
                    style={style.inputs}
                    keyboardType={'numeric'}
                /> 
                <TextInput 
                    placeholder='N°'
                    style={style.inputs}
                    keyboardType={'numeric'}
                /> 
            </View>
                
           
            <View>
                <TextInput
                placeholder='Equipamentos'
                style = {style.inputLogin}
                keyboardType='name-phone-pad'/>
            </View>
            

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
      },
      inputs:{
        height: 60,
        width: 105,
        fontSize: 20,
        margin: 20,
        textAlign: 'center',
        borderWidth: 0.5,
        borderRadius: 20
      }
    



})
    

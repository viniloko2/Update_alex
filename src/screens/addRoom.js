import { View,  StyleSheet, TextInput } from "react-native"
import NavBar from "../components/navBar"
import Botton from "../components/botton"
import { useContext } from "react"
import UserContext from "../context/userContext"
import { useState } from "react"

export default ({route, navigation}) => {
    const {dispatch} = useContext(UserContext)
    const [userParam, setUserParam] = useState( {})

    const doPost = () => {
        //validações 

        URL = 'https://localhost:7198/api/sala'
        const dadosParaEnviar = {
            idSala: userParam.id,
            nome: userParam.nome,
            capacidade: userParam.capacidade,
            descricao: userParam.descricao,
            bloco: userParam.bloco,
            andar: userParam.andar,
            numero: userParam.numero,
        }

        const options = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosParaEnviar)
        };

        fetch(URL, options)
        .then(
            (response)=>{
                if(!response.ok){
                    throw new Error('A solicitação via POST falhou!')
                }
                return response.json();
            }
        ).then(
            (dadosRecebidos) => {
                console.log('Resposta do servidor: ', dadosRecebidos)
                
            }
        ).catch(
            (error) => {
                console.error(error)
            }
        )}

        return(
<View>
        <View > 
            <NavBar/>
        </View>
        <View style={style.container} >
            <TextInput
            placeholder='nome'
            style = {style.inputLogin}
            keyboardType='name-phone-pad'
            value={userParam.nome}
            onChangeText={ nome => setUserParam({...userParam, nome}) }/>

            <View style={{flexDirection: "row", justifyContent: "space-around" }}>
                <TextInput
                placeholder='capacidade'
                style = {style.inputs}
                keyboardType='numeric'
                value={userParam.capacidade}
                onChangeText={ capacidade => setUserParam({...userParam, capacidade}) }/>
                
                <TextInput 
                    placeholder='bloco'
                    style={style.inputs}
                    keyboardType={'email-address'}
                    value={userParam.bloco}
                    onChangeText={ bloco => setUserParam({...userParam, bloco}) }
                />
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-around"}}>
                <TextInput 
                    placeholder='andar'
                    style={style.inputs}
                    keyboardType={'numeric'}
                    value={userParam.andar}
            onChangeText={ andar => setUserParam({...userParam, andar}) }
                /> 
                <TextInput 
                    placeholder='N°'
                    style={style.inputs}
                    keyboardType={'numeric'}
                    value={userParam.numero}
            onChangeText={ numero => setUserParam({...userParam, numero}) }
                /> 
            </View>
                
           
            <View>
                <TextInput
                placeholder='Descrição'
                style = {style.inputLogin}
                keyboardType='name-phone-pad'
                value={userParam.descricao}
                onChangeText={ descricao => setUserParam({...userParam, descricao}) }/>
            </View>
            
            
            <Botton textoBotao={"Cadastrar"} funcao={
                ()=>{ doPost(), props.navigation.navigate("RoomList")

                }

            }>

            </Botton>
        </View>
     </View>  
        )
    

}


   
    
    


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
    

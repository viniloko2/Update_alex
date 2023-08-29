import { View, StyleSheet, Text, TouchableOpacity, Button } from 'react-native';


export default function BottonHome({textoBotao}){
    return(
        <View>
            <TouchableOpacity style={formatacao.botaoSecundario}>
                <View>
                <Text style={formatacao.textoBotaoSecundario}>
                    {textoBotao}

                </Text>
                </View>
            </TouchableOpacity> 
      
        </View>
    )
}

const formatacao = StyleSheet.create({
    botaoSecundario:{
        margin: 30,
        backgroundColor: '#13549b',
        height: 60,
        width: 150,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoBotaoSecundario:{
        color: 'white',
        fontSize: 20,
    }
})
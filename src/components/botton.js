import { View, StyleSheet, Text, Touchable, TouchableOpacity, Button } from 'react-native';

export default function Botton({textoBotao}){
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
        margin: 20,
        backgroundColor: 'white',
        height: 60,
        width: 240,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoBotaoSecundario:{
        color: 'black',
        fontSize: 20,
    }
})
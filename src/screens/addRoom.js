import { View,Text} from "react-native-web"
import { StyleSheet } from "react-native"

export default props => (

    <View style={style.container}>
        <Text>
            Bem vindo a pagina de cadastro de sala
        </Text>
    </View>
)

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center"
    }
})


    

import { View, StatusBar, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import NavBar from "../components/navBar"



export default props =>(
   
    <View>
        <View>
            <NavBar funcao={
                ()=>props.navigation.openDrawer() 
            }/>
        </View>
        <View style={{justifyContent: "center", flex: 1}}>
            <Text>
                Pagina de cadastro de salas
            </Text>
        </View>
     </View>  
    
)

const style = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems:"center",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: 'white',
        marginTop: 30

    },
    



})
    

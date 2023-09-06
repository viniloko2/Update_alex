import { View, StatusBar, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BottonHome from "../components/bottonHome"
import BottonRoom from "../components/bottonRoom"
import NavBar from "../components/navBar"


export default props =>(
   
    <View>
        <View>
            <NavBar funcao={
                ()=>props.navigation.openDrawer()
            }/>
        </View>
        <View style = {style.container} >
            <BottonHome textoBotao={'reservado'}/>
            <BottonHome textoBotao={'disponivel'}/>
        </View>
        <View style={style.grid}> 
            <BottonRoom textoBotao={'sala01'}/>
            <BottonRoom textoBotao={'sala02'}/>
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
        marginTop: 30

    },
    grid:{
        justifyContent: 'center',
        flexDirection: 'row'
    },
    



})
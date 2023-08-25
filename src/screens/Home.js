import { View, StatusBar, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BottonHome from "../components/bottonHome"
import BottonRoom from "../components/bottonRoom"
import navBar from "../components/navBar"
import NavBar from "../components/navBar"


export default function home(){
    return(
    <View>
        <View style={style.navBar}>
            <NavBar/>
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
}

const style = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems:"center",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: 'white',
        marginTop: 30

    },
    grid:{
        justifyContent: 'center',
        flexDirection: 'row'
    },
    navBar:{
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginTop: 50,
        marginLeft: 20,
    }



})
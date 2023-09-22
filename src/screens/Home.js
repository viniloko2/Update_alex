import { View, StatusBar, Text, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native"
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BottonHome from "../components/bottonHome"
import BottonRoom from "../components/bottonRoom"
import NavBar from "../components/navBar"
import api from "../Services/api"
import { useEffect, useState, useContext } from "react"
import UserContext from "../context/userContext"
import users from "../data/users"

export default props => {

    function getUserItem({ item: user }) {
        return (
            <View>
                <NavBar funcao={
                () => props.navigation.openDrawer()
            } />
                <Text>
                    {user.login}
                </Text>


            </View>
        )
    }
    return (
        <View>
            <FlatList
                data={users}
                keyExtractor={user => user.id}
                renderItem={getUserItem}
            />
        </View>
    )


}

/*<View>
        <View>
            <NavBar funcao={
                () => props.navigation.openDrawer()
            } />
        </View>
        <View style={style.container} >
            <BottonHome textoBotao={'reservado'} />
            <BottonHome textoBotao={'disponivel'} />
        </View>
        <View style={style.grid}>
            <BottonRoom textoBotao={'sala01'} />
            <BottonRoom textoBotao={'sala02'} />
        </View>
    </View>*/
const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 30

    },
    grid: {
        justifyContent: 'center',
        flexDirection: 'row'
    },




})
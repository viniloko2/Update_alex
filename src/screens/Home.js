import { View, StatusBar, Text, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native"
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BottonHome from "../components/bottonHome"
import BottonRoom from "../components/bottonRoom"
import NavBar from "../components/navBar"
import { ListItem } from "@rneui/base"
import api from "../Services/api"
import { useEffect, useState, useContext } from "react"
import UserContext from "../context/userContext"
import rooms from "../data/rooms"

export default props => {

    const { state, dispatch } = useContext(UserContext)

    

    function getUserItem({ item: rooms }) {
        return (

            <ListItem>

                <ListItem.Content>
                    <ListItem.Title><Text>Sala: </Text>{rooms.nome}</ListItem.Title>
                    <ListItem.Title><Text>capacidade: </Text>{rooms.capacidade}</ListItem.Title>
                    <ListItem.Title><Text>Bloco: </Text>{rooms.bloco}</ListItem.Title>
                    <ListItem.Title><Text>andar: </Text>{rooms.andar}</ListItem.Title>
                    <ListItem.Title><Text>numero: </Text>{rooms.numero}</ListItem.Title>
                    <ListItem.Chevron>

                    </ListItem.Chevron>
                </ListItem.Content>
            </ListItem>

        )
    }
    return (
        <View>

            <NavBar funcao={
                () => props.navigation.openDrawer()
            } />
            <FlatList
                data={rooms}
                keyExtractor={rooms => rooms.id}
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
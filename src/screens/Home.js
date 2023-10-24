import { View, StatusBar, Text, StyleSheet, Image, TouchableOpacity, FlatList, ActivityIndicator, Button  } from "react-native"
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
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    const URL = "https://localhost:7198/api/sala";


    const getMovies = async () => {
        try{
            const response = await fetch(URL);
            const json = await response.json();
            console.log(json);
            setData(json);
        } catch(error) {
            console.error(error);
        }finally{
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        getMovies();
    }, [])

    return(
        <>
            <View>
                <NavBar></NavBar>

                {isLoading ? (
                    <ActivityIndicator size={80}></ActivityIndicator>
                ) : (
                    <FlatList 
                        data={data}
                        keyExtractor={({id})=>id}
                        renderItem={ ({item})=>(
                            <Text>
                                - nome: {item.nome} - capacidade: {item.capacidade} - descricao: {item.descricao} 
                            </Text>
                        )
                        }
                    />
                )
                }
                <Button title="Atualizar" onPress={ () => getMovies()} />
            </View>
        </>
    )
}
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
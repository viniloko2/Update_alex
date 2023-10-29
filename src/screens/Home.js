import { View, StatusBar, Text, StyleSheet, Image, TouchableOpacity, FlatList, ActivityIndicator, Button  } from "react-native"
import NavBar from "../components/navBar"
import { ListItem } from "@rneui/base"
import { useEffect, useState, useContext } from "react"
import UserContext from "../context/userContext"

export default props => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    const URL = "https://localhost:7198/api/reserva";


    const getMovies = async () => {
        setIsLoading(true);
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
        <View style={style.cont}>
            <View>
                
                <NavBar></NavBar>
                <Text style={style.texto}>Inicio</Text>
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
                </View>
                </View>
                <View style={style.buttonCent}>
                <TouchableOpacity onPress={() => getMovies()} style={style.button}>
                    <Text style={style.buttonText}>Atualizar</Text>
                </TouchableOpacity>
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
    buttonCent: {
        marginTop: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        width: 150,
        height: 50,
        borderRadius: 25, // Um valor alto para tornar o botão mais redondo
        backgroundColor: "#28364D", // Cor de fundo do botão
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "#FAFAFA", // Cor do texto do botão
        fontSize: 18,
    },
    cont: {
        width: 395,
        height: 143,
        backgroundColor: "#28364D",
        borderRadius: 30,
    },
    texto: {
    width: 266,
    height: 39,
    color: '#FAFAFA',
    fontStyle: 'normal',
    fontSize: 30,
    marginLeft: 157,
    fontWeight: '700',
    marginTop: 5,
      },
      scrollView: {
        flex: 1,
        width: "100%",
    },
})
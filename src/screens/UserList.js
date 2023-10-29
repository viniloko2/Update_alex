import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Button, ScrollView, RefreshControl } from "react-native";
import Botton from "../components/botton";

const YourComponent = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const URL = "https://localhost:7198/api/usuario";

    const getMovies = async () => {
        try {
            const response = await fetch(URL);
            const json = await response.json();
            console.log(json);
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
            setIsRefreshing(false);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);

    const onRefresh = async () => {
        setIsRefreshing(true);
        await getMovies();
    };

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            refreshControl={
                <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
            }
        >
            <View>
                {isLoading ? (
                    <ActivityIndicator size={80} />
                ) : (
                    <FlatList
                        data={data}
                        keyExtractor={({ id }) => id.toString()}
                        renderItem={({ item }) => (
                            <Text>
                                - nome: {item.nome} - email: {item.email} - Telefone: {item.telefone}
                            </Text>
                        )}
                    />
                )}
                
                <Botton
                    textoBotao={"Cadastrar"}
                    funcao={() => {
                        props.navigation.navigate("RegisterPage");
                    }}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    contentContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
});

export default YourComponent;

import React from "react";
import { TextInput, StyleSheet } from "react-native";


export default function Input (){
    return(
        <>
            <TextInput />  
        </>
    )
}

const style = StyleSheet.create({
    input:{
        height: 60,
        width: 250,
        fontSize: 20,
        margin: 20,
        textAlign: 'center',
        backgroundColor: "white",
        borderRadius: 20
    }
})
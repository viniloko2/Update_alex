import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

export default NavBar =>{
    return(
        <View>
            <TouchableOpacity>
                <Image style={style.barsSolid} source={require('../assets/bars-solid.png')}></Image>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    barsSolid:{
        width: 25,
        height: 25
    }
})
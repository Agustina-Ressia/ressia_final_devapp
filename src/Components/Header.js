import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {colors} from '../Global/colors'

const Header = ({title = "Header"}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.paynegray,
        width:"100%",
        height:70,
        justifyContent:'flex-end',
        paddingBottom: 12,
        alignItems:"center"
    },
    text:{
        fontSize:20,
        /*fontFamily:"Arial"*/
        color:"white"
    }
})
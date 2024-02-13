import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Users from '../Screens/Users'
import Header from '../Components/Header'

const Stack = createNativeStackNavigator()

const UsersStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Users'
            screenOptions={
                ({route})=>{
                    return{
                        header : () => <Header title="Usuarios"/>
                    }
                }
            }
        >
            <Stack.Screen name="Users" component={Users} />
        </Stack.Navigator>
    )
}

export default UsersStack
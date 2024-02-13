import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import PlacesStack from './PlacesStack'
import UsersStack from './UsersStack'
import CategoriesStack from './CategoriesStack'
import {colors} from '../Global/colors'
import TabIcon from '../Components/TabIcon'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (

            <Tab.Navigator
                screenOptions={{
                    headerShown:false,
                    tabBarShowLabel:false,
                    tabBarStyle: styles.tabBar
                }}            
            >
                <Tab.Screen name='Lugares' component={PlacesStack} 
                    options={{
                        tabBarIcon:({focused}) => <TabIcon icon="map" label="Lugares" focused={focused}/>
                    }}                
                />
                <Tab.Screen name='Usuarios' component={UsersStack}
                    options={{
                        tabBarIcon:({focused}) => <TabIcon icon="users" label="Usuarios" focused={focused}/>
                    }}                  
                />
                <Tab.Screen name='Categorias' component={CategoriesStack}
                    options={{
                        tabBarIcon:({focused}) => <TabIcon icon="bookmarks" label="Categorias" focused={focused}/>
                    }}                  
                />
            </Tab.Navigator>

    )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor:colors.paynegray,
        elevation:4,
        position:"absolute",
        bottom:5,
        left:5,
        right:5,
        borderRadius:5,
        height:65,
    }
})
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../Components/Header'
import Places from '../Screens/Places'

const Stack = createNativeStackNavigator();

const PlacesStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Places'
            screenOptions={
                ({route})=>{
                    return {
                        header : () => <Header title="Lugares"/>
                    }
                }
            }
        >
            <Stack.Screen name="Places" component={Places} />
        </Stack.Navigator>
    )
}

export default PlacesStack

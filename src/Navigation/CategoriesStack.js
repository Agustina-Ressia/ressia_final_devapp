import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../Components/Header'
import Categories from '../Screens/Categories'

const Stack = createNativeStackNavigator();

const CategoriesStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Categorias'
            screenOptions={
                ({route})=>{
                    return {
                        header : () => <Header title="Categorias"/>
                    }
                }
            }
        >
            <Stack.Screen name="Categories" component={Categories} />
        </Stack.Navigator>
    )
}

export default CategoriesStack

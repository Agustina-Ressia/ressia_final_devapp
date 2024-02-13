import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/colors'
import { useDispatch } from 'react-redux'

export const CategoryItem = ({category,navigation,route }) => {

    const dispatch = useDispatch()

    return (
    <Pressable onPress={()=>{ 
        //dispatch(setProductsFilteredByCategory(category))
        //navigation.navigate("Category",{category})
        console.log("Categorias Click", `${category.name}`)
    }}>
        <View style={styles.container}>
            <Text style={styles.text}>{category.name}</Text>
        </View>
    </Pressable>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    container:{
        width:"90%",
        borderRadius:5,
        marginHorizontal:"5%",
        backgroundColor:colors.frenchgray,
        margin:10,
        padding:10,
        justifyContent:"center",
        alignItems:"center"
    }
})
import { StyleSheet, FlatList, View, Text } from 'react-native'
import React from 'react'
import {useGetCategoriesQuery} from '../App/Services/rpService'
import {CategoryItem} from '../Components/CategoryItem'
import { useEffect, useState } from 'react'

const Categories = ({navigation, route}) => {
  //Obtengo las categorias de firebase
  const {data, isLoading, error} = useGetCategoriesQuery()
  const [categorias,setCategorias] = useState()
  useEffect(()=>{
    if(!isLoading) {
      const dataArray = Object.values(data)
      setCategorias(dataArray)
      //const productsFiltered = dataArray.filter(product => product.title.includes(keyword))
    }
  },[data])

  return (
    <View>
      <FlatList
        style={styles.container}
        data={categorias}
        keyExtractor={item => item.id_category}
        renderItem={({item})=> <CategoryItem category={item} navigation={navigation} route={route} />}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container:{
    width:"100%",
  }
})
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font"
import { colors } from './src/Global/colors'
import { fonts } from './src/Global/fonts'
import {store} from './src/App/store'
import {Provider} from 'react-redux'
import {init} from './src/Database'
import MainNavigator from './src/Navigation/MainNavigator';
import {Home} from './src/Screens/Home'
import ImageSelector from './src/Screens/ImageSelector';

//Inicializo la BD local
init()
  .then(()=> console.log("DB Inicializada"))
  .catch(err => console.log(err))

const App = () => {
  
  //Cargo las fonts de la App
  const [fontLoaded] = useFonts(fonts)
  if(!fontLoaded) return null

  return (
    <>
      
      <StatusBar
        backgroundColor={colors.paynegray}
      />
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
    </>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.charcoal,
    alignItems: 'center',
    justifyContent: 'start',
  },
})

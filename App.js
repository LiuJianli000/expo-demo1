import React from 'react'
import {
  StatusBar,
} from 'react-native'
import Navigation from './src/navigation'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
      <StatusBar />
    </NavigationContainer>
  )
}
 
export default App
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screen/LoginScreen/Login'
import TabNav from '../screen/TabNav/index'

const Stack = createStackNavigator()

export default function app() {
  return (
    <Stack.Navigator initialRouteName="LoginPage">
      <Stack.Screen
        name="LoginScreen"
        component={ LoginScreen }
        options={{
          title: '登录',
          headerShown: false
        }}
      />
      <Stack.Screen
        name="TabNav"
        component={ TabNav }
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}


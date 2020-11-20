import * as React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import AntDesign from 'react-native-vector-icons/AntDesign'

import LoginScreen from './screen/LoginScreen/Login'
import HomeScreen from './screen/HomeScreen'
import OrderScreen from './screen/OrderScreen'
import ProductScreen from './screen/ProductScreen'
import StoreScreen from './screen/StoreScreen'

const NavTab = createBottomTabNavigator();
const AppStack = createStackNavigator();
const TabStack = createStackNavigator();


function OrderNavigator() {
  return (
    <TabStack.Navigator>
      <TabStack.Screen
        name="order"
        component={OrderScreen}
        options={{
          headerTitle: '订单',
          headerLeft: null,
          headerTitleAlign: 'center',
        }}
      />
    </TabStack.Navigator>
  );
}
 
function ProductNavigator() {
  return (
    <TabStack.Navigator>
      <TabStack.Screen
        name="product"
        component={ ProductScreen }
        options={{
          headerTitle: '产品',
          headerLeft: null,
          headerTitleAlign: 'center',
        }}
      />
    </TabStack.Navigator>
  );
}
 
function StoreScreenNavigator() {
  return (
    <TabStack.Navigator>
      <TabStack.Screen
        name="store"
        component={ StoreScreen }
        options={{
          headerTitle: '商店',
          headerLeft: null,
          headerTitleAlign: 'center',
        }}
      />
    </TabStack.Navigator>
  );
}

function TabBarNavigator() {
  return (
    <NavTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case 'index':
              return <AntDesign name="home" size={size} color={color} />
            case 'order':
              return <AntDesign name="paperclip" size={size} color={color} />
            case 'product':
              return <AntDesign name="tago" size={size} color={color} />
            case 'store':
              return <AntDesign name="isv" size={size} color={color} />
          }
        }
      })}>
      <NavTab.Screen
        name="index"
        component={ HomeScreen }
        options={{ title: '主页' }}
      />
      <NavTab.Screen
        name="order"
        component={ OrderNavigator }
        options={{ title: '订单' }}
      />
      <NavTab.Screen
        name="product"
        component={ ProductNavigator }
        options={{ title: '产品' }}
      />
      <NavTab.Screen
        name="store"
        component={ StoreScreenNavigator }
        options={{ title: '商店' }}
      />
    </NavTab.Navigator>
  );
}



function AppNavigator() {
  return (
    <AppStack.Navigator initialRouteName="LoginPage">
      <AppStack.Screen
        name="Login"
        component={ LoginScreen }
        options={{
          title: '登录',
          headerShown: false
        }}
      />
      <AppStack.Screen
        name="Home"
        component={ TabBarNavigator }
        options={{
          headerShown: false
        }}
      />
    </AppStack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
      <StatusBar />
    </NavigationContainer>
  )
}
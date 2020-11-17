import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import AntDesign from 'react-native-vector-icons/AntDesign'

import HomeScreen from '../HomeScreen'
import OrderScreen from '../OrderScreen'
import ProductScreen from '../ProductScreen'
import StoreScreen from '../StoreScreen'

const Tab = createBottomTabNavigator();
const TabStack = createStackNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
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
      <Tab.Screen
        name="index"
        component={ HomeScreen }
        options={{ title: '主页' }}
      />
      <Tab.Screen
        name="order"
        component={ OrderNavigator }
        options={{ title: '订单' }}
      />
      <Tab.Screen
        name="product"
        component={ ProductNavigator }
        options={{ title: '产品' }}
      />
      <Tab.Screen
        name="store"
        component={ StoreScreenNavigator }
        options={{ title: '商店' }}
      />
    </Tab.Navigator>
  );
}

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
        name="School"
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
        name="School"
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
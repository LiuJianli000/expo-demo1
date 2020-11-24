import React, { Component } from 'react'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { View, Text } from 'react-native'
import appModel from './models/app'
import homeModel from './models/home'
import loginModel from './models/login'
import { Provider  } from 'react-redux'
import App from './router'

import { create } from 'dva-core'

const allModels = [
  appModel,
  homeModel,
  loginModel
]

const app = create()
 
allModels.forEach((itemModel) => {
  app.model(itemModel)
})

app.start()

const store = app._store

export default class Container extends Component {
  state = {
    isReady: false,
  }

  async componentDidMount() {
    await Font.loadAsync(
      'antoutline',
      require('@ant-design/icons-react-native/fonts/antoutline.ttf')
    );

    await Font.loadAsync(
      'antfill',
      require('@ant-design/icons-react-native/fonts/antfill.ttf')
    );

    this.setState({ isReady: true });
  }
  
  render() {
    const { isReady } = this.state

    if (!isReady) {
      return <AppLoading />
    }
    
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    )
  }
}
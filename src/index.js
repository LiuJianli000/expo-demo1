import React, { Component } from 'react'
import appModel from './models/app'
import homeModel from './models/home'
import { Provider  } from 'react-redux'
import App from './router'

import { create } from 'dva-core'

const allModels = [
  appModel,
  homeModel
]

const app = create()
 
allModels.forEach((itemModel) => {
  app.model(itemModel)
})

app.start()

const store = app._store

export default class Container extends Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    )
  }
}
import { Button } from '@ant-design/react-native';
import React, { Component } from 'react';
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
 
class HomeScreen extends Component {
  state = {
    sex: ''
  }
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>主页</Text>
        <Text>{this.props.name}</Text>
        <Button
          onPress={() => this.props.dispatch({
            type: 'home/changeName',
            payload: {
              name: 'aaa'
            }
          })}
        >
          change name
        </Button>
        <Button
          onPress={() => this.props.dispatch({
            type: 'home/asyncOp',
            payload: {
              name: 'async name'
            }
          })}
        >
          async change
        </Button>
        <Button
          onPress={() => {
            AsyncStorage.setItem('sex', 'man')
          }}
        >
          set storage
        </Button>
        <Button
          onPress={async () => {
            const sex = await AsyncStorage.getItem('sex')
            this.setState({
              sex
            })
          }}
        >
          get storage
        </Button>
        <Button
          onPress={async () => {
            const sex = await AsyncStorage.removeItem('sex')
          }}
        >
          remove storage
        </Button>
        <Text>{this.state.sex}</Text>
      </View>
    )
  }
}
 
export default connect(state => ({
  name: state.home.name
}))(HomeScreen)
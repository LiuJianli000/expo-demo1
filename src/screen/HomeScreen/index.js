import { Button } from '@ant-design/react-native';
import React, { Component } from 'react';
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
 
class HomeScreen extends Component {
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
      </View>
    )
  }
}
 
export default connect(state => ({
  name: state.home.name
}))(HomeScreen)
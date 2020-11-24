import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Button, Checkbox, InputItem, Icon } from '@ant-design/react-native';
import { createForm } from 'rc-form'
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

@connect(({ loading }) => ({
  // loading: loading.effects['login/login'],
}))
class LoginScreen extends Component {
  handleSubmit = () => {
    const { form, dispatch } = this.props

    form.validateFields(async (errors, values) => {
      if (errors) return

      // flytosky.wshopon.com
      // admin@wshopon.com
      // 77LjaaPI
      AsyncStorage.setItem('domain', values.domain)

      dispatch({
        type: 'login/login',
        payload: {
          username: values.username,
          password: values.password
        }
      })
    })
  }
  
  render() {
    const { getFieldProps, getFieldError, isFieldValidating } = this.props.form
    
    return (
      <View style={styles.login}>
        <InputItem
          {...getFieldProps('domain', {
            rules: [
              {
                rules: true,
                message: '请输入店铺名'
              }
            ]
          })}
          style={{ fontSize: 12 }}     
        >
          <Icon name="api" />
        </InputItem>
        <InputItem
          {...getFieldProps('username', {
            rules: [
              {
                required: true,
                message: '请输入账号'
              }
            ]
          })}
          placeholder="请输入您的账号"
          style={styles.input}
        >
          <Icon name="user" />
        </InputItem>
        {/* {(errors = getFieldError('username')) ? 
          <Text style={{ fontSize: 12, marginLeft: 10, color: 'red' }}>{errors.join(',')}</Text>
            : 
          null
        } */}
        <InputItem
          {...getFieldProps('password', {
            rules: [
              {
                required: true,
                message: '请输入密码'
              }
            ]
          })}
          placeholder="请输入您的密码"
          type="password"
          style={styles.input}
        >
          <Icon name="unlock" />
        </InputItem>
        {/* {(errors = getFieldError('password')) ? 
          <Text style={{ fontSize: 12, marginLeft: 10, color: 'red' }}>{errors.join(',')}</Text> 
            : 
          null
        } */}
        <View style={styles.check}>
          <Checkbox>
            <Text style={{ fontSize: 12 }}> 记住密码</Text>
          </Checkbox>
        </View>
        <Button 
          type="primary"
          onPress={this.handleSubmit} 
          style={{ marginTop: 20, width: '100%', backgroundColor: '#E74D62', borderColor: '#E74D62' }}
        >
          登入
        </Button>
      </View>
    );
  }
};
 
export default createForm()(LoginScreen);

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10%',
  },
  form: {
    width: '70%'
  },
  input: {
    paddingLeft: 10,
    borderWidth: 1,
    height: 30,
    fontSize: 12
  },
  check: {
    width: '100%', 
    marginTop: 15, 
    alignItems: 'flex-end', 
    paddingRight: 15,
  }
})
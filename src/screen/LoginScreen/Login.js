import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Button, Checkbox, InputItem, Icon } from '@ant-design/react-native';
import { createForm } from 'rc-form'
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

@connect(({ loading }) => ({
  loading: loading.effects['login/login'],
}))
class LoginScreen extends Component {
  state = {
    checked: false,
    domain: '',
    username: '',
    password: ''
  }

  async componentDidMount() {
    const account = await AsyncStorage.getItem('account')
    const checked = await AsyncStorage.getItem('checked')
    const domain = await AsyncStorage.getItem('domain')

    if (account) {
      this.setState({
        checked: checked ? JSON.parse(checked) : false,
        domain,
        username: JSON.parse(account).username,
        password: JSON.parse(account).password
      })
    }
  }
  
  handleSubmit = () => {
    const { form, dispatch, navigation } = this.props
    const { checked } = this.state

    form.validateFields(async (errors, values) => {
      if (errors) return

      // flytosky.wshopon.com
      // admin@wshopon.com
      // 77LjaaPI
      await AsyncStorage.setItem('domain', values.domain)

      const account = {
        username: values.username,
        password: values.password
      }

      dispatch({
        type: 'login/login',
        payload: { ...account }
      }).then(res => {
        if (res.data) {
          navigation.navigate('Home')

          if (checked) {
            AsyncStorage.setItem('account', JSON.stringify(account))
          } else {
            AsyncStorage.removeItem('account')
          }
        } else {
          console.log(res.response.data)
        }
      })
    })
  }

  handleChecked = e => {
    const checked = e.target.checked

    this.setState({
      checked,
    })

    if (checked) {
      AsyncStorage.setItem('checked', JSON.stringify(true))
    } else {
      AsyncStorage.setItem('checked', JSON.stringify(false))
    }
  }
  
  render() {
    const { form, loading } = this.props
    const { getFieldProps, getFieldError, isFieldValidating } = form
    const { checked, domain, username, password } = this.state
    
    return (
      <ScrollView style={styles.login}>
        <InputItem
          {...getFieldProps('domain', {
            initialValue: domain,
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
            initialValue: username,
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
            initialValue: password,
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
          <Checkbox onChange={this.handleChecked} checked={checked}>
            <Text style={{ fontSize: 12 }}> 记住密码</Text>
          </Checkbox>
        </View>
        <Button 
          type="primary"
          onPress={this.handleSubmit} 
          style={{ marginTop: 20, width: '100%', backgroundColor: '#E74D62', borderColor: '#E74D62' }}
          loading={loading}
        >
          登入
        </Button>
      </ScrollView>
    );
  }
};
 
export default createForm()(LoginScreen);

const styles = StyleSheet.create({
  login: {
    padding: '10%',
    paddingTop: '70%',
    height: '100%',
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
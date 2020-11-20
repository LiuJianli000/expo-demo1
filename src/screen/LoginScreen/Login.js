import React from 'react';
import { View } from 'react-native'
import { Button } from '@ant-design/react-native';
 
const LoginScreen = ({navigation})=> {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button 
        type="primary"
        onPress={()=>{
          navigation.navigate('Home');
        }} 
      >
        登录
      </Button>
    </View>
  );
};
 
export default LoginScreen;
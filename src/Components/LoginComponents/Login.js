import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {LoginStyles, Style, DIMENSION} from '../../CommonStyles';
import AsyncStorage from '@react-native-community/async-storage';

const Login = ({navigation}) => {
  const [txtUsername, onChangeUsername] = React.useState('');
  const [txtPassword, onChangePassword] = React.useState('');
  const checkLogin = () => {
    const url = 'http://69ce3e16cb04.ngrok.io/checkLogin';
    fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: txtUsername,
        password: txtPassword,
      }),
    })
      .then((res) => res.json())
      .then((results) => {
        if (txtUsername == '' || txtPassword == '') {
          Alert.alert('Vui lòng nhập tài khoản');
        } else {
          if (results.length == 1) {
            console.log(results);
            AsyncStorage.setItem(
              'isLoggedIn',
              JSON.stringify({isLoggedIn: true}),
            );
            navigation.replace('Home', results);
          } else Alert.alert('Sai thông tin đăng nhập');
        }
      })
      .catch((err) => {
        console.log('err', err);
      });
  };
  return (
    <View style={LoginStyles.formDN}>
      <TextInput
        style={Style.input}
        placeholder="Tài khoản"
        onChangeText={(text) => onChangeUsername(text)}
        value={txtUsername}
      />
      <TextInput
        style={Style.input}
        placeholder="Mật khẩu"
        secureTextEntry={true}
        onChangeText={(text) => onChangePassword(text)}
        value={txtPassword}
      />
      <TouchableOpacity
        style={[
          LoginStyles.button,
          {backgroundColor: '#95d332'},
          {width: DIMENSION.width - 30},
        ]}
        onPress={() => checkLogin()}>
        <Text style={Style.text15}>Đăng nhập</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[LoginStyles.button, {width: DIMENSION.width - 30}]}>
        <Text style={Style.textcolor95d332}>Quên mật khẩu</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Login;

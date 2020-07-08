import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Alert, Button} from 'react-native';
import {LoginStyles, Style} from '../CommonStyles';
import AsyncStorage from '@react-native-community/async-storage';

const Section = ({navigation, desNav, text1, text2, btnText}) => {
  return (
    <View style={Style.rowCenter}>
      <Text style={Style.textBold30}>{text1}</Text>
      <Text style={Style.text18}>{text2}</Text>

      <TouchableOpacity
        style={
          btnText === 'Đăng nhập'
            ? [LoginStyles.button, {backgroundColor: '#95d332'}]
            : [LoginStyles.button, {borderWidth: 2, borderColor: '#27363d'}]
        }
        onPress={() => navigation.push(desNav)}>
        <Text style={Style.text15}>{btnText}</Text>
      </TouchableOpacity>
    </View>
  );
};
class LoginIntro extends Component {
  constructor(props) {
    super(props);
  }

  getAsync = async () => {
    let user = await AsyncStorage.getItem('isLoggedIn');
    let parsed = JSON.parse(user);
    console.log(parsed);
    return parsed;
  };

  render() {
    const {navigation} = this.props;
    const isLoggedIn = this.getAsync();
    return (
      <View style={Style.coverCenter}>
        <Section
          navigation={navigation}
          desNav="Login"
          text1="Đã có tài khoản?"
          text2="Tiếp tục từ phần bạn đang dang dở."
          btnText="Đăng nhập"
        />
        <View style={Style.line} />
        <Section
          navigation={navigation}
          desNav="BeginLearning"
          text1="Bạn mới tham gia?"
          text2="Bắt đầu học ngay thôi nào!"
          btnText="Bắt đầu"
        />
      </View>
    );
  }
}
export default LoginIntro;

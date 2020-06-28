import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {LoginStyles, Style, DIMENSION} from '../../CommonStyles';

// màn hình chính giới thiệu
export default class Login extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={LoginStyles.formDN}>
        <TextInput style={Style.input} placeholder="Tài khoản" />
        <TextInput
          style={Style.input}
          placeholder="Mật khẩu"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={[
            LoginStyles.button,
            {backgroundColor: '#95d332'},
            {width: DIMENSION.width - 30},
          ]}
          onPress={() => navigation.replace('Home')}>
          <Text style={Style.text15}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[LoginStyles.button, {width: DIMENSION.width - 30}]}>
          <Text style={Style.textcolor95d332}>Quên mật khẩu</Text>
        </TouchableOpacity>

        {/* <View style={{marginTop: 220, alignItems: 'center'}}>
          <TouchableOpacity
            style={[
              LoginStyles.button,
              {backgroundColor: '#95d332', marginBottom: 10},
            ]}
            onPress={() => navigation.replace('Home')}>
            <Text>Đăng nhâp bằng Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              LoginStyles.button,
              {backgroundColor: '#95d332', marginBottom: 10},
            ]}
            onPress={() => navigation.replace('Home')}>
            <Text>Đăng nhâp bằng Gmail</Text>
          </TouchableOpacity>

          <Text>
            Khi đăng ký, bạn đã đồng ý với các chính sách và chính sách bảo mật
            của chúng tôi.
          </Text>
        </View> */}
      </View>
    );
  }
}

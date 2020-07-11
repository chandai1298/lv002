import React, {useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {Style, SettingStyle} from '../../CommonStyles';
import HeaderComponent from '../../Apps/HeaderComponent';

const Item = ({navigation}) => {
  return (
    <View style={SettingStyle.sectionIn4}>
      <View>
        <Text>Mật khẩu cũ</Text>
        <TextInput style={Style.input} secureTextEntry={true} />
      </View>
      <View>
        <Text>Mật khẩu mới</Text>
        <TextInput style={Style.input} secureTextEntry={true} />
      </View>
      <View>
        <Text>Xác nhận mật khẩu</Text>
        <TextInput style={Style.input} secureTextEntry={true} />
      </View>
      <View style={SettingStyle.viewChangPassword}>
        <TouchableOpacity
          style={[SettingStyle.btnChangPassword, {borderColor: '#4285f4'}]}
          onPress={() => navigation.navigate('Setting')}>
          <Text style={Style.text15}>OK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[SettingStyle.btnChangPassword, {borderColor: '#fb1616'}]}
          onPress={() => navigation.navigate('Setting')}>
          <Text style={Style.text15}>Hủy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const ChangePassword = ({navigation}) => {
  return (
    <View>
      <HeaderComponent title="Đổi mật khẩu" />
      <Item navigation={navigation} />
    </View>
  );
};

export default ChangePassword;

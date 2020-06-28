import React, {Component} from 'react';
import {View, Text, Image, TextInput, FlatList} from 'react-native';
import {Style, SettingStyle} from '../../CommonStyles';

// Avatar
const Avatar = ({image}) => (
  <View style={Style.coverCenter}>
    <Image
      source={{uri: 'https://via.placeholder.com/150/56a8c2'}}
      style={Style.images}
    />
    <Text style={Style.text15}>Thay ảnh đại diện</Text>
  </View>
);
const DATA1 = [
  {label: 'Tên đăng nhập'},
  {label: 'Mật khẩu'},
  {label: 'Tên'},
  {label: 'Email'},
];
function Item({label}) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput style={Style.input} />
    </View>
  );
}
export default class In4Component extends Component {
  render() {
    return (
      <View style={SettingStyle.sectionIn4}>
        <Text style={Style.text18}> Hồ sơ của bạn</Text>

        <Avatar />

        <View>
          <FlatList
            data={DATA1}
            renderItem={({item}) => <Item label={item.label} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}

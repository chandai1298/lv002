import React from 'react';
import {View, Text, Image, TextInput, ScrollView} from 'react-native';
import {Style} from '../CommonStyles';
import HeaderComponent from './HeaderComponent';
import OverviewSettingComponent from './SettingComponents/OverviewSettingComponent';
import NotiComponent from './SettingComponents/NotiComponent';
// Avatar
const Avatar = ({image}) => (
  <View style={Style.listItem}>
    <Image source={image} style={Style.images} />
    <Text style={Style.textStyle}>Thay ảnh đại diện</Text>
  </View>
);

// class setting
export default class Setting extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {title, navigation, icon, desComponent} = this.props;
    return (
      <View>
        <HeaderComponent
          title="Cài đặt"
          icon="check"
          navigation={navigation}
          desComponent="Home"
        />

        <ScrollView horizontal={false}>
          <View>
            <Text style={Style.title}> Hồ sơ của bạn</Text>

            <Avatar
              image={require('../Assets/img/coin.jpg')}
              name="Hoai cho dien"
            />

            <View>
              <Text>Tên đăng nhập</Text>
              <TextInput style={Style.input} />
            </View>
            <View>
              <Text>Mật khẩu</Text>
              <TextInput style={Style.input} />
            </View>
            <View>
              <Text>Tên</Text>
              <TextInput style={Style.input} />
            </View>
            <View>
              <Text>Email</Text>
              <TextInput style={Style.input} />
            </View>
            <View>
              <Text>Email</Text>
              <TextInput style={Style.input} />
            </View>
            <View>
              <Text>Email</Text>
              <TextInput style={Style.input} />
            </View>
            <View>
              <Text>Email</Text>
              <TextInput style={Style.input} />
            </View>
            <View>
              <Text>Email</Text>
              <TextInput style={Style.input} />
            </View>
          </View>

          <OverviewSettingComponent />

          <NotiComponent />
        </ScrollView>
      </View>
    );
  }
}

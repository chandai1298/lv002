import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import Styles from '../CommonStyles/Styles';
import HeaderComponent from './HeaderComponent';
import {ScrollView} from 'react-native-gesture-handler';
import OverviewSettingComponent from './SettingComponents/OverviewSettingComponent';
import NotiComponent from './SettingComponents/NotiComponent';
// Avatar
const Avatar = ({image}) => (
  <View style={Styles.listItem}>
    <Image source={image} style={Styles.images} />
    <Text style={Styles.textStyle}>Thay ảnh đại diện</Text>
  </View>
);

// class setting
const Setting = ({title, icon, navigation, desComponent}) => {
  return (
    <View>
      {/* Header  */}
      <HeaderComponent
        title="Cài đặt"
        icon="check"
        navigation={navigation}
        desComponent="Home"
      />

      {/* body 3 thanh phan*/}
      <ScrollView horizontal={false} style={Styles.paddingContainer15}>
        {/* Thanh phan 1: Ho so cua ban */}
        <View>
          <Text style={Styles.title}> Hồ sơ của bạn</Text>

          <Avatar
            image={require('../Assets/img/coin.jpg')}
            name="Hoai cho dien"
          />

          {/* body */}
          <View>
            <Text>Tên đăng nhập</Text>
            <TextInput style={Styles.input} />
          </View>
          <View>
            <Text>Mật khẩu</Text>
            <TextInput style={Styles.input} />
          </View>
          <View>
            <Text>Tên</Text>
            <TextInput style={Styles.input} />
          </View>
          <View>
            <Text>Email</Text>
            <TextInput style={Styles.input} />
          </View>
        </View>

        {/* thanh phan 2: Tong quan */}
        <OverviewSettingComponent />

        {/* Thanh phan 3: Thong bao */}
        <NotiComponent />
      </ScrollView>
    </View>
  );
};
export default Setting;

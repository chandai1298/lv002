import React, {useEffect} from 'react';
import {View, ScrollView, Button} from 'react-native';
import HeaderComponent from './HeaderComponent';
import SettingComponent from '../Components/SettingComponents/SettingComponent';
import In4Component from '../Components/SettingComponents/In4Component';
import {AuthContext} from '../LoginScreen/context';
import AsyncStorage from '@react-native-community/async-storage';
import {SettingStyle} from '../CommonStyles';
import Alo from '../Components/SettingComponents/Alo';
const Setting = ({navigation}) => {
  const {signOut} = React.useContext(AuthContext);
  const [data, setData] = React.useState([
    {
      id: '',
      username: '',
      password: '',
      name: '',
      email: '',
      avatar: '',
      roleId: '',
      isActive: '',
    },
  ]);

  // in4 component
  const showData = async () => {
    let user = await AsyncStorage.getItem('user');
    let parsed = JSON.parse(user);
    setData(parsed);
  };

  const dataUser = data[0];

  useEffect(() => {
    showData();
  }, []);

  return (
    <View>
      <HeaderComponent
        title="Cài đặt"
        icon="check"
        navigation={navigation}
        desComponent="Home"
      />
      <ScrollView horizontal={false}>
        <In4Component userData={dataUser} />
        <Button title="logout" onPress={() => signOut()} />
        <SettingComponent
          style={[SettingStyle.sectionIn4]}
          getId={dataUser.id}
          type="1"
          title="Tổng quan"
        />
        <SettingComponent
          style={[SettingStyle.sectionIn4, {paddingBottom: 100}]}
          getId={dataUser.id}
          type="2"
          title="Thông báo"
        />
      </ScrollView>
    </View>
  );
};
export default Setting;

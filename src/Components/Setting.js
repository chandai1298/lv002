import React, {useEffect} from 'react';
import {View, ScrollView, Button} from 'react-native';
import HeaderComponent from './HeaderComponent';
import OverviewSettingComponent from '../Components/SettingComponents/OverviewSettingComponent';
import NotiComponent from '../Components/SettingComponents/NotiComponent';
import In4Component from '../Components/SettingComponents/In4Component';
import {AuthContext} from '../Components/LoginComponents/context';
import AsyncStorage from '@react-native-community/async-storage';

const Setting = ({navigation}) => {
  const {signOut, toggleTheme} = React.useContext(AuthContext);
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

  useEffect(() => {
    showData();
  }, []);

  const showData = async () => {
    let user = await AsyncStorage.getItem('user');
    let parsed = JSON.parse(user);
    setData(parsed);
  };
  const userData = data[0];
  return (
    <View>
      <HeaderComponent
        title="Cài đặt"
        icon="check"
        navigation={navigation}
        desComponent="Home"
      />

      <ScrollView horizontal={false}>
        <In4Component userData={userData} />
        <Button title="logout" onPress={() => signOut()} />
        <OverviewSettingComponent userData={userData} />
        <NotiComponent userData={userData} />
      </ScrollView>
    </View>
  );
};
export default Setting;

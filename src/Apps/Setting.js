import React, {useEffect} from 'react';
import {View, ScrollView, Button} from 'react-native';
import HeaderComponent from './HeaderComponent';
import OverviewSettingComponent from '../Components/SettingComponents/OverviewSettingComponent';
import NotiComponent from '../Components/SettingComponents/NotiComponent';
import In4Component from '../Components/SettingComponents/In4Component';
import {AuthContext} from '../LoginScreen/context';
import AsyncStorage from '@react-native-community/async-storage';

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
        <OverviewSettingComponent getId={dataUser.id} />
        <NotiComponent getId={dataUser.id} />
      </ScrollView>
    </View>
  );
};
export default Setting;

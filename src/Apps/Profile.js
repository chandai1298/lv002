import React, {useEffect} from 'react';
import {View, StatusBar, Text, Image} from 'react-native';
import {Style, ProfileStyle, DIMENSION} from '../CommonStyles';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HeaderComponent from './HeaderComponent';
import ThanhTich from '../Components/ProfileComponent/ThanhTich';
import BanBe from '../Components/ProfileComponent/BanBe';
import Avatar from '../Components/ProfileComponent/Avatar';
import AsyncStorage from '@react-native-community/async-storage';

function ThanhTichComponent() {
  return <ThanhTich />;
}
function BanBeComponent() {
  return <BanBe />;
}

const Tab = createMaterialTopTabNavigator();
const Profile = ({title, navigation, icon, desComponent}) => {
  const [data, setData] = React.useState([
    {
      Id: '',
      Username: '',
      Password: '',
      Name: '',
      Email: '',
      Avatar: '1',
      RoleId: '',
      IsActive: '',
    },
  ]);

  const showData = async () => {
    let user = await AsyncStorage.getItem('user');
    let parsed = JSON.parse(user);
    setData(parsed);
  };

  const userData = data[0];
  useEffect(() => {
    showData();
  }, []);
  return (
    <View style={Style.container}>
      <StatusBar hidden={true} />

      <HeaderComponent
        title={title}
        icon={icon}
        navigation={navigation}
        desComponent={desComponent}
        data={userData}
      />

      <Avatar
        name={userData.Name}
        username={userData.Username}
        image={userData.Avatar}
      />
      <View style={ProfileStyle.containerPadding15}>
        <Tab.Navigator
          tabBarOptions={{
            labelStyle: [Style.text18, {color: '#9a9a9a'}],
            style: {
              // borderTopColor: '#754ea6',
              // borderTopWidth: 3,
            },
            // activeTintColor: 'tomato',
            // inactiveTintColor: 'gray',
          }}>
          <Tab.Screen
            name="ThanhTich"
            component={ThanhTichComponent}
            options={{
              tabBarLabel: 'Thành tích',
            }}
          />
          <Tab.Screen
            name="Banbe"
            component={BanBeComponent}
            options={{
              tabBarLabel: 'Bạn bè',
            }}
          />
        </Tab.Navigator>
      </View>
    </View>
  );
};
export default Profile;

// thu vien
import React from 'react';
import {View, Text, Image} from 'react-native';
import Styles from '../CommonStyles/Styles';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HeaderComponent from './HeaderComponent';

// components
function ThanhTich() {
  return (
    <View>
      <Text>Helo</Text>
    </View>
  );
}
function BanBe() {
  return (
    <View>
      <Text>Helo</Text>
    </View>
  );
}

// Avatar
const Avatar = ({image, name}) => (
  <View style={Styles.listItem}>
    <Image source={image} style={Styles.images} />
    <Text style={Styles.textStyle}>{name}</Text>
  </View>
);

// class profile có header, avatar, 2 top tab thành tích đạt được, danh sách bạn bè
const Tab = createMaterialTopTabNavigator();
const Profile = ({title, icon, navigation, desComponent}) => {
  return (
    <View style={Styles.container}>
      {/* Header co icon cai dat */}
      <HeaderComponent
        title={title}
        icon={icon}
        navigation={navigation}
        desComponent={desComponent}
      />

      {/* ảnh avatar */}
      <Avatar image={require('../Assets/img/coin.jpg')} name="Hoai cho dien" />

      {/* 2 top tab */}
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {fontSize: 20},
          // tabStyle: {width: 100},
          // style: {backgroundColor: '#f6ff78'},
        }}>
        {/* tab thành tích */}
        <Tab.Screen
          name="Thanhtich"
          component={ThanhTich}
          options={{
            tabBarLabel: 'Thành tích',
          }}
        />
        {/* tab bạn bè */}
        <Tab.Screen
          name="Banbe"
          component={BanBe}
          options={{
            tabBarLabel: 'Bạn bè',
          }}
        />
      </Tab.Navigator>
    </View>
  );
};
export default Profile;

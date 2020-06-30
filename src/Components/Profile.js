// thu vien
import React from 'react';
import {View, Text, Image} from 'react-native';
import {Style, ProfileStyle, DIMENSION} from '../CommonStyles';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HeaderComponent from './HeaderComponent';
import ThanhTich from './ProfileComponent/ThanhTich';
import BanBe from './ProfileComponent/BanBe';
import Avatar from './ProfileComponent/Avatar';

function ThanhTichComponent() {
  return <ThanhTich />;
}
function BanBeComponent() {
  return <BanBe />;
}
function AvatarComponent({name}) {
  return <Avatar name={name} />;
}

// Avatar

const Tab = createMaterialTopTabNavigator();
export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {title, navigation, icon, desComponent} = this.props;
    return (
      <View style={Style.container}>
        <HeaderComponent
          title={title}
          icon={icon}
          navigation={navigation}
          desComponent={desComponent}
        />

        <AvatarComponent name="Hoài chó điên" />

        <View style={ProfileStyle.containerPadding15}>
          <Tab.Navigator
            tabBarOptions={{
              labelStyle: {fontSize: 15},
              // tabStyle: {width: 100},
              style: {
                fontWeight: 'bold', // height: 40,
              },
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
  }
}

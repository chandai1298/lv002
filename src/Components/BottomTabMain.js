import React from 'react';

// thu vien ngoai
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Rank from './Rank';
import Profile from './Profile';

// component Home
const HomseScreen = ({title, icon, navigation, desComponent}) => {
  return <Home navigation={navigation} />;
};

// component Profile
const ProfileScreen = ({title, icon, navigation, desComponent}) => {
  return (
    <Profile
      title="Hồ sơ"
      icon="cog"
      navigation={navigation}
      desComponent="Setting"
    />
  );
};

// component Rank
const RankScreen = ({title, icon, navigation, desComponent}) => {
  return <Rank title="Xếp hạng" navigation={navigation} />;
};

//Class BottomTabMain 3 Tab duoi man hinh
const Tab = createBottomTabNavigator();
const BottomTabMain = ({navigation}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomseScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="home" size={26} color="#1d2129" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="user" size={26} color="#1d2129" />
          ),
        }}
      />
      <Tab.Screen
        name="Rank"
        component={RankScreen}
        options={{
          // tabBarLabel: 'Rank',
          tabBarIcon: () => (
            <FontAwesome5 name="chart-bar" size={26} color="#1d2129" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabMain;

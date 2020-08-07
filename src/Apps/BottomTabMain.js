import React, {useEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Rank from './Rank';
import Profile from './Profile';

const HomeScreen = ({navigation, route}) => {
  return (
    <Home
      icon1="bolt"
      icon2="crown"
      icon3="fire-alt"
      icon4="heartbeat"
      navigation={navigation}
      route={route}
    />
  );
};
const ProfileScreen = ({navigation, route}) => {
  return (
    <Profile
      title="Hồ sơ"
      icon="cog"
      navigation={navigation}
      desComponent="Setting"
      route={route}
    />
  );
};
const RankScreen = ({navigation, route}) => {
  return <Rank title="Xếp hạng" navigation={navigation} route={route} />;
};

const Tab = createBottomTabNavigator();
const BottomTabMain = ({navigation, route}) => {
  const {user} = route.params;

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#754ea6',
        tabStyle: {
          height: 50,
        },
        style: {
          borderTopColor: '#754ea6',
          borderTopWidth: 2,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <FontAwesome5
              color={color}
              name="home"
              size={28}
              style={{marginTop: 15}}
            />
          ),
          inactiveTintColor: 'green',
        }}
        initialParams={{users: user}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <FontAwesome5
              color={color}
              name="user"
              size={28}
              style={{marginTop: 15}}
            />
          ),
        }}
        initialParams={{users: user}}
      />
      <Tab.Screen
        name="Rank"
        component={RankScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <FontAwesome5
              color={color}
              name="chart-bar"
              size={28}
              style={{marginTop: 15}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabMain;

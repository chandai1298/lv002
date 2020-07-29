import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Rank from './Rank';
import Profile from './Profile';

const HomeScreen = ({navigation}) => {
  return (
    <Home
      icon1="bolt"
      icon2="crown"
      icon3="fire-alt"
      icon4="heartbeat"
      navigation={navigation}
    />
  );
};
const ProfileScreen = ({navigation}) => {
  return (
    <Profile
      title="Hồ sơ"
      icon="cog"
      navigation={navigation}
      desComponent="Setting"
    />
  );
};
const RankScreen = ({navigation}) => {
  return <Rank title="Xếp hạng" navigation={navigation} />;
};

const Tab = createBottomTabNavigator();
export default class BottomTabMain extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#754ea6',
          tabStyle: {
            // backgroundColor: '#e7eefe',
            height: 50,
          },
          style: {
            // backgroundColor: '#687ae4',
            borderTopColor: '#754ea6',
            borderTopWidth: 2,
            // borderBottomColor: '#87B56A',
            // borderBottomWidth: 3,
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
  }
}

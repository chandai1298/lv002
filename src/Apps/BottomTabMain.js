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
          activeTintColor: '#FFFFFF',
          inactiveTintColor: '#F8F8F8',
          style: {
            backgroundColor: '#687ae4',
            borderTopColor: '#687ae4',
            borderTopWidth: 2,
            // borderBottomColor: '#87B56A',
            // borderBottomWidth: 3,
          },
          labelStyle: {
            textAlign: 'center',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <FontAwesome5
                name="home"
                size={30}
                color="#fff"
                style={{marginTop: 15}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <FontAwesome5
                name="user"
                size={30}
                color="#fff"
                style={{marginTop: 10}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Rank"
          component={RankScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <FontAwesome5
                name="chart-bar"
                size={30}
                color="#fff"
                style={{marginTop: 15}}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

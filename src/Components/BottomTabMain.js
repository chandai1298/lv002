import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Rank from './Rank';
import Profile from './Profile';

const HomeScreen = ({navigation}) => {
  return <Home icon1="bolt" icon2="crown" icon3="fire-alt" icon4="heartbeat" />;
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
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
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
  }
}

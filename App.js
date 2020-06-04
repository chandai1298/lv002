import React, {Component} from 'react';
import {Text, View, StatusBar, Button, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
// thu vien ngoai
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import tu src
import Home from './src/Components/Home';
import Rank from './src/Components/Rank';
import Profile from './src/Components/Profile';
import Styles from './src/CommonStyles/Styles';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();
//class app
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color}) => (
                <FontAwesome5 name="home" size={26} color="#1d2129" />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({color}) => (
                <FontAwesome5 name="user" size={26} color="#1d2129" />
              ),
            }}
          />
          <Tab.Screen
            name="Rank"
            component={Rank}
            options={{
              tabBarLabel: 'Rank',
              tabBarIcon: ({color}) => (
                <FontAwesome5 name="chart-bar" size={26} color="#1d2129" />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

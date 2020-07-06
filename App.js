import React, {Component} from 'react';
import {View} from 'react-native';
// thu vien ngoai
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import tu src
import Setting from './src/Components/Setting';
import {Style} from './src/CommonStyles';
import BottomTabMain from './src/Components/BottomTabMain';
import {AuthStackNavigator} from './src/Components/LoginComponents/AuthStackNavigator';
import AsyncStorage from '@react-native-community/async-storage';

// Màn hình chính gồm 3 bottom tab và header
function HomeScreen({navigation}) {
  return (
    <View style={Style.container}>
      <BottomTabMain navigation={navigation} />
    </View>
  );
}
// Màn hình setting gồm 3 phần hồ sơ, tổng quan. thông báo
function SettingScreen({navigation}) {
  return (
    <View style={Style.container}>
      <Setting navigation={navigation} />
    </View>
  );
}
//class app
const RootStack = createStackNavigator();
export default class App extends Component {
  getAsync = async () => {
    let user = await AsyncStorage.getItem('isLoggedIn');
    let parsed = JSON.parse(user);
    console.log(parsed);
    return parsed;
  };
  render() {
    const isLoggedIn = this.getAsync();

    return (
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen
            name="RootStack"
            component={AuthStackNavigator}
            options={{headerShown: false}}
          />

          <RootStack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />

          <RootStack.Screen
            name="Setting"
            component={SettingScreen}
            options={{headerShown: false}}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
}

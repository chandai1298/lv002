import React, {Component} from 'react';
import {View} from 'react-native';
// thu vien ngoai
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import tu src
import Setting from './src/Components/Setting';
import {Style} from './src/CommonStyles';
import BottomTabMain from './src/Components/BottomTabMain';
import LoginIntro from './src/Components/LoginComponents/LoginIntro';
import Login from './src/Components/LoginComponents/Login';
import BeginLearning from './src/Components/LoginComponents/BeginLearning';
const Stack = createStackNavigator();

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
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* Man hinh khi vua mo ung dung neu chua dang nhap */}
          {/* <Stack.Screen
            name="LoginIntro"
            component={LoginIntro}
            options={{headerShown: false}}
          /> */}
          {/* Man hinh dang nhap */}
          {/* <Stack.Screen
            name="Login"
            component={Login}
            options={{title: 'Đăng nhập'}}
          /> */}
          {/* Man hinh bat dau hoc roi moi dang ky */}
          {/* <Stack.Screen name="BeginLearning" component={BeginLearning} /> */}
          {/* Man hinh home co 3 bottom tab */}
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          {/* man hinh cai dat */}
          <Stack.Screen
            name="Setting"
            component={SettingScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

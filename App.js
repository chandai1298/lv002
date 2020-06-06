import React, {Component} from 'react';
import {View} from 'react-native';
// thu vien ngoai
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import tu src
import Setting from './src/Components/Setting';
import Styles from './src/CommonStyles/Styles';
import BottomTabMain from './src/Components/BottomTabMain';
const Stack = createStackNavigator();

// Màn hình chính gồm 3 bottom tab và header
function HomeScreen({navigation}) {
  return (
    <View style={Styles.container}>
      <BottomTabMain navigation={navigation} />
    </View>
  );
}
function SettingScreen({navigation}) {
  return (
    <View style={Styles.container}>
      <Setting navigation={navigation} />
    </View>
  );
}

//class app
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
          <Stack.Screen name="Setting" component={SettingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

import React, {Component} from 'react';
import LoginIntro from './LoginIntro';
import Login from './Login';
import BeginLearning from './BeginLearning';
import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();
export function AuthStackNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="LoginIntro"
        component={LoginIntro}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{title: 'Đăng nhập'}}
      />
      <AuthStack.Screen name="BeginLearning" component={BeginLearning} />
    </AuthStack.Navigator>
  );
}

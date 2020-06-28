import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {LoginStyles} from '../../CommonStyles';

// màn hình chính giới thiệu
export default class BeginLearning extends React.Component {
  render() {
    return (
      <View style={LoginStyles.container}>
        <View style={LoginStyles.containerItem}>
          <Text style={LoginStyles.title1}>Ban moi tham gia?</Text>
        </View>
        <View style={LoginStyles.line} />
      </View>
    );
  }
}

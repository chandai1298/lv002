import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Styles from '../CommonStyles/Styles';
import HeaderComponent from './HeaderComponent';

export default class Rank extends Component {
  render() {
    return (
      <View style={Styles.item}>
        <HeaderComponent title="Profile" icon="cog" />
      </View>
    );
  }
}

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Styles from '../CommonStyles/Styles';

const Header = ({title, icon}) => (
  <View style={Styles.headerContainer}>
    <View style={Styles.headerContainerIcon}>
      <View style={Styles.headerIcon} />
    </View>
    {/* <Text style={Styles.textStyle}>{}</Text> */}
    <Text style={Styles.textStyle}>{title}</Text>
    <View style={Styles.headerContainerIcon}>
      <FontAwesome5 name={icon} size={26} color="#1d2129" />
    </View>
  </View>
);

export default Header;

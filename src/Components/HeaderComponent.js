import React, {Component} from 'react';
import {View, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Styles from '../CommonStyles/Styles';

const Header = ({title, icon}) => (
  <View style={Styles.headerContainer}>
    {/* left */}
    <View style={Styles.headerContainerIcon}>
      <View style={Styles.headerIcon} />
    </View>
    {/* mid */}
    <Text style={Styles.textStyle}>{title}</Text>
    {/* right */}
    <View style={Styles.headerContainerIcon}>
      <FontAwesome5
        name={icon}
        size={20}
        color="#1d2129"
        style={Styles.headerIcon}
      />
    </View>
  </View>
);

export default Header;

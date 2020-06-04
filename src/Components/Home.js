import React, {Component} from 'react';
import {Text, View, StatusBar, Button, Image} from 'react-native';
import Styles from '../CommonStyles/Styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import HeaderComponent from './HeaderComponent';

const img = require('../Assets/img/coin.jpg');
//cac item
const Level = ({image, name}) => (
  <View style={Styles.item}>
    <Image source={image} style={Styles.images} />
    <Text style={Styles.textStyle}>{name}</Text>
    {/* <FontAwesome name="search" size={100} />
    <MaterialCommunityIcons name="home" size={30} /> */}
  </View>
);
export default class Home extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <StatusBar barStyle="light-content"> </StatusBar>
        <HeaderComponent />
        <View>
          <ScrollView horizontal={false}>
            {/* listitem */}
            <View style={Styles.listItem}>
              {/* item */}
              <Level image={img} name="co ban 1" />
              <Level image={img} name="co ban 2" />
              <Level image={img} name="Chao hoi" />
              <Level image={img} name="Dong vat" />
              <Level image={img} name="Dong vat" />
              <Level image={img} name="Dong vat" />
              <Level image={img} name="Dong vat" />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

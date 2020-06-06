import React from 'react';
import {Text, View, StatusBar, Image} from 'react-native';
import Styles from '../CommonStyles/Styles';
import {ScrollView} from 'react-native-gesture-handler';
import HeaderComponent from './HeaderComponent';
const img = require('../Assets/img/coin.jpg');

//cac item bài học
const Level = ({image, name}) => (
  <View style={Styles.item}>
    <Image source={image} style={Styles.images} />
    <Text style={Styles.textStyle}>{name}</Text>
  </View>
);

// Home gồm các bài học
const Home = ({navigation, icon, title, desComponent}) => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      {/* header */}
      <HeaderComponent
        title={title}
        icon={icon}
        navigation={navigation}
        desComponent={desComponent}
      />

      {/* Danh sách các bài học */}
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
  );
};
export default Home;

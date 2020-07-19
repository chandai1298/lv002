import React from 'react';
import {View, Text, StatusBar, ScrollView} from 'react-native';
import HeaderComponent from './HeaderComponent';

const Rank = ({title, icon, navigation, desComponent}) => {
  return (
    <View>
      {/* Header  */}
      <StatusBar hidden={true} />

      <HeaderComponent
        title={title}
        icon={icon}
        navigation={navigation}
        desComponent={desComponent}
      />
      <View>
        <Text>Giải dấu hồng ngọc</Text>
        <Text> Top 10 sẽ được thăng hạng lên giải đấu cao hơn</Text>
        <Text>14g 36p 57gi</Text>
        <ScrollView></ScrollView>
      </View>
    </View>
  );
};
export default Rank;

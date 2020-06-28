import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Style} from '../CommonStyles';
import HeaderComponent from './HeaderComponent';
const ListRank = () => (
  <View>
    <Text> 1</Text>
  </View>
);
// Xếp loại rank mỗi tuần
const Rank = ({title, icon, navigation, desComponent}) => {
  return (
    <View>
      {/* Header  */}
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
        <ScrollView>
          <ListRank></ListRank>
        </ScrollView>
      </View>
    </View>
  );
};
export default Rank;

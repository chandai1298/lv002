import React from 'react';
import {View, Text} from 'react-native';
import Styles from '../CommonStyles/Styles';
import HeaderComponent from './HeaderComponent';

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
    </View>
  );
};
export default Rank;

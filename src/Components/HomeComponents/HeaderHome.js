import React from 'react';
import {View, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Style, HomeStyle, DIMENSION} from '../../CommonStyles';

const HeaderHome = ({icon1, icon2, icon3, icon4}) => {
  return (
    <View style={[Style.headerContainer, {paddingLeft: 15, paddingRight: 15}]}>
      <View style={HomeStyle.headerFlexIcon}>
        <FontAwesome5 name={icon1} size={DIMENSION.sizeIcon} color="#ffc107" />
        <Text style={[HomeStyle.headerText, {color: '#ffc107'}]}>3749</Text>
      </View>
      <View style={HomeStyle.headerFlexIcon}>
        <FontAwesome5 name={icon2} size={DIMENSION.sizeIcon} color="#ff9800" />
        <Text style={[HomeStyle.headerText, {color: '#ff9800'}]}>139</Text>
      </View>
      <View style={HomeStyle.headerFlexIcon}>
        <FontAwesome5 name={icon3} size={DIMENSION.sizeIcon} color="#e91e63" />
        <Text style={[HomeStyle.headerText, {color: '#e91e63'}]}>2</Text>
      </View>
      <View style={HomeStyle.headerFlexIcon}>
        <FontAwesome5 name={icon4} size={DIMENSION.sizeIcon} color="#f44336" />
        <Text style={[HomeStyle.headerText, {color: '#f44336'}]}>5</Text>
      </View>
    </View>
  );
};
export default HeaderHome;

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Style, HomeStyle, DIMENSION} from '../../CommonStyles';

const HomeItem = ({navigation, title, desComponent, id_category}) => {
  return (
    <View style={[Style.coverCenter, {marginBottom: 15}]}>
      <TouchableOpacity
        style={[
          HomeStyle.headerFlexIcon,
          {
            borderWidth: 1,
            borderColor: '#000',
            width: '60%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}
        onPress={() =>
          navigation.navigate(desComponent, {id_category: id_category})
        }>
        <Text style={Style.text15}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default HomeItem;

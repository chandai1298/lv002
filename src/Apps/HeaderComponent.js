import React from 'react';
import {View, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Style} from '../CommonStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HeaderComponent = ({title, navigation, icon, desComponent, data}) => {
  return (
    <View style={Style.headerContainer}>
      <View style={Style.headerIcon} />
      <Text style={[Style.text20, {color: '#9a9a9a'}]}>{title}</Text>
      <TouchableOpacity>
        <FontAwesome5
          name={icon}
          size={25}
          color="#687ae4"
          style={Style.headerIcon}
          onPress={
            title === 'Xếp hạng'
              ? null
              : () =>
                  navigation.navigate(desComponent, {
                    in4User: data,
                  })
          }
        />
      </TouchableOpacity>
    </View>
  );
};
export default HeaderComponent;

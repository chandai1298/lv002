import React from 'react';
import {View, Text} from 'react-native';

// thu vien ngoai
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Styles from '../CommonStyles/Styles';

// header component gom ten icon, tieu de, dich den
const HeaderComponent = ({navigation, icon, title, desComponent}) => {
  return (
    <View style={Styles.headerContainer}>
      {/* left */}
      <View style={Styles.headerContainerIcon}>
        <View style={Styles.headerIcon} />
      </View>

      {/* mid */}
      <Text style={Styles.textStyle}>{title}</Text>

      {/* right descomponent la component can den */}
      <View style={Styles.headerContainerIcon}>
        <FontAwesome5
          name={icon}
          size={20}
          color="#1d2129"
          style={Styles.headerIcon}
          onPress={() => navigation.navigate(desComponent)}
        />
      </View>
    </View>
  );
};
export default HeaderComponent;

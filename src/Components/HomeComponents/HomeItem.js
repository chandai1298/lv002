import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Style, HomeStyle, DIMENSION} from '../../CommonStyles';

export default class HomeItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {navigation, title, desComponent} = this.props;
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
          onPress={() => navigation.navigate(desComponent)}>
          {/* <FontAwesome5 name={icon} size={DIMENSION.sizeIcon} color="#ffc107" /> */}
          <Text style={Style.text15}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

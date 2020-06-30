import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Style, HomeStyle, DIMENSION} from '../../CommonStyles';

export default class HomeItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {icon, navigation, title, desComponent} = this.props;
    return (
      <View
        style={[
          Style.coverCenter,
          {padding: 10, backgroundColor: 'blue', marginBottom: 10},
        ]}>
        <TouchableOpacity
          style={HomeStyle.headerFlexIcon}
          onPress={() => navigation.navigate(desComponent)}>
          <FontAwesome5 name={icon} size={DIMENSION.sizeIcon} color="#ffc107" />
          <Text style={Style.text15}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

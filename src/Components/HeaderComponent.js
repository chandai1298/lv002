import React from 'react';
import {View, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Style} from '../CommonStyles';

export default class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {title, navigation, icon, desComponent} = this.props;
    return (
      <View style={Style.headerContainer}>
        <View style={Style.headerIcon} />
        <Text style={[Style.text18, Style.textColor56656c]}>{title}</Text>
        <FontAwesome5
          name={icon}
          size={20}
          color="#4ca9e6"
          style={Style.headerIcon}
          onPress={
            title === 'Xếp hạng'
              ? null
              : () => navigation.navigate(desComponent)
          }
        />
      </View>
    );
  }
}

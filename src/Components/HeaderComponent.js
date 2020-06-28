import React from 'react';
import {View, Text} from 'react-native';

// thu vien ngoai
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
        <View style={Style.headerContainerIcon}>
          <View style={Style.headerIcon} />
        </View>

        <Text style={[Style.text18, Style.textColor56656c]}>{title}</Text>

        <View style={Style.headerContainerIcon}>
          <FontAwesome5
            name={icon}
            size={20}
            color="#4ca9e6"
            style={Style.headerIcon}
            onPress={() => navigation.navigate(desComponent)}
          />
        </View>
      </View>
    );
  }
}

import React from 'react';
import {View, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Style, HomeStyle, DIMENSION} from '../../CommonStyles';

export default class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {icon1, icon2, icon3, icon4} = this.props;
    return (
      <View
        style={[Style.headerContainer, {paddingLeft: 15, paddingRight: 15}]}>
        <View style={HomeStyle.headerFlexIcon}>
          <FontAwesome5
            name={icon1}
            size={DIMENSION.sizeIcon}
            color="#ffeb3b"
          />
          <Text style={HomeStyle.headerText}>3749</Text>
        </View>
        <View style={HomeStyle.headerFlexIcon}>
          <FontAwesome5
            name={icon2}
            size={DIMENSION.sizeIcon}
            color="#ffc107"
          />
          <Text style={HomeStyle.headerText}>139</Text>
        </View>
        <View style={HomeStyle.headerFlexIcon}>
          <FontAwesome5
            name={icon3}
            size={DIMENSION.sizeIcon}
            color="#fa494b"
          />
          <Text style={HomeStyle.headerText}>2</Text>
        </View>
        <View style={HomeStyle.headerFlexIcon}>
          <FontAwesome5
            name={icon4}
            size={DIMENSION.sizeIcon}
            color="#f44336"
          />
          <Text style={HomeStyle.headerText}>5</Text>
        </View>
      </View>
    );
  }
}

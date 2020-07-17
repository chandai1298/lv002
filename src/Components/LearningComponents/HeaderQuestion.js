import React, {Component} from 'react';
import {View, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {QuestionStyle, DIMENSION} from '../../CommonStyles';
import * as Progress from 'react-native-progress';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderQuestion = ({count}) => {
  return (
    <View style={QuestionStyle.headerQuestion}>
      <View style={QuestionStyle.iconHeader}>
        <FontAwesome5 name="times" size={DIMENSION.sizeIcon} color="#ababab" />
      </View>
      <View style={QuestionStyle.progressHeader}>
        <Progress.Bar progress={count} width={300} color="#25aff7" />
      </View>
      <View
        style={[
          QuestionStyle.iconHeader,
          {flexDirection: 'row', justifyContent: 'center'},
        ]}>
        <MaterialCommunityIcons
          name="lightbulb-on-outline"
          size={DIMENSION.sizeIcon}
          color="#ffeb3b"
        />
        <Text style={QuestionStyle.textHeader}>5</Text>
      </View>
    </View>
  );
};
export default HeaderQuestion;

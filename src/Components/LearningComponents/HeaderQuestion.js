import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {QuestionStyle, DIMENSION, Style} from '../../CommonStyles';
import * as Progress from 'react-native-progress';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderQuestion = ({navigation, count}) => {
  return (
    <View style={QuestionStyle.headerQuestion}>
      <View style={[QuestionStyle.iconHeader, Style.coverCenter]}>
        <TouchableOpacity onPress={() => navigation.navigate('part')}>
          <FontAwesome5
            name="times"
            size={DIMENSION.sizeIcon2}
            color="#ababab"
          />
        </TouchableOpacity>
      </View>
      <View style={QuestionStyle.progressHeader}>
        <Progress.Bar
          animationType="timing"
          progress={count}
          width={300}
          color="#754ea6"
        />
      </View>
      <View
        style={[
          QuestionStyle.iconHeader,
          {flexDirection: 'row', justifyContent: 'center'},
        ]}>
        <FontAwesome5
          name="heartbeat"
          size={DIMENSION.sizeIcon}
          color="#f44336"
        />
        <Text style={[Style.text20, {marginLeft: 3, color: '#f44336'}]}>5</Text>
      </View>
    </View>
  );
};
export default HeaderQuestion;

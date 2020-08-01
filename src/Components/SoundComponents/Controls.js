import React, {Component} from 'react';

import {View, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {QuestionStyle, DIMENSION} from '../../CommonStyles';

const Controls = ({paused, onPressPlay, onPressPause}) => (
  <View>
    {!paused ? (
      <TouchableOpacity onPress={onPressPause}>
        <FontAwesome5 name="pause" color="#754ea6" size={DIMENSION.sizeIcon2} />
      </TouchableOpacity>
    ) : (
      <TouchableOpacity onPress={onPressPlay}>
        <FontAwesome5 name="play" color="#754ea6" size={DIMENSION.sizeIcon2} />
      </TouchableOpacity>
    )}
  </View>
);

export default Controls;

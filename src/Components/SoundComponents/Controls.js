import React, {Component} from 'react';

import {View, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Controls = ({paused, onPressPlay, onPressPause}) => (
  <View style={styles.container}>
    <View style={{width: 20}} />
    {!paused ? (
      <TouchableOpacity onPress={onPressPause}>
        <View style={styles.playButton}>
          <FontAwesome5 name="pause" color="#000" />
        </View>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity onPress={onPressPlay}>
        <View style={styles.playButton}>
          <FontAwesome5 name="play" color="#000" />
        </View>
      </TouchableOpacity>
    )}
  </View>
);

export default Controls;

const styles = StyleSheet.create({
  secondaryControl: {
    height: 18,
    width: 18,
  },
});

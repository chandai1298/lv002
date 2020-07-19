import React, {Component} from 'react';

import {View, Text} from 'react-native';

import Slider from '@react-native-community/slider';

function pad(n, width, z = 0) {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

const minutesAndSeconds = (position) => [
  pad(Math.floor(position / 60), 1),
  pad(position % 60, 2),
];

const SeekBar = ({trackLength, currentPosition, onSeek, onSlidingStart}) => {
  const elapsed = minutesAndSeconds(currentPosition);
  const remaining = minutesAndSeconds(trackLength - currentPosition);
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{flexDirection: 'row'}}>
        <Text>{elapsed[0] + ':' + elapsed[1]}</Text>
        <Text>
          {trackLength > 1 && ' / ' + remaining[0] + ':' + remaining[1]}
        </Text>
      </View>
      <Slider
        maximumValue={Math.max(trackLength, 1, currentPosition + 1)}
        onSlidingStart={onSlidingStart}
        onSlidingComplete={onSeek}
        value={currentPosition}
        style={{width: '60%'}}
        // minimumTrackTintColor="#fff"
        // maximumTrackTintColor="rgba(255, 255, 255, 0.14)"
      />
    </View>
  );
};

export default SeekBar;

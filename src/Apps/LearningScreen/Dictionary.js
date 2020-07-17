import React, {Component} from 'react';
import {View, Text} from 'react-native';
const Dictionary = ({route, navigation}) => {
  const {id_category} = route.params;
  const idc = parseInt(JSON.stringify(id_category));

  return (
    <View>
      <Text>Dictionary.js</Text>
      {console.log(idc)}
    </View>
  );
};
export default Dictionary;

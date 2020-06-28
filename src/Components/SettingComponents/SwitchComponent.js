import React, {useState} from 'react';
import {View, Switch} from 'react-native';

const SwitchComponent = ({switchValue}) => {
  const [isEnabled, setIsEnabled] = useState(switchValue);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View>
      <Switch onValueChange={toggleSwitch} value={isEnabled} />
    </View>
  );
};
export default SwitchComponent;

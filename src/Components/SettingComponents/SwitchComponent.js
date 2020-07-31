import React, {useState} from 'react';
import {View, Switch} from 'react-native';

const SwitchComponent = ({switchValue}) => {
  const [isEnabled, setIsEnabled] = useState(
    switchValue === 'true' ? true : false,
  );
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <View>
      <Switch
        onValueChange={toggleSwitch}
        value={isEnabled}
        thumbColor={isEnabled ? '#754ea6' : '#f4f3f4'}
        trackColor={{false: '#9a9a9a', true: '#9a9a9a'}}
      />
    </View>
  );
};
export default SwitchComponent;

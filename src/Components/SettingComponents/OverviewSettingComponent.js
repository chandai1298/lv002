import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Style, SettingStyle} from '../../CommonStyles';
import SwitchComponent from './SwitchComponent';

const OverviewSettingComponent = ({userData}) => {
  const [data, setData] = React.useState({
    label: '',
    switchValue: '',
  });

  useEffect(() => {
    setData(userData);
  });
  return (
    <View style={SettingStyle.sectionIn4}>
      <Text style={Style.text18}>Tổng quan</Text>

      <View>
        <View style={SettingStyle.flexDirectionRow}>
          <Text>{data.label === null ? 'Âm thanh' : data.label}</Text>
          <SwitchComponent switchValue={true} />
        </View>
        <View style={SettingStyle.flexDirectionRow}>
          <Text>{data.username}</Text>
          <SwitchComponent switchValue={true} />
        </View>
        <View style={SettingStyle.flexDirectionRow}>
          <Text>{data.username}</Text>
          <SwitchComponent switchValue={true} />
        </View>
        <View style={SettingStyle.flexDirectionRow}>
          <Text>{data.username}</Text>
          <SwitchComponent switchValue={true} />
        </View>
      </View>
    </View>
  );
};
export default OverviewSettingComponent;

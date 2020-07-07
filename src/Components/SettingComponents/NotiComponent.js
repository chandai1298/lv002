import React, {useEffect} from 'react';
import {Text, View, FlatList} from 'react-native';
import {Style, SettingStyle} from '../../CommonStyles';
import SwitchComponent from './SwitchComponent';

const NotiComponent = ({userData}) => {
  const [data, setData] = React.useState({
    label: '',
    switchValue: '',
  });

  useEffect(() => {
    setData(userData);
  });

  return (
    <View style={[SettingStyle.sectionIn4, {paddingBottom: 100}]}>
      <Text style={Style.text18}>Thông báo</Text>

      <View>
        <View style={SettingStyle.flexDirectionRow}>
          <Text>{data.label}</Text>
          <SwitchComponent switchValue={data.switchValue} />
        </View>
        <View style={SettingStyle.flexDirectionRow}>
          <Text>{data.label}</Text>
          <SwitchComponent switchValue={data.switchValue} />
        </View>
        <View style={SettingStyle.flexDirectionRow}>
          <Text>{data.label}</Text>
          <SwitchComponent switchValue={data.switchValue} />
        </View>
        <View style={SettingStyle.flexDirectionRow}>
          <Text>{data.label}</Text>
          <SwitchComponent switchValue={data.switchValue} />
        </View>
        <View style={SettingStyle.flexDirectionRow}>
          <Text>{data.label}</Text>
          <SwitchComponent switchValue={data.switchValue} />
        </View>
      </View>
    </View>
  );
};
export default NotiComponent;

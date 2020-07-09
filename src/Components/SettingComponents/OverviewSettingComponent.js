import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Style, SettingStyle} from '../../CommonStyles';
import SwitchComponent from './SwitchComponent';
import {IN4_APP} from '../../../server/ConnectServer/In4App';

const OverviewSettingComponent = ({getId}) => {
  const [data, setData] = React.useState([
    {id: '', id_user: '', title: '', status: '', status2: '', isActive: ''},
  ]);

  //config
  const getDataConfig = (userId) => {
    const url = IN4_APP.getConfig;
    fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id_user: userId,
        type: '1',
      }),
    })
      .then((res) => res.json())
      .then((results) => {
        setData(results);
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  useEffect(() => {
    getDataConfig(getId);
  });

  const listConfig = () => {
    return data.map((data) => {
      return (
        <View style={SettingStyle.flexDirectionRow} key={data.id}>
          <Text>{data.title}</Text>
          <SwitchComponent switchValue={Boolean(data.status)} />
        </View>
      );
    });
  };

  return (
    <View style={SettingStyle.sectionIn4}>
      <Text style={Style.text18}>Tổng quan</Text>
      {listConfig()}
    </View>
  );
};
export default OverviewSettingComponent;

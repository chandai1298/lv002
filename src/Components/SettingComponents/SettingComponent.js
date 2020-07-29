import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Style, SettingStyle} from '../../CommonStyles';
import SwitchComponent from './SwitchComponent';
import {IN4_APP} from '../../ConnectServer/In4App';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {LinearTextGradient} from 'react-native-text-gradient';

const SettingComponent = ({getId, title, type, style}) => {
  const [loading, setLoading] = React.useState(false);
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
        type: type,
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

  const listConfig = () => {
    return data.map((data) => (
      <View style={SettingStyle.flexDirectionRow} key={data.id}>
        <Text>{data.title}</Text>
        <SwitchComponent switchValue={data.status} />
      </View>
    ));
  };

  return (
    <View style={style}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <LinearTextGradient
          locations={[0, 1]}
          colors={['#091048', '#754ea6']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Text style={[Style.text20]}>{title}</Text>
        </LinearTextGradient>
        {!loading ? (
          <View>
            <FontAwesome5
              name="chevron-circle-up"
              size={20}
              color="#754ea6"
              style={Style.headerIcon}
              onPress={() => {
                getDataConfig(getId);
                setLoading(true);
              }}
            />
          </View>
        ) : (
          <View>
            <FontAwesome5
              name="chevron-circle-down"
              size={20}
              color="#754ea6"
              style={Style.headerIcon}
              onPress={() => {
                getDataConfig(getId);
                setLoading(false);
              }}
            />
          </View>
        )}
      </View>
      {loading ? listConfig() : null}
    </View>
  );
};
export default SettingComponent;

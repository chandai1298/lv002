import React, {useEffect} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {Style, SettingStyle} from '../../CommonStyles';
import SwitchComponent from './SwitchComponent';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {LinearTextGradient} from 'react-native-text-gradient';
import {IN4_APP} from '../../ConnectServer/In4App';

const SettingComponent = ({getId, title, style, type}) => {
  const [loading, setLoading] = React.useState(true);
  const [collapse, setCollapse] = React.useState(true);
  const [dataConfig, setDataConfig] = React.useState([
    {id: '', id_user: '', title: '', status: '', status2: '', isActive: ''},
  ]);

  const getDataConfig = (userId, type) => {
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
        setDataConfig(results);
        setLoading(false);
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  useEffect(() => {
    getDataConfig(getId, type);
  }, []);

  const listConfig = () => {
    return dataConfig.map((data) => (
      <View style={SettingStyle.flexDirectionRow} key={data.id}>
        {/* <LinearTextGradient
          locations={[0, 1]}
          colors={['#754ea6', '#687ae4']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}></LinearTextGradient> */}
        <Text style={{fontSize: 18}}>{data.title}</Text>
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
        {!collapse ? (
          <View>
            <FontAwesome5
              name="chevron-circle-up"
              size={20}
              color="#754ea6"
              style={Style.headerIcon}
              onPress={() => {
                setCollapse(true);
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
                setCollapse(false);
              }}
            />
          </View>
        )}
      </View>

      {loading ? (
        <ActivityIndicator color="#9a9a9a" />
      ) : (
        collapse && listConfig()
      )}
    </View>
  );
};
export default SettingComponent;

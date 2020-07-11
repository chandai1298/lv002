import React, {useEffect, Component} from 'react';
import {Text, View} from 'react-native';

export default class ConfigComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [
        {id: '', id_user: '', title: '', status: '', status2: '', isActive: ''},
      ],
    };
  }
  componentDidMount() {
    this.getDataConfig(this.props.getId);
  }
  //config
  getDataConfig = (ids) => {
    const url = IN4_APP.getConfig;
    fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id_user: ids,
        type: '1',
      }),
    })
      .then((res) => res.json())
      .then((results) => {
        console.log(ids);
        this.setState({
          datas: results,
        });
      })
      .catch((err) => {
        console.log('err', err);
      });
  };
  render() {
    return (
      <View>
        <Text></Text>
      </View>
    );
  }
}
const ListConfig = ({datas}) => {
  return datas.map((data) => {
    return (
      <View style={SettingStyle.flexDirectionRow} key={data.id}>
        <Text>{data.title}</Text>
        <SwitchComponent switchValue={Boolean(data.status)} />
      </View>
    );
  });
};

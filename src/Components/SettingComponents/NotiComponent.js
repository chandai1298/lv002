import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {Style, SettingStyle} from '../../CommonStyles';
import SwitchComponent from './SwitchComponent';

const DATA = [
  {
    label: 'Nhắc nhở luyện tập',
    switchValue: false,
  },
  {
    label: 'Bảng xếp hạng',
    switchValue: true,
  },
  {
    label: 'Bảo vệ Streak',
    switchValue: false,
  },
  {
    label: 'Người theo dõi',
    switchValue: true,
  },
  {
    label: 'Bạn bè vượt xếp hạng của tôi',
    switchValue: true,
  },
];

export default class NotiComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      error: null,
    };
  }
  componentDidMount() {
    this.requestAPIPhotos();
  }
  requestAPIPhotos = () => {
    this.setState({loading: true});
    const apiURL = 'https://jsonplaceholder.typicode.com/photos';
    fetch(apiURL)
      .then((res) => res.json())
      .then((resJson) => {
        this.setState({
          loading: false,
          data: DATA,
        });
      })
      .catch((error) => {
        this.setState({
          error,
          loading: false,
        });
      });
  };

  render() {
    return (
      <View style={[SettingStyle.sectionIn4, {paddingBottom: 100}]}>
        <Text style={Style.text18}>Thông báo</Text>

        <View>
          <FlatList
            data={this.state.data}
            renderItem={({item}) => (
              <View style={SettingStyle.flexDirectionRow}>
                <Text>{item.label}</Text>
                <SwitchComponent switchValue={item.switchValue} />
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}

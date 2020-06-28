import React, {Component} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {Style, ProfileStyle, DIMENSION} from '../../CommonStyles';
import * as Progress from 'react-native-progress';

const Items = ({title, thumbnailUrl}) => (
  <View style={ProfileStyle.sectionThanhTich}>
    <View style={[ProfileStyle.flexRowIcon, Style.rowCenter]}>
      <Image
        source={{uri: thumbnailUrl}}
        style={ProfileStyle.sectionBanBeImg}
      />
      <Text style={[Style.text15, {marginLeft: 20}]}>Header</Text>
    </View>
    <View
      style={[
        ProfileStyle.SectionAvtRight,
        {justifyContent: 'center', marginRight: 30},
      ]}>
      <Text>31289 KN</Text>
    </View>
  </View>
);

export default class BanBe extends Component {
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
          data: resJson,
          fullData: resJson,
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
    let {data} = this.state;
    return (
      <View>
        <FlatList
          style={{width: DIMENSION.width}}
          data={data}
          renderItem={({item}) => (
            <Items thumbnailUrl={item.thumbnailUrl} title={item.title} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
